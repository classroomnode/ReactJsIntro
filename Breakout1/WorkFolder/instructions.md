# Getting to know you environment

In this section you are creating the React workspace. The goal is to understand and practise how you would get started. In the list that follows you will have the steps you can go through.
## Folder from scratch 

## Things to Consider

1. Unit Testing

   `Verifies the working of individual units of code as expected. It is an essential component during errorless code shipping.
   Although in the initial stage of development, it is not so required as the application still in the innovation phase but it really helps to build better apps.`

2. Linting

   `Linting helps in identifying any programmatic and stylistic errors in
   React It reduces errors and improves the overall quality of the code.
   You can also use a style guide which also helps in checking the code against basic issues such as syntax errors, incorrect naming, spacing, etc
   `
3. Error Tracking

   `Finding and fixing errors is an essential part of application development. As your application starts to grow, it becomes harder and time-consuming to track the exact error.
  To handle this we can use Sentry which reports errors in real-time, easy tracking, prioritize, identify, reproduce, and fix errors.
   `
4. Depedency Injection

    `Dependency Injection means feeding the data into the application according to need. It’s also very useful for testing as it allows dependencies to be mocked. You can test the application with fake data easily.
    You must have heard of it in Angular Application, but React does not have an inbuilt dependency injection. You can inject all dependencies in one place, and use all other components via props. The dependencies can be wrapped using high order components.`

5. Localization

    `
    To Build a application for a large audience it is important to take care globalization and localization
    `
6. Configuration Management

    `
    The initial settings of your application should be properly managed as it becomes difficult when the application grows.You can manage all your app configuration in the .env file and access via process.env.SOME_DATA but config module provides a more efficient way to manage all your app configurations.
    `



## Envrionment Setup
install yarn 
do npm install -g yarn

1. `npx create-react-app {appname}` from BreakOut1/WorkFolder
2. `cd appname`
3. Walk through of project files
4. setup lint install eslint as "dev dependency" `yarn add eslint -D`
   go through lint setup eslint --init
5. setup prettier `yarn add prettier -D`
6. Copy `.prettierrc .eslintrc` from BreakOut1/WorkFolder 
7. Create .env file in the `appname` folder , add a variable REACT_APP_VARIABLE=TEST
8. create a sample component Called MyComponent which returns a HelloWorld Text,  copy the unformatted code from ``unformatted.txt`into this file
9. Place the newly created component in App.js  .copy the unformatted code from ``import.txt`into this file
10. yarn start


Note: You have to figure out the exact location of the code yourself