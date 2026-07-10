"use client";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import Pagination from "@/features/shared/components/Pagination";

interface Props {
  page: number;
  totalPages: number;
}

export default function PaginationWrapper({
  page,
  totalPages,
}: Props) {

  const router = useRouter();

  const pathname = usePathname();

  const searchParams = useSearchParams();

  function handlePageChange(
    newPage: number
  ) {

    const params = new URLSearchParams(
      searchParams.toString()
    );

    params.set(
      "page",
      newPage.toString()
    );

    router.push(
      `${pathname}?${params.toString()}`
    );

  }

  return (
    <Pagination
      page={page}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );

}