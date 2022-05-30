import styled from "styled-components";

export const ButtonWithIcon = ({ icon, children }) => {
  return (
    <>
      <Button>
        <img src={icon} alt="button" />
        {children}
      </Button>
    </>
  );
};
const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: transparent;
  height: 4rem;
  min-width: 8rem;
  white-space: nowrap;
  width: fit-content;
  padding: 0.5rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 600;
  display: flex;
  flex-wrap: nowrap;
  justify-content: baseline;
  align-items: center;
  gap: 10px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  img {
    height: 60%;
    width: 30%;
  }
`;
