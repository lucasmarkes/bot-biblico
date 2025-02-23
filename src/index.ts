import express from "express";
import dotenv from "dotenv";
import { sendWhatsAppMessage } from "./services/twilioService";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));

app.get("/", (req, res) => {
  res.send("Servidor rodando!");
});

app.post("/send", async (req, res) => {
  const { phone, message } = req.body;

  await sendWhatsAppMessage(`${phone}`, message);

  res.send("Mensagem enviada!");
});
