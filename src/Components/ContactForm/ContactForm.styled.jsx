import styled from "styled-components";

export const Form = styled.form`
  display: flex;
      margin-top: 25px;
      margin-right: 230px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  padding: 5px 10px;
      margin-top: 25px;
  cursor: pointer;
  background: rgb(66 153 225 / 60%);
  border-radius: 4px;
  border: none;
  font-weight: bold;
  color: white;
 transition: transform 250ms linear;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
margin-top: 5px;
width: 160px;
  padding: 10px;
  border: 2px solid #a6a6a6;
  border-radius: 4px;

  &:hover,
  &:focus {
    border: 2px solid #89b4d8;
  }
`;

export const Label = styled.label`
  width: 200px;
  font-size: 18px;
`;
