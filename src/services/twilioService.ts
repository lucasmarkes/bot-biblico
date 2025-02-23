import Twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendWhatsAppMessage = async (to: string, message: string) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_WHATSAPP_NUMBER,
      to: to,
    })
      .then((message) => console.log(message));
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
  }
};
