import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import { Units } from "src/enum/Units";
import {
  FormItemWrapper,
  QuantityWrapper,
} from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Input, Select } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
const AddItem = ({ onItemAdded }) => {
  const [products, setProducts] = useState([]);
  const inventoryId = useSelector(selectInventoryId);

  const [formData, setFormData] = useState({
    inventoryId: inventoryId,
    productId: "",
    purchaseDate: "",
    expiryDate: "",
    quantity: 0,
    unit: "",
    newProduct: {
      name: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      shelfLifeDays: 0,
    },
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania produktów z API", error);
      }
    };

    fetchProducts();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProductSelect = (e) => {
    setFormData({
      ...formData,
      productId: e.target.value,
    });
  };

  const handleRadioChange = (e) => {
    setFormData({
      ...formData,
      unit: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let productData;

      if (formData.productId) {
        productData = { productId: formData.productId };
      } else {
        productData = {
          newProduct: {
            ...formData.newProduct,
          },
        };
      }

      const response = await axios.post("/addItem", {
        ...formData,
        ...productData,
      });
      console.log(response.data);
      if (onItemAdded) {
        onItemAdded();
      }
      setFormData({
        inventoryId: inventoryId,
        productId: "",
        purchaseDate: "",
        expiryDate: "",
        quantity: 0,
        unit: "",
        newProduct: {
          name: "",
          calories: 0,
          protein: 0,
          carbs: 0,
          fat: 0,
          shelfLifeDays: 0,
        },
      });
    } catch (error) {
      console.log(formData);

      console.error("Błąd podczas dodawania itema do inventory", error);
    }
  };
  return (
    <FormItemWrapper onSubmit={handleSubmit}>
      <Label>Produkt:</Label>
      <Select
        name="productId"
        value={formData.productId}
        onChange={handleProductSelect}
      >
        <option value="">Wybierz produkt</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </Select>
      <Label>Data zakupu:</Label>
      <Input
        type="date"
        name="purchaseDate"
        value={formData.purchaseDate}
        onChange={handleInputChange}
      />
      <Label>Data ważności:</Label>
      <Input
        type="date"
        name="expiryDate"
        value={formData.expiryDate}
        onChange={handleInputChange}
      />
      <Label>Ilość:</Label>
      <Input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleInputChange}
      />
      <QuantityWrapper>
        <Input
          type="radio"
          id="unit1"
          name="unit"
          value={Units.PIECE}
          checked={formData.unit === Units.PIECE}
          onChange={handleRadioChange}
        />
        <Label>sztuka</Label>
        {/* <Input
          type="radio"
          id="unit2"
          name="unit"
          value={Units.KILOGRAMS}
          checked={formData.unit === Units.KILOGRAMS}
          onChange={handleRadioChange}
        /> */}
        {/* <Label>kilogramy</Label> */}
        <Input
          type="radio"
          id="unit3"
          name="unit"
          value={Units.GRAMS}
          checked={formData.unit === Units.GRAMS}
          onChange={handleRadioChange}
        />
        <Label>gramy</Label>
        {/* <Input
          type="radio"
          id="unit4"
          name="unit"
          value={Units.SLICE}
          checked={formData.unit === Units.SLICE}
          onChange={handleRadioChange}
        />
        <Label>plasterek</Label>
        
        <Input
          type="radio"
          id="unit5"
          name="unit"
          value={Units.LITER}
          checked={formData.unit === Units.LITER}
          onChange={handleRadioChange}
        />
        <Label>litr</Label> */}
      </QuantityWrapper>
      <Button type="submit">Dodaj produkt</Button>
    </FormItemWrapper>
  );
};

export default AddItem;
