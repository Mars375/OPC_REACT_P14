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

const EmployeeTable: React.FC<{ employees: EmployeeFormData[] | null }> = ({
	employees,
}) => {
	const totalItems = employees ? employees.length : 0;
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

	const currentEmployees = employees
		? employees.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
		: [];

	return (
		<div>
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
			<Pagination className='justify-end'>
				<EntriesSelector
					value={pageSize.toString()}
					onChange={(e) => setPageSize(Number(e.target.value))}
					options={[
						{ value: "10", label: "10" },
						{ value: "20", label: "20" },
						{ value: "30", label: "30" },
					]}
				/>
				<PaginationContent className='gap-8'>
					<PaginationItem>
						<PaginationPrevious
							href='#'
							size='icon'
							onClick={(e) => {
								e.preventDefault();
								previousPage();
							}}
							isActive={canPreviousPage}
							className={`${
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
							size='icon'
							onClick={(e) => {
								e.preventDefault();
								nextPage();
							}}
							isActive={canNextPage}
							className={`${!canNextPage && "opacity-50 pointer-events-none"}`}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	);
};

export default EmployeeTable;
