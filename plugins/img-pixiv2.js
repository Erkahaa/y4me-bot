/*import fetch from "node-fetch"
import { pickRandom } from '../../lib/others.js'

let handler = async(m, { conn, text, usedPrefix, command, isPrems }) => {
  if (!text) return m.reply(`*Usage : ${usedPrefix + command} id*\n\nExample :\n${usedPrefix + command} 63456028`)
  try {
    var dann = await fetch(`https://api.lolhuman.xyz/api/pixiv?apikey=e40c42b569893f60be2bccec&query=${text.trim()}`)
    const data = await dann.json(); // Assuming `dann` is your JSON data source
    const randomElement = pickRandom(data.result);
    if (randomElement) {
      conn.sendFile(m.chat, randomElement.image, '', randomElement.title, m)
    } else {
      throw 'No results found';
    }
  } catch (e) {
    console.log(e)
    throw 'Server down or no results found';
  }
}

handler.menudownload = ['pixiv']
handler.tagsdownload = ['search']
handler.command = /^(pixiv2)$/i
handler.limit = true
export default handler
*/