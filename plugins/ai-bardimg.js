import axios from "axios";
import uploadImage from "../lib/uploadImage.js";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!mime) throw 'where is the photo? u want me to take a pic of ur mom?';
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Tipe ${mime} tidak didukung!`;

    m.react("🤔");

    let img = await q.download();
    let url = await uploadImage(img);
    
    //let response = `https://api.yanzbotz.my.id/api/ai/bardimg?query=${text}&url=${url}&apiKey=beraksekebon`;
    let turu = `https://api.yanzbotz.my.id/api/ai/blackbox-image?url=${url}&query=${text}`;
      
    const eak = await axios.get(turu);
    
    
    const erka = eak.data.result;
    
    conn.sendMessage(m.chat, {
      text: erka,
      contextInfo: {
externalAdReply: {
title: "Bard Google Ai",
body: wm,
thumbnailUrl: url,
sourceUrl: "https://bard.google.com",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
  } catch (e) {
    console.error("Error:", error);
    conn.reply(m.chat, error, m);
  }
};

handler.help = ["bardimg"];
handler.tags = ["ai", "tools"];
handler.command = ["bardimg"];

export default handler;