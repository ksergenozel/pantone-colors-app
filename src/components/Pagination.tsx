import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

type PaginationProps = {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  nextPage: number | null;
  prevPage: number | null;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  page,
  totalPages,
  hasNextPage,
  hasPrevPage,
  nextPage,
  prevPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;
  return (
    <div className="flex items-center gap-2 mt-7">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(1)}
        disabled={!hasPrevPage || page === 1}
        className="cursor-pointer"
      >
        <ChevronsLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(prevPage!)}
        disabled={!hasPrevPage}
        className="cursor-pointer"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div>
        <span className="text-sm font-medium text-zinc-400">Page </span>
        <span className="text-sm font-medium text-zinc-700">{page} </span>
        <span className="text-sm font-medium text-zinc-400">of </span>
        <span className="text-sm font-medium text-zinc-500">{totalPages}</span>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(nextPage!)}
        disabled={!hasNextPage}
        className="cursor-pointer"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPageChange(totalPages)}
        disabled={!hasNextPage || page === totalPages}
        className="cursor-pointer"
      >
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
