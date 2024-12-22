import styled from "styled-components";

// Complete the below given ButtonView style Component

export const ButtonView = styled.button`
    color: ${({ filled, color }) => (filled ? color || "#fff" : color || "#000")};
    border: ${({ filled, color }) => (filled ? "none" : `2px solid ${color || "#000"}`)};
    background-color:${(props)=> props.bg};
`;
