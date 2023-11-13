const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')
const request = require('request')
const qs = require('qs')
const cookie = require('cookie')
const FormData = require('form-data')
const { JSDOM } = require('jsdom')
const fetch = require('node-fetch')
const yts = require('yt-search')
const ytdl = require("ytdl-core")
const { sizeFormatter } = require("human-readable")
const author = "@FG98"

// TikTok Dl
function RapidApiInit(url) {
	const _key =
	  "JTJGMCUyRmIlMkY4JTJGMyUyRjglMkY4JTJGYiUyRjclMkY3JTJGNSUyRm0lMkZzJTJGaCUyRjQlMkYwJTJGOCUyRjQlMkY5JTJGOCUyRjYlMkYxJTJGMyUyRjAlMkY4JTJGYiUyRmUlMkY3JTJGMCUyRnAlMkYxJTJGNyUyRmMlMkYwJTJGMyUyRjMlMkZqJTJGcyUyRm4lMkYzJTJGZSUyRjAlMkY4JTJGNSUyRmElMkZkJTJGYyUyRjglMkZlJTJGZiUyRjElMkY=";
	// Attempt to avoid rapidapi detector  :)
	const key = decodeURIComponent(
	  Buffer.from(_key, "base64").toString("ascii")
	).replace(/\//g, "");
	return {
	  headers: {
		"x-rapidapi-key": key,
	  },
	  params: {
		url: url,
		hd: 1,
	  },
	};
  }

  
  async function byIchanZX(url) {
	try {
	  const { data: responseData } = await axios.get(
		"https://tiktok-video-no-watermark2.p.rapidapi.com" + "/",
		RapidApiInit(url)
	  );
  
	  if (!responseData) {
		throw new Error(`No se recibió respuesta del servicio`);
	  }
  
	  if (responseData.code !== 0) {
		throw new Error(responseData.message || `Error en la respuesta del servicio`);
	  }
  
	  const { author, download_count, duration, title, play, wmplay, hdplay, music } =
		responseData?.data || {};
  
	  if (!author || typeof author !== "object") {
		throw new Error(`La respuesta del servicio es inválida`);
	  }
  
	  const minutes = Math.floor(duration / 60);
     const seconds = duration % 60;

	  return {
		nickname: author.nickname,
		unique_id: author.unique_id,
		download_count,
		duration: `${minutes}:${seconds.toString().padStart(2, '0')}`,
		description: title,
		play,
		wmplay,
		hdplay,
		music,
	  };
	} catch (error) {
	  return {
		error: true,
		message: error.message,
		stack: error.stack,
	  };
	}
  }

module.exports.byIchanZX = byIchanZX