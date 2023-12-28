import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import {
  FormItemWrapper,
  ProductWrapper,
  QuantityWrapper,
  SubmitWrapper,
} from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Input, Select } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
const AddItem = ({ onItemAdded }) => {
  const [products, setProducts] = useState([]);
  const inventoryId = useSelector(selectInventoryId);

  const [formData, setFormData] = useState({
    inventoryId: inventoryId, // Identyfikator inventory, możesz dostosować
    productId: "", // Identyfikator produktu, zaczynamy od pustego stringa
    purchaseDate: "",
    expiryDate: "",
    quantity: 0,
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

  const handleNewProductChange = (e) => {
    setFormData({
      ...formData,
      newProduct: {
        ...formData.newProduct,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let productData;
      // Sprawdź, czy użytkownik wybrał produkt z bazy danych czy podał nowy
      if (formData.productId) {
        productData = { productId: formData.productId };
      } else {
        // Jeśli użytkownik dodaje nowy produkt, stwórz dane nowego produktu
        productData = {
          newProduct: {
            ...formData.newProduct,
          },
        };
      }

      // Wywołaj żądanie do backendu w celu dodania nowego itema
      const response = await axios.post("/addItem", {
        ...formData,
        ...productData,
      });
      console.log(response.data);
      if (onItemAdded) {
        onItemAdded();
      }
      setFormData({
        inventoryId: 1,
        productId: "",
        purchaseDate: "",
        expiryDate: "",
        quantity: 0,
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
        <Input type="radio" id="unit1" name="age" value="30" />
        <Label>sztuka</Label>
        <Input type="radio" id="unit2" name="age" value="30" />
        <Label>kilogramy</Label>
        <Input type="radio" id="unit2" name="age" value="30" />
        <Label>gramy</Label>
        <Input type="radio" id="unit2" name="age" value="30" />
        <Label>plasterek</Label>
        <Input type="radio" id="unit2" name="age" value="30" />
        <Label>litr</Label>
      </QuantityWrapper>
      <Button type="submit">Dodaj produkt</Button>
    </FormItemWrapper>
  );
};

export default AddItem;
