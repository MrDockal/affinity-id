import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Model/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<div>
					<span>Hello</span>
					<FontAwesomeIcon icon="igloo"/>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
