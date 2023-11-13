import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _ Use these commands without the prefix_

▢ If you have more audio
send me by t.me/fgsupp_bot the *audio + command* with which you will respond

┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
▢ Fino señores
▢ Sad
└──────────────
`

    let pp = './src/fg_logo.jpg' 
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['audios']
handler.tags = ['main']
handler.command = ['menu2', 'audios'] 

export default handler