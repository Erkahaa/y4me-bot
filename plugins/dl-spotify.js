import fetch from "node-fetch";
import canvafy from "canvafy";

let handler = async (m,{conn, text}) => {
if (!text) throw `Masukan Link Spotify ‼️, *Example:* .spotify https://open.spotify.com/track/6wvTBMe3zZBv4W3OlpPGbS?si=aLpF7PfrTPee4nAFWusn7Q`
m.reply(wait)
	let res = await fetch(`https://api.yanzbotz.my.id/api/downloader/spotify?url=${text}`)
let jsons = await res.json()
const { 
album,
artist,
duration,
download,
image,
name,
format
} = jsons.result.data.metadata
    let captionvid = ` ∘ Title: ${name}\n∘ artist: ${artist}\n∘ Duration: ${duration}\n∘ Image: ${image}\n∘ Url: ${download}\n\nPlease...`
const p = await new canvafy.Spotify()
            .setTitle(name)
            .setAuthor(artist)
            .setTimestamp(121000, 263400)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(image)
             .setBlur(5)
            .build();

        conn.sendFile(m.chat, p, '', captionvid, m);
conn.sendMessage(m.chat, { audio: { url: download }, mimetype: 'audio/mpeg', contextInfo: {
    externalAdReply: {
    title: name,
    body: wm,
    thumbnailUrl: image, 
    sourceUrl: text,
    mediaType: 1,
    showAdAttribution: true,
    renderLargerThumbnail: true
    }}} , { quoted: m });
}
handler.command = handler.help = ['spotifyfdl','spotify', 'sptdl']
handler.tags = ['dl']
export default handler