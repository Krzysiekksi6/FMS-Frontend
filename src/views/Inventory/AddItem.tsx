import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { selectInventoryId } from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import FormField from "src/components/molecules/FormField/FormField";
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
    // Pobierz produkty z bazy danych i ustaw je w stanie
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/products"); // Zastąp "/products" właściwą ścieżką API
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
      }); // Zastąp "/add-item" właściwą ścieżką API
      console.log(response.data); // Loguj odpowiedź z backendu (możesz dostosować)
      if (onItemAdded) {
        onItemAdded();
      }
      // Zresetuj formularz po dodaniu itema
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
    <form onSubmit={handleSubmit}>
      <label>
        Produkt:
        <select
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
        </select>
      </label>
      <div></div>
      <br></br>
      <label>
        Data zakupu:
        <input
          type="date"
          name="purchaseDate"
          value={formData.purchaseDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <label>
        Data ważności:
        <input
          type="date"
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />
      <label>
        Ilość:
        <input
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <br />

      <input type="radio" id="unit1" name="age" value="30" />
      <label>sztuka</label>

      <input type="radio" id="unit2" name="age" value="30" />
      <label>kilogramy</label>

      <input type="radio" id="unit2" name="age" value="30" />
      <label>gramy</label>

      <input type="radio" id="unit2" name="age" value="30" />
      <label>plasterek</label>
      <input type="radio" id="unit2" name="age" value="30" />
      <label>litr</label>
      <br />
      <br />
      <button type="submit">Dodaj produkt</button>
    </form>
  );
};

export default AddItem;
