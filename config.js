import { 
     watchFile, 
     unwatchFile 
 } from "fs" 
 import chalk from "chalk" 
 import { 
     fileURLToPath 
 } from "url" 

global.owner = [
  ['6289688403000', 'ᴇʀᴋᴀʜᴀᴀ', true]
]; // Numeros de owner

global.mods = ['6289688403000'];
global.prems = ['6289688403000'];
global.APIs = { // API Prefix
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api.fgmods.xyz',
  itsrose: 'https://api.itsrose.life',
  ordiston: 'https://api.ordiston.xyz',
  lolhuman: 'https://api.lolhuman.xyz',
  arifzyn: 'https://api.arifzyn.xyz',
  arif: 'https://api.arifzyn.com',
  zein: 'https://api.zahwazein.xyz',
  caliphkey : 'https://api.caliph.biz.id',
  ibeng : 'https://api.ibeng.tech',
    lann: 'https://api.betabotz.org'
};
//if u ask why there's so many api, bcs it's free and if the rest api down u can change with the other
global.APIKeys = { // APIKEY here
  'https://api.xteam.xyz': 'ur api',
  'https://zenzapis.xyz': 'ur api', 
  'https://api.fgmods.xyz': 'ur api',
  'https://api.itsrose.life': 'ur api',
  'https://api.ordiston.xyz':'ur api',
  'https://api.lolhuman.xyz':'ur api', 
  'https://api.arifzyn.xyz':'ur api',
  'https://api.arifzyn.com':'ur api',
  'https://api.zahwazein.xyz':'ur api',
  'https://api.caliph.biz.id':'ur api',
  'https://api.ibeng.tech':'ur api'
};


 global.ameapikey = "ur key" 
global.lann = 'ur key' // https://api.betabotz.org
global.xyro = 'ur key' //https://api.xyroinee.xyz/
global.botcahx = 'ur key'
 
/*Random*/
global.htjava = pickRandom(["乂", "⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])
global.htki = htjava + "───『" 
 global.htka = "』───" + htjava

/*Number*/ 
 global.nomorbot = "6285785718554" 
 global.nomorown = "6289688403000" 
 global.namebot = " y4me-bot " 
 global.nameown = "「 3sideOcd 」"

// Sticker WM
global.packname = 'y4me-bot'; 
global.author = 'created by 3sideOcd'; 
global.wm = '© y4me-bot By 3sideOcd';
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/erkahaaa\n'; 
global.dygp = 'https://chat.whatsapp.com/EMyn9jvHRtGAH2ksjU1cbB';
global.fgsc = 'https://github.com/Erkahaa'; 
global.fgyt = 'https://youtube.com/@3SideOcd';
global.fgpyp = 'https://saweria.co/erkahaaa';
global.fglog = 'https://i.ibb.co/sR3qKBb/Proyek-Baru-166-9580-A2-B.png'; 

/* Thumbnail */ 
global.fla = pickRandom(ImgCosplay()); 
global.flaaa = ImgLogoDynamic(); 
global.hwaifu = ImgWaifu()
/*Fake*/ 
 global.fsizedoc = SizeDoc() 
 global.fpagedoc = PageDoc() 
 

global.wait = 'Wait a minute...';
global.rwait = '⌛';
global.dmoji = '🤭';
global.done = '✅';
global.error = '❌'; 
global.xmoji = '🔥'; 

global.multiplier = 69;
global.maxwarn = '2'; // máxima advertencias

let file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'config.js'"));
  import(`${file}?update=${Date.now()}`);
});

/* Randomizer */ 
function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)]; 
} 

