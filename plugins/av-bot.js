let handler = async (m, { conn}) => {

let name = conn.getName(m.sender)
let av = `./src/mp3/${pickRandom(["criss", "andrea"])}.mp3`
let nanz = `Halo kak`

conn.sendPoll(m.chat, nanz,
['List Menu', '.menu2',
'Menu 2', '.msnu'], m)
conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true })
} 

handler.customPrefix = /^(bot|dylux)$/i
handler.command = new RegExp

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}