import { useSearchParams } from "react-router-dom";
import { useColors } from "@/hooks/useColors";
import { Pagination } from "@/components/Pagination";
import { ColorCard } from "@/components/ColorCard";

export default function PalettePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = Math.max(parseInt(pageParam || "1"), 1);

  const { data, isLoading, isError } = useColors(page);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-red-500 border-t-blue-500 border-r-green-500 border-b-yellow-500 rounded-full animate-spin"></div>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <p className="text-lg font-semibold text-red-700">
          An error occurred while fetching colors. Please try again later.
        </p>
      </div>
    );
  if (!data) return null;

  return (
    <main className="flex flex-col items-center gap-8 py-12 px-8 bg-zinc-50 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
        {data.data.map((color) => (
          <ColorCard key={color.code} color={color} />
        ))}
      </div>

      <Pagination
        page={data.page}
        totalPages={data.totalPages}
        hasNextPage={data.hasNextPage}
        hasPrevPage={data.hasPrevPage}
        nextPage={data.nextPage}
        prevPage={data.prevPage}
        onPageChange={handlePageChange}
      />
    </main>
  );
}
