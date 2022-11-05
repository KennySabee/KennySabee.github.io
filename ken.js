async function getApiData() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const barChartData = await response.json();
    //FUNCION MAP
    const character = barChartData.results.map((x) => x.name);
    const species = barChartData.results.map((x) => x.species);
    const gender = barChartData.results.map((x) => x.gender);
  
    console.log(character, species);
  }