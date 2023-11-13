//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ Taguea pengguna'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ Masukkan jumlah *Limit* yang ingin Anda tambahkan'
    if (isNaN(txt)) throw '🔢 Hanya angka'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ Minimum adalah  *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`≡ *💎 TAMBAHAN*
┌──────────────
▢ *Total:* ${dmt}
└──────────────`)
   conn.fakeReply(m.chat, `▢ Mendapat \n\n *+${dmt}* Limit`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

