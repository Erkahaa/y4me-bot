import fetch from 'node-fetch'
let handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    
if (!text) throw m.reply(`Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `)
try {
  var apii2 = await fetch(`https://api.caliph.biz.id/api/tafsirmimpi?query=${text}&apikey=caliphkey`)
  var js2 = await apii2.json()
  m.reply(js2.result)
} catch(e) {
  try {
    var apii = await fetch(`https://api.caliph.biz.id/api/tafsirmimpi?query=${text}&apikey=caliphkey`)
    var js = await apii.json()
    m.reply(js.data.data)
  } catch(e) {
    m.reply('Error: Server down!')
  }
}
}      
handler.command = handler.help = ['artimimpi'];
handler.tags = ['tools'];
handler.premium = false
export default handler