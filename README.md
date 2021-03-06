# Boilerplate typescript-express

---

This is the boilerplate for a typescript + express project

### How to run

1. Clone the repo
2. In a terminal in the root of the project (bash preffered) run the command `npm install`
3. When it finishes installing the dependencies, run `npm start`
4. Alternatively, run the project in development mode (automatic reload) with `npm run dev`. Note this will fail the first time if you don't have a _dist_ folder yet. Simply stopping and running the command again should be enough

### Tech stack

- node.js 14+
- express
- typescript
- esbuild
- jest
- eslint
- prettier

### Docker commands
- docker build . -t user-api-img
- docker run -p 8080:8080 --name user-api-cont -d user-api-img

#### sh into container
- docker exec -it user-api-cont sh
