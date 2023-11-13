import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ Gambar apa yang Anda ingin saya cari?\n\n📌 Contoh  : ${usedPrefix + command} cewek cantik`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  Pinterest:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['pinterest', 'pin', 'pint'] 

export default handler