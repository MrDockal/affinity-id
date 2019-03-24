import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, IThemeProps } from './Model/theme';
import { employees } from './Model/mocks/employees';
import { StyledLogoImg } from './Components/Styled/Img/StyledLogoImg';
import logoImg from './assets/img/affinityid-logo.svg';
import { StyledSpace } from './Components/Styled/Elements/StyledSpace';
import { EmployeeList } from './Containers/EmployeeList/EmployeeList';
import { EmployeeStore } from './Context/EmployeeStore';
import { HashRouter } from 'react-router-dom';
import { EmployeeManagement } from './Containers/EmployeeManagement/EmployeeManagement';

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
						<div className='container'>
							<GlobalStyle />
							<div className='row'>
								<div className='col-md-5'>
									<StyledLogoImg src={logoImg} />
									<StyledSpace />
									<EmployeeList />
								</div>
								<div className='offset-md-1 col-md-6'>
									<EmployeeManagement/>
								</div>
							</div>
						</div>
					</EmployeeStore>
				</ThemeProvider>
			</HashRouter>
		);
	}
}

export default App;
