import { Express } from "express"
import bodyParser from "body-parser"

export default function configureMiddlewares(app: Express) {
  // Middleware para tratar o corpo das requisições como JSON
  app.use(bodyParser.json())
}
