import axios from "axios";
import fetch from 'node-fetch';

const handler = async (m, { text, command, conn }) => {
  const payloads = {
    server_name: "frieren", 
    prompt: `${text}`, // your imagination go here
    width: 512, // 512-1024
    height: 768, // 512-1024
    steps: 20, // max 50 steps
    model_id: "disney-pixar-a", // default dream_shaper
    sampler: "Euler a", // default DPMS
    seed: null, // pass null or remove to get random seed
    cfg: 12, // max 15<
    image_num: 2, // max 4
    negative_prompt: "(worst quality, low quality:1.3), extra hands, extra limbs, bad anatomy, bad face, bad eye, blurry eyes, eyes defect, baf hand, bad leg, watermark", // something you dont want to appear in the image
    safety_checker: "no", // set "yes" to replace nsfw image

    /* Another optional parameter */
    enhance_prompt: "no", // if "yes" will add another prompt
    multi_lingual: "yes", // pass "yes" if you want to use other than the English language
    clip_skip: 2,
    panorama: "no", // pass "yes" if you want a panorama image
    lora_model: "more_details", // use loaded lora_model
    hiresFix: "no", // otherwise pass "no"
    lora_strength: 0.5, // default 1
    embeddings_model: "",
    webhook: null, // will send post about generating progress
  };
  
  /* conn.chatRead(m.chat);
    conn.sendMessage(m.chat, {
      react: {
        text: '🕒',
        key: m.key,
      }
    });*/
  m.reply('_Preparing Stable diffusion..._')

  try {
    const { data } = await axios.request({
      baseURL: "https://api.itsrose.life",
      url: "/image/diffusion/txt2img",
      method: "POST",
      params: {
        apikey: '132fb9c3b775e293be07d8db',
      },
      data: payloads,
    }).catch((e) => e?.response)

    const { status, message, result } = data;

    if (!status) {
      // something wrong with your payloads
      m.reply(message); // see the message
    } else {
      const { images, metadata, generation_time } = result;
      let second = result.generation_time.toFixed()
      let model = metadata.model_id;
      let schedule = metadata.scheduler;
      let tip = result.tips
      let w = metadata.W;
      let h = metadata.H;
      let cfg = metadata.guidance_scale;
      let step = metadata.steps;
      let seed = metadata.seed;
      let streng = metadata.clip_skip
      
      let medata = `*Generating Time*: ${second} second
*prompt*: ${text}
*model_id*: ${model}
*scheduler*: ${schedule}
*W*: ${w}
*H*: ${h}
*guidance_scale*: ${cfg}
*steps*: ${step}
*seed*: ${seed}
*clip_skip*: ${streng}`;
      await m.reply(medata);

      for (const image of images) {
        await new Promise((resolve) => {
          setTimeout(async () => {
            await conn.sendMessage(m.chat, { image: { url: image } });
            resolve();
          }, generation_time * 1000);
        });
      }
    }
  } catch (error) {
    console.error(error);
    m.reply("An error occurred while processing the request.");
  }
};

handler.command = handler.help = ['txt2img'];
handler.tags = ['img', 'maker', 'prem', 'ai'];
handler.register = true;
handler.premium = true;

export default handler;