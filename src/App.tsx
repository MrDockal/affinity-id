import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, IThemeProps } from './Model/theme';
import { employees } from './Model/mocks/employees';
import { BigEmployeeCard } from './Components/BigEmployeeCard/BigEmployeeCard';
import { StyledResponsiveContainer } from './Components/Styled/Responsive/StyledResponsiveContainer';
import { StyledFlexRow } from './Components/Styled/FlexLayout/StyledFlexRow';
import { StyledAppColumns } from './Components/Styled/FlexLayout/StyledAppColumns';
import { StyledLogoImg } from './Components/Styled/Img/StyledLogoImg';
import logoImg from './assets/img/affinityid-logo.svg';
import { StyledButton, StyledButtonScheme } from './Components/Styled/Form/StyledButton';
import { StyledSearchInput } from './Components/Styled/Form/StyledSearchInput';
import { StyledSpace } from './Components/Styled/Elements/StyledSpace';
import { EmployeeList } from './Containers/EmployeeList/EmployeeList';
import { EmployeeForm } from './Components/EmployeeForm/EmployeeForm';
import { EmployeeStore } from './Context/EmployeeStore';
import { HashRouter, Switch, Route, RouteComponentProps, Link } from 'react-router-dom';
import { IEmployee } from './Model/Employee/IEmployee';

const GlobalStyle = createGlobalStyle<IThemeProps>`
	html, body {
		background-color: ${(props: IThemeProps) => props.theme.backgroundColor};
		color: ${(props: IThemeProps) => props.theme.fontColor};
		font-size: ${(props: IThemeProps) => props.theme.defaultFontSize};
	}
`;

class App extends React.Component {
	public render() {
		return (
			<HashRouter>
				<ThemeProvider theme={theme}>
					<EmployeeStore employees={employees}>
						<StyledResponsiveContainer>
							<GlobalStyle />
							<StyledFlexRow>
								<StyledAppColumns flexNumber={5}>
									<StyledLogoImg src={logoImg} />
									<StyledSpace />
									<StyledSearchInput type='text' placeholder='Search:' />
									<StyledSpace />
									<EmployeeList />
								</StyledAppColumns>
								<StyledAppColumns flexNumber={7}>
									<Link to=''>
										<StyledButton scheme={StyledButtonScheme.DARK}>
											Create new employee
										</StyledButton>
									</Link>
									<Switch>
										<Route path='/customer-detail/:email/edit' render={(props: RouteComponentProps<{ email: string }>) =>
											<EmployeeForm editEmployee={employees.find((employee: IEmployee) => employee.email === props.match.params.email)} onSubmit={() => false} />
										} />
										<Route path='/customer-detail/:email' render={(props: RouteComponentProps<{ email: string }>) => {
											const employee = employees.find((em: IEmployee) => em.email === props.match.params.email);
											return (
												employee && <BigEmployeeCard employee={employee} />
											);
										}} />
										<Route render={(props: RouteComponentProps<any>) => <EmployeeForm onSubmit={() => false} />} />
									</Switch>
								</StyledAppColumns>
							</StyledFlexRow>
						</StyledResponsiveContainer>
					</EmployeeStore>
				</ThemeProvider>
			</HashRouter>
		);
	}
}

export default App;
