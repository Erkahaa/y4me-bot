/*
* CODE: Aliciazyn 
* Kontak Whatsapp: wa.me/6288268142831
* Akun Github: github.com/AiciaxyviorMd
*/


import fetch from "node-fetch";

const Chat = new Bard("COOKIE TARUH SINI");

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text && !m.quoted) throw `[ ! ] Reply/caption gambar atau tulis pertanyaan kamu\n\nExample:\n*${usedPrefix + command} gambar apakah ini?*`;
  let q = m.quoted ? m.quoted : m;
  let questions, path, mime = (q.msg || q).mimetype || '';
  if (mime && !/image|webp/g.test(mime)) throw '[ ! ] Hanya support mime image/webp';
  if (!mime) {
    questions = `${text}${m.quoted && m.quoted.text ? `\n\n${m.quoted.text}` : ''}`
  } else {
    questions = `${text}${m.quoted && m.quoted.text ? `\n\n${m.quoted.text}` : ''}`;
    path = `./tmp/${getRandom(`.${mime.split('/')[1]}`)}`;
    fs.writeFileSync(path, await q.download?.());
  }
  
  if (mime) {
    try {
      await m.react("💁‍♀️");
      const chat = await Chat.ask(`${questions}`, {
        image: path,
      });
      if (chat) {
        await conn.sendMessage(m.chat, {
          text: chat.replaceAll('**', '*').replaceAll('* *', '• *'),
          contextInfo: {
            mentionedJid: conn.parseMention(chat),
            externalAdReply: {
              title: 'Bard - AI By Google',
              body: '© Space',
              thumbnailUrl: 'https://telegra.ph/file/4534ada3cf3c49fe375ec.jpg',
              sourceUrl: null,
              mediaType: 1,
              renderLargerThumbnail: true,
            },
          },
        }, { quoted: m });
      }
    } catch (error) {
      console.log(error);
      m.reply(error?.message);
    } finally {
      fs.unlinkSync(path);
    }
  } else {
    try {
      await m.react("🤔");
      const response = await Chat.ask(`${questions}`);
      await conn.sendMessage(m.chat, {
        text: response.replaceAll('**', '*').replaceAll('* *', '• *'),
        contextInfo: {
          mentionedJid: conn.parseMention(response),
          externalAdReply: {
            title: 'Bard - AI By Google',
            body: '© iamAlicia',
            thumbnailUrl: 'https://telegra.ph/file/4534ada3cf3c49fe375ec.jpg',
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: true,
          },
        },
      }, { quoted: m });
    } catch (e) {
      console.log(e);
      m.reply(e?.message);
    }
  }
};

handler.ali
handler.help = ["bard"];
handler.tags = ["ai"];
handler.command = /^((ai|g(oogle)?)?bard(ai|chat)?)$/i;

handler.limit = true;

export default handler;