/* Img Array */ 
function ImgCosplay() { 
  let ArrImg = [
     "https://i.pinimg.com/originals/13/8f/a9/138fa9fab411166bb8c5523bf710ff42.jpg", 
     "https://i.pinimg.com/originals/c3/11/9a/c3119aef29726b78b9f0509aa40ccb3b.jpg", 
     "https://i.pinimg.com/originals/18/05/40/18054035c2adc989580043b4391e20af.jpg", 
     "https://i.pinimg.com/originals/7c/0a/4b/7c0a4bd43596226b6311b8aae2b02408.jpg", 
     "https://i.pinimg.com/originals/3d/fe/1d/3dfe1d00cff5b517d4eb56e5297abae9.jpg", 
     "https://i.pinimg.com/originals/77/dd/ef/77ddefdd397d0730db97d848781e4df7.jpg", 
     "https://i.pinimg.com/originals/43/d9/7d/43d97d69e6552e80da086cd91557c826.jpg", 
     "https://i.pinimg.com/originals/e5/f2/86/e5f286ded660f38e8f4db73c8dfafba8.jpg", 
     "https://i.pinimg.com/originals/9f/6f/71/9f6f7189691c533cd88ef656ce23bcbb.jpg", 
     "https://i.pinimg.com/originals/0d/b8/44/0db844fa29b995dd699bfb9172fad779.jpg", 
     "https://i.pinimg.com/originals/41/c3/49/41c349749124411f4b4c0b928eb46207.jpg", 
     "https://i.pinimg.com/originals/c6/f7/bf/c6f7bfb44f0c964104ca36c8ee388f71.jpg", 
     "https://i.pinimg.com/originals/1e/c5/c3/1ec5c36b3dfa5f1bef5847def89f8df6.jpg", 
     "https://i.pinimg.com/originals/76/b6/1a/76b61aebdbc05551c9d8714014d7a30d.jpg", 
     "https://i.pinimg.com/originals/3a/3e/fc/3a3efc8f03eb6122b0e04841f4177c2c.jpg", 
     "https://i.pinimg.com/originals/77/ae/d7/77aed75e4e9f6bf317f8ca9e872d172a.jpg", 
     "https://i.pinimg.com/originals/0d/d5/02/0dd5028b7f3e2e660b78aadb5ee1ecee.jpg", 
     "https://i.pinimg.com/originals/9b/b2/d7/9bb2d7e9ca23a61c49c3a9428d6ccb3e.jpg", 
     "https://i.pinimg.com/originals/c8/23/40/c82340db05d9ef61411a9d5837eeb2a3.jpg", 
     "https://i.pinimg.com/originals/3c/2a/6b/3c2a6b131b6d1377ca31b1cee9eb5e5d.jpg", 
     "https://i.pinimg.com/originals/cf/3c/2b/cf3c2bf2ce5ae2555dda6cadf11a67a7.jpg", 
     "https://i.pinimg.com/originals/c3/16/e5/c316e5eb1367be33993d2266cc839062.jpg", 
     "https://i.pinimg.com/originals/2c/8f/4b/2c8f4bf86a5b05df761cfd0244d37b4d.jpg", 
     "https://i.pinimg.com/originals/b4/83/04/b48304a92e85c4eba37b82fdd5d08434.jpg", 
     "https://i.pinimg.com/originals/75/b3/99/75b399a50c4ac54e49261dd6e0f81a5b.jpg", 
     "https://i.pinimg.com/originals/dd/02/c5/dd02c512af2a70a9840ffab06eb74f4e.jpg", 
     "https://i.pinimg.com/originals/53/0a/6d/530a6d47fa85f639587e0c7b54c4457d.jpg", 
     "https://i.pinimg.com/originals/1c/eb/aa/1cebaa84d93f590f15933e78efc94f4b.jpg", 
     "https://i.pinimg.com/originals/de/e9/68/dee968195b668d1bfd021cedc79cd5ab.jpg", 
     "https://i.pinimg.com/originals/20/d9/57/20d957c9ad8d0691768a8968152a311d.jpg", 
     "https://i.pinimg.com/originals/7a/f7/7e/7af77ef00a5057a98aedbf86450317f9.jpg", 
     "https://i.pinimg.com/originals/25/41/a9/2541a9472e1378998cf5ac0dfcdc82f5.jpg", 
     "https://i.pinimg.com/originals/9a/0c/fb/9a0cfbdd161d09e8c200ee5cebbcaac1--male-cosplay-anime-cosplay.jpg", 
     "https://i.pinimg.com/originals/79/56/be/7956be00b52b5484c161a50a2ed0e566.jpg", 
     "https://i.pinimg.com/originals/21/63/f9/2163f9e0d59f7d10ba237131bc1e6162--cool-cosplay-anime-cosplay.jpg", 
     "https://i.pinimg.com/originals/ea/d1/0d/ead10da121a27b4d1801def2505295a5.png", 
     "https://i.pinimg.com/originals/6e/15/2b/6e152b90f638d955371cffe615f685fc.jpg", 
     "https://i.pinimg.com/originals/25/ef/0d/25ef0d8b101b555d34fc654d3bc8453d.jpg", 
     "https://i.pinimg.com/originals/37/5c/55/375c55403d41d13316e6479f7ccbcc8c.jpg", 
     "https://i.pinimg.com/originals/7c/1a/0c/7c1a0cf9af72ee41c408e40f36eafd33.jpg", 
     "https://i.pinimg.com/originals/cc/b5/a8/ccb5a867547d92b7c9e399e4d71ae2c8.png", 
     "https://i.pinimg.com/originals/b4/20/e5/b420e54c70e5ce1f112d400e686a0a0f.jpg", 
     "https://i.pinimg.com/originals/a0/6f/c5/a06fc51bffd216199727461115ca6dd0.png", 
     "https://i.pinimg.com/originals/47/10/41/471041b7a2d7110f826b4fffda87846a.jpg", 
     "https://i.pinimg.com/originals/a4/18/92/a418925f40047be5f00a0c0d3c5dfcb9.jpg", 
     "https://i.pinimg.com/originals/6c/a5/d8/6ca5d8d601f19d6f21d6d649e8914489--male-cosplay-cosplay-anime.jpg", 
     "https://i.pinimg.com/originals/79/bf/02/79bf0236aaff04bdf052673bfa4d4581.jpg", 
     "https://i.pinimg.com/originals/c9/ae/4d/c9ae4d450bbbf2c116d40fcb6644c113.jpg", 
     "https://i.pinimg.com/originals/b5/12/46/b5124604bd0cb22c7c384972cb6703af.jpg", 
     "https://i.pinimg.com/originals/4f/a4/e5/4fa4e565931db75327a69bd40d399bce.jpg", 
     "https://i.pinimg.com/originals/b7/fc/69/b7fc69457cb0bf3fa13b2eb6f66acdc7.jpg", 
     "https://i.pinimg.com/originals/98/25/96/98259611cf99d8d94e10477210bfe168.jpg", 
     "https://i.pinimg.com/originals/b9/c9/dd/b9c9dd7caa5b471540cde0cab95f0282.jpg", 
     "https://i.pinimg.com/originals/82/c9/bd/82c9bd503fbbd8ed8b9b4f385b2ff0c2.jpg", 
     "https://i.pinimg.com/originals/f0/36/64/f0366478ffda51f117c87d70cc2611f7.jpg", 
     "https://i.pinimg.com/originals/84/d9/71/84d9715428eefcd3224a2d43d0a55328.jpg", 
     "https://i.pinimg.com/originals/90/aa/7c/90aa7c57a6ce841f63df0bc25717b6ca.jpg", 
     "https://i.pinimg.com/originals/1d/73/b3/1d73b3a0fd9771d5a06e0b1c082b517b.jpg", 
     "http://fc02.deviantart.net/fs71/f/2012/053/4/b/4b876ef7cfbeb11f7d8209c2a9764df2-d4qnbzr.jpg", 
     "https://i.pinimg.com/originals/69/d7/b8/69d7b8a549b4aa250a63a70301c336b9.jpg", 
     "https://i.pinimg.com/originals/80/e5/3b/80e53b084bee9286046c039a32f6dbcd.jpg", 
     "https://i.pinimg.com/originals/47/6d/e3/476de320a1b37f67e13d890def8c63fa.jpg", 
     "https://i.pinimg.com/originals/1b/2c/21/1b2c216600ddb39eeec825b690bd9d63.jpg", 
     "https://i.pinimg.com/originals/ce/aa/52/ceaa528f7bb686b532fa04489ba324bf.jpg", 
     "https://i.pinimg.com/originals/79/d8/09/79d8090c156b9bafdedf53da7a5b39d1.jpg", 
     "https://i.pinimg.com/originals/1b/90/74/1b90744f3331c8e1b84383319ce2ff8d.jpg", 
     "https://i.pinimg.com/originals/81/2a/3f/812a3f8095fccc3a2984a1c91b648a36.jpg", 
     "https://i.pinimg.com/originals/b0/d4/65/b0d46575c705adf77d698e33730396c4.jpg", 
     "https://i.pinimg.com/originals/99/2c/d3/992cd30f0161b3f158267074a3dd96de.jpg", 
     "https://i.pinimg.com/originals/90/41/60/904160fdf5387835c654d61bde2d5812.png", 
     "https://i.pinimg.com/originals/56/ab/81/56ab81fd3db3fca26c83df394de4d7ed.jpg", 
     "https://i.pinimg.com/originals/74/b6/7b/74b67bae3b11329e471b5b859fc9453e.jpg", 
     "https://i.pinimg.com/originals/4e/5c/1a/4e5c1a025aca01393cd6203081620cbe.jpg", 
     "https://i.pinimg.com/originals/8a/0f/d0/8a0fd013c39621aa2d7214d79ad112f7.jpg", 
     "https://i.pinimg.com/originals/9b/b6/a8/9bb6a81dcc6347e98fcef0da01a93172.jpg", 
     "https://i.pinimg.com/originals/19/ae/b2/19aeb2ac7500ded0cf50b7f83f60fb86.jpg", 
     "https://i.pinimg.com/originals/78/65/92/7865925fa1addd6679a9ea4b2810591c.jpg", 
     "https://i.pinimg.com/originals/5a/5c/f3/5a5cf3e562322f01725cc7c2a07cd69b.jpg", 
     "https://i.pinimg.com/originals/9c/af/a7/9cafa7fc58286d10e14b73141ff8f5f3.jpg", 
     "https://i.pinimg.com/originals/6d/82/07/6d8207caebd7ff644d5835eb22c5bfd2--gintoki-cosplay-cosplay-anime.jpg", 
     "https://i.pinimg.com/originals/57/53/00/575300de7503a03fc8191f4b5bbc3d4b.jpg", 
     "https://i.pinimg.com/originals/b0/ed/af/b0edafadc4adee5f16cc8bf30b11aebc.jpg", 
     "https://i.pinimg.com/originals/8b/ea/61/8bea6183a2fe0cd494175b46965b36da.jpg", 
     "https://i.pinimg.com/originals/ff/22/d1/ff22d1d94308bfbeed29bbb1a3972fd2.jpg", 
     "https://i.pinimg.com/originals/d0/51/54/d0515487efb61dda9ec3a47239b9e41d.jpg", 
     "https://i.pinimg.com/originals/23/78/2a/23782abd62d91b86b83dfdfbac837249.jpg", 
     "https://i.pinimg.com/originals/6f/ab/53/6fab53f990a4044d2c9a548eb0754812.jpg", 
     "https://i.pinimg.com/originals/dc/8d/11/dc8d1169aab1b6869ccba38502b6b1e7.jpg", 
     "https://i.pinimg.com/originals/6c/92/00/6c92009dec098e54f7eb7c1b3e64e5b4.jpg", 
     "https://i.pinimg.com/originals/41/7c/02/417c02f44d480e803362142d40e6772b.jpg", 
     "https://i.pinimg.com/originals/04/50/10/0450104aa0731202db113fc5cd8c0d12.jpg", 
     "https://i.pinimg.com/originals/46/2d/e3/462de328cf3cc69f5b10556ef30579e7.jpg", 
     "https://i.pinimg.com/originals/47/3e/b5/473eb575b2f95ce5906bdad0e5b593b7.jpg", 
     "https://i.pinimg.com/originals/26/8d/5e/268d5e20a747afea743b9a0cb96cc6de.jpg", 
     "https://i.pinimg.com/originals/bc/a3/80/bca380011a5a682a9e7766c1d7c2db82.jpg", 
     "https://i.pinimg.com/originals/71/2e/ac/712eacb25c094afd579c04d85ca7f9e0.jpg", 
     "https://i.pinimg.com/originals/fc/c5/10/fcc5101e54e559952181e0bab0b1420e.jpg", 
     "https://i.pinimg.com/originals/89/55/3d/89553d3b75d8d9484ffc29aba67c1fed.jpg", 
     "https://i.pinimg.com/originals/c0/55/11/c05511492dcb02d6caa10e79df009d36.jpg", 
     "https://i.pinimg.com/originals/cb/7e/e9/cb7ee99c3cdf99a0451da682ea4ac8fe.jpg" 
   ] 
     return ArrImg 
 } 
