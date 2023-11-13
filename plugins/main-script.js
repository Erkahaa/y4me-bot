import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
*≡ Makan ni tutorial*

▢ Video : https://youtu.be/Oe421EPjeBE?si=t7mrVAXiMJhtgD1i
`.trim())
    
}

handler.help = ['script']
handler.tags = ['main']
handler.command = ['sc', 'script'] 

export default handler