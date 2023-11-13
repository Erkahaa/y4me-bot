const delay = time => new Promise(res => setTimeout(res, time));

const handler = {};

handler.all = async function (m) {
  if (!m.chat.endsWith('@s.whatsapp.net')) return true;

  this.menfess = this.menfess ? this.menfess : {};

  const mf = Object.values(this.menfess).find(v => v.status === false && v.penerima == m.sender);

  if (!mf) return true;

  console.log({ text: m.text });

  if ((m.text === 'BALAS PESAN' || m.text === '') && m.quoted.mtype == 'buttonMessage')
    return m.reply("Silahkan Ketik Pesan Balasan Mu");

  const txt = `Hai kak @${mf.dari.split('@')[0]}, Kamu Menerima Pesan Balasan\n\nPesan Kamu: ⤵️\n${mf.pesan}\n\nPesan Balasannya: ⤵️\n${m.text}\n`.trim();

  await this.reply(mf.dari, txt, null).then(() => {
    m.reply('Berhasil mengirim balasan!');
    delay(2000);
    delete this.menfess[mf.id];
    return true;
  });

  return true;
};

export default handler;
