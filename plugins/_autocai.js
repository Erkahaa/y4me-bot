import fetch from "node-fetch";
import axios from "axios";

let previousMessages = [];

const handler = async (m, { text, usedPrefix, command }) => {
  if (!text) {
    throw "Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia?";
  }
  let name = conn.getName(m.sender);
  await conn.sendMessage(m.chat, {
    react: {
      text: "🕛",
      key: m.key,
    },
  });
  let { key } = await conn.sendMessage(m.chat, {
    text: "hm..",
  });
  let messages = [
    ...previousMessages,
    {
      role: "system",
      content:
        'Kamu adalah y6rsxt, asisten ai yang selalu membantu orang, ubah gaya bicara mu lebih ekspresif dan dan menggunakan bahasa kekinian seperti manusia pada umumnya.',
    },
    {
      role: "user",
      content: text,
    },
  ];
  let response = (
    await axios.post(`https://skizo.tech/api/openai?apikey=y6rsxtbase`, {
      messages,
    })
  ).data;
  await conn.sendMessage(m.chat, {
    react: {
      text: "🕛",
      key: m.key,
    },
  });
  let result = "" + response.result;
  await conn.sendMessage(m.chat, {
    text: "" + result,
    edit: key,
  });
  previousMessages = messages;
};

handler.command = handler.help = ["c-ai"];
handler.tags = ["ai"];
handler.premium = false;
handler.disabled = false;

export default handler;