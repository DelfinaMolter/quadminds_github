# Challenge QuadMinds

Desafío: Explorador de Repositorios de GitHub

Fecha de realizacion: 1/12/2023

Documentación de los Endpoints de GitHub:
https://docs.github.com/en/rest/overview/endpoints-available-for-github-app-user-access-tokens?apiVersion=2022-11-28

Personal Access Tokens: quadminds-challenge (expira el 30 dic 2023)

Al renderizarse por primera vez trae los repositorios de Delfina Molter (los mios)

Dejo la url del site levantado en vercel por que quieren verlo de forma visual mas rapido. 
https://quadminds-github.vercel.app/


#### Dificultades:
- No conocia Tailwind CSS por lo que tuve problemas al principio con la configuracion porque había empezado el proyecto en React App y luego vi que Tailwind no funcionaba bien en ese tipo de proyectos y que recomendaban React Vite. Hay posibilidad de mejora ya que no conozco todo el potencial que tiene y me apoyé mucho en la documentacion https://tailwindcss.com/docs/installation.
- Al trabajar con las apis de Github tuve que crearme un Personal Access Tokens, la problematica que tuve al principio fue que no tenia permisos para hacer cambios a las estrellas de los repos porque estaba usando la version beta y al cambiar al token clasico pude darle los permisos que necesitaba.
- Me encontre con que en el listado de repos no venian con una propiedad que dijera si el usuario tenia ese repo marcado con estrella, por lo que tuve usar otra pegada a la api para pedir el listado de las starred y asi compara y saber cuales son las favoritas del usuario. 

#### Mejoras:
- La estrella de los followers no se actualiza enseguida que se clickea el boton de la estrella, porque no le pega a la api continuamente.
- Se podria mejorar el mensaje de error colocando un estilo más con el look and fill del site.
- Se podria mejorar el codigo de Typescripe de los pedidos asincronicos.
- Se podria cambiar el context que lo realice para manejo generico de diferentes variables, se podría cambiar por reduce o redux y también definir bien que variables se va a manejar de forma global.


***

* * *

#### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

