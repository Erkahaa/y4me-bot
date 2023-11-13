import fetch from 'node-fetch'
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    
if (!text) throw m.reply(`Masukkan textnya!\n\n*Contoh:* .tomorse nanz`)
try {
  var apii2 = await fetch(`https://mfarels.my.id/api/sandi-morse2text?morse=${text}`)
  var js2 = await apii2.json()
  m.reply(js2.result)
} catch(e) {
  try {
    var apii = await fetch(`https://mfarels.my.id/api/sandi-morse2text?morse=${text}`)
    var js = await apii.json()
    m.reply(js.data.data)
  } catch(e) {
    m.reply('Error: Server down!')
  }
}
}      
handler.command = handler.help = ['totextmorse'];
handler.tags = ['tools'];
handler.premium = false
export default handler