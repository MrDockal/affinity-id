import * as React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { theme, IThemeProps } from './Model/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SmallEmployeeCard } from './Components/SmallEmployeeCard/SmallEmployeeCard';
import { IRole } from './Model/Employee/IRole';
import { ITeam } from './Model/Team/ITeam';

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
				<div>
					<GlobalStyle/>
					<SmallEmployeeCard img='https://www.w3schools.com/howto/img_avatar2.png' name='Jan' role={IRole.Admin} team={ITeam.AdminFinance} />
					<span>Hello</span>
					<FontAwesomeIcon icon="igloo"/>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
