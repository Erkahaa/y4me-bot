import fetch from 'node-fetch';

const handler = async (m, { conn, text, args, usedPrefix, command }) => {
  const str = m.quoted && m.quoted.text ? m.quoted.text : text;
  if (!str) throw 'Masukkan teks!';
  try {
    conn.sendPresenceUpdate('recording', m.chat);
    const voice = await (await fetch(`https://skizo.tech/api/tts-anime?text=${encodeURIComponent(str)}&lang=mix&voice=barbara&speed=0.6&symbol=y&apikey=y6rsxtbase`)).json();
    conn.sendFile(m.chat, voice.data.url, 'voicevox.mp3', null, m, true);
  } catch (e) {
    console.log(e);
    m.reply(e?.message);
  }
};

handler.help = ['voicevox'];
handler.tags = ['tools'];
handler.command = /^(voicevox|animetts|ttsanime)$/i;
handler.limit = true;
handler.diamond = 5;

export default handler;