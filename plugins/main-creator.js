function handler(m) {
  // Menggunakan vcard sebagai data kontak
  const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:3sideOcd\nORG:test kontak\nTITLE:\nitem1.TEL;waid=6289688403000:+62 896-8840-3000\nitem1.X-ABLabel:Jangan Spam\nX-WA-BIZ-DESCRIPTION:Note: Don't Spam Sis\nX-WA-BIZ-NAME:Y6RSXT CENTER\nEND:VCARD`;

  const adReply = {
    title: 'Owner Gwhej',
    body: 'MADE BY BANG 3 SIDE OCD',
    thumbnailUrl: 'wa.me/6289688403000',
    sourceUrl: '',
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
  };

  this.sendContact(m.chat, vcard, m, { contextInfo: { externalAdReply: adReply } });
}

handler.help = ['owner'];
handler.tags = ['main'];
handler.command = ['owner2', 'creator2'];

export default handler;