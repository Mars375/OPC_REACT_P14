import React from "react";
import {
	Table,
	TableHeader,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
} from "opc-ui";

import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	EntriesSelector,
} from "opc-ui";

import { EmployeeFormData } from "@/types/employeeTypes";
import usePagination from "@/hooks/usePagination";
import useSearchAndSort from "@/hooks/useSearchAndSort";
import Input from "../atoms/Input";
import { requestSort } from "@/utils/sortUtils";

type Column = {
	key: keyof EmployeeFormData;
	label: string;
};

const columns: Column[] = [
	{ key: "firstName", label: "First Name" },
	{ key: "lastName", label: "Last Name" },
	{ key: "startDate", label: "Start Date" },
	{ key: "department", label: "Department" },
	{ key: "dateOfBirth", label: "Date of Birth" },
	{ key: "street", label: "Street" },
	{ key: "city", label: "City" },
	{ key: "state", label: "State" },
	{ key: "zipCode", label: "Zip Code" },
];

const paginationOptions = [
	{ value: "10", label: "10" },
	{ value: "25", label: "25" },
	{ value: "50", label: "50" },
	{ value: "100", label: "100" },
];

const EmployeeTable: React.FC<{ employees: EmployeeFormData[] | null }> = ({
	employees,
}) => {
	const {
		searchTerm,
		setSearchTerm,
		filteredEmployees,
		sortConfig,
		setSortConfig,
		gotoPageRef,
	} = useSearchAndSort(employees);

	const totalItems = filteredEmployees.length;
	const totalEntries = employees ? employees.length : 0;
	const {
		pageIndex,
		pageSize,
		pageCount,
		canPreviousPage,
		canNextPage,
		gotoPage,
		nextPage,
		previousPage,
		setPageSize,
	} = usePagination({ totalItems });

	gotoPageRef.current = gotoPage;

	const currentEmployees = filteredEmployees.slice(
		pageIndex * pageSize,
		(pageIndex + 1) * pageSize
	);

	const getSortIcon = (key: keyof EmployeeFormData) => {
		if (!sortConfig) {
			return <span style={{ opacity: 0.3 }}>⇅</span>;
		}
		if (sortConfig.key === key) {
			return sortConfig.direction === "ascending" ? (
				<span>↑</span>
			) : (
				<span>↓</span>
			);
		}
		return <span style={{ opacity: 0.3 }}>⇅</span>;
	};

	return (
		<div>
			<div className='flex items-center justify-between gap-2 mb-4'>
				<div className='flex items-center gap-2'>
					<span className='text-sm text-gray-500 dark:text-gray-400'>Show</span>
					<EntriesSelector
						value={pageSize.toString()}
						onChange={(e) => setPageSize(Number(e.target.value))}
						options={paginationOptions}
						className='border p-1 rounded outline-none bg-background'
					/>
					<span className='text-sm text-gray-500 dark:text-gray-400'>
						entries
					</span>
				</div>
				<div className='w-1/3'>
					<Input
						type='text'
						placeholder='Search...'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className='max-w-4xl mx-auto p-6 bg-background-light dark:bg-background-dark-2 shadow-lg rounded-lg transition-[background-color] duration-300 ease-in-out'>
				<Table>
					<TableHeader>
						<TableRow>
							{columns.map((column) => (
								<TableHead
									key={column.key}
									onClick={() =>
										requestSort(column.key, sortConfig, setSortConfig)
									}
								>
									{column.label} {getSortIcon(column.key)}
								</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentEmployees.length > 0 ? (
							currentEmployees.map((employee, index) => (
								<TableRow key={index}>
									{columns.map((column) => (
										<TableCell key={column.key}>
											{employee[column.key]}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length}>
									No Employees Found
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex justify-between items-center mt-1'>
				<span className='text-sm text-gray-500 dark:text-gray-400 w-full'>
					{`Showing ${pageIndex * pageSize + 1} to ${
						pageIndex * pageSize + currentEmployees.length
					} of ${totalItems} entries`}
					{searchTerm && ` (filtered from ${totalEntries} total entries)`}
				</span>
				<Pagination className='justify-end px-8'>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious
								href='#'
								size='null'
								onClick={(e) => {
									e.preventDefault();
									previousPage();
								}}
								isActive={canPreviousPage}
								className={`p-2 ${
									!canPreviousPage && "opacity-50 pointer-events-none"
								}`}
							/>
						</PaginationItem>
						{Array.from({ length: pageCount }, (_, i) => (
							<PaginationItem key={i}>
								<PaginationLink
									size='icon'
									href='#'
									isActive={i === pageIndex}
									onClick={(e) => {
										e.preventDefault();
										gotoPage(i);
									}}
								>
									{i + 1}
								</PaginationLink>
							</PaginationItem>
						))}
						<PaginationItem>
							<PaginationNext
								href='#'
								size='null'
								onClick={(e) => {
									e.preventDefault();
									nextPage();
								}}
								isActive={canNextPage}
								className={`p-2 ${
									!canNextPage && "opacity-50 pointer-events-none"
								}`}
							/>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default EmployeeTable;
