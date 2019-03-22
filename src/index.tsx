import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPen, faTimes } from '@fortawesome/free-solid-svg-icons';

(() => {
	library.add(faPen, faTimes);
	ReactDOM.render(
		<App />,
		document.getElementById('root') as HTMLElement
	  );
	  registerServiceWorker();
})();
