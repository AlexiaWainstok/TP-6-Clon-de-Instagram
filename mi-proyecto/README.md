# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Descripción

Este proyecto consiste en una aplicación web desarrollada con React y TypeScript inspirada en la interfaz de Instagram.

La aplicación consume imágenes desde una API externa de gatos y las muestra en formato de publicaciones dentro de un feed estilo red social.

Además, incluye:
- perfil de usuario emulado,
- visualización individual de publicaciones,
- interacción mediante estados,
- diseño inspirado en Figma.


## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Axios
- CSS
TypeScript fue utilizado para tipar props, estados y estructuras de datos, mejorando la organización y seguridad del código.

## API utilizada

Se utilizó la API:
- The Cat API

La API se utilizó para obtener imágenes de gatos dinámicamente mediante solicitudes HTTP realizadas con Axios.


## Diseño de referencia

El diseño visual del proyecto fue inspirado en el siguiente diseño de Figma:

https://www.figma.com/community/file/1004033523744290376 

Se intentó respetar la estructura, distribución visual y estilo general del diseño elegido.

## Organización del proyecto

El proyecto fue organizado mediante componentes reutilizables separados en carpetas independientes.

Estructura principal:

src/
├── Componentes/
├── Services/
├── Data/
├── Types/
└── App.tsx

### Componentes

Se decidió dividir la aplicación en componentes reutilizables para mejorar:
- organización,
- mantenimiento,
- reutilización del código,
- separación de responsabilidades.

Cada componente posee una responsabilidad específica dentro de la aplicación.

### Header

El componente Header representa la barra superior de la aplicación, similar a la navegación de Instagram.

### Feed

El componente Feed se encarga de renderizar todas las publicaciones obtenidas desde la API.

### Post

El componente Post representa una publicación individual dentro del feed.

Recibe información mediante props y muestra:
- imagen,
- usuario,
- likes,
- descripción.

### PostModal

El componente PostModal se utiliza para visualizar una publicación seleccionada de forma individual mediante una ventana modal.

Muestra:
- imagen ampliada,
- likes,
- caption,
- usuario.

### Perfil

El componente Profile representa el perfil del usuario emulado ya logueado dentro de la aplicación.

## Uso de props

Se utilizaron props para comunicar información entre componentes.

Por ejemplo:
- Feed envía información a Post.
- App envía el post seleccionado a PostModal.
- Los componentes reciben datos dinámicamente sin hardcodear publicaciones.

### useState

Se utilizó useState para:
- guardar las publicaciones obtenidas desde la API,
- manejar la publicación seleccionada,
- controlar interacciones como likes,
- abrir y cerrar el modal.

### useEffect

Se utilizó useEffect para realizar la petición HTTP a la API al cargar la aplicación.

## Uso de Axios

Axios fue utilizado para realizar solicitudes HTTP hacia la API externa de imágenes de gatos.

## Visualización individual de publicaciones

La visualización individual fue resuelta mediante un componente modal.

Cuando el usuario selecciona una publicación:
- se guarda el post seleccionado en un estado,
- se renderiza el componente PostModal,
- se muestra información ampliada del post.

## Perfil de usuario

La aplicación incluye un perfil de usuario simulado sin implementar autenticación real.

Los datos fueron definidos localmente dentro de un archivo de datos.

El perfil muestra:
- username,
- foto de perfil,
- biografía,
- seguidores,
- seguidos,
- publicaciones.

## Estados utilizados

Los principales estados utilizados fueron:

- posts:
  almacena las publicaciones obtenidas desde la API.

- selectedPost:
  guarda la publicación seleccionada para mostrar en el modal.

- liked:
  controla la interacción de likes dentro de las publicaciones.

## Resultado

El proyecto logra representar una red social estilo Instagram utilizando React y TypeScript, consumiendo imágenes desde una API externa y aplicando conceptos fundamentales de desarrollo frontend moderno.