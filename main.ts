import { Serie } from './serie.js';
import { datos } from './datos.js';

const seriesTbody: HTMLElement = document.getElementById("series")!;
const avgSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;
const seriesDetailCard: HTMLElement = document.getElementById("series-detail-card")!;  

function mostrarSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");

        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#" class="serie-name">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>`;
   
        const serieNameElement = trElement.querySelector(".serie-name")!;
        serieNameElement.addEventListener("click", (event) => {
            event.preventDefault(); 
            mostrarDetalleSerie(serie);
        });

        seriesTbody.appendChild(trElement);
    });
}

function mostrarDetalleSerie(serie: Serie): void {
  seriesDetailCard.innerHTML = `
      <div class="card">
          <div class="card-header">
              <h5>${serie.name}</h5>
          </div>
          <div class="card-body">
              <img src="${serie.image}" alt="${serie.name}" class="img-fluid mb-3">
              <p>${serie.description}</p>
              <a href="${serie.link}" target="_blank">${serie.link}</a>

          </div>
      </div>`;
  
  seriesDetailCard.style.display = "block";
}

function calcularPromedioTemporadas(series: Serie[]): number {
    let totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

mostrarSeries(datos);
avgSeasonsElm.innerHTML = `Promedio de temporadas: ${Math.round(calcularPromedioTemporadas(datos))}`;
