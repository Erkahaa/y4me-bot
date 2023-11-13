import fetch from "node-fetch";

const handler = async (m, { text, command }) => {
  try {
    if (!text) return m.reply("Ketik .bard <teks>");
    const charaName = "Paimon"; // Ganti dengan karakter yang sesuai
    const apiUrl = `https://api-charaai.vercel.app/charaai?chara=${charaName}&text=${text}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
     // m.reply(data);
      
      // Add the following code to send an externalAdReply
      const externalAdReply = {
        title: "P A I M O N",
        body: "Haii Traveler!, Paimon disini｡⁠◕⁠‿⁠◕⁠｡",
        thumbnailUrl: "https://telegra.ph/file/e04c17868fce72d59aedb.jpg",
        sourceUrl: "",
        mediaType: 1,
        renderLargerThumbnail: true
      };
      conn.sendMessage(m.chat, {
        text: data.trim(),
        contextInfo: {
          externalAdReply: externalAdReply
        }
      });
    } else {
      m.reply("Tidak ada hasil yang ditemukan.");
    }
  } catch (e) {
    m.reply("Terjadi kesalahan dalam mengambil data.");
    console.error(e); // Optional: Log the error for debugging
  }
};

handler.command = ["paimon"];
handler.tags = ["cai"];
handler.help = ["paimon"];

export default handler;