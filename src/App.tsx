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
				<EmployeeStore employees={employees}>
					<StyledResponsiveContainer>
						<GlobalStyle />
						<StyledFlexRow>
							<StyledAppColumns flexNumber={5}>
								<StyledLogoImg src={logoImg} />
								<StyledSpace/>
								<StyledSearchInput type='text' placeholder='Search:' />
								<StyledSpace/>
								<EmployeeList/>
							</StyledAppColumns>
							<StyledAppColumns flexNumber={7}>
								<StyledButton scheme={StyledButtonScheme.DARK}>
									Create new employee
								</StyledButton>
								<BigEmployeeCard employee={employees[0]} />
								<EmployeeForm editEmployee={employees[0]} onSubmit={() => false} />
							</StyledAppColumns>
						</StyledFlexRow>
					</StyledResponsiveContainer>
				</EmployeeStore>
			</ThemeProvider>
		);
	}
}

export default App;
