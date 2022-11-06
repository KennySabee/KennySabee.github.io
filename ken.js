let diaLabel = [],  
  horaLabel = [];

// GRAFICO DE CHART JS
async function horaEntradaChart() {
  await getApiData();

  const grafico = document.getElementById('myChart').getContext("2d");
  const myChart = new Chart(grafico, {
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

// se cambio a la api de dbjson NO SALE LOS GRAFICOS GRAFIA EN BLANCO 
async function getApiData() {
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

