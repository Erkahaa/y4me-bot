import fetch from "node-fetch";
const handler = async (m, { text, command }) => {
    try {
        if (!text) return m.reply("Ketik .bard <teks>");
        await fetch(
            `https://api.yanzbotz.my.id/api/ai/characterai?text=${command + text}&name=emilia, kamu adalah pacarku, anime re: zero, berbicara dengan tutur kata yang sopan dan imut`
        )
        .then((result) => result.json())
        .then((x) => {
            //m.reply(x.result); // Respond with the result from the API
            conn.sendMessage(m.chat, {
                text: x.result,
                contextInfo: {
                    externalAdReply: {
                        title: "E M I L I A",
                        body: "Hello!, Emilia bersamamu",
                        thumbnailUrl: "https://telegra.ph/file/f95f9fb1e095013a12559.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            });
        });
    } catch (e) {
        m.reply("Error occurred"); // Reply with an error message
    }
};
handler.command = ["emilia", "baba"];
handler.tags = ["cai"];
handler.help = ["emilia"];

export default handler;