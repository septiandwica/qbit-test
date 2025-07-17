import axios from "axios";
const BASE_URL = "http://localhost:5038/api/orders";

export const createOrder = (data: any) => axios.post(BASE_URL, data);
export const getOrders = () => axios.get(BASE_URL);
