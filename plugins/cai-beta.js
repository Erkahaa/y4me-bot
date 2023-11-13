import fetch from 'node-fetch';
import util from 'util';

// Objek yang menyimpan URL thumbnail untuk setiap command
const commandThumbnails = {
  'elaina': 'https://telegra.ph/file/33f042f05ad94bf17ba8c.jpg',
  'rimuru': 'https://telegra.ph/file/a372498466d0d7cd4d542.jpg',
  'gojo': 'https://telegra.ph/file/9dd930732afd5e16ed1be.jpg',
  'kirito': 'https://telegra.ph/file/a1eaeb98307346c74045b.jpg',
  'mrbeast': 'https://telegra.ph/file/6d0d4249ca116927954e5.png',
  'cid': 'https://telegra.ph/file/fb6b2f4a688b2bf10b282.jpg',
  'shadow': 'https://telegra.ph/file/4632a53d271207335403f.jpg',
    'nanami-momozono': 'https://telegra.ph/file/26ec0525644f36aa1368b.jpg',
};

var handler = async (m, { text, usedPrefix, command, conn }) => {
  if (!text) {
    throw 'Masukkan teks, contoh: halo siapa Anda?';
  }

  const apiUrl = `https://api.betabotz.org/api/search/c-ai?prompt=${text}&char=${command}&apikey=Iky`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();

    if (json && json.message) {
      const thumbnailUrl = commandThumbnails[command] || 'URL_THUMBNAIL_DEFAULT';

      await conn.sendMessage(m.chat, {
        text: json.message,
        contextInfo: {
          externalAdReply: {
            title: 'C.ai',
            body: 'https://c.ai',
            thumbnailUrl: thumbnailUrl,
            sourceUrl: 'https://www.instagram.com/erkahaaa/',
            mediaType: 1,
            renderLargerThumbnail: true
          }
        }
      }, { quoted: m });
    } else {
      m.reply('Terjadi kesalahan.');
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};

handler.command = ['elaina', 'rimuru', 'gojo', 'kirito', 'mrbeast', 'cid', 'shadow', 'nanami-momozono']

export default handler