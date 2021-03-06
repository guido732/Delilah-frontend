import React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { ErrorBoundary } from 'components/ErrorBoundary';
import RegisterView from 'views/Register';
import { GlobalStyle } from 'style_utils/globalStyle';
import theme from 'style_utils/theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<ErrorBoundary>
				<CssBaseline />
				<GlobalStyle />
				<RegisterView />
			</ErrorBoundary>
		</ThemeProvider>
	);
}

export default App;
