let handler = async (m, { conn }) => {
    let wm = "https://i.ibb.co/3Fh9V6p/avatar-contact.png"

    let nanz = `mode santuy
    `.trim()
conn.sendMessage(m.chat, {
text: nanz,
contextInfo: {
externalAdReply: {
title: "",
body: uptimex,
thumbnailUrl: "https://i.ibb.co/3Fh9V6p/avatar-contact.png",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
}
handler.help = ['mode']
handler.tags = ['main']
handler.customPrefix = /^(mode)$/i 
handler.command = new RegExp
handler.limit = false