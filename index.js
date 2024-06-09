//not server.js because this is all backend
const express = require('express');
const db = require('./configuration/connection');
const routes = require('./routes');

const cwd = process.cwd();//do I need this?

const PORT = process.env.PORT || 3021;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port url http://localhost:${PORT}!`);
  });
});
