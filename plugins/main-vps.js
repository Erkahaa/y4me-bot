import { promises } from 'fs'
import { join } from 'path'

let handler = async function (m, { conn, __dirname }) {
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
  
m.reply(`
LIST *VPS* BY *NANZON* :

Harga : Rp. 40.000
Spesifikasi :
➸ Ram 4Gb Memory
➸ vCPU 2 Core
➸ Bandwidth 4TB
➸ Kecepatan VPS 40Gbps / 4Gbps

Promo : Rp. 80.000
Spesifikasi :
➸ Ram 8Gb Memory
➸ vCPU 4 Core
➸ Bandwidth 4TB
➸ Kecepatan VPS 40Gbps / 5Gbps

Harga : Rp. 180.000
Spesifikasi :
➸ Ram 16Gb Memory
➸ vCPU 6 Core
➸ Bandwidth 8TB
➸ Kecepatan VPS 40Gbps / 6Gbps


- Support All
- Tunneling Lancar
- SSH Lancar

Admin : 6285880029379
Group : https://t.me/nansofficial

Terima kasih, semoga bermanfaat.
`.trim())
    
}

handler.help = ['vps']
handler.tags = ['main']
handler.command = ['vps'] 

export default handler