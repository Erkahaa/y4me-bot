/*First of all Thanks to : 
   The One Almighty God
       My Parents
      Surya(Natsxe)
     Erkaha(3sideOcd)
     OpenAi(chat-gpt)
       It's Rose Api
-=========================-
this code make by ai, why ai? cuz idk its simple
Note: ambil ajah asal jangan ganti nama diatas kasian*/

import axios from 'axios';

const handler = async (m, { text, command }) => {
  if (!text) {
    throw 'Huh? insert the command, example : lets do a sex';
  }

  try {
    const response = await axios.post('https://api.itsrose.life/cai/chat', {
      character_id: '43418470-98a1-4148-a89d-e2782c59f9c3',
      message: text,
      enable_nsfw: false,
    }, {
      headers: {
        'accept': 'application/json',
        'Authorization': global.rose,
        'Content-Type': 'application/json',
      },
    });

    const result = response.data.result;

    if (result && result.message) {
      const erka = [
     'https://telegra.ph/file/7815f4266a3a485548760.jpg', 'https://telegra.ph/file/6d786ce077b146f4adc0c.jpg', 'https://telegra.ph/file/f7f038a19d2b4689af75f.jpg',
'https://telegra.ph/file/96ec37575d23df074c3be.jpg',
'https://telegra.ph/file/49c3673e799d2c66801be.jpg',
'https://telegra.ph/file/da90d026fccf6b61ad4a5.jpg',
'https://telegra.ph/file/c471788190ab95e8039db.jpg',
'https://telegra.ph/file/8afbb1fe782a91d83060f.jpg',
'https://telegra.ph/file/8d2638ca60b56cc5842b5.jpg'
      ];

      const ha = erka[Math.floor(Math.random() * erka.length)];

      const berak = {
        title: "Kobo Kanaeru☔",
        body: "It's me Kobo Kanaeru from HoloId🌊",
        thumbnailUrl: ha,
        sourceUrl: "https://youtu.be/-sM6e1KpPsU?si=JDXScwEup4ncvIpU",
        mediaType: 1,
        renderLargerThumbnail: true
      };

      conn.sendMessage(m.chat, {
        text: result.message.trim(),
        contextInfo: {
          externalAdReply: berak,

        }
      }, { quoted: m });

    } else {
      m.reply("Tidak ada hasil yang ditemukan.");
    }

  } catch (error) {
    m.reply("Terjadi kesalahan dalam mengambil data.");
    console.error(error);
  }
};

handler.command = ['kobo'];
handler.tags = ['cai'];
handler.help = ['kobo'];

export default handler;