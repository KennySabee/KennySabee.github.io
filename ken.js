let personajesLabel = [],
  especiesLabel = [],
  generoLabel = [];



// GRAFICO DE CHART JS
async function personajesChart() {
  await getApiData();

  const grafico = document.getElementById("myChart").getContext("2d");
  const myChart = new Chart(grafico, {
    type: 'pie',
    data: {
        datasets: [{
        data: {
            personajesLabel
        }
        }]
    }
    })}
    
    

personajesChart();
//     type: "bar",
//     data: {
//       labels: personajesLabel,
//       datasets: [
//         {
//           label: "Especie",
//           data: especiesLabel,
//           backgroundColor: "blue",
//           borderColor: "rgba(255, 99, 132, 1)",
          
//         },
//         {
//           label: "Género",
//           data: generoLabel,
//           backgroundColor: "pink",
//           borderColor: "rgba(255, 99, 132, 1)",
          
//         },
//       ],
//     },
//     options: {
//       tooltips: {
//         mode: "index",
//       },
//     },
//   });
  

// COMIENZO CON LA API FETCH DE RICK Y MORTY
async function getApiData() {
    const url = "https://rickandmortyapi.com/api/character";
    const response = await fetch(url);
    const barChartData = await response.json();
    //FUNCION MAP
    const character = barChartData.results.map((x) => x.name);
    const species = barChartData.results.map((x) => x.species);
    const gender = barChartData.results.map((x) => x.gender);
  
    console.log(character, species);
    personajesLabel = character;
  especiesLabel = species;
  generoLabel = gender;
}
console.log(personajesLabel)
  