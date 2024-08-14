import { DataSource } from "typeorm";
import PetEntity from "../entities/PetEntity";
import AdotanteEntity from "../entities/AdotanteEntity";
import EnderecoEntity from "../entities/enderecoEntity";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./src/config/databese.sqlite",
  entities: [PetEntity, AdotanteEntity, EnderecoEntity],
  synchronize: true,
});
