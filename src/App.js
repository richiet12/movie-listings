
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import MoiveListContainer from './containers/movieList';
import Header from './components/header';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const App = () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<Header title="Movies out now" />
			<MoiveListContainer />
		</div>
	</Provider>
);

export default App;
