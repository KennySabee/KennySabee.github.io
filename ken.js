<<<<<<< HEAD
let personajesLabel = [],
  especiesLabel = [],
  generoLabel = [];
=======
let diaLabel = [],  
  horaLabel = [];
>>>>>>> 6f2ab22 (feat: api nueva dbjson grafico en blanco)

// GRAFICO DE CHART JS
async function horaEntradaChart() {
  await getApiData();

  const grafico = document.getElementById('myChart').getContext("2d");
  const myChart = new Chart(grafico, {
<<<<<<< HEAD
    type: "pie",
    data: {
      datasets: [
        {
          data: {
            personajesLabel,
          },
        },
      ],
    },
  });
}

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
=======
    type: "bar",
        data: {
          labels: diaLabel,
          datasets: [
            {
              label: "Dia",
              data: diaLabel,
              backgroundColor: "blue",
              borderColor: "rgba(255, 99, 132, 1)",
    
            },
            {
              label: "Hora entrada",
              data: horaLabel,
              backgroundColor: "pink",
              borderColor: "rgba(255, 99, 132, 1)",
    
            },
          ],
        },
        options: {
          tooltips: {
            mode: "index",
          },
        },
      });
      }

horaEntradaChart();
>>>>>>> 6f2ab22 (feat: api nueva dbjson grafico en blanco)

// se cambio a la api de dbjson NO SALE LOS GRAFICOS GRAFIA EN BLANCO 
async function getApiData() {
<<<<<<< HEAD
  const url = "http://localhost:3000/weekend";
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
console.log(personajesLabel);
=======
    const url = "http://localhost:3000/Hora_entrada";
    const response = await fetch(url);
    const barChartData = await response.json();
    //FUNCION MAP
   
    const horaEntrada = barChartData.map((x) => x.value);
    const dia = barChartData.map((x) => x.description);
      
    console.log(horaEntrada, dia);
    horaLabel = horaEntrada;
    diaLabel = dia;
    
  }
  console.log(diaLabel)

>>>>>>> 6f2ab22 (feat: api nueva dbjson grafico en blanco)
