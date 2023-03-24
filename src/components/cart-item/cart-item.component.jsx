import "./cart-item.styles.jsx";
import {
  CartItemContainer,
  ItemDetails,
  NameDetails,
  Img,
  Price,
} from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <NameDetails>{name}</NameDetails>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};
export default CartItem;
