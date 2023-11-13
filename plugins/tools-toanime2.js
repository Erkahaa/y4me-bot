/* Recode By Wudysoft */ 
 import Jimp from "jimp" 
 import axios from "axios"; 
 import uploadFile from '../lib/uploadFile.js' 
 import uploadImage from '../lib/uploadImage.js' 
  
 let handler = async (m, { 
     conn, 
     text, 
     args, 
     usedPrefix, 
     command 
 }) => { 
     let q = m.quoted ? m.quoted : m 
     let mime = (q.msg || q).mimetype || q.mediaType || "" 
     if (!/image/g.test(mime)) throw `Balas/Kirim Gambar Dengan Perintah ${usedPrefix + command}!` 
     await m.reply(wait) 
     let data = await q.download?.() 
     let image = await uploadImage(data) 
     let anime 
     try { 
         anime = await ToAnime("xzn", image) 
     } catch (e) { 
         try { 
             anime = await ToAnime("zahwazein", image) 
         } catch (e) { 
             try { 
                 anime = await ToAnime("caliph", image) 
             } catch (e) { 
                 await m.reply(eror) 
             } 
         } 
     } 
     await conn.sendFile(m.chat, anime, 'anime.jpg', "Sudah Jadi", m, false) 
 } 
 handler.help = ["toanime2"].map(v => v + " (Balas foto)") 
 handler.tags = ["maker", "ai", "img"] 
 handler.command = /^(to|jadi)anime2$/i 
 handler.limit = true 
 handler.diamond = 5
 export default handler 
  
 function ToAnime(efek, img) { 
     try { 
         if (efek == "zahwazein") { 
             return "https://api.zahwazein.xyz/photoeditor/jadianime?url=" + img + "&apikey=zenzkey_1ec92f71d3bb" 
         } else if (efek == "caliph") { 
             return "https://api.caliph.biz.id/api/animeai?img=" + img + "&apikey=WzD8aynt" //caliphkey
         } else if (efek == "xzn") { 
             return "https://skizo.tech/api/toanime?url=" + img + "&apikey=y6rsxtbase" 
         } 
     } catch (e) { 
         throw eror 
     } 
 } 
  
 async function Crop(img, x, y, lebar, tinggi) { 
     let po = await Jimp.read(img); 
     let tong = await po.crop(Number(x), Number(y), Number(lebar), Number(tinggi)).getBufferAsync(Jimp.MIME_JPEG) 
     return tong 
 }