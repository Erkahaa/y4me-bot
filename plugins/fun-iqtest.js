let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iqtest)$/i
handler.register = true


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'IQ Anda adalah: 1',
'IQ Anda adalah: 14',
'IQ Anda adalah: 23',
'IQ Anda adalah: 35',
'IQ Anda adalah: 41',
'IQ Anda adalah: 50',
'IQ Anda adalah: 67',
'IQ Anda adalah: 72',
'IQ Anda adalah: 86',
'IQ Anda adalah: 99',
'IQ Anda adalah: 150',
'IQ Anda adalah: 340',
'IQ Anda adalah: 423',
'IQ Anda adalah: 500',
'IQ Anda adalah: 676',
'IQ Anda adalah: 780',
'IQ Anda adalah: 812',
'IQ Anda adalah: 945',
'IQ Anda adalah: 1000',
'IQ Anda adalah: Tidak terbatas !!',
'IQ Anda adalah: 5000',
'IQ Anda adalah: 7500',
'IQ Anda adalah: 10000',
]