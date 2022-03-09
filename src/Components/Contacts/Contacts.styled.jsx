import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 400px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  width: 80px;
  padding: 5px 10px;
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

export const Notification = styled.p`
  text-align: center;
`;
