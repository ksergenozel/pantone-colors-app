import { ChangeEvent } from "react";
import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function ColorSearchInput({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="relative w-full max-w-xs mb-6">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-300" />
      <Input
        type="text"
        placeholder="Search colors by code or name"
        value={search}
        onChange={setSearch}
        className="pl-10 font-medium text-zinc-600 placeholder:text-zinc-400 selection:bg-zinc-200 selection:text-zinc-600"
      />
    </div>
  );
}
