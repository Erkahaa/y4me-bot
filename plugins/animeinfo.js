/*import fetch from 'node-fetch' 
 let handler = async(m, { conn, text }) => { 
   if (!text) throw `Masukkan query!` 
   let res = await fetch(global.API('https://api.jikan.moe', '/v4/anime', { q: text })) 
   if (!res.ok) throw await res.text() 
   let json = await res.json() 
   let { title, members, synopsis, episodes, url, rated, score, image_url, type, start_date, end_date } = json.data[0] 
 let animeingfo = `✨️ *Title:* ${title} 
 🎆️ *Episodes:* ${episodes} 
 ➡️ *Start date:* ${start_date} 
 🔚 *End date:* ${end_date} 
 💬 *Show Type:* ${type} 
 💌️ *Rating:* ${rated} 
 ❤️ *Score:* ${score} 
 👥 *Members:* ${members} 
 💚️ *Synopsis:* ${synopsis} 
 🌐️ *URL*: ${url}` 
   conn.sendFile(m.chat, image_url, '', animeingfo, m) 
 } 
 handler.help = ['anime'].map(v => v + ' <judul>') 
 handler.tags = ['animesearch'] 
 handler.command = /^(anime|animeinfo)$/i 
 //maapin fatur :< 
 export default handler*/