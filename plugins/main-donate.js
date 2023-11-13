
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONASI*
you can donate if you want to help keep the bot active

▢ *DANA,OVO,GOPAY*
• *Nomor :* 085785718554
▢ *Pulsa tri*
• *Nomor :* 089688403000 
▢ *SUBSCRIBE*
• _Dengan subscribe dan tonton video saya, sudah cukup membantu berdonasi, Terima kasih_
`
let img = 'https://telegra.ph/file/54f2469f713de4e89d2a7.jpg'
conn.sendFile(m.chat, img, 'img.jpg', don, m)

}
handler.help = ['donate']
handler.tags = ['main']
handler.command = ['donasi', 'donate', 'donar'] 

export default handler
