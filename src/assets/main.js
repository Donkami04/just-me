// const fetch = require('node-fetch') 
// import fetch from 'node-fetch'
const API = 'https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=PL_c9BZzLwBRLVh9OdCBYFEql6esA6aRsi&part=snippet&maxResults=4';

const contenido = document.getElementById('contenedor');
const emergente = document.querySelector(' .emergente');

const options = {
	method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9ba8647aabmsh4e9da4a0a04c5b2p1c4f8cjsn267debaf3e43',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;

};


// Esta funcion se llama automaticamente
(async () => {
    try{
        const videos = await fetchData(API);
        console.log(videos.items[0].snippet.thumbnails.high.url)
        let view = `
        
        ${videos.items.map(video => `
        <a href="https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}"target="_blank">
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="aaaa" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${video.snippet.title}
                </h3>
            </div>
        </div>
        </a>`
        ).slice(0,8).join('')}
        `;
        contenido.innerHTML = view;
    } catch(error){
        console.log(stack.error)
        throw new Error(error)
        
    }
})();