import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';

(() => {
	library.add(faIgloo);
	ReactDOM.render(
		<App />,
		document.getElementById('root') as HTMLElement
	  );
	  registerServiceWorker();
})();
