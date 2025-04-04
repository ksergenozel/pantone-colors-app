import { useSearchParams } from "react-router-dom";
import { useColors } from "@/hooks/useColors";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ColorList from "@/components/ColorList";

export default function PalettePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = searchParams.get("page");
  const page = Math.max(parseInt(pageParam || "1"), 1);
  const { data, isLoading, isError } = useColors(page);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  if (data)
    return (
      <main className="flex flex-col items-center gap-8 py-12 px-8 bg-zinc-50 min-h-screen">
        <ColorList colors={data.data} />

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
