function handler(m) {
  const kontak1 = {
    "displayName": 'My owner',
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:ᴇʀᴋᴀʜᴀᴀ\nNICKNAME:3sideOcd\nORG:Silahkan bertanya jika ada keperluan\nTITLE: company\nitem1.TEL;waid=6289688403000:+62 896-8840-3000\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://linkbio.co/y6rsxtbase\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:im.3sideocd@gmail.com\nitem3.X-ABLabel:💌 Mail Owner Y6RSXTBASE\nitem4.ADR:;;🇮🇩 Jawa Timur;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 08 July 2004\nEND:VCARD`
  }
  
  const kontak2 = {
    "displayName": 'y6rsxt base',
    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;;;;\nFN:y6rsxt base\nitem1.TEL;waid=62895327491487:62895327491487\nitem1.X-ABLabel:\nJika ingin menggunakan bot ketik *.menu*\nURL;My Web:https://linkbio.co/y6rsxtbase\nEMAIL;type=INTERNET,Work:riki.hadinata45@gmail.com\nEND:VCARD`
  }
  
  conn.sendMessage(m.chat, { contacts: { contacts: [kontak1, kontak2] }}, { quoted: m })
}

handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(owner|creator)$/i

export default handler
