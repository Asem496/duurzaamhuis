




















































//Illia Weersverwachting
async function haalWeerOp() {
try{
    let response = await fetch('https://weerlive.nl/api/json-data-10min.php?key=4f0e8f0b4e&locatie=52.091733,5.122366'); 
    let data = await response.json();
    
    const dages = ['VR', 'ZA', 'ZO', 'MA', 'DI', 'WO', 'DO'];
    let conatiner = document.getElementById('weerverwachting');
    conatiner.innerHTML = '';
    for(let i = 0; i < 6; i++){
        let dagElement = document.createElement('div');
        dagElement.classList.add = ('dag');

        let dagNaam = document.createElement('span');
        dagNaam.textContent = dagen[i];

        let weerIcoon = document.createElement('img'); 
        weerIcoon.src =
        weerIcoon.alt = 'Weer icoon';

        let temp = document.createElement('span');
        temp.classList.add('temperatuur');
        temp.textContent = `${data.liveweer[i].temp} °C`;

        let neerslag = document.createElement('span');
        neerslag.classList.add('neerslag'); 
        neerslag.textContent = `${data.liveweer[i].d0neerslag} MM`;
        
        dagElement.appendChild(dagNaam);
        dagElement.appendChild(weerIcoon);  
        dagElement.appendChild(temp);   
        dagElement.appendChild(neerslag);
        conatiner.appendChild(dagElement);    


    }
}catch (error){
        console.error('Er is iets mis gegaan met het ophalen van de data', error);
    }
}    


haalWeerOp();