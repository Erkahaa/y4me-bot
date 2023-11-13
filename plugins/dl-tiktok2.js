import fetch from 'node-fetch';

const handler = async (m, { conn, text }) => {
  if (!text) throw '*Example:* .tiktok https://vm.tiktok.com/xxxxx';
  conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
  const erka = await fetch(`https://skizo.tech/api/tiktok?url=${text}&apikey=y6rsxtbase`);
  try {
    const res = await erka.json();
    const start = new Date();
    const te = `*〤  TIKTOK VIDEO*

❏ *Author:* @${res.data.author.unique_id}
❏ *Caption:* ${res.data.title}`;
    await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
    conn.sendFile(m.chat, res.data.play, 'tiktok.mp4', te, m);
  } catch (e) {
    console.log(e);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    await m.reply(`You want me to download porn or what?_-`);
  }
};

handler.help = ['tiktok2'];
handler.tags = ['downloader'];
handler.command = /^(tiktok2|tt2|tiktokdl2|tiktoknowm2)$/i;
handler.limit = false;
handler.group = false;

export default handler;