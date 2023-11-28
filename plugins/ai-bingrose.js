import axios from 'axios';

import uploadImage from '../lib/uploadImage.js';


let defaultTone = "Balanced"; // Default tone
let currentTone = defaultTone; // Initial tone

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) return m.reply(`Ex: ${usedPrefix + command} hello`);

    if (text.startsWith("set model")) {
        // Handle setting the model
        let modelName = text.split("set model ")[1].trim().toLowerCase();

        // Check if the specified model is valid
        if (["precise", "balanced", "creative"].includes(modelName)) {
            currentTone = modelName; // Set the current tone to the specified model name
            return m.reply(`Tone set to: *${currentTone}*`);
        } else {
            return m.reply("Invalid model name. Available models: Precise, Balanced, Creative");
        }
    }

    const isWeb = text.includes("--web");

    text = text.replace("--web", "").trim();

    conn.sendMessage(m.chat, {
        react: {
            text: '🤔',
            key: m.key,
        }
    });

    try {
        let resultMessage = ''; // Define resultMessage at the beginning

        if (text.includes('buatkan saya') || text.includes('generate gambar')) {
            // Handle text generation with another API
            const response = await axios.get(`https://api.yanzbotz.my.id/api/text2img/bing-image?prompt=${encodeURIComponent(text)}&apiKey=beraksekebon`);
            
            if (response.data.status === 200 && response.data.result.length > 0) {
                const images = response.data.result;

                // Send each image with a 10-second delay
                for (const imageUrl of images) {
                    setTimeout(() => {
                        conn.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
                    }, 10000); // 10000 milliseconds = 10 seconds
                }
            } else {
                m.reply("An error occurred. Please try again later.");
            }
        } else {
            // Handle image or text generation with the original API
            let data;
            if (m.quoted && m.quoted.mimetype && /image\/(jpe?g|png)/.test(m.quoted.mimetype)) {
                // Handle image case
                let img = await m.quoted.download();
                let url = await uploadImage(img);

                // Call API with image data
                const response = await axios.post('https://api.itsrose.life/chatGPT/bing_chat', {
                    prompt: text,
                    init_image: url,
                    time_zone: "Asia/Jakarta",
                    tone: currentTone
                }, {
                    headers: {
                        'Authorization': global.rose,
                        'Content-Type': 'application/json'
                    }
                });

                data = response.data.result.message;
            } else if (text) {
                // Handle text-only case
                // Call API with text data
                const response = await axios.post('https://api.itsrose.life/chatGPT/bing_chat', {
                    prompt: text,
                    init_image: "",
                    time_zone: "Asia/Jakarta",
                    tone: currentTone,
                    strip_markdown: false
                }, {
                    headers: {
                        'Authorization': global.rose,
                        'Content-Type': 'application/json'
                    }
                });

                // Extract data from the API response
                data = response.data.result;
                const message = data.message.content.replace(/\[\^\d+\^\]/g, '');
                const sources = data.sources;
                const suggestions = data.suggestions;

                // Create a message that includes the main content and additional information
                resultMessage = `*Jawaban:*\n${message}\n\n`;

                // Add information from sources
                if (sources && sources.length > 0) {
                    resultMessage += "*Sources:*\n";
                    for (const source of sources) {
                        resultMessage += `- ${source.title}\n${source.url}\n`;
                    }
                }

                // Add suggestions
                if (suggestions && suggestions.length > 0) {
                    resultMessage += "\n*Suggestions:*\n";
                    for (const suggestion of suggestions) {
                        resultMessage += `- ${suggestion}\n`;
                    }
                }

                if (isWeb) {
                    // Call API with additional parameter for web search
                    const webResponse = await axios.post('https://api.itsrose.life/chatGPT/bing_chat', {
                        prompt: text,
                        init_image: "",
                        time_zone: "Asia/Jakarta",
                        tone: "Creative", 
                        strip_markdown: false
                    }, {
                        headers: {
                            'Authorization': global.rose,
                            'Content-Type': 'application/json'
                        }
                    });

                    const webResults = webResponse.data.result.web_search_results;

                    // Add web search results to the message
                    if (webResults && webResults.length > 0) {
                        resultMessage += "\n*Web Search Results:*\n";
                        for (const webResult of webResults) {
                            resultMessage += `- ${webResult.title}\n${webResult.url}\n${webResult.description}\n`;
                        }
                    }
                }
            } else {
                return m.reply(`Usage: *${usedPrefix + command}* <text> or reply/send image with caption *${usedPrefix + command}*`);
            }

            // Use message, sources, and suggestions as needed
            
            const button = {
                text: resultMessage,
                contextInfo: {
                    externalAdReply: {
                        title: "Bing",
                        body: wm,
                        thumbnailUrl: 'https://telegra.ph/file/5274b3bfc52e0557d6d1c.jpg',
                        sourceUrl: global.fgyt,
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            };

            await conn.sendMessage(m.chat, button, { quoted: m });
        }

    } catch (error) {
        console.error(error);
        m.reply(error.message || error);
    }
};

handler.command = /^bing$/i;
handler.help = ['bing <text>'];
handler.tags = ['ai'];
handler.limit = true;

export default handler;