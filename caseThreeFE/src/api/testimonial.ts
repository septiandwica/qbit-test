import axios from "axios";
const BASE_URL = "http://localhost:5038/api/testimonials";

export const getTestimonials = () => axios.get(BASE_URL);
export const createTestimonial = (data: any) => axios.post(BASE_URL, data);
export const deleteTestimonial = (idx: number) =>
  axios.delete(`${BASE_URL}/${idx}`);
