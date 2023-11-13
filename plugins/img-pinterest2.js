import fetch from "node-fetch" 
 import axios from "axios" 
 import cheerio from "cheerio" 
 import { pinterest } from "@bochilteam/scraper" 
 import { readFileSync } from "fs" 
 const dylux = await (await import("api-dylux")).default 
  
 let handler = async (m, { 
     conn, 
     args, 
     usedPrefix, 
     text, 
     command 
 }) => { 
  
     let lister = [ 
         "v1", 
         "v2", 
         "v3", 
         "v4" 
     ] 
  
     let [feature, inputs, inputs_, inputs__, inputs___] = text.split("|") 
     if (!lister.includes(feature.toLowerCase())) return m.reply("*Example:*\n.pinterest2 v2|vpn\n\n*Pilih type yg ada*\n" + lister.map((v, index) => "  ○ " + v.toUpperCase()).join("\n")) 
  
     if (lister.includes(feature.toLowerCase())) { 
  
         if (feature == "v1") { 
             if (!inputs) return m.reply("Input query link\nExample: .pinterest2 v1|Bochi") 
             await m.reply(wait) 
             try { 
                 let res = await pinterest(inputs) 
                 let teks = "🔍 *[ RESULT ]*" 
                 await conn.sendFile(m.chat, res.getRandom() || logo, "", teks, m) 
             } catch (e) { 
                 await m.reply(eror) 
             } 
         } 
  
         if (feature == "v2") { 
             if (!inputs) return m.reply("Input query link\nExample: .pinterest2 v2|megane girl") 
             await m.reply(wait) 
             try { 
                 let res = await searchPinterest(inputs) 
                 let teks = "🔍 *[ RESULT ]*" 
                 await conn.sendFile(m.chat, res.getRandom() || logo, "", teks, m) 
             } catch (e) { 
                 await m.reply(eror) 
             } 
         } 
  
         if (feature == "v3") { 
             if (!inputs) return m.reply("Input query link\nExample: .pinterest v3|ulzanggirl") 
             await m.reply(wait) 
             try { 
                 let res = await(await fetch("https://api.lolhuman.xyz/api/pinterest2?apikey=" + lolkey + "&query=" + inputs)).json() 
                 let teks = "🔍 *[ RESULT ]*" 
                 await conn.sendFile(m.chat, ((res.result).getRandom()) || logo, "", teks, m) 
             } catch (e) { 
                 await m.reply(eror) 
             } 
         } 
  
         if (feature == "v4") { 
             if (!inputs) return m.reply("Input query link\nExample: .pinterest v4|japan girl") 
             await m.reply(wait) 
             try { 
                 let res = await dylux.pinterest(inputs) 
                 let teks = "🔍 *[ RESULT ]*" 
                 await conn.sendFile(m.chat, (res.getRandom()).replace(/236/g, "736") || logo, "", teks, m) 
             } catch (e) { 
                 await m.reply(eror) 
             } 
         } 
  
     } 
 } 
 handler.help = ["pinterest2"] 
 handler.tags = ["img"] 
 handler.command = /^(pinterest2)$/i 
 export default handler 
  
 /* New Line */ 
 async function searchPinterest(query) { 
   try { 
     const response = await fetch(`https://id.pinterest.com/search/pins/?autologin=true&q=${query}`, { 
       headers: { 
         "cookie": "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0" 
       } 
     }); 
  
     const data = await response.text(); 
     const $ = cheerio.load(data); 
     const result = []; 
     const hasil = []; 
  
     $("div > a").get().map(b => { 
       const link = $(b).find("img").attr("src"); 
       result.push(link); 
     }); 
  
     result.forEach(v => { 
       if (v == undefined) return; 
       hasil.push(v.replace(/236/g, "736")); 
     }); 
  
     hasil.shift(); 
     return hasil; 
   } catch (error) { 
     throw new Error(error); 
   } 
 }