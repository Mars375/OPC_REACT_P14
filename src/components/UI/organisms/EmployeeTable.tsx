import React, { useState, useEffect, useRef } from "react";
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
import Input from "../atoms/Input";

const EmployeeTable: React.FC<{ employees: EmployeeFormData[] | null }> = ({
	employees,
}) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredEmployees, setFilteredEmployees] = useState<
		EmployeeFormData[]
	>([]);
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
	const gotoPageRef = useRef(gotoPage);

	useEffect(() => {
		if (employees) {
			const filtered = employees.filter((employee) =>
				Object.values(employee).some((value) =>
					value.toString().toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
			setFilteredEmployees(filtered);
			gotoPageRef.current(0);
		}
	}, [searchTerm, employees]);

	const currentEmployees = filteredEmployees.slice(
		pageIndex * pageSize,
		(pageIndex + 1) * pageSize
	);

	return (
		<div>
			<div className='flex items-center justify-between gap-2 mb-4'>
				<div className='flex items-center gap-2'>
					<span className='text-sm text-gray-500 dark:text-gray-400'>Show</span>
					<EntriesSelector
						value={pageSize.toString()}
						onChange={(e) => setPageSize(Number(e.target.value))}
						options={[
							{ value: "10", label: "10" },
							{ value: "25", label: "25" },
							{ value: "50", label: "50" },
							{ value: "100", label: "100" },
						]}
						className='border p-1 rounded outline-none bg-white dark:bg-dark border-black/50 dark:border-dark/50 hover:border-black dark:hover:border-dark focus:border-2 focus:border-interactive-light dark:focus:border-interactive-dark'
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
							<TableHead>First Name</TableHead>
							<TableHead>Last Name</TableHead>
							<TableHead>Start Date</TableHead>
							<TableHead>Department</TableHead>
							<TableHead>Date of Birth</TableHead>
							<TableHead>Street</TableHead>
							<TableHead>City</TableHead>
							<TableHead>State</TableHead>
							<TableHead>Zip Code</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{currentEmployees.length > 0 ? (
							currentEmployees.map((employee, index) => (
								<TableRow key={index}>
									<TableCell>{employee.firstName}</TableCell>
									<TableCell>{employee.lastName}</TableCell>
									<TableCell>{employee.startDate}</TableCell>
									<TableCell>{employee.department}</TableCell>
									<TableCell>{employee.dateOfBirth}</TableCell>
									<TableCell>{employee.street}</TableCell>
									<TableCell>{employee.city}</TableCell>
									<TableCell>{employee.state}</TableCell>
									<TableCell>{employee.zipCode}</TableCell>
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={9}>No data available in table</TableCell>
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
