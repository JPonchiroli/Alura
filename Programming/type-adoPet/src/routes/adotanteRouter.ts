import express from "express";
import AdotanteController from "../controller/AdotanteController";
import AdotanteRepository from "../repositories/AdotanteRepository";
import { AppDataSource } from "../config/dataSource";
import { middlewareValidadadorBodyAdotante } from "../middleware/validadores/adotanteRequestBody";
import { RequestHandler } from "express-serve-static-core";
import { middlewareValidadadorBodyEndereco } from "../middleware/validadores/enderecoRequestBody";

const router = express.Router();
const adotanteRepository = new AdotanteRepository(
  AppDataSource.getRepository("AdotanteEntity")
);
const adotanteController = new AdotanteController(adotanteRepository);

const validateBodyAdotante: RequestHandler = (req, res, next) =>
  middlewareValidadadorBodyAdotante(req, res, next);

const validateBodyEndereco: RequestHandler = (req, res, next) =>
  middlewareValidadadorBodyEndereco(req, res, next);

router.post("/", validateBodyAdotante, (req, res) =>
  adotanteController.criaAdotante(req, res)
);

router.get("/", (req, res) => adotanteController.listaAdotantes(req, res));

router.put("/:id", (req, res) => adotanteController.atualizaAdotante(req, res));

router.delete("/:id", (req, res) =>
  adotanteController.deletaAdotante(req, res)
);

router.patch("/:id", validateBodyEndereco, (req, res) =>
  adotanteController.atualizaEnderecoAdotante(req, res)
);

export default router;
