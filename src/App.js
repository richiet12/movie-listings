
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import MoiveListContainer from './containers/movieList';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const App = () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<MoiveListContainer />
	</Provider>
);

export default App;
