import fg from 'api-dylux'  
 import { tiktokdl } from '@bochilteam/scraper' 
 let handler = async (m, { conn, text, args, usedPrefix, command}) => { 
 if (!args[0]) throw `✳️ Masukan link tiktok\n\n 📌 Contoh : ${usedPrefix + command} https://vm.tiktok.com/ZMYG92bUh/` 
 if (!args[0].match(/tiktok/gi)) throw `❎ verify that the link is from tiktok` 
 m.react(rwait) 
  
 try { 
     let p = await fg.tiktok(args[0])  
     let te = ` 
 ┌─⊷ TIKTOK 
 ▢ *Name:* ${p.nickname} 
 ▢ *Username:* ${p.unique_id} 
 ▢ *Duration:* ${p.duration} 
 ▢ *Description:* ${p.description} 
 └───────────` 
     conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m) 
     m.react(done) 
     } catch {           
     try {  
         const { author: { nickname }, video, description } = await tiktokdl(args[0]) 
     const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw 
     if (!url) throw '❎ Error downloading the video' 
     conn.sendFile(m.chat, url, 'fb.mp4', ` 
 ┌─⊷ *TIKTOK DL-2* 
 ▢ *Nickname:* ${nickname} ${description ? `\n▢ *Description:* ${description}` : ''} 
 └───────────`, m) 
 m.react(done) 
 } catch { 
     m.reply(`❎ Error downloading the video`) 
 } 
 }  
  
 }   
 handler.help = ['tiktok'] 
 handler.tags = ['dl'] 
 handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt)$/i 
 handler.limit = true  
 export default handler