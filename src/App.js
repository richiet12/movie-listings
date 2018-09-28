
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import movieListReducer from './reducers/movieList';
import MoiveListContainer from './containers/movieList';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const App = () => (
	<Provider store={createStoreWithMiddleware(movieListReducer)}>
		<MoiveListContainer />
	</Provider>
);

export default App;
