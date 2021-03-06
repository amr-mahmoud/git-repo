import {
  OrderToggleImage,
  OrderToggleWrapper,
  OrderToggleLabel,
} from "./OrderToggle.style";
import { OrderToggleProps } from "./Order";
import upwardArr from "../../assets/images/up-arrow.png";
import bottomArr from "../../assets/images/down-arrow.png";

const OrderToggle = (props: OrderToggleProps) => {
  const { order, setOrder } = props;

  return (
    <OrderToggleWrapper>
      <OrderToggleLabel>Order :</OrderToggleLabel>
      {order === "desc" ? (
        <OrderToggleImage
          role="toggle-button"
          src={bottomArr}
          onClick={() => setOrder("asc")}
        />
      ) : (
        <OrderToggleImage
          role="toggle-button"
          src={upwardArr}
          onClick={() => setOrder("desc")}
        />
      )}
    </OrderToggleWrapper>
  );
};

export default OrderToggle;
