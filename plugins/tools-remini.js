import fetch from "node-fetch";
import uploadImage from "../lib/uploadImage.js";
import fs from "fs";

let handler = async (m, { conn, usedPrefix, command }) => {
  conn.unblur_high = conn.unblur_high ? conn.unblur_high : {};

  if (m.sender in conn.unblur_high)
    throw "*[❗] Anda telah meminta untuk memperjelas gambar sebelumnya. Tunggu hingga permintaan sebelumnya selesai*";

  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || q.mediaType || "";

  if (!mime)
    throw `*[❗] Tidak ada gambar yang ditanggapi. Kirimkan gambar sebagai pesan yang dikutip dengan perintah ${usedPrefix + command}*`;

  if (!/image\/(jpe?g|png)/.test(mime))
    throw `*[❗] Format gambar tidak didukung (${mime}). Kirimkan gambar dengan format JPEG atau PNG*`;
  else conn.unblur_high[m.sender] = true;

  m.reply('*[❗] Permintaan memperjelas gambar diterima. Sedang memproses... Mohon tunggu sebentar*');

  let img = await q.download?.();
  let upld = await uploadImage(img);
  let img2;

  try {
    img2 = await fetch(`https://api.itsrose.life/image/unblur?url=${upld}&apikey=132fb9c3b775e293be07d8db`);
    let imageBuffer = await img2.buffer();
    let extension = mime.split("/")[1];
    let fileName = `enhanced_image.${extension}`;
    fs.writeFileSync(fileName, imageBuffer);
    conn.sendFile(m.chat, fs.readFileSync(fileName), fileName, '', m);
    fs.unlinkSync(fileName);
  } catch {
    m.reply("*[❗] Terjadi kesalahan. Tidak dapat memperjelas gambar*");
  } finally {
    delete conn.unblur_high[m.sender];
  }
};

handler.help = ["remini"];
handler.tags = ["ai", "tools"];
handler.command = ["remini"];
handler.diamond = 5
handler.limit = true

export default handler;
