import { useEffect, useState } from "react";

import { useColors } from "@/hooks/useColors";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ColorList from "@/components/ColorList";

export default function PalettePage() {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError } = useColors(page);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!isLoading && data) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [data, isLoading]);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;
  if (!data) return <Error message="No data available" />;

  return (
    <main className="flex flex-col items-center gap-8 py-12 px-8 bg-zinc-50 min-h-screen w-full">
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
