import { datos } from './datos.js';
var seriesTbody = document.getElementById("series");
var avgSeasonsElm = document.getElementById("average-seasons");
var seriesDetailCard = document.getElementById("series-detail-card");
function mostrarSeries(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td><a href=\"#\" class=\"serie-name\">").concat(serie.name, "</a></td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>");
        var serieNameElement = trElement.querySelector(".serie-name");
        serieNameElement.addEventListener("click", function (event) {
            event.preventDefault();
            mostrarDetalleSerie(serie);
        });
        seriesTbody.appendChild(trElement);
    });
}
function mostrarDetalleSerie(serie) {
    seriesDetailCard.innerHTML = "\n      <div class=\"card\">\n          <div class=\"card-header\">\n              <h5>".concat(serie.name, "</h5>\n          </div>\n          <div class=\"card-body\">\n              <img src=\"").concat(serie.image, "\" alt=\"").concat(serie.name, "\" class=\"img-fluid mb-3\">\n              <p>").concat(serie.description, "</p>\n              <a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.link, "</a>\n\n          </div>\n      </div>");
    seriesDetailCard.style.display = "block";
}
function calcularPromedioTemporadas(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
mostrarSeries(datos);
avgSeasonsElm.innerHTML = "Promedio de temporadas: ".concat(Math.round(calcularPromedioTemporadas(datos)));
