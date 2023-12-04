## Challenge QuadMinds

Desafío: Explorador de Repositorios de GitHub

Fecha de realizacion 1/12/2023

Documenmtacion de los Endpoints de GitHub:
https://docs.github.com/en/rest/overview/endpoints-available-for-github-app-user-access-tokens?apiVersion=2022-11-28

Personal Access Tokens: quadminds-challenge (expira el 30 dic 2023)


 

Dificultades:
- No conocia Tailwind CSS por lo que tuve que investigar bastante la documentacion y la info que habia dispuesta en internet para entender su correcto uso.
- Al crear un Personal Access Tokens al principio no tenia los permisos para hacer cambios a las estrellas de los repos porque estaba usando la version beta y al cambiar al token clasico pude darle los permisos que necesitaba.
- Me encontre con que en el listado de repos no venian los que estaban marcados con estrella de usuario por lo que tuve usar otra pegada a la api para pedir el listado de las starred y asi compara y saber cuales son las favoritas del usuario. 
- No tenia conocimiento del manejo de Header.Link de la Api de GitHub para el paginado.








# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
