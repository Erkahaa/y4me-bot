
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	
if (!args[0]) throw `✳️ Teks survei tidak ada \n\n📌 Contoh : \n*${usedPrefix + command}* Pesan |halo|xd`
if (!text.includes('|')) throw  `✳️ Separe las encuestas con *|* \n\n📌 Contoh : \n*${usedPrefix + command}* Survei Saya|n  |como|xd|vale`

let name = await conn.getName(m.sender)
let a = []
let b = text.split('|')
for (let c = 1 || 0; c < b.length; c++) {
a.push([b[c]])
			}
			return conn.sendPoll(m.chat, `📊 *Survei diminta oleh:* ${name}\n\n*Pesan:* ${text.split('|')[0]}`, a, m)
}
handler.help = ['poll <hola|como|xd>']
handler.tags = ['group'] 
handler.command = ['poll', 'encuesta', 'polling'] 
handler.group = true

export default handler
