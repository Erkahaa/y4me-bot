/*import ffmpeg from 'fluent-ffmpeg';

const handler = async (m, { conn }) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(who);
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  
  if (!mime) throw `Video tidak ditemukan`;
  
  const videoData = await conn.downloadAndSaveMediaMessage(q, 'video');
  const output = './media/video.mp4'; // Sesuaikan dengan esceh mu
  
  ffmpeg(videoData)
    .outputOptions('-s', '1920x1080') // Resolusi 1080p bisa di ganti kalo kurang hd 🗿
    .save(output)
    .on('end', () => {
      conn.sendFile(m.chat, output, '', `🍟 Nih Kak`, m);
    })
    .on('error', (err) => {
      console.error(err);
      m.reply('Terjadi kesalahan saat meningkatkan resolusi video. ' + err);
    });
};

handler.command = handler.help = ["hdvid"];
handler.tags = ["tools"];
handler.limit = true;

export default handler;*/