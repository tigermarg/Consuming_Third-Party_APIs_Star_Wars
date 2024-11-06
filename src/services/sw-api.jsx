export async function getAllStarships(){
    let url = "https://swapi.dev/api/starships"
    let allStarships = [];

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.results;
    }catch(err){
        console.error(err)
    }
        return allStarships
    }

    

