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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error!</div>;
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
