import * as React from 'react';
import { IEmployee } from 'src/Model/Employee/IEmployee';
import { IRole } from 'src/Model/Employee/IRole';
import { ColumnHeading } from 'src/Components/ColumnHeading/ColumnHeading';
import { SmallEmployeeCard } from 'src/Components/SmallEmployeeCard/SmallEmployeeCard';
import { StyledSpace } from 'src/Components/Styled/Elements/StyledSpace';
import { withEmployeeStore, IEmployeeStoreProps } from 'src/Context/EmployeeStore';

export interface IOwnProps {
	/** */
}

type IProps = IEmployeeStoreProps & IOwnProps;

export class EmployeeListWithStore extends React.PureComponent<IProps> {

	public render() {
		const admins = this.props.employeeStore.employees.filter((employee: IEmployee) => employee.role === IRole.Admin);
		const employees = this.props.employeeStore.employees.filter((employee: IEmployee) => employee.role === IRole.Employee);
		return (
			<React.Fragment>
				<ColumnHeading title={'Admin'} sortBy={'Name'} />
				{
					admins.map((admin: IEmployee) =>
						<React.Fragment key={admin.email}>
							<SmallEmployeeCard img={admin.img} name={admin.name} role={admin.role} team={admin.team} />
							<StyledSpace/>
						</React.Fragment>
					)
				}
				<ColumnHeading title={'Employee'} />
				{
					employees.map((employee: IEmployee) =>
						<React.Fragment key={employee.email}>
							<SmallEmployeeCard img={employee.img} name={employee.name} role={employee.role} team={employee.team} />
							<StyledSpace/>
						</React.Fragment>
					)
				}
			</React.Fragment>
		);
	}
}

export const EmployeeList = withEmployeeStore(EmployeeListWithStore);