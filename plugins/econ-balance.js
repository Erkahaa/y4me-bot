let handler = async (m, { conn, usedPrefix }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ Pengguna hilang dari database saya`

    // URL gambar yang ingin ditampilkan dalam externalAdReply
    let thumbnailUrl = 'https://telegra.ph/file/c7da539e55279dedaecde.jpg'

    let text = `
┌───⊷ *BALANCE* ⊶
▢ *📌Nama* : _@${who.split('@')[0]}_
▢ *💎Limit* : _${user.diamond}_
▢ *⬆️XP* : _Total ${user.exp}_
└──────────────

*NOTA :* 
Anda dapat membeli 💎 berlian menggunakan perintah
❏ *${usedPrefix}buy <cantidad>*
❏ *${usedPrefix}buyall*`

    conn.sendMessage(m.chat, {
        text: text,
        contextInfo: {
            externalAdReply: {
                title: "Ｙｏｕｒ Ｌｉｍｉｔ.",
                body: "",
                thumbnailUrl: thumbnailUrl,
                sourceUrl: "",
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: m })
}

handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance']

export default handler