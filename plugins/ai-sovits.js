/**
 * baseURL = https://api.itsrose.life
 * url = /sovits/inference
 * method = POST
 * */
import axios from "axios";

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
  if (!text) throw 'Contoh: .voiceai ya'
  
  m.reply('Menunggu...')
  
  try {
    const result = await textToSpeech(text);
    const voiceUrl = result.result.audio;
    
    if (voiceUrl) {
      await conn.sendFile(m.chat, voiceUrl, 'voice.mp3', '', null, null, true);
    } else {
      throw 'Gagal mengonversi teks ke suara';
    }
  } catch (error) {
    console.error(error);
    throw 'Terjadi kesalahan saat mengonversi teks ke suara';
  }
}

handler.help = ['voiceai']
handler.tags = ['ai', 'prem']
handler.command = /^(voiceai)$/i
handler.premium = true

export default handler

async function textToSpeech(text) {
  const baseURL = "https://api.itsrose.life";
  const url = "/sovits/inference";

  const payloads = {
    text: text,
    model_id: "8MFosbOJZjHAA6CbbOnd",
    cut_text: false,
  };

  const apiKey = "132fb9c3b775e293be07d8db";

  try {
    const response = await axios.post(`${baseURL}${url}`, payloads, {
      params: {
        apikey: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/**
 * For more information about success response
 * You can see in https://docs.itsrose.life
 **/