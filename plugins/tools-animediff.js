import fetch from "node-fetch" 
  
 let handler = async (m, { conn, text, usedPrefix, command }) => { 
     let wm = global.wm 
  
     if (!text) throw `This command generates image from texts\n\n Example usage\n${ usedPrefix + command } highly detailed, intricate, 4k, 8k, sharp focus, detailed hair, detailed` 
         await m.reply('*Processing image*') 
         try { 
         let url = `https://api.xyroinee.xyz/api/ai/animediffusion?q=${text}&apikey=${global.xyro}` 
         await conn.sendFile(m.chat, await(await fetch(url)).buffer(), 'image.jpg', wm, m) 
     } catch (e) { 
         console.log(e) 
         m.reply('failed') 
     } 
  
 } 
  
  
 handler.help = ['animediff <prompt>'] 
 handler.tags = ['ai'] 
 handler.command = /^(animediff)$/i 
 handler.premium = true 
 handler.register = true 
  
 export default handler