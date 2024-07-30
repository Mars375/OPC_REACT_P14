import { useState } from "react";

interface UsePaginationProps {
	initialPageIndex?: number;
	initialPageSize?: number;
	totalItems: number;
}

/**
 * Custom hook for handling pagination logic.
 *
 * This hook provides functionality to manage page state based on total items and page size.
 * It allows navigating between pages, jumping to specific pages, and changing the page size.
 *
 * @param {UsePaginationProps} props - Configuration options for pagination.
 * @returns An object containing pagination state and control methods.
 */
const usePagination = ({
	initialPageIndex = 0,
	initialPageSize = 10,
	totalItems,
}: UsePaginationProps) => {
	const [pageIndex, setPageIndex] = useState(initialPageIndex);
	const [pageSize, setPageSize] = useState(initialPageSize);

	// Calculate the total number of pages
	const pageCount = Math.ceil(totalItems / pageSize);

	// Determine if navigation to previous or next page is possible
	const canPreviousPage = pageIndex > 0;
	const canNextPage = pageIndex < pageCount - 1;

	// Navigate to a specific page, ensuring the page number is within bounds
	const gotoPage = (page: number) => {
		setPageIndex(Math.max(0, Math.min(page, pageCount - 1)));
	};

	// Move to the next page if possible
	const nextPage = () => {
		if (canNextPage) {
			setPageIndex(pageIndex + 1);
		}
	};

	// Move to the previous page if possible
	const previousPage = () => {
		if (canPreviousPage) {
			setPageIndex(pageIndex - 1);
		}
	};

	// Change the page size and reset to the first page
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
