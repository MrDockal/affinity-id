import * as React from 'react';
import { IEmployee } from 'src/Model/Employee/IEmployee';
import { IRole } from 'src/Model/Employee/IRole';
import { ITeam } from 'src/Model/Team/ITeam';
import { StyledButton, StyledButtonScheme } from '../Styled/Form/StyledButton';
import { StyledCard } from '../Styled/Card/StyledCard';
import { StyledFormGroup } from '../Styled/Form/StyledFormGroup';
import { StyledFormInput } from '../Styled/Form/StyledFormInput';
import { StyledFormSelect } from '../Styled/Form/StyledFormSelect';

type IEmployeeForm = Partial<IEmployee>;

interface IProps {
	editEmployee?: IEmployee;
	onSubmit(employee: IEmployee): void;
}

interface IState {
	employee: IEmployeeForm;
}

export class EmployeeForm extends React.PureComponent<IProps, IState> {
	public state: IState = {
		employee: this.props.editEmployee ? this.props.editEmployee : {},
	};

	public render() {
		const editing = !!this.props.editEmployee;
		return (
			<StyledCard>
				<form onSubmit={this.handleSubmit}>
					<StyledFormGroup>
						<div>
							<label htmlFor='name'>Name</label>
						</div>
						<StyledFormInput onChange={this.handleInputChange} id='name' name='name' type='text' defaultValue='' value={this.state.employee.name} required={true} />
					</StyledFormGroup>
					<StyledFormGroup>
						<div>
							<label htmlFor='email'>Email address</label>
						</div>
						<StyledFormInput onChange={this.handleInputChange} id='email' name='email' type='email' disabled={editing} defaultValue='' value={this.state.employee.email} required={true} />
					</StyledFormGroup>
					<StyledFormGroup>
						<div>
							<label htmlFor='role'>Role</label>
						</div>
						<StyledFormSelect onChange={this.handleInputChange} id='role' name='role' value={this.state.employee.role} defaultValue='' required={true}>
							<option value={''} defaultChecked={true} disabled={true}>Plase select a role</option>
							{
								Object.keys(IRole).map((role: string) =>
									<option key={role}>{role}</option>
								)
							}
						</StyledFormSelect>
					</StyledFormGroup>
					<StyledFormGroup>
						<div>
							<label htmlFor='team'>Team</label>
						</div>
						<StyledFormSelect onChange={this.handleInputChange} id='team' name='team' value={this.state.employee.team} defaultValue='' required={true} >
							<option value='' disabled={true}>Plase select a team</option>
							{
								Object.keys(ITeam).map((team: string) =>
									<option key={team}>{team}</option>
								)
							}
						</StyledFormSelect>
					</StyledFormGroup>
					<StyledFormGroup>
						<div>
							<label htmlFor='address'>Address</label>
						</div>
						<StyledFormInput onChange={this.handleInputChange} id='address' name='address' type='text' defaultValue='' value={this.state.employee.address} required={true} />
					</StyledFormGroup>
					<StyledButton scheme={StyledButtonScheme.GREEN}>
						Submit
					</StyledButton>
				</form>
			</StyledCard>
		);
	}

	private handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const target = event.target;
		const value = target.value;
		const name = target.name;
	
		this.setState({
			employee: {
				...this.state.employee,
				[name]: value,
			}
		});
	}

	private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		this.props.onSubmit(this.state.employee as any);
	}
}
