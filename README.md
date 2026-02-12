# React Avanzado

[Lista de sesiones grabadas](https://youtube.com/playlist?list=PLzPtFjpu0orWagalVbRXbdj5L4SUJuUG4&si=2OyMprFEO8rrHhZ2)


**Problema de permisos de npm**

1. Abrir powershell como administrador.

2. Ejecutar el siguiente comando y reabrir la terminal.

`
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
`

## Crear proyecto react.js (web)

> npm create vite@latest misitio

## Crear proyecto usando React Native CLI

> npx @react-native-community/cli init

## Crear proyecto en React Native con Expo (opción recomendada)

1. Crear una cuenta en [expo.dev](https://expo.dev/login)

2. [Descargar la App de Expo Go](https://expo.dev/go) desde AppStore (iOS) o PlayStore (Android)

3. Crear un proyecto usando el siguiente comando:

`npx create-expo-app appExpo`

4. Ejecutar el proyecto con `npm start`

5. Escanear el código QR que aparecerá en la terminal.

6. El contenido del proyecto se cargará dentro de la App de Expo Go si todo está correcto.

## Hooks

Inician con la palabra use antes del nombre

- useEffect

- useState
