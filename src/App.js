
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';
import MoiveListContainer from './containers/movieList';
import Header from './components/header';
import RatingFilter from './components/ratingFilter';
import GenreFilterContainer from './containers/genreFilter';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

const App = () => (
	<Provider store={createStoreWithMiddleware(reducers)}>
		<div>
			<Header title="Movies out now" />
			<main className="container">
				<section className="filters clearfix">
					<h3>Filters</h3>
					<GenreFilterContainer />
					<RatingFilter />
				</section>
				<MoiveListContainer />
			</main>
		</div>
	</Provider>
);

export default App;
