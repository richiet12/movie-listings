# Movie Viewer README

## Brief
Display a list of now showing movies allowing the user to filter by genre and rating

## Setup
Please ensure npm v5.7.1 and node v7.7.1 are installed
then in the root run
### `npm install`

to start the dev server run
### `npm run start`

then you should be able to open localhost:3000 in your browser.

To run the test suite run
### `npm test`
Press a to run all of the tests

### Troubleshooting failing test suite
After running these tests on a different mac (OS Sierra) I have found that I saw the issues discussed here:
https://github.com/facebook/create-react-app/issues/871
The thread suggests installing watchman which resolved the issue for me.

## Stack
- This project has been built using create-react-app. It has not been ejected yet so the react-scripts are still available, to find out more see the README_REACT.md file
- Redux has been configured to handle the data in this app.
- Jest and Enzyme are used to run the unit tests.
- The base JavaScript linting rules come from the open source airbnb rules.
- Styled-Components has been added to style the application.
- The base CSS linting rules come from stylelint-config-sass-guidelines.
- SASS has been configured to style the application. node-sass-chokidar is installed which means that ruby is not a dependency of this project.

## Assumptions I have made building this app
- The only browser that requires supporting is the latest Chrome Browser (across all breakpoints). I have not spent time testing other browsers (but of course in a production environment I would).
- A no javascript version of the site is not required.
- Accessibility is important. I have ensured that the app has a 100% rating in the Chrome accessibility audit.
- Styling the ui is not a priority for this task. With more time I would like to improve the visual appearance.
- No requirements for pagination. The results displayed are the first page of results from tmdb.
- The brief asked for checkbox inputs for the genre filter, I have assumed it was ok to use a multi select instead because I felt like it gives a better user experience.
- The tests are not exhaustive, with more time I would like to have added more tests especially for the util files.
- I have not included any end to end tests, with more time I would have liked to use cyprus to write tests to simulate real user behaviour.
