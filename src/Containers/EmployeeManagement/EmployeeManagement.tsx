import * as React from 'react';
import { StyledDiv } from 'src/Components/Styled/Elements/StyledDiv';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router';
import { EmployeeForm } from 'src/Components/EmployeeForm/EmployeeForm';
import { withEmployeeStore, IEmployeeStoreProps } from 'src/Context/EmployeeStore';
import { IEmployee } from 'src/Model/Employee/IEmployee';
import { BigEmployeeCard } from 'src/Components/BigEmployeeCard/BigEmployeeCard';
import { Link } from 'react-router-dom';
import { StyledButton, StyledButtonScheme } from 'src/Components/Styled/Form/StyledButton';

interface IOwnProps extends RouteComponentProps<any> {
	/** */
}

type IProps = IOwnProps & IEmployeeStoreProps;

class EmployeeManagementWithStore extends React.PureComponent<IProps> {
	public render() {
		return (
			<React.Fragment>
				<Link to=''>
					<StyledButton scheme={StyledButtonScheme.DARK}>
						Create new employee
					</StyledButton>
				</Link>
				<StyledDiv marginTop={'170px'}>
					<Switch>
						<Route path='/customer-detail/:email/edit' render={(props: RouteComponentProps<{ email: string }>) =>
							<EmployeeForm
								editEmployee={this.props.employeeStore.employees.find((employee: IEmployee) => employee.email === props.match.params.email)}
								onSubmit={(employee: IEmployee) => this.props.employeeStore.edit(employee)}
							/>
						} />
						<Route path='/customer-detail/:email' render={(props: RouteComponentProps<{ email: string }>) => {
							const employee = this.props.employeeStore.employees.find((em: IEmployee) => em.email === props.match.params.email);
							return (
								employee &&
								<BigEmployeeCard
									employee={employee}
									delete={() => {
										const confirmed = window.confirm('Do you really want to delete this employee?');
										if (!confirmed) {
											return;
										}
										this.props.employeeStore.remove(employee);
										props.history.push(`/customer-detail/${employee.email}/edit`)
									}}
									edit={() => props.history.push(`/customer-detail/${employee.email}/edit`)}
								/>
							);
						}} />
						<Route render={(props: RouteComponentProps<any>) =>
							<EmployeeForm onSubmit={(employee: IEmployee) => {
								try {
									this.props.employeeStore.add(employee);
									return true;
								} catch (e) {
									alert(e.message);
									return false;
								}
							}} />}
						/>
					</Switch>
				</StyledDiv>
			</React.Fragment>
		);
	}
}

export const EmployeeManagement = withRouter(withEmployeeStore(EmployeeManagementWithStore));
