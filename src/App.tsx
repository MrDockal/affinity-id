import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, IThemeProps } from './Model/theme';
import { SmallEmployeeCard } from './Components/SmallEmployeeCard/SmallEmployeeCard';
import { employees } from './Model/mocks/employees';
import { BigEmployeeCard } from './Components/BigEmployeeCard/BigEmployeeCard';
import { StyledResponsiveContainer } from './Components/Styled/Responsive/StyledResponsiveContainer';
import { StyledFlexRow } from './Components/Styled/FlexLayout/StyledFlexRow';
import { IEmployee } from './Model/Employee/IEmployee';
import { StyledFlexNumber } from './Components/Styled/FlexLayout/StyledFlexNumber';

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
			<ThemeProvider theme={theme}>
				<StyledResponsiveContainer>
					<GlobalStyle/>
					<StyledFlexRow>
						<StyledFlexNumber>
							{
								employees.map((employee: IEmployee) =>
									<SmallEmployeeCard key={employee.email} img={employee.img} name={employee.name} role={employee.role} team={employee.team} />
								)
							}
						</StyledFlexNumber>
						<BigEmployeeCard employee={employees[0]}/>
					</StyledFlexRow>
				</StyledResponsiveContainer>
			</ThemeProvider>
		);
	}
}

export default App;
