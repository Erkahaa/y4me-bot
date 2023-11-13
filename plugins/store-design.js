let handler = async(m, { conn, usedPrefix, command }) => {

    let price= `
≡ *Store Design*
*========================* 
*[Design Logo,Banner,Dll]"
*Harga start*
_Rp 15.000,-_
*Harga Per Revisi*
_Rp 2.000,-_
≡ *Pembayaran via*
 *DANA, GOPAY*
_085785718554_
*OVO*
_089688403000_
*Pulsa tri*
_089688403000_
*Note!! Harga bisa berubah tergantung tingkat kerumitan dan berapa kali jumlah revisi dan jika berminat silahkan hubungi owner dengan ketik .owner🙂*
 *========================*
`
let img = 'https://telegra.ph/file/981fdfb5746f1e638f1af.jpg'
conn.sendMessage(m.chat, {
  text: price,
  contextInfo: {
    externalAdReply: {
      title: "Store Design",
      body: "List Harga🛒",
      thumbnailUrl: img, // Use the 'img' variable for thumbnail URL
      sourceUrl: "", // Set the source URL
      mediaType: 1,
      renderLargerThumbnail: true,
    }
  }
}, { quoted: m });

}
handler.help = ['desain']
handler.tags = ['store']
handler.command = ['design', 'desain'] 

export default handler