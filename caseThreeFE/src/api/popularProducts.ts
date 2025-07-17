import { getProducts } from "./products";

export const getPopularProducts = async () => {
  const res = await getProducts();
  return res.data.filter((p: any) => p.popular);
};
