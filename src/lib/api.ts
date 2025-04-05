import { ColorResponseSchema } from "@/lib/schema";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const fetchColors = async (search = "", page = 1, limit = 100) => {
  const res = await fetch(
    `${API_BASE_URL}/colors?search=${search}&page=${page}&limit=${limit}`,
  );
  const json = await res.json();
  const result = ColorResponseSchema.safeParse(json);
  if (!result.success) {
    console.error("Invalid API response", result.error);
    throw new Error("Invalid API response");
  }
  return result.data;
};
