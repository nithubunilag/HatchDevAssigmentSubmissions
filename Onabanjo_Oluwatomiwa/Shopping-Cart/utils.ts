import { Product, User } from "./Shopping-Carts";

export function generateId(length: number = 10) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += Math.random().toString(35).slice(2, 3);
  }
  return result;
}

export const createAdminUser = (
  firstName: string,
  lastName: string,
  username: string,
  email: string,
  password: string
): User => {
  const user = new User(firstName, lastName, username, email, password);
  user.setToAdmin();

  return user;
};

export const isProduct = (product: unknown): product is Product => {
  return product instanceof Product;
};

export const sendResponse = (
  ok: boolean,
  message: string,
  statusCode: number = 500
) => {
  console.log({
    ok,
    message,
    statusCode,
  });
};