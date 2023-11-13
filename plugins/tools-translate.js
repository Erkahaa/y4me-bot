import { translate } from '@vitalets/google-translate-api'
const defaultLang = 'es'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
📌 *Contoh:*

*${usedPrefix + command}* <bahasa> [text]
*${usedPrefix + command}* id Hello World

≡ *Daftar bahasa yang didukung:* 

https://cloud.google.com/translate/docs/languages
`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    } 

}
handler.help = ['trad <leng> <text>']
handler.tags = ['tools']
handler.command = ['translate', 'tl', 'trad', 'tr']

export default handler