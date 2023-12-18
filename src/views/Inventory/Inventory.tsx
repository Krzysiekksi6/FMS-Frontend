import { useState } from "react";
import Navigation from "src/components/organisms/Navigation/Navigation";
import SearchBar from "src/components/organisms/SearchBar/SearchBar";
import { Wrapper } from "src/templates/MainTemplate/MainTemplate.styles";
import InventoryList from "./InventoryList";
import AddItem from "./AddItem";

const Inventory = () => {
  const [shouldRefreshInventory, setShouldRefreshInventory] = useState(false);

  const handleItemAdded = () => {
    setShouldRefreshInventory((prev) => !prev);
  };
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <AddItem onItemAdded={handleItemAdded} />
      <InventoryList key={shouldRefreshInventory} />
    </Wrapper>
  );
};

export default Inventory;
