let ro = 3000

// Define the msToTime function
function msToTime(duration) {
    const milliseconds = parseInt((duration % 1000) / 100)
        , seconds = Math.floor((duration / 1000) % 60)
        , minutes = Math.floor((duration / (1000 * 60)) % 60)
        , hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    return `${hours} jam ${minutes} menit ${seconds} detik`;
}

let handler = async (m, { conn, usedPrefix, command }) => {
    let time = global.db.data.users[m.sender].lastrob + 7200000
    if (new Date() - global.db.data.users[m.sender].lastrob < 7200000) {
        throw `⏱️Hei! Sebentar *${msToTime(time - new Date())}* untuk mencuri lagi`
    }

    // Initialize the 'who' variable with a default value
    let who = null;

    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null;
    } else {
        who = m.chat;
    }

    if (!who) {
        throw `✳️ Tandai seseorang untuk mencuri`;
    }

    if (who === '6289688403000@s.whatsapp.net') {
        return m.reply(`Hei ini *owner* ku, jangan mencuri dari nya!!😡.`, null, { mentions: [who] })
    }

    if (!(who in global.db.data.users)) {
        throw `✳️ Pengguna tidak ditemukan di database saya`;
    }

    let users = global.db.data.users[who]
    let rob = Math.floor(Math.random() * ro)
    if (users.exp < rob) {
        return m.reply(`🔖 @${who.split`@`[0]} memiliki kurang dari *${ro} xp*\nJangan mencuri dari dia!`, null, { mentions: [who] })
    }

    global.db.data.users[m.sender].exp += rob
    global.db.data.users[who].exp -= rob

    m.reply(`
    ‣ Mencuri *${rob} XP* dari @${who.split`@`[0]}
    `, null, { mentions: [who] })

    global.db.data.users[m.sender].lastrob = new Date() * 1
}

handler.help = ['rob']
handler.tags = ['econ']
handler.command = ['robar', 'rob', 'mencuri', 'merampok']

export default handler