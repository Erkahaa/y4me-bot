import fg from 'api-dylux'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `📌 Contoh : \n*${usedPrefix + command}* https://twitter.com/gofoodindonesia/status/1229369819511709697`
          m.react(rwait)    
          try {
          let { SD, HD, desc, thumb, audio } = await fg.twitter(args[0])
          let te = ` 
┌─⊷ *TWITTER DL*
▢ Deskripsi: ${desc}
└───────────`
conn.sendFile(m.chat, HD, 'twitter.mp4', te, m)
m.react(done)
} catch (e) {
  	m.reply(`✳️ memverifikasi bahwa tautan berasal dari Twitter`)
	} 
	
}
handler.help = ['twitter'].map(v => v + ' <url>')
handler.tags = ['dl']
handler.command = /^(twitter|tw)$/i
handler.diamond = true

export default handler