import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeFormData } from "@/types/employeeTypes";

interface EmployeeState {
	employees: EmployeeFormData[];
}

const initialState: EmployeeState = {
	employees: [],
};

const employeeSlice = createSlice({
	name: "employees",
	initialState,
	reducers: {
		setEmployees(state, action: PayloadAction<EmployeeFormData[]>) {
			state.employees = action.payload;
		},
		addEmployee(state, action: PayloadAction<EmployeeFormData>) {
			state.employees.push(action.payload);
		},
	},
});

export const { setEmployees, addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
