let handler = async(m, { conn, usedPrefix, command }) => {

    let price= `
≡ *Price list*
*========================* 
*[PRICE LIST SEWA Y6RSXTBASE]*
*Grup*
_~-Rp.5000,- (satu bulan)~ Gratis_
*Premium*
_Rp.5000,- (satu bulan)_
*Sewa grup dan jadi premium*
_~Rp.10000,- (satu bulan)~_
≡ *Pembayaran via*
*BRI*
_1132163035_
 *DANA, GOPAY*
_085785718554_
*OVO*
_089688403000_
*Pulsa tri*
_089688403000_
*Peringatan jika ada kesalahan transfer dan lain sebagainya kami tidak bertanggung jawab,jadi teliti lagi sebelum melakukan transaksi dan jika berminat silahkan hubungi owner dengan ketik .owner🙂*
 *========================*
`
let img = 'https://telegra.ph/file/981fdfb5746f1e638f1af.jpg'
conn.sendMessage(m.chat, {
  text: price,
  contextInfo: {
    externalAdReply: {
      title: "Harga user Premium",
      body: "List Harga",
      thumbnailUrl: img, // Use the 'img' variable for thumbnail URL
      sourceUrl: "", // Set the source URL
      mediaType: 1,
      renderLargerThumbnail: true,
    }
  }
}, { quoted: m });

}
handler.help = ['sewa']
handler.tags = ['store']
handler.command = ['prem', 'premium', 'price', 'sewa'] 
handler.disabled = false

export default handler