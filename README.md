# monsterous-limited-boilerplate
Boilerplate for React, Redux, Sass and React-Router. Other packages may be added later on. Basis for this boilerplate provided create-react-app, however there was a need to update the packages a few major versions up, and restructuralize the project.

First install nodeJS 12.6+
```js
npm install
npm start
```

## Configs

Configs are hidden from the developer in `react-scripts`. In order to change the configs, you need to run `npm run eject` first, which will remove configs from the mentioned package and move them into project folder. This is an operation you cannot undo, so be careful with this command.

## Routing & React-Loadable

The router settings are stored in `\common\utilities\routes\index.js`. The containers are encapsuled with `loadable()` from `react-loadable`. This ensures the containers are loaded on demand, minimizing the initial bundle size.



## CSS

For css we use [sass](https://sass-lang.com/). To use this in your components / containers you need to create a scss file with your sass. For example it will contain:
```css
.striked {
  text-decoration: line-through;
}
```

in your component you will then import this file like this. IMPORTANT - you need to name the file as `[name].module.scss`
```js
import styles from './todos.module.scss';
```

and afterwards you will use this style as 
```jsx
<Component className={styles.striked}></Component>
```

The benefits of this approach is that this uses [Modular CSS](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e#.re1pdcz87), which loads only required styles visible on page.