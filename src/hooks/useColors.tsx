import { useQuery } from "@tanstack/react-query";
import type { GetColorsResponse } from "@/types/GetColorsReponse";
import { fetchColors } from "@/lib/api";

export const useColors = (search = "", page: number, limit: number = 100) => {
  return useQuery<GetColorsResponse, Error>({
    queryKey: ["colors", search, page],
    queryFn: () => fetchColors(search, page, limit),
    placeholderData: (prev) => prev,
  });
};
