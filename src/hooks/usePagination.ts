import { useState } from "react";

interface UsePaginationProps {
	initialPageIndex?: number;
	initialPageSize?: number;
	totalItems: number;
}

const usePagination = ({
	initialPageIndex = 0,
	initialPageSize = 10,
	totalItems,
}: UsePaginationProps) => {
	const [pageIndex, setPageIndex] = useState(initialPageIndex);
	const [pageSize, setPageSize] = useState(initialPageSize);

	const pageCount = Math.ceil(totalItems / pageSize);

	const canPreviousPage = pageIndex > 0;
	const canNextPage = pageIndex < pageCount - 1;

	const gotoPage = (page: number) => {
		setPageIndex(Math.max(0, Math.min(page, pageCount - 1)));
	};

	const nextPage = () => {
		if (canNextPage) {
			setPageIndex(pageIndex + 1);
		}
	};

	const previousPage = () => {
		if (canPreviousPage) {
			setPageIndex(pageIndex - 1);
		}
	};

	const setPageSizeAndReset = (size: number) => {
		setPageSize(size);
		setPageIndex(0);
	};

	return {
		pageIndex,
		pageSize,
		pageCount,
		canPreviousPage,
		canNextPage,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize: setPageSizeAndReset,
	};
};

export default usePagination;
