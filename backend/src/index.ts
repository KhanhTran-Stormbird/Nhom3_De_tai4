import app from './app'

Bun.serve({
    hostname: "0.0.0.0",
    fetch: app.fetch
})

console.log(`Listening on http://localhost:3000`);