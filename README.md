# User Auth App

A simple SPA application with React, Redux for global state management, Node.js, Express.js, Mongoose

## Project Feature Requirements

It has three UI pages (Login, User List, User Detail); the corresponding UI routes are /login, /user-list, /user.

On the Login page, it asks to provide username and password for authentication.
For authentication, it supports two different types of user-role (admin and regular).

If user login as admin role, the first landing will be on User List page.

If user login as regular role, the first landing will be on User Detail page.

On the User List page, it shows the whole list of regular role users. Each item on the list has username and age displayed and is clickable. Clicking on item brings to its User Detail page.

On the User Detail page, it shows a form with username, password, age, and role. Among those four fields, only password is editable. User can edit password and submit form to update password.

After updating password, user can login with username and the updated password.

It has role control protection for the UI Routes and API endpoints: only Admin role user can access the User List page and related API endpoints.

### Project files structure information

```
view: for new page
components: for generic component
routes:
    routes/index: used for add container to some specific routes
    routes/routes: used for declare new routes. declare like this way.
        {
            path: '/',
            component: Home,
            isPrivate: true,
            isAdmin: true,
            exact: true
        },
api: used for api call
    api/request: is common point of call. you can place commom configuration here.
action: used to place redux action.
reducer: used to place redux reducer.
middleware: used to add some middleware.
constant: used to place constant.
config: used to place some common configuration.
validates: used to place validation.
hooks: used to place custom hooks.
```

### How to run this code

- To run backend, please ensure your computer has node and mongoose setup.
- To run backend server use command 'npm run dev' and for frontend use command 'npm run start'

## Important Note

add .env file in root dir and set `REACT_APP_BASE_API_URL` for your backend server
