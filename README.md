# Chicken Tndr

An application that uses the yelp to help groups of people select a restaurant.

## Installation

**1.** Clone or Download the repository

```
git clone https://github.com/frendon001/chicken-tndr.git
```

**2.** Install libraries in root directory:

```
npm i
```

## Run in Development mode

```
npm run dev
```

-   Use `localhost:8080` in browser
-   Build happens automatically
-   Webpack dev server is used for the frontend with hot reloading
    -   Does not require server rending
-   Backend server is run by nodemon

## Run in Production mode

```
npm run build
npm run start
```

-   Use `localhost:3030` in browser
-   Webpack build is run in 'production' mode
-   The html file is served by the express server for all GET requests where the
    path does not start with `/api`

## Technologies Used

-   React
-   Axios
-   Node
-   Express
-   Typescript
-   Babel
-   Webpack
-   Prettier
-   ESLint

## Troubleshooting

If validation script fails `npm run validate`.

-   Try running the formatting script to automatically fix formatting issues:
    `npm run format`

# Authors

-   Fausto Rendon (https://github.com/frendon001)
