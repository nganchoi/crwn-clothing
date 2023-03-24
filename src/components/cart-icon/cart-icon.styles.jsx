import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconItem = styled.div`
  width: 24px;
  height: 24px;
`;

export const ItemIcon = styled(Link)`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 12px;
`;
