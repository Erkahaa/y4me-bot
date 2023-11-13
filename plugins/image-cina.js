import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {
    case 'vietnam':
    case 'thailand':
	   let cina = await conn.getFile(global.API('ordiston', `/api/cecan/${command}`, { }, 'apikey'))
	   conn.sendFile(m.chat, cina.data, 'img.jpg', `✅ ${command}`, m)
	   m.react(dmoji)
break
    case 'china':
    case 'indon':
    case 'japan':
    case 'korea':
    case 'malay':
        const response = await axios.get(`https://api.caliph.my.id/api/${command}?apikey=KelipXSenzy`);
        let data = await response.data; 
        conn.sendFile(m.chat, data.result, 'img.jpg', `✅ ${command}`, m)
        m.react(dmoji)
      break
        case 'cogan':
	     let husbu = await conn.getFile(global.API('lolhuman', `/api/random/cogan`, { }, 'apikey'))
	     conn.sendFile(m.chat, husbu.data, 'img.jpg', `✅ ${command}`, m)
	     m.react(dmoji) 
	break
        
        //https://api.lolhuman.xyz/api/random/cogan?apikey=e40c42b569893f60be2bccec
default:
 }
}
handler.help = ['china', 'indon', 'korea', 'japan', 'malay', 'vietnam', 'thailand', 'cogan']
handler.tags = ['cecan']
handler.command = ['china', 'indon', 'korea', 'japan', 'malay', 'vietnam', 'thailand', 'cogan']
handler.diamond = true

export default handler
    
    function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
    }
    
