import express from "express"
import routes from "./routes.js"

const app = express()

app.use(express.json())
const serverless = require('serverless-http');

const port = process.env.PORT || 3000;

module.exports = serverless(app);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next()
  });
  

//teste conexão api
app.get("/health", (_, response) => {
    response.json({ ok: true, server: 'up' })
})

// rotas da api
app.use('/api', routes)


export default app