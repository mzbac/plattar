# Plattar

#Introduction
- Using redux-observable, show usage of rxjs(solving race condition of fetch property data.https://github.com/mzbac/plattar/blob/master/src/app/epics/getPropertyDataEpic.js#L15) . 
- Css transform for creating 3d carousel.
- Webpack as build tool
- Eslint
- Further step would be to make the 3D carousel responsive.

## Folder Structure

Below are some of the critical folders of the project along with a comment describing them.

```
/
|- public //  frontend production bundles along with index.html
|
|
|- src  // All the source code.
|  |- index.js // application entry
|  |- app
|      |-config // configurations of client side         
|
```

#Npm Scripts
Install dependencies
```
npm install
```
Run dev server
```
npm run start-dev
```
Run Linting
```
npm run lint
```
Run Test
```
npm run test-ci
```
Production build(prodution bundles are in /public )
```
npm run build
```
#Live Demo
[Live Demo](https://plattar.herokuapp.com/)
