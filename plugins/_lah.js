let handler = async (m, { conn, usedPrefix, command }) => {
    // Ganti ini dengan cara Anda sendiri untuk mendapatkan pengguna yang memanggil perintah
    let userId = m.sender;

    let user = global.db.data.users[userId];

    if (user) {
        user.banned = true;

        conn.reply(m.chat, `
✅ @${userId.split`@`[0]} Selamat kamu mendapatkan hadiah`, m, { mentions: [userId] });
    } else {
        throw `Terjadi kesalahan saat mencari data pengguna.`;
    }
}

handler.help = ['mancing'];
handler.tags = ['fun'];
handler.command = /^mancing$/i;

export default handler;