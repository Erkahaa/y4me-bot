import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {

let buffer = await fetch(`https://mfarels.my.id/api/openai-image?text=${text}`).then(res => res.buffer())

conn.sendFile(m.chat, buffer, 'hasil.jpg', "Random " + command, m)

}

handler.command = handler.help = ['animeai','aiimg']
handler.tags = ['cecan']

export default handler