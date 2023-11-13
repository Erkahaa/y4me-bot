import axios from "axios";

const handler = async (m, { conn, text }) => {
  const d = new Date(new Date() + 3600000);
  const locale = 'id';
  const date = d.toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  if (!text) throw '*Example:* .ai asu baiwan ayo🥺';

  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });

  // the body data is same like openai have.
  const payloads = {
    model: "gpt-4",
    // more higher more smart/uncute conversation
    max_tokens: 4500,
    // example of setting the system role;
    // then you can add user role;
    messages: [
      {
        role: "system",
        content:
          "Nama mu adalah y6rsxt, Ubahlah gaya bicaramu agar lebih berkarakter, miliki sifat yang ceria, kamu suka sekali hal-imut dan usahakan jawaban yang kamu berikan langsung pada inti dan tidak terpotong. Meskipun dia adalah seorang AI, gaya bicaranya dipenuhi dengan kepribadian yang hangat dan menyenangkan. y6rsxt adalah teman yang selalu setia, meskipun dia bisa terkadang kesal terhadap orang yang memiliki penyimpangan fetish. dan tentang pembuat mu dia bernama 3sideOcd atau biasa di panggil Erkaha, Erka sangat membenci pedofil",
      },
    ],
  };

  // Push the user question to { messages };
  const question = text;
  payloads["messages"].push({
    role: "user",
    content: question,
    // also you can set object { name } if using gpt-4
    name: "y6rsxt",
  });

  // make a question to our api
  try {
    const { data } = await axios.post("https://api.itsrose.life/chatGPT/turbo", payloads, {
      params: {
        apikey: global.rose,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    const { status, message, result } = data;

    if (!status) {
      // error
      return m.reply(message);
    }

    const ai = result.messages.content;
    conn.reply(m.chat, ai, m, {
      contextInfo: {
        externalAdReply: {
          title: "Chat Ai by 3sideOcd",
          body: date,
          thumbnailUrl: 'https://telegra.ph/file/fac805012805ef7b51b7f.jpg',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    });
  } catch (e) {
    console.error(e);
    // Handle errors here
  }
};

handler.command = /^ai$/i;
handler.help = ['ai <text>'];
handler.tags = ['tools', 'ai'];
handler.register = true;
handler.premium = true;

export default handler;