/* Img Array */ 
 function ImgWaifu() { 
     let Waif = [ 
         "https://i.pinimg.com/originals/8e/b2/06/8eb206322336c1e107c187fe338c42f5.jpg", 
         "https://i.pinimg.com/originals/8a/eb/f8/8aebf8c8cd83c4a5a7cd9b893a97614f.jpg", 
         "https://i.pinimg.com/originals/cc/fe/31/ccfe31df09fbeb8438ffb1268a672b03.png", 
         "https://i.pinimg.com/originals/39/d1/df/39d1df920c01a788c858c333232e11d4.png", 
         "https://i.pinimg.com/originals/1d/d4/63/1dd463f45c2d4680543253f32818b56f.jpg", 
         "https://i.pinimg.com/originals/42/88/f1/4288f17ee25b909430fb7e707d961d0b.jpg", 
         "https://i.pinimg.com/originals/be/4a/83/be4a83aa8f4459c65ac57fd536f71baa.jpg", 
         "https://i.pinimg.com/originals/1f/04/33/1f04330c19ca1beb531235ac299189c8.png", 
         "https://i.pinimg.com/originals/9f/d4/74/9fd4744644230aa520a9dfe2ea24d38d.jpg", 
         "https://i.pinimg.com/originals/0b/cb/0b/0bcb0b81d2d5a914b4baae02ce89fef9.jpg", 
         "https://i.pinimg.com/originals/90/b3/fb/90b3fb0525ea88bf2214bcd31624e093.png", 
         "https://i.pinimg.com/originals/a9/b7/5f/a9b75f3fdd6b08d1113f6910dc1bedb7.jpg", 
         "https://i.pinimg.com/originals/f1/ea/fd/f1eafdb8526cf1d73f1156849b2ebef7.jpg", 
         "https://i.pinimg.com/originals/50/38/98/503898e84962573df440773b224a9d04.jpg", 
         "https://i.pinimg.com/originals/d6/51/a8/d651a8546d44aa0f2ca16e7ec610ee25.jpg", 
         "https://i.pinimg.com/originals/51/64/35/51643592f8ef433690a6d4f6756ed30f.jpg", 
         "https://i.pinimg.com/originals/46/c7/4d/46c74db33dc44bf5e0b37110cb268d27.jpg", 
         "https://i.pinimg.com/originals/1c/73/3b/1c733b10bfc31b42e4b805cffa89def7.jpg", 
         "https://i.pinimg.com/originals/0a/7c/f4/0a7cf44f2252b098b210d67fe8f94d9d.jpg", 
         "https://i.pinimg.com/originals/41/64/60/4164604df227416f5622db5ba1c175ba.jpg", 
         "https://i.pinimg.com/originals/80/a9/2d/80a92d9bf7123b4906158c5a63d94ff0.jpg", 
         "https://i.pinimg.com/originals/c1/cf/d6/c1cfd6446624ab90eb95e9e21ee6870f.png", 
         "https://i.pinimg.com/originals/44/62/a3/4462a3cf3792a8cf12587fd7875d75bc.jpg", 
         "https://i.pinimg.com/originals/de/96/a4/de96a4ee3ad09df91a60aaf580b2a481.jpg", 
         "https://i.pinimg.com/originals/22/44/23/224423878ca22cee25ed97fe9859e0f5.png", 
         "https://i.pinimg.com/originals/61/16/db/6116dbfdf899dd1f3551bf4c533e43c2.jpg", 
         "https://i.pinimg.com/originals/ea/45/cb/ea45cbbbc0b4d78d5446dc4946944ba7.jpg", 
         "https://i.pinimg.com/originals/c2/c1/9f/c2c19f5b8c573a3493589add1087a0af.jpg", 
         "https://i.pinimg.com/originals/b5/62/df/b562df9c721a3898b72eaaf0a9b3abca.png", 
         "https://i.pinimg.com/originals/f1/ce/db/f1cedb200dfab458da7ae8077c873b52.jpg", 
         "https://i.pinimg.com/originals/e8/f7/a3/e8f7a39d3f74c3514355850e4b9dc24b.jpg", 
         "https://i.pinimg.com/originals/54/e2/18/54e21838e0fc0f0f933d87354a4e244d.jpg", 
         "https://i.pinimg.com/originals/0e/ba/1a/0eba1a593d883c50cca095848cfb8722.jpg", 
         "https://i.pinimg.com/originals/1e/a4/a6/1ea4a60fd6543b2f78f7d070f44f45e9.jpg", 
         "https://i.pinimg.com/originals/89/81/89/8981895db9e17b81cd58d0c467c71cf4.jpg", 
         "https://i.pinimg.com/280x280_RS/21/85/cd/2185cdb9d25d38ea544eb4ac8159cf1f.jpg", 
         "https://i.pinimg.com/originals/9e/c1/54/9ec154489de01ba05a25a1072ed7882d.jpg", 
         "https://i.pinimg.com/originals/31/5c/bd/315cbd1ac25c4d4cdddc3638e466eb25.jpg", 
         "https://i.pinimg.com/originals/55/f4/00/55f4004efced0fff60e51bd8dd680953.jpg", 
         "https://i.pinimg.com/originals/a4/c0/3a/a4c03ab8447c56f400b9b951fbae3b1d.jpg", 
         "https://i.pinimg.com/originals/53/d4/94/53d4949d971e143cdef3fb66746b11b8.jpg", 
         "https://i.pinimg.com/originals/01/8b/a1/018ba1ad7093f1171e2aded2e3a4a699.jpg", 
         "https://i.pinimg.com/originals/88/81/f7/8881f70ea7baf030120559b04ad1146e.jpg", 
         "https://i.pinimg.com/originals/b9/50/83/b9508355aed683ece54ee4f4d703aa08.jpg", 
         "https://i.pinimg.com/originals/39/13/11/3913117585b2ffe4102619766822182b.jpg", 
         "https://i.pinimg.com/originals/ae/9f/4f/ae9f4f0232cde20d846c114591a371d9.jpg", 
         "https://i.pinimg.com/originals/df/56/7e/df567e0a14ee48f9445eab94c2804c24.jpg", 
         "https://i.pinimg.com/originals/3a/1e/f1/3a1ef1b776cbf4def64890eaf6c0aa53.jpg", 
         "https://i.pinimg.com/originals/8d/fe/54/8dfe546c883aae6099670e8a7a9f3521.jpg", 
         "https://i.pinimg.com/originals/9a/52/24/9a52246d7114dad728cd9903b26328d6.jpg", 
         "https://i.pinimg.com/originals/75/aa/74/75aa7438dc2756d1b4fe6e8d41ddb2c0.jpg", 
         "https://i.pinimg.com/originals/e1/f5/d5/e1f5d591f6c39dc23d02e33b4956a269.jpg", 
         "https://i.pinimg.com/originals/63/24/fb/6324fbf1f2d090fa33d2fc2554a0da32.jpg", 
         "https://i.pinimg.com/originals/24/8a/41/248a415c9ba2870d9d70fa983269e7e9.jpg", 
         "https://i.pinimg.com/originals/6a/1d/2b/6a1d2b33590b57cee2a2cf863b79895e.jpg", 
         "https://i.pinimg.com/originals/2f/fa/92/2ffa923ad047567126f374861a338523.jpg", 
         "https://i.pinimg.com/originals/ee/87/43/ee874395bf14a8d3d4df5925efcfdb05.jpg", 
         "https://i.pinimg.com/originals/92/94/60/929460a690114f65cead93ea5ec57535.jpg", 
         "https://i.pinimg.com/originals/cd/31/8c/cd318cf0ac622d1281b7616c9c87e42a.png", 
         "https://i.pinimg.com/originals/e8/8e/ed/e88eedaaf2c903c922121c39faf49d6a.png", 
         "https://i.pinimg.com/originals/99/43/a2/9943a261d188f048b89db41965b9715e.jpg", 
         "https://i.pinimg.com/originals/c1/0c/f2/c10cf211537491a3c1383a7bbd539d38.jpg", 
         "https://i.pinimg.com/originals/1d/a6/1a/1da61a5df4a31dd394758b035b17320e.jpg", 
         "https://i.pinimg.com/originals/fb/63/d3/fb63d39b4b4aef75f32e4e7d3b67aac3.jpg", 
         "https://i.pinimg.com/originals/c4/4b/5f/c44b5fa12edf9ea977f34f0f70414430.jpg", 
         "https://i.pinimg.com/originals/03/f2/66/03f26670d5e3040d5ee5cd4f2b032fef.jpg", 
         "https://i.pinimg.com/originals/10/d2/24/10d224ab1afae97e058fc9044d5a7e49.jpg", 
         "https://i.pinimg.com/originals/93/c6/fb/93c6fbaf62f8b797eea55f7ae79e356d.jpg", 
         "https://i.pinimg.com/originals/4d/f6/5b/4df65bb4809890faab894e8e8dff40c1.jpg", 
         "https://i.pinimg.com/originals/f0/fe/31/f0fe31397de8e5865b7930d081f1bc1d.jpg", 
         "https://i.pinimg.com/originals/8d/cd/e8/8dcde89be14c3810729dbf565f7ccb53.png", 
         "https://i.pinimg.com/originals/c3/93/08/c39308900e619b45c4c9f449709c9e95.jpg", 
         "https://i.pinimg.com/originals/cb/c6/42/cbc64270e6e5f387f85a3177e1c167ff.jpg", 
         "https://i.pinimg.com/originals/07/0d/5c/070d5c4a6ca69d819f37b8ef112eafd6.jpg", 
         "https://i.pinimg.com/originals/96/0a/b8/960ab83f5299f79064adb16a2e361189.jpg", 
         "https://i.pinimg.com/originals/ea/7c/7c/ea7c7cafb58cef706d0949f1ca6d7149.png", 
         "https://i.pinimg.com/originals/3f/fa/9a/3ffa9ad68d5e691b1669b11844483ef0.jpg", 
         "https://i.pinimg.com/originals/ef/6f/21/ef6f217ed5d203eb3907ea6b8ef24de7.jpg", 
         "https://i.pinimg.com/originals/28/a8/af/28a8afefe43210d14cdd541700a65491.jpg", 
         "https://i.pinimg.com/originals/fd/7d/cc/fd7dccdac18b43774c1e42f05f50afa0.jpg", 
         "https://i.pinimg.com/originals/00/47/9a/00479aac1d7af8b996018d89f85e7f0b.jpg", 
         "https://i.pinimg.com/originals/15/ba/c0/15bac04a0012fe79ca8959eea5138f4e.jpg", 
         "https://i.pinimg.com/originals/81/2e/53/812e53850439a2793a36323dd963257c.jpg", 
         "https://i.pinimg.com/originals/7c/42/8e/7c428e95cced74b3747d28bb503a2723.jpg", 
         "https://i.pinimg.com/originals/ec/e1/05/ece105e7dc8627be78acf85787838edb.png", 
         "https://i.pinimg.com/originals/33/42/16/3342165641bb4bcdd8d86a3960572e47.jpg", 
         "https://i.pinimg.com/originals/9e/29/d5/9e29d5bf3a4ca9e4b9c11084cf8bd8ab.jpg", 
         "https://i.pinimg.com/originals/0d/00/aa/0d00aacaba14ce204a223a941be1ffd2.jpg", 
         "https://i.pinimg.com/originals/cf/f1/ed/cff1edc018314b7696d62389738737cd.jpg", 
         "https://i.pinimg.com/originals/f9/cb/3c/f9cb3cc2d9630a06d82f48fbaf2daa11.jpg", 
         "https://i.pinimg.com/originals/7e/83/d5/7e83d5acca7261cb2feacdc6df8ad3ff.jpg", 
         "https://i.pinimg.com/originals/a4/07/c1/a407c1c94fe7b4cab1f205fad5910286.jpg", 
         "https://i.pinimg.com/originals/06/3c/ba/063cbaecd700e9151a9787c945283286.jpg", 
         "https://i.pinimg.com/originals/44/fc/7a/44fc7a984e56513f6b736d5825e9bf2a.jpg", 
         "https://i.pinimg.com/originals/58/c0/8d/58c08d72caaa4c37f3da9ec6ce01b647.jpg", 
         "https://i.pinimg.com/originals/75/c5/ee/75c5eef08118c2108b1ed670b2ed5aac.jpg", 
         "https://i.pinimg.com/originals/d1/94/e1/d194e11e1736f38d447d29d87911e094.png", 
         "https://i.pinimg.com/originals/98/60/66/9860667c468c7306789755dae55b0447.jpg", 
         "https://i.pinimg.com/originals/ab/ae/f3/abaef3b76f0c0e9295d88af4214376ec.jpg", 
         "https://i.pinimg.com/originals/13/5f/c0/135fc027dde72db0fce7b060c721fc40.jpg" 
     ] 
     return Waif 
 } 
  
 
