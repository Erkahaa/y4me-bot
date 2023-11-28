import axios from "axios";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    conn.sendMessage(m.chat, {react:{text: '🥵', key: m.key}});

    // Declare api url
    let apiUrl = 'https://api--v1-shoti.vercel.app/api/v1/get' 
    let key = '$shoti-1hg7t8rf720vn29l5uo'

    // Make a post request
    let { data } = await axios.post(apiUrl, {
      apikey: key, //$shoti-xxxxxx
    });

    const cap = `*Random cewek video*
*Title:* ${data.data.title}
*Rank:* ${data.data._shoti_rank}
*Region:* ${data.data.region}
*Duration:* ${data.data.duration}

USER INFO*
*Name:* ${data.data.user.nickname}
*ID:* ${data.data.user.userID}
`;


    conn.sendMessage(m.chat, {
      video: { url: data.data.url },
      gifPlayback: true,
      caption: cap,
    }, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    conn.reply(m.chat, error, m);
  }
};

handler.help = ["asupan"];
handler.tags = ["searching"];
handler.command = ["asupan"];

export default handler;