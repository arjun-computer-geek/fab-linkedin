import { Input } from "custom-styled-component";
import React, { useRef, useState } from "react";
import styled from "styled-components";

export const InputPassword = ({ placeholder, onChange }) => {
  const [visible, setVisible] = useState(false);
  const passwordRef = useRef(null);

  const hideShowPasswordHandler = () => {
    if (visible) passwordRef.current.type = "password";
    else passwordRef.current.type = "text";

    setVisible(!visible);
  };
  return (
    <PasswordWrapper>
      <Input
        type="password"
        onChange={onChange}
        ref={passwordRef}
        placeholder={placeholder}
      />
      <HideShow onClick={hideShowPasswordHandler}>
        {visible ? "hide" : "show"}
      </HideShow>
    </PasswordWrapper>
  );
};
const HideShow = styled.button`
  border: none;
  background-color: transparent;
  box-shadow: none;
  font-size: 1.2rem;
  color: #0a66c2;
  border-radius: 12px;
  padding: 0.2em;
  position: absolute;
  right: 10px;
  top: 35%;
  &:hover {
    background-color: rgba(112, 181, 249, 0.25);
  }
`;
const PasswordWrapper = styled.div`
  position: relative;
`;
