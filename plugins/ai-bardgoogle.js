import axios from 'axios';

let handler = async (m, { conn, text }) => {
    try {
        if (!text) throw 'Huh? Insert the command, example: .bardai search me porn';
        
        m.react("🤔");

        // Make a GET request to the API
        const response = await axios.get(`https://api.yanzbotz.my.id/api/ai/bard?query=${text}`);

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
            // Extract the result from the response data
            const erka = response.data.result;

            // Example: Send the result as a reply
            //conn.reply(m.chat, eak, m);
            conn.sendMessage(m.chat, {
      text: erka,
      contextInfo: {
externalAdReply: {
title: "Bard Google Ai",
body: wm,
thumbnailUrl: "https://telegra.ph/file/3d3535f2ea5f0f2034fff.jpg",
sourceUrl: "https://bard.google.com",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
        } else {
            throw '_Failed to fetch data from the API._';
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

handler.help = ["bardai"]
handler.tags = ["ai"]
handler.command = /^bardai$/i

export default handler;