"use client";

import React, { useState } from "react";

// TODO: Créer les atomes
// - TableHeader
// - TableRow
// - TableCell
// - Button
// - Input
// - Select

// TODO: Créer les molécules
// - Table
// - SearchBar
// - Pagination

// TODO: Créer les organismes
// - EmployeeTable

// TODO: Utiliser les composants créés dans la page EmployeeListPage

const EmployeeListPage = () => {
	const headers = [
		"First Name",
		"Last Name",
		"Start Date",
		"Department",
		"Date of Birth",
		"Street",
		"City",
		"State",
		"Zip Code",
	];
	const rows = [
		[
			"Loïc",
			"Rossi",
			"06/14/2024",
			"Sales",
			"06/08/2024",
			"18 rue du Général Duport",
			"Brumath",
			"AS",
			"67170",
		],
		[
			"Loïc",
			"Rossi",
			"06/14/2024",
			"Sales",
			"06/08/2024",
			"18 rue du Général Duport",
			"Brumath",
			"AS",
			"67170",
		],
	];
	const [searchValue, setSearchValue] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const [entriesPerPage, setEntriesPerPage] = useState(10);
	const totalPages = Math.ceil(rows.length / entriesPerPage);

	const handleSearchChange = (e) => setSearchValue(e.target.value);
	const handleSearch = () => {
		/* Logic to filter rows based on searchValue */
	};
	const handlePageChange = (page: number) => setCurrentPage(page);
	const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
		setEntriesPerPage(e.target.value);

	return (
		<div>
			{/* TODO: Remplacer par le composant SearchBar */}
			<div>
				<input value={searchValue} onChange={handleSearchChange} />
				<button onClick={handleSearch}>Search</button>
			</div>

			{/* TODO: Remplacer par le composant Table */}
			<table>
				<thead>
					<tr>
						{headers.map((header) => (
							<th key={header}>{header}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rows.map((row, index) => (
						<tr key={index}>
							{row.map((cell, cellIndex) => (
								<td key={cellIndex}>{cell}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>

			{/* TODO: Remplacer par le composant Pagination */}
			<div>
				<button
					onClick={() => handlePageChange(currentPage - 1)}
					disabled={currentPage === 1}
				>
					Previous
				</button>
				<span>
					{currentPage} / {totalPages}
				</span>
				<button
					onClick={() => handlePageChange(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					Next
				</button>
				<select value={entriesPerPage} onChange={handleEntriesChange}>
					<option value={10}>10</option>
					<option value={25}>25</option>
					<option value={50}>50</option>
				</select>
			</div>
		</div>
	);
};

export default EmployeeListPage;
