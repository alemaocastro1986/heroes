import React, { InputHTMLAttributes } from "react";

import { Container } from "./styles";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onClickGo?: () => Promise<void> | void;
}

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClickGo, ...props }, ref) => {
    const [isFocused, setIsfocused] = React.useState(false);

    function handleFocus() {
      setIsfocused(true);
    }

    function handleBlur() {
      setIsfocused(false);
    }
    return (
      <Container isFocused={isFocused}>
        <input
          {...props}
          ref={ref}
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <button type="button" onClick={onClickGo}>
          GO
        </button>
      </Container>
    );
  }
);
