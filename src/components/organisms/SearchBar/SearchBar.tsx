import { SearchBarWrapper, StatusInfo } from "./SearchBar.style";
import { Input } from "src/components/atoms/Input/Input.styles";

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Zalogowany jako:</p>
        <p>
          <strong>Admin</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;
