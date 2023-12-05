# itcrowd-challenge

## Deploys
* [Frontend](https://itcrowd-challenge-eugeniarossanigo.vercel.app/)

* [Backend](https://api-guitars.onrender.com)

## Installation
In order to run the app properly you must install: 
[Node.js](https://nodejs.org/). Then you can clone the project, get into the folder and:


## Usage frontend with backend in render (config by default)
In one terminal you must run:
```bash
npm i
```
```bash
npm run dev
```

## Usage with ONE script (only locally)
In one terminal you must run:
```bash
bash run.sh
```

The `.env` file is in the backend repo with the name `.env.example`

### API endpoints
* GET / POST : /api/guitars
* GET / UPDATE / DELETE: /api/guitars/{id_guitar}
* GET / POST : /api/brands
* GET: /api/brands/{id_brand}
* GET: /api/auth (for users)

(in POST or UPDATE guitars, data DESCRIPTION must be in this format: "Title: Name | Title2: Name2 | ...")

### USERS
"email": "admin@gmail.com",
"password": "Euge1234"

"email": "user@gmail.com",
"password": "User1234"

## Technologies

#### Backend
* bcryptjs: ^2.4.3
* cors: ^2.8.5
* dotenv": ^16.3.1
* express: ^4.18.2
* joi: ^17.11.0
* joi-password-complexity: ^5.2.0
* jsonwebtoken: ^9.0.2
* mysql2: ^3.6.5
* passport: ^0.7.0
* passport-jwt: ^4.0.1
* sequelize: ^6.35.1
* nodemon: ^3.0.1


#### Frontend
* @reduxjs/toolkit: ^1.9.7
* axios: ^1.6.2
* react: ^18.2.0
* react-dom: ^18.2.0
* react-icons": ^4.12.0
* react-redux: ^8.1.3
* react-router-dom: ^6.20.0
* uuid: ^9.0.1
* autoprefixer: ^10.4.16
* eslint: ^8.53.0
* tailwindcss: ^3.3.5
* vite: ^5.0.0
