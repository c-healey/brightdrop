# BrightDrop Challenge

## Description

### Story

You’re part of a new and exciting project. You work for a major shipping company and will need to develop a front end web app for the fleet admin who owns a fleet of electric vehicles. As the fleet admin you will need to see all of your vehicles on a map and their charge levels at all times.

### Challenge

Using JavaScript and any library you see fit to develop a simple interface for the fleet admin.

### Implementation

- Framework: Reactjs
- Libraries: Semantic-ui,Google Auth, Leaflet

React - A react redux implementation was reused from my library of components and dropped in easily. Modal, Dropdown were considered for reuse, but in an effort to keep this simple, they were removed. The router was removed too. This simple app really is one page.

Semantic-Ui. Like bootstrap, semantic ui has a nice responsive grid and offers easy to use examples easily customized to your needs.

Google Auth - Most people have a google account so it's easy and secure. Given more time, admiinistrative features would be added.

Leaflet - Leaflet is an open source mapping api. It was easy enough to render a map, add a custom marker and simple text. It took more time to show the battery charge in a visual way and to integrate leaflet in to a React app.

To simulate polling location data on a fleet, static data was created and imported as needed. setInterval was used to iterate over the routes created for each vehicle.

To create small datasets, a test app was used. To get a large test case, google maps has an export feature. A detroit to chicago trip created over 4000 points. With a large dataset, leaflet failed. The map didn't render, not even a flicker. Leaflet may not be enterprise level, or it's not optimized in a weekend implementation. It made a nice prototype.

Other challenges I ran into with leaflet, I tried using react-leaflet and abandoned it because it was harder to access the underlying leaflet features like moving the marker and customizing the popup.

## Features

- Login google Oauth
- Display vehicles in fleet in sidebar show name and battery charge
- Display vehicles on map. Each vehicle is represented by a marker and popup with vehicle location, battery charge.

[Flow Chart](c-healey.github.io/brightdrop/img/image.jpg)
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
