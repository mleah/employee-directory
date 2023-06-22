# An Employee Directory and Management App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

This project also utilizes the following libraries:
- [MUI](https://mui.com/material-ui/getting-started/overview/) for a design system and component library
- [React Router v5](https://v5.reactrouter.com/web/guides/quick-start) for routing

Criteria:

- [X] Allow all employee profiles to be viewed on a single screen
- [X] Allow a single employee profile to be viewed
- [ ] Allow an existing employee profile to be updated
- [ ] Allow a new employee profile to be created



## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Further directions

My overall approach to this problem was to build stubs for most of the feature work and begin utilizing some libraries in the React ecosystem as I encountered places where it seemed appropriate.  I utilized libraries I am familiar with, while also trying to meet some of the bonus for this code challenge.
<br/>
I haven't used MUI components, Redux toolkit (though I have experience with redux), or base React Router (I am familiar with [connected-react-router](https://github.com/supasate/connected-react-router), which is now deprecated) prior.
<br/>
My goal was to only code for a couple hours and see where I got.  There's some starting points for pair programming I'd like to look at in the ToDos below.

There's also multiple areas I would improve on this app in the future listed below, in no particular order.

UI/UX improvements:
* Update general styling, currently styling is relatively basic as I focused more on functionality
* Perhaps utilize [emotion](https://emotion.sh/docs/introduction) or [styled-components](https://styled-components.com/) for custom components
* Utilize theming from MUI and brush up on best practices - it's been years since I've used the material design system and there's definitely some (re)learning involved!

Architecture/Code improvements:
* API key + endpoints are currently stored in `.env` file, which is not secret in the app if this were to go to prod.  Obfuscate the api key via server. (hiding api endpoints in this challenge so they do not appear in github searches.  no peeking!)
* Really miss connected-react-router and having history live in the redux store.  Find an alternative or determine best practices around router and history not being tied with app state.
* Add some basic tests
* Improve typing

ToDos in code (good place for pair programming):
- Hook up the edit profile api call to the edit profile page




### Miscellaneous additional information from Create React App


#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

#### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
