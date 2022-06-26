import express from "express"; //aqui importamos o express, lib necessaria para desenvolver APIS
import { AddressInfo } from "net";
import { paymentRouter } from "./router/Router";

const app = express();

app.use(express.json());
app.use("/payment", paymentRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor`);
  }
});
