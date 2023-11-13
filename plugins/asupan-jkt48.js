const handler = async (m, { conn, usedPrefix, command }) => {
  m.reply('Tunggu Sebentar...');
  conn.sendFile(m.chat, pickRandom(paptt), '', wm, m);
};

handler.help = ['jkt48'];
handler.tags = ['info', 'premium'];
handler.command = /^(jkt48)$/i;

handler.premium = true;
handler.limit = true;

handler.register = true;

export default handler;

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

const paptt = [
  "https://i.pinimg.com/originals/55/d2/72/55d272b7bb9ccfe20c7fb44d58af9a7c.jpg",
  "https://i.pinimg.com/originals/a8/22/fc/a822fce77ce9469f2bdab23cd40d0954.jpg",
  "https://i.pinimg.com/originals/ce/e9/ec/cee9ec3638083fd2cf554af99a2f079a.jpg",
  "https://i.pinimg.com/originals/2d/a8/8d/2da88d53a476d0c0b2d894f27afb0af5.jpg",
  "https://i.pinimg.com/originals/9b/80/33/9b803305d338cc4e3d77215b5826e85b.jpg",
  "https://i.pinimg.com/originals/dd/57/86/dd5786fd47d8ec5e74ce96ab046e0a31.jpg",
  "https://i.pinimg.com/originals/58/aa/0b/58aa0bd564fe8d58164807f1557e2ab9.jpg",
  "https://i.pinimg.com/originals/48/43/e8/4843e83d7d940a908647f8dcfd2942b6.jpg",
  "https://i.pinimg.com/originals/08/24/50/0824507866196222223f3c05ee762633.jpg",
  "https://i.pinimg.com/originals/35/b2/f5/35b2f5418010e756fc8fe77ef7fa8419.jpg",
  "https://i.pinimg.com/originals/b9/14/45/b91445bd5e61c3fb9b78efa4d1be6ac3.jpg",
  "https://i.pinimg.com/originals/65/ed/62/65ed62e0cc6304e712f2390327fc92a7.jpg",
  "https://i.pinimg.com/originals/b3/20/93/b3209346a2e14efa7fd99cf770127e95.jpg",
  "https://i.pinimg.com/originals/5a/f7/47/5af7475966fcc2953139fd46197862f7.jpg",
  "https://i.pinimg.com/originals/cd/f7/d4/cdf7d40639b0567841b47449a7eff96d.jpg",
  "https://i.pinimg.com/originals/58/be/8a/58be8aa42345c061098f128c50f6d7af.jpg",
  "https://i.pinimg.com/originals/cb/d4/22/cbd422e4e53cef9333c93a4c55bff3c4.jpg",
  "https://i.pinimg.com/originals/29/44/15/294415cd7f7f0f0012db4c02e96356a7.jpg",
  "https://i.pinimg.com/originals/dc/01/c8/dc01c8291d951cd7d746c778a285a095.jpg",
  "https://i.pinimg.com/originals/dc/6a/99/dc6a99b9d8eefb89dbc18131cc8ad395.jpg"
];