export const ADDCART = "ADDCART";

export const addCart = (amount) => ({
  type: ADDCART,
  amount: amount,
});
