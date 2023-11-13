import axios from 'axios';

const handler = async (m, { conn }) => {
  try {
    const { data } = await axios.get('https://api.ipify.org');
    conn.reply(m.chat, `IP kamu adalah ${data}`, m);
  } catch (e) {
    conn.reply(m.chat, 'Terjadi kesalahan saat memproses permintaan.', m);
    console.error(e);
  }
};

handler.help = ['myip'];
handler.tags = ['internet'];
handler.command = /^myip$/i;
handler.owner = true;

export default handler;