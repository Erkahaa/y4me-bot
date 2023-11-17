
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	
    let tee = `✳️ Masukkan teks pendek\n\n📌 Contoh  : *${usedPrefix + command}* Y4ME`
    let too = `✳️ Pisahkan teks dengan *+* \n\n📌 Contoh : \n*${usedPrefix + command}* erka *+* y4me`
     m.react(rwait)
 let type = (command).toLowerCase()
 switch (type) {
     
     case 'logololi':
     if (!text) throw tee 
     let img = global.API('fgmods', '/api/maker/loli', { text }, 'apikey')
     conn.sendFile(m.chat, img, 'logo.png', `✅ Hasil`, m)
     m.react(done)
     break 
     case 'neon': 
     if (!text) throw tee
     let ne = global.API('ordiston', '/api/textpro/neon-light', { text }, 'apikey')
     conn.sendFile(m.chat, ne, 'logo.png', `✅ Hasil`, m)
     m.react(done)
     break 
     case 'devil': 
     if (!text) throw tee
     let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
     conn.sendFile(m.chat, de, 'logo.png', `✅ Hasil`, m)
     m.react(done)
     break 
     case 'wolf': 
    if (!text) throw tee
    let wo = global.API('zein', '/textpro/logowolf', { text: 'nansoffc', text2: text}, 'apikey')
     conn.sendFile(m.chat, wo, 'logo.png', `✅ Hasil`, m)
     m.react(done)
     break 
     case 'phlogo': 
     if (!text) throw too
     if (!text.includes('+')) throw too  
     let [a, b] = text.split`+`   
     let ph = global.API('zein', '/textpro/pornhub', { text: a, text2: b}, 'apikey')
     conn.sendFile(m.chat, ph, 'logo.png', `✅ Hasil`, m)
     m.react(done)
     break 
     default:
 } 
 } 
 handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo']
 handler.tags = ['maker']
 handler.command = /^(logololi|neon|devil|wolf|phlogo)$/i
 handler.diamond = true
 
 export default handler
 
