import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ SCRIPT BOT*

▢ Base : https://github.com/FG98F/dylux-fg

📌 *recode* _ke bahasa Indonesia ada di channel YouTube NANS OFFICIAL._
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler