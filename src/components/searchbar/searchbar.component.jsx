import { SearchBarContainer, TextInput } from "./searchbar.styled";

const SearchBar = ({handleSearch}) => (
  <SearchBarContainer>
    <TextInput
      onKeyDown={handleSearch}
      type="search"
      placeholder="Type git username to search..."
    />
  </SearchBarContainer>
);

export default SearchBar;