/* Img Dynamic */ 
 function ImgLogoDynamic() { 
     let Dynamic = [ 
 "https://dynamic.brandcrowd.com/asset/logo/04ca85c5-a4c1-4582-8296-7fb8cbdf7df1/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/063a3d53-d7bb-4abb-8b20-3e45ae7c61ac/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/09699c93-f687-4c58-b6dc-cb8010de7df9/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/097b9969-5019-433a-9a3f-d2e097b50e99/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/0cd45dda-e1e6-46bc-9f0d-b49a5d3c3667/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/163db786-9e2a-494a-a996-de565ae52f83/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/1e47fc81-0c56-45d5-aa5e-07006260dfbc/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/1fd728fb-fdb3-4407-a7da-fe55bfcb5fb0/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/236a12ee-2b79-4b58-b9e4-5536f5e93db7/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/2648d66c-fec5-488f-9626-06991ca917e0/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/362270db-6933-4ccc-8c11-25b2fe97f023/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/4a0312ef-6f47-421d-9d10-354c27de8e0f/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/50dd554f-ffed-4496-b770-870fef2aefe5/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/5ed1f95d-736f-4fe3-9aec-d0a8875dee17/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/672fc6e7-e445-47e3-9391-2e1d1452960a/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/7229c0d6-cc4f-4e47-87b2-3b01285f502d/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/73113e56-8ac2-484e-9272-06759b7d51e2/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/7429f9b9-562f-439b-86cd-81f04d76d883/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/746604d3-8da9-4488-8fa9-bf301d62ea0e/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/867bea51-793c-4b09-b13f-44c9053b6754/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/882f41c2-98ee-43f2-bf07-f033cf1c3320/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/8a2d089b-7b87-4979-906e-7731b594bd4b/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/8bb23d1a-7fb2-4f5d-ba6c-2a9bd13cc673/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/8dcc7e92-c12c-40df-8c8b-9f9db93b11a0/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/8f825f13-dadf-442c-b9e5-a1daa03611c4/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/912b6462-49d3-435a-959e-5c5f3254d6c4/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/924d12da-4a2b-46b3-82cd-bc9b38a519d0/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/9459965a-f378-430a-8cb9-62778fec5713/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/9608708e-7907-4bae-892c-87964aee0454/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/99c6feef-cee4-47b3-afc7-1f192e7f48f4/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/a075034f-0363-4af4-877f-aba47a7c059d/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/a428ed89-5ed1-4b1d-b095-2ee98ae54b40/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b0fb81f5-59a4-4197-947f-26037441ea2f/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b1826077-0a6f-403d-939e-b445c334c470/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b3581ffd-a127-465b-b880-bd3770b85aad/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b5be66f6-a6a6-42dc-ab67-de8f80e96291/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b8b4fc21-d1b6-4ee1-a6f3-4410a49e123a/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b95516e4-645d-4249-b81b-b9ca65bd2087/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/b97103b8-3b7c-4f1d-8c91-451c11e8cde3/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/bbf8e7fe-13c2-420c-bb2c-9c059744d599/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/bd9069cc-408d-4f00-90b4-9d6c96bc0b3d/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/be638691-3065-45cb-b90c-263945cd0177/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/c054d202-df4b-466d-8477-2b8690030ce5/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/cc9a22ce-f65c-40ff-9eac-43c26817f44a/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/e32a0e7e-df48-4b33-bccf-1f74d395d322/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/ee1930f1-09a8-4d5e-bbe9-e43547bb7f64/logo?v=4&text=", 
 "https://dynamic.brandcrowd.com/asset/logo/fde5293a-c69b-4d77-9ec8-f3d6797d2b15/logo?v=4&text=" 
 ] 
     return Dynamic 
 }
