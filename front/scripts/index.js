console.log(tempData);
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards");

  tempData.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
            <img src="${data.poster}" alt="${data.title}">
            <div class="infocontainer">
            <h2 class="titulo">${data.title}</h2>
            <h3 class="subtitulo">${data.director} | ${data.year}</h3>
            <p class="cuerpo">
             Duración: ${data.duration}.</br>
             Género: ${data.genre.map((el) => ` ${el}`)}.</br>
             Puntuación: ${data.rate}.
            </p>
            <div class="pie"><a href="${data.link}">Más información</a></div>
            </div>
        `;

    container.appendChild(card);
  });
});
