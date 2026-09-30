function Loop_For(){
    const forLista = document.getElementById('listaFor');
    forLista.innerHTML = "";

    for(let dias = 10; dias>=1; dias--) {
        const item = document.createElement('li');
        item.innerText = `Faltam ${dias} para a viagem🛫`;
        forLista.appendChild(item);
    }

    const diaFinal = document.createElement('li');
    diaFinal.innerHTML = `<strong>Chegou o dia. Hora de decolar!</strong>✈️`;
    forLista.appendChild(diaFinal);
    
    

}

function Loop_While(){
    const listaWhile = document.getElementById('listaWhile');
    listaWhile.innerHTML = "";

    let peso = 0;
    const pesoMaximo = 25;

    while(peso<pesoMaximo) {
        peso+=3;
        const item = document.createElement('li');
        item.innerText = `Adicionando roupas...pesoa atual ${peso}kg `;
        listaWhile.appendChild(item);
    }

    const itemFinal = document.createElement('li');
    itemFinal.innerHTML = `<strong>Bagagem cheia e pronta para o embarque!</strong>✈️💼`;
    listaWhile.appendChild(itemFinal);

}
