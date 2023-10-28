import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search for transactions" />
      <button type="submit">
        <MagnifyingGlass />
        Search
      </button>
    </SearchFormContainer>
  );
}
