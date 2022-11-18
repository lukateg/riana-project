## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Creating components

Every component should be created inside of its own folder, containing .jsx and .module.scss file.\

### Writing styles

Modules let you write style in SCSS files but consume them as JavaScript objects.\
In addition, modules make class names unique so there is no need to worry about name colliisions.\

At the beggining of every scss module file, there should be _@use "../styles/base.scss" as *_ command which allows the use of predefined variables and styles.\

For naming classes, camelCase is recommended, but not enforced.

### Using styles

Using styles defined in SCSS module files is possible with the help of _import styles form "./Component.module.scss"_ command.\

When importing the SCSS module file, it exports an object with all mappings from local names to global names.\

Accessing styles is possible by setting className property to _styles.className_ or _styles['class-name']_

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
