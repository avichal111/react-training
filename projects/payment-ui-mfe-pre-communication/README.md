
# MFE
## Component communication

### Objective.
A login/logout button should be displayed in your app. The button will be placed in `src/HomePage/HomePage.tsx` of the `static-pages`project.


### Installing:
For each folders:

 `npm install && npm start`
 
 Then check that you have a correct input in every terminal


Access to `http://localhost:3000`

### File that matter to us for each project

#### static-pages:
  - `src/HomePage/HomePage.tsx` & `src/HomePage/indexHomePage.tsx`: Home page have the login/logout button and call the `login` and `logout` function of its `props`. The props are passed from the container. indexHomePage need to be adapted to make it work.
  - `src/App.tsx`. Since our HomePage have some new props, we need to give dummy props to the HomePageComponent defined in this file.

#### payment-ui
  - `src/App.tsx`: Add the context provider tag and map functions and user (user is a state variable)
  - `src/remoteComponents/HomePage.tsx`: defining props and passing them to the mount function.
  - `src/components/PageHeader.tsx`: We check here if we are logged in and display the context according.


#### In every project:
  - `tsconfig.json`: `noEmit` and `isolatedModules` properties
  - `package.json`: changing the way your app is running with `npm start` (from react to webpack)