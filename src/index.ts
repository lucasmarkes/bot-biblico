import { Request, Response } from "express";
import express from "express";
import dotenv from "dotenv";
import { sendWhatsAppMessage } from "./services/twilioService";
import { getBibleVerse } from "./services/bibleService";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 Servidor rodando na porta ${PORT}`));


app.post("/versiculo", async (req: any, res: any) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ error: "Deve ser enviado um número de celular." });
  }

  try {
    const verse = await getBibleVerse();
    await sendWhatsAppMessage(phone, `📖 Versículo do Dia: ${verse}`);
    res.json({ message: "Versículo enviado!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao enviar versículo." });
  }
});

