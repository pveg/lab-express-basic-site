const eachPeople = async () => {
    try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();

        let people = [];
        data.results.forEach((elem) =>{
            people.push(elem.name.toLowerCase());
       })

       
       people.forEach((elem)=>{
            let h2Tag = document.createElement('h2');
            h2Tag.innerHTML =`name: ${elem}`
            document.querySelector('#people-div').appendChild(h2Tag);
       })

    } catch (error) {
        console.log('Something broke!', error);
    }
};

eachPeople();