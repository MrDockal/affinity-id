import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Model/theme';

class App extends React.Component {
	public render() {
		return (
			<ThemeProvider theme={theme}>
				<div>Hello</div>
			</ThemeProvider>
		);
	}
}

export default App;
