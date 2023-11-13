import axios from 'axios';

const handler = async (m, { conn, args, usedPrefix, command }) => { 
     let chat = global.db.data.chats[m.chat]
  if (!chat.nsfw) throw `🚫 Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan tipe \n*${usedPrefix}enable* nsfw`
  let user = global.db.data.users[m.sender].age
  if (user < 17) throw `❎ Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`
  
    await m.reply("_In progress, please wait..._");
    const url = `https://api-kazedevid.vercel.app/nsfw/nsfwloli`;
    const response = await axios.get(url, { responseType: 'arraybuffer' });
    conn.sendFile(m.chat, response.data, '', `_pic : ${command}_`, m, false, { viewOnce: true }) ;
};

handler.help = ['nsfwloli'];
handler.command = /^(nsfwloli)$/i;
handler.tags = ['ansfw']
handler.premium = true;

export default handler