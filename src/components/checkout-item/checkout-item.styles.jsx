import styled from "styled-components";
import { Link } from "react-router-dom";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImgContanier = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled(Link)`
  width: 23%;
`;
export const Quantity = styled(Link)`
  width: 23%;
  display: flex;
`;
export const Price = styled(Link)`
  font-size: 23px;
`;
export const Arrow = styled.div`
  cursor: pointer;
`;
export const Value = styled(Link)`
  margin: 0 10px;
`;
export const RemoveButton = styled.div`
  padding-left: 92px;
  cursor: pointer;
`;
