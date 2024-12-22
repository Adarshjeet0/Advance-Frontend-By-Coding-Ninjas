import styled from "styled-components";

export const Button = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  padding: 7px 15px;
  color: #fff;
  font-weight: bold;
  background-color: ${(props) => props.bg || "red"}; // Default background color is red
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: ${(props) => props.flex || 1}; // Default flex value is 1
`;
