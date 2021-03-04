import { SearchBarContainer, TextInput } from "./searchbar.styled";

const SearchBar = ({ handleSearch, handleChange }) => (
  <SearchBarContainer>
    <TextInput
      onChange={handleChange}
      onSearch={handleSearch}
      type="search"
      name="search"
      placeholder="Type git username to search..."
    />
  </SearchBarContainer>
);

export default SearchBar;
