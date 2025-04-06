import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useColors } from "@/hooks/useColors";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading";
import Error from "@/components/Error";
import ColorList from "@/components/ColorList";
import ColorSearchInput from "@/components/ColorSearchInput";
import Title from "@/components/Title";
import { Toaster } from "@/components/ui/sonner";

export default function PalettePage() {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch] = useDebounce(search, 300);
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError } = useColors(debouncedSearch, page);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    setPage(1);
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
    <>
      <main className="flex flex-col items-center gap-4.5 py-12 px-8 bg-zinc-50 min-h-screen w-full">
        <Title color={data.data[0]?.hex} />

        <ColorSearchInput search={search} setSearch={handleSearchChange} />

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
      <Toaster theme="light" position="top-right" />
    </>
  );
}
