const API = 'https://api.escuelajs.co/api/v1/products'

const contenido = document.getElementById('contenedor');
const emergente = document.querySelector(' .emergente');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9ba8647aabmsh4e9da4a0a04c5b2p1c4f8cjsn267debaf3e43',
		'X-RapidAPI-Host': 'weather-embed.p.rapidapi.com'
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
        const products = await fetchData(API);
        let view = `
        ${products.map(product => `
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${product.images}" alt="aaaa" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                <span aria-hidden="true" class="absolute inset-0"></span>
                ${product.description}
                </h3>
            </div>
        </div>`).slice(0,8).join('')}
        `;
        contenido.innerHTML = view;
    } catch(error){
        console.log(error)
        
    }
})();