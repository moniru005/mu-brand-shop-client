# Project Name: Brand Shop



## Project Code and Live Link

Live Link: https://mu-brand-shop.web.app

Server Side Link: https://github.com/moniru005/mu-brand-shop-server 

Client Side Link: https://github.com/moniru005/mu-brand-shop-client 
## Features

Certainly! Here are at least 5 project features for a fashion e-commerce brand shop, along with points that include the mentioned requirements:

### 1. User Authentication System:

- Implement user authentication for login and registration.
- Use authentication libraries like Firebase Authentication or Auth0.
- Include options for users to log in with email/password and Google login.
- Utilize AuthContext to manage user authentication state.

### 2. Dark Mode Support:

- Enable a dark mode option in your application.
Allow users to toggle between light and dark modes.
- Implement a UI that adapts to the selected mode.

### 3. Product Management:

- Create functionality to add new products to the store.
- Include the ability to delete products.
- Implement an update product feature for editing product details.
- Utilize SweetAlert for user-friendly notifications and alerts during these actions.

### 4. Private Routes:

- Use private routes to protect certain parts of the application.
- Users must be authenticated to access specific pages (e.g., user profile, cart, order history).
- Redirect unauthenticated users to the login/registration page.

### 5. Display Brand Name:

Display the brand name prominently on the website.
Include the brand name in the website's header or footer.
Use consistent branding throughout the website's design.

 
*These features should create a foundation for a fashion e-commerce brand shop with user-friendly features, brand presence, and security. You can further enhance and expand these features based on your project requirements and user needs.*
## Tech Stack

**Client:** React, React Router, TailwindCSS, DaisyUI, 

**Server:** Node, Express, MongoDB, Dotenv


## Installation


Install my Project with NPM & React Router DOM
```bash
    npm create vite@latest my-project -- --template react
    cd my-project
    npm install react-router-dom localforage match-sorter sort-by
````
Install Tailwind CSS with Vite
```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
```
Install PropTypes for prop validation
```bash
    npm install --save prop-types
```
Install sweetalert2 for showing beautiful messages
```bash
    npm install sweetalert2
```
Install AOS Animation
```bash
    npm install aos --save
```

## Importing on this project

Import for PropTypes validtion
```bash
    import PropTypes from 'prop-types'; // ES6
```
Import for Icons in sweetalert2
```bash
    import Swal from 'sweetalert2'
```
Import for AOS Animation
```bash
    import AOS from 'aos';
    import 'aos/dist/aos.css'; // You can also use <link> for styles
    // ..
    AOS.init();
```
## Created By

*---Md. Monir Uddin*

