const eachPlanet = async () => {
    try {
        const response = await fetch('http://swapi.dev/api/planets/');
        const data = await response.json();

        let planets = [];
        data.results.forEach((elem) =>{
            planets.push(elem.name.toLowerCase());
       })
       
       planets.forEach((elem)=>{
            let h2Tag = document.createElement('h2');
            h2Tag.innerHTML =`name: ${elem}`
            document.querySelector('#planets-div').appendChild(h2Tag);
       })

    } catch (error) {
        console.log('Something broke!', error);
    }
};

eachPlanet();