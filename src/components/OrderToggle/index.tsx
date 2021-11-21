import {
  OrderToggleImage,
  OrderToggleWrapper,
  OrderToggleLabel,
} from "./OrderToggle.style";
import { OrderToggleProps } from "./OrderToggle";
import upwardArr from "../../assets/images/up-arrow.png";
import bottomArr from "../../assets/images/down-arrow.png";

const OrderToggle = (props: OrderToggleProps) => {
  const { order, setOrder } = props;

  return (
    <OrderToggleWrapper>
      <OrderToggleLabel>Order :</OrderToggleLabel>
      {order === "desc" ? (
        <OrderToggleImage src={bottomArr} onClick={() => setOrder("asc")} />
      ) : (
        <OrderToggleImage src={upwardArr} onClick={() => setOrder("desc")} />
      )}
    </OrderToggleWrapper>
  );
};

export default OrderToggle;
