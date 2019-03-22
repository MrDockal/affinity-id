import * as React from 'react';
import { IEmployee } from "src/Model/Employee/IEmployee";

interface IEmployeeContextValue {
	employees: IEmployee[];
	add(employee: IEmployee): void;
	remove(employee: IEmployee): void;
	edit(employee: IEmployee): void;
}

interface IState {
	employees: IEmployee[];
}

interface IProps {
	employees: IEmployee[];
}

const Context = React.createContext<IEmployeeContextValue>({} as IEmployeeContextValue);

export class EmployeeStore extends React.PureComponent<IProps, IState> {
	public state: IState = {
		employees: this.props.employees,
	};

	public render() {
		return (
			<Context.Provider
				value={{
					add: this.add,
					edit: this.edit,
					remove: this.remove,
					employees: this.state.employees,
				}}
			>
				{
					this.props.children
				}
			</Context.Provider>
		)
	}

	private add = (employeeToAdd: IEmployee) => {
		const exists = this.state.employees.find((employee: IEmployee) => employee.email.toLowerCase() === employeeToAdd.email.toLowerCase());
		if (exists) {
			throw new Error('This email already exists');
		}
		this.setState({
			employees: [
				...this.state.employees,
				employeeToAdd,
			],
		});
	}

	private remove = (employeeToRemove: IEmployee) => {
		const filtered = this.state.employees.filter((employee: IEmployee) => employee.email !== employeeToRemove.email);
		this.setState({
			employees: filtered,
		});
	}

	private edit = (employeeToEdit: IEmployee) => {
		const mapped = this.state.employees.map((employee: IEmployee) => {
			if (employee.email === employeeToEdit.email) {
				return employeeToEdit;
			} else {
				return employee;
			}
		});
		this.setState({
			employees: mapped,
		});
	}
}

export interface IEmployeeStoreProps {
	employeeStore: IEmployeeContextValue;
}

export const withEmployeeStore = <OwnProps extends {}>(WrappedComponent: React.ComponentType<OwnProps & IEmployeeStoreProps>) => (
	(props: OwnProps) => (
		<Context.Consumer>
			{(value: IEmployeeContextValue) => <WrappedComponent {...props} employeeStore={value} />}
		</Context.Consumer>
	)
);
