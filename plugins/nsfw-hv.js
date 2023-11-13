let handler = async (m, { conn, usedPrefix, command }) => {
    if (!global.db.data.chats[m.chat].nsfw) throw `🚫 Grup tidak mendukung konten nsfw \n\nUntuk mengaktifkan tipe \n*${usedPrefix}enable* nsfw`
    let user = global.db.data.users[m.sender].age
    if (user < 17) throw m.reply(`❎ Anda masih di bawah umur! Kembalilah saat Anda berusia di atas 18 tahun`)

    let img = await conn.getFile(global.API('ordiston', '/api/nsfw/hentaivid', {}, 'apikey'))
    let hv = img.data

    conn.sendFile(m.chat, hv, 'file.mp4', 'done', m)
    m.react(xmoji)
}

handler.help = ['hv']
handler.tags = ['ansfw']
handler.command = ['hv', 'hentaivid']
handler.register = true
handler.premium = true

export default handler