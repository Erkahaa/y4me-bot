/* 
Script By Reelly XD
  • YT: ReellyXD
  • IG: reellyxd
Buy Script? 
  • WA: +62 857-0436-85323
  • TELE: t.me/rely_xd
*/

let handler = async(m, { conn, usedPrefix, command }) => {
    
	//delete conn.deep_fake_AI[m.sender];
	let style=`
1."adele": "adele"
2."among_us": "among_us"
3."amr_diab": "amr_diab"
4."amy_winehouse": "amy_winehouse"
5."andrew_tate": "andrew_tate"
6."angry_cat": "angry_cat"
7."antimage_dota": "antimage_dota"
8."ariana_grande": "ariana_grande"
9."assala_nasri": "assala_nasri"
10."aw_aw_cat": "aw_aw_cat"
11."bad_bunny": "bad_bunny""bang_chan": "bang_chan"
12."barbie_margot": "barbie_margot"
13."barry_white": "barry_white"
14."bart_simpson_en": "bart_simpson_en"
15."bart_simpson_spa": "bart_simpson_spa"
16."batman_christian_bale": "batman_christian_bale"
17."batman_kevin_conroy": "batman_kevin_conroy"
18."beyonce": "beyonce"
19."bill_clinton": "bill_clinton" 
20."tupac_shakur": "tupac_shakur"
21."twentyone_savage": "twentyone_savage"
22."venom": "venom"
23."voldemort": "voldemort"
24."walter_white": "walter_white"
25."warwick_lol": "warwick_lol"
26."washing_machine": "washing_machine"
27."weeknd": "weeknd"
28."whitney_houston": "whitney_houston"
29."winnie_the_pooh": "winnie_the_pooh"
30."winston_churchill": "winston_churchill"
31."xxxtentacion": "xxxtentacion"
32."yae_miko": "yae_miko"
33."yungblud": "yungblud"
34."yungwon_enhypen": "yungwon_enhypen"
35."zeki_muren": "zeki_muren"
`
    let img = 'https://telegra.ph/file/495a0cd57fe9be8007b75.jpg'
conn.sendFile(m.chat, img, 'img.jpg', style, m)

}
handler.help = ['voice_id'];
handler.command = ['voice_id'];
handler.tags = ['ai'];

export default handler;