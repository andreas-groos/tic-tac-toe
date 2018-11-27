# Tic-Tac-Toe

## A minimal grid system for React

### Demo

[https://andreas-groos.github.io/tic-tac-toe/](https://andreas-groos.github.io/tic-tac-toe/)

### Motivation

Part of the motiviation was to learn how to build and publish my own `NPM` package

As a starting point I used [this article](https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220).

### Installation

You can install the package and use it in your project with:

`npm i @andreas.groos/tic-tac-toe`

or

`yarn add @andreas.groos/tic-tac-toe`
`

### Example

At the moment there are only 2 components, `TRow` and `TCol`.

```jsx
const App = () => (
  <div style={{ height: "100vh" }}>
    <TRow fillHeight>
      <TCol centered>
        <h1>Tic-Tac-Toe</h1>
      </TCol>
    </TRow>
  </div>
);
```

### `TRow` props

| Prop Name      | type      | possible values                                                                                                    | Description                                  |
| -------------- | :-------: | :----------------------------------------------------------------------------------------------------------------: | :------------------------------------------: |
| justifyContent | `string`  | `start`/`flex-start`, `end`/`flex-end`, `between`/`space-between`, `around`/`space-around`,`evenly`/`space-evenly` | emulates `justify-content`                   |
| alignItems     | `string`  | `start`/`flex-start`, `end`/`flex-end`, `center`, `stretch`, `baseline`/`base`                                     | emulates `align-items`                       |  |
| fillHeight     | `boolean` | `true`, `false`                                                                                                    | if true fills height of parent container     |
| centered       | `boolean` | `true`, `false`                                                                                                    | centers children horizontally and vertically |

### `TCol` props

| Prop Name | type      | possible values | Description                          |
| --------- | :-------: | :-------------: | :----------------------------------: |
| centered  | `boolean` | `true`, `false` | centers element in parent div        |
| fillWidth | `boolean` | `true`, `false` | if `true` fills full available width |
