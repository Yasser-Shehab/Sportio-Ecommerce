export interface IOrder {
  userId: string;
  tax: number;
  shippingFee: number;
  subTotal: number;
  total: number;
  status: string;
  cartItems: [];
}
