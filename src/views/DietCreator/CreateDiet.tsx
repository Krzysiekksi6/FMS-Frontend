import { Wrapper } from "./CreateDiet.styles";
import Navigation from "src/components/organisms/Navigation/Navigation";
import SearchBar from "src/components/organisms/SearchBar/SearchBar";
import MultiStepForm from "./MultiStepForm";
const CreateDiet = () => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <MultiStepForm />
    </Wrapper>
  );
};

export default CreateDiet;