/* Fake Reply */ 
 function Fakes() { 
     let Org = pickRandom(["0", "628561122343", "6288906250517", "6282195322106", "6281119568305", "6281282722861", "6282112790446"]) 
     let Parti = pickRandom([Org + "@s.whatsapp.net", Org + "@c.us"]) 
     let Remot = pickRandom(["status@broadcast", "120363047752200594@g.us"]) 
     let Hai = pickRandom(["Apa kabar ", "Halo ", "Hai "]) 
     let Sarapan = "👋 " + Hai + Pagi() 
     let Thum = ThumbUrl() 
     let fpayment = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             requestPaymentMessage: { 
                 currencyCodeIso4217: "USD", 
                 amount1000: SizeDoc(), 
                 requestFrom: Parti, 
                 noteMessage: { 
                     extendedTextMessage: { 
                         text: Sarapan 
                     } 
                 }, 
                 expiryTimestamp: SizeDoc(), 
                 amount: { 
                     value: SizeDoc(), 
                     offset: SizeDoc(), 
                     currencyCode: "USD" 
                 } 
             } 
         } 
     } 
     let fpoll = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             pollCreationMessage: { 
                 name: Sarapan 
             } 
         } 
     } 
     let ftroli = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             orderMessage: { 
                 itemCount: SizeDoc(), 
                 status: 1, 
                 surface: 1, 
                 message: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, 
                 orderTitle: Sarapan, 
                 sellerJid: Parti 
             } 
         } 
     } 
     let fkontak = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             contactMessage: { 
                 displayName: Sarapan, 
                 vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${Sarapan},;;;\nFN:${Sarapan},\nitem1.TEL;waid=${nomorown.split("@")[0]}:${nomorown.split("@")[0]}\nitem1.X-ABLabell:Ponsel\nEND:VCARD`, 
                 jpegThumbnail: Thum, 
                 thumbnail: Thum, 
                 sendEphemeral: true 
             } 
         } 
     } 
     let fvn = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             audioMessage: { 
                 mimetype: "audio/ogg; codecs=opus", 
                 seconds: SizeDoc(), 
                 ptt: true 
             } 
         } 
     } 
     let fvid = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             videoMessage: { 
                 title: Sarapan, 
                 h: Sarapan, 
                 seconds: SizeDoc(), 
                 caption: Sarapan, 
                 jpegThumbnail: Thum 
             } 
         } 
     } 
     let ftextt = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             extendedTextMessage: { 
                 text: Sarapan, 
                 title: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, 
                 jpegThumbnail: Thum 
             } 
         } 
     } 
     let fliveLoc = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             liveLocationMessage: { 
                 caption: Sarapan, 
                 h: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, 
                 jpegThumbnail: Thum 
             } 
         } 
     } 
     let ftoko = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             productMessage: { 
                 product: { 
                     productImage: { 
                         mimetype: "image/jpeg", 
                         jpegThumbnail: Thum 
                     }, 
                     title: Sarapan, 
                     description: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, 
                     currencyCode: "USD", 
                     priceAmount1000: SizeDoc(), 
                     retailerId: "Ghost", 
                     productImageCount: 1 
                 }, 
                 businessOwnerJid: Parti 
             } 
         } 
     } 
     let fdocs = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             documentMessage: { 
                 title: Sarapan, 
                 jpegThumbnail: Thum 
             } 
         } 
     } 
     let fgif = { 
         key: { 
             participant: Parti, 
             remoteJid: Remot 
         }, 
         message: { 
             videoMessage: { 
                 title: Sarapan, 
                 h: Sarapan, 
                 seconds: SizeDoc(), 
                 gifPlayback: true, 
                 caption: `𝗧 𝗜 𝗠 𝗘 : ${moment.tz("Asia/Makassar").format("HH:mm:ss")}`, 
                 jpegThumbnail: Thum 
             } 
         } 
     } 
     return pickRandom([fdocs, fgif, fkontak, fliveLoc, fpayment, fpoll, ftextt, ftoko, ftroli, fvid, fvn]) 
 } 
  
 function SizeDoc() { 
     return Math.pow(10, 15) 
 } 
 function PageDoc() { 
     return Math.pow(10, 10) 
 }
 