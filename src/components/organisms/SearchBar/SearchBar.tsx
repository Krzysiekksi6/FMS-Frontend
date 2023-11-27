import { useSelector } from "react-redux";
import { SearchBarWrapper, StatusInfo } from "./SearchBar.style";
import { Input } from "src/components/atoms/Input/Input.styles";
import { selectCurrentUserName } from "src/components/features/auth/authSlice";

const SearchBar = () => {
  const user = useSelector(selectCurrentUserName);

  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Zalogowany jako:</p>
        <p>
          <strong>{user}</strong>
        </p>
      </StatusInfo>
      <Input />
    </SearchBarWrapper>
  );
};

export default SearchBar;
