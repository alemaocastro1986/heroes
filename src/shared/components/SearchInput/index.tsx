import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const [isFocused, setIsfocused] = React.useState(false);

  function handleFocus() {
    setIsfocused(true);
  }

  function handleBlur() {
    setIsfocused(false);
  }
  return (
    <Container isFocused={isFocused}>
      <input type="text" {...props} onFocus={handleFocus} onBlur={handleBlur} />
      <button type="button">GO</button>
    </Container>
  );
};

export default SearchInput;
