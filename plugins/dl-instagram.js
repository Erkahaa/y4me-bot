import axios from 'axios';

// Disabling TLS certificate validation (WARNING: Use this only if you're certain about the security implications)
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Create an axios instance
const axiosInstance = axios.create();

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) {
    return m.reply(`*Example*: ${usedPrefix + command} https://www.instagram.com/p/CzQocnjS11D/?igshid=MzRlODBiNWFlZA==`);
  }

  const url = encodeURIComponent(text);
  const apiKey = global.rose;
  const apiUrl = `https://api.itsrose.life/downloader/ig?url=${url}&apikey=${apiKey}`;

  try {
    const startTime = new Date();

    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });

    const response = await axiosInstance.get(apiUrl); // Use the axiosInstance here
    const data = response.data;

    if (data.status === true && data.result.length > 0) {
      for (let i = 0; i < data.result.length; i++) {
        const result = data.result[i];
        const response = await axiosInstance.get(result.url, { responseType: 'arraybuffer' });

        if (response.status === 200) {
          const fileBuffer = Buffer.from(response.data);
          conn.sendFile(m.chat, fileBuffer, '', wm, m);
          await sleep(5000);
        } else {
          console.error('Failed to download content from Instagram.');
        }
      }
    } else {
      throw 'Failed to download content from Instagram.';
    }
  } catch (error) {
    console.error(error);
    m.reply('An error occurred while downloading content from Instagram.');
    m.reply(`Detail Error:\n\n${error.message}`);
  }
};

handler.help = ['ig', 'igdl', 'instagram'];
handler.tags = ['downloader'];
handler.command = /^(ig|igdl|instagram)$/i;

export default handler;