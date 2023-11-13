import axios from "axios";

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let text;
  if (args.length >= 1) {
    text = args.slice(0).join(" ");
  } else if (m.quoted && m.quoted.text) {
    text = m.quoted.text;
  } else throw "Input Teks";
  
  await m.reply(wait);
  
  try {
    let res = await ChatGptV2(text);
    await m.reply(res.answer);
  } catch (e) {
    try {
      let res = await ChatGptV3(text);
      await m.reply(res[0].generated_text);
    } catch (e) {
      console.error(e);
      throw "Terjadi kesalahan saat mengambil respons dari layanan AI.";
    }
  }
};

handler.help = ["chatgpt"];
handler.tags = ["internet"];
handler.command = /^chatgpt$/i;

async function ChatGptV2(query) {
  try {
    const response = await axios.request({
      baseURL: "https://api.caonm.net",
      url: "/api/ai/o.php",
      method: "GET",
      params: {
        msg: query,
      },
    });

    if (!response.data.status) {
      throw new Error(response.data.message);
    }
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function ChatGptV3(query) {
  try {
    const apiKey = "132fb9c3b775e293be07d8db";
    const response = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/chatGPT/completions",
      method: "POST",
      params: {
        apikey: apiKey,
      },
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        prompt: query,
      },
    });

    const { data } = response;
    if (!data.status) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

export { handler };
