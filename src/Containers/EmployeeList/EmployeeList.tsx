import * as React from 'react';
import { IEmployee } from 'src/Model/Employee/IEmployee';
import { IRole } from 'src/Model/Employee/IRole';
import { ColumnHeading } from 'src/Components/ColumnHeading/ColumnHeading';
import { SmallEmployeeCard } from 'src/Components/SmallEmployeeCard/SmallEmployeeCard';
import { StyledSpace } from 'src/Components/Styled/Elements/StyledSpace';
import { withEmployeeStore, IEmployeeStoreProps } from 'src/Context/EmployeeStore';
import { StyledSearchInput } from 'src/Components/Styled/Form/StyledSearchInput';

export interface IOwnProps {
	/** */
}

type IProps = IEmployeeStoreProps & IOwnProps;

interface IState {
	searchValue: string;
	nameSort: number;
}

export class EmployeeListWithStore extends React.PureComponent<IProps, IState> {

	public state: IState = {
		searchValue: '',
		nameSort: 1,
	};

	public render() {
		const filteredEmployeesBySearch = 
			(!this.state.searchValue) ?
				this.props.employeeStore.employees :
				this.props.employeeStore.employees.filter((employee: IEmployee) => JSON.stringify(Object.values(employee)).toLowerCase().indexOf(this.state.searchValue.toLowerCase()) >= 0);

		const allEmployees = filteredEmployeesBySearch.sort((em1: IEmployee, em2: IEmployee) => {
			if (em1.name > em2.name) {
				return this.state.nameSort;
			}
			else if (em1.name < em2.name) {
				return -this.state.nameSort;
			}
			else {
				return 0;
			}
		})
		const admins = allEmployees.filter((employee: IEmployee) => employee.role === IRole.Admin);
		const employees = allEmployees.filter((employee: IEmployee) => employee.role === IRole.Employee);
		return (
			<React.Fragment>
				<StyledSearchInput type='text' placeholder='Search:' onChange={this.onSearchValueChange}/>
				<StyledSpace />
				{
					admins.length > 0 && <ColumnHeading title={'Admin'} sortBy={'Name'} onClick={this.toggleSort} />
				}
				{
					admins.map((admin: IEmployee) =>
						<React.Fragment key={admin.email}>
							<SmallEmployeeCard img={admin.img} name={admin.name} role={admin.role} team={admin.team} email={admin.email} />
							<StyledSpace/>
						</React.Fragment>
					)
				}
				{
					employees.length > 0 && <ColumnHeading title={'Employee'} />
				}
				{
					employees.map((employee: IEmployee) =>
						<React.Fragment key={employee.email}>
							<SmallEmployeeCard img={employee.img} name={employee.name} role={employee.role} team={employee.team} email={employee.email} />
							<StyledSpace/>
						</React.Fragment>
					)
				}
			</React.Fragment>
		);
	}

	private onSearchValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({
			searchValue: e.target.value,
		});
	}

	private toggleSort = () => {
		this.setState({
			nameSort: -this.state.nameSort,
		});
	}
}

export const EmployeeList = withEmployeeStore(EmployeeListWithStore);