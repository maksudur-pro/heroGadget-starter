import { getStoredCart } from "../components/Utils/FakeDb";

const getCartLoaderData = async () => {
  const productData = await fetch("products.json");
  const products = await productData.json();
  const savedCart = getStoredCart();
  let cartArray = [];
  for (const id in savedCart) {
    const fonudProduct = products.find((product) => product.id === id);
    if (fonudProduct) {
      fonudProduct.quantity = savedCart[id];
      cartArray.push(fonudProduct);
    }
  }
  return { cartArray, products };
};
export { getCartLoaderData };
