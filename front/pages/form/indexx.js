const limpiarFormulario = () => {
  console.log("limpieza");
  const formulario = document.getElementById("formularioPelicula");

  // Limpia cada campo del formulario
  formulario.reset();
  console.log("form limpio");
};

function validateAndCreateData({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  // Validación del título
  if (!title.value.trim()) {
    alert("El título no puede estar vacío.");
    return;
  }

  // Validación del año
  const yearValue = Number(year.value);
  if (
    !/^\d{4}$/.test(year.value) ||
    yearValue < 1888 ||
    yearValue > new Date().getFullYear()
  ) {
    alert(
      "El año debe ser un número entero de 4 dígitos y debe estar entre 1888 y el año actual."
    );
    return;
  }

  // Validación y formateo del director
  const directorValue = director.value.trim();
  if (!directorValue) {
    alert("El nombre del director no puede estar vacío.");
    return;
  }
  const formattedDirector = directorValue.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );

  // Validación de la duración
  if (!/^(\d+h\s\d+min)$/.test(duration.value)) {
    alert('La duración debe estar en el formato "2h 16min".');
    return;
  }

  // Validación del género
  const genres = Array.from(genre.selectedOptions).map(
    (option) => option.value
  );
  if (!genres.length) {
    alert("Debes seleccionar un género.");
    return;
  }

  // Validación de la puntuación
  const rateValue = parseFloat(rate.value);
  if (
    isNaN(rateValue) ||
    rateValue < 1 ||
    rateValue > 10 ||
    (rateValue < 10 && !/^\d(\.\d)?$/.test(rate.value))
  ) {
    alert(
      "La puntuación debe ser un número entre 1 y 10, con un solo decimal permitido para números del 1 al 9."
    );
    return;
  }

  // Validación de la URL del póster
  const urlPattern = /^(https?:\/\/[^\s]+)$/;
  if (!urlPattern.test(poster.value)) {
    alert("La URL del póster no es válida.");
    return;
  }

  // Si todas las validaciones pasan, crea el objeto movie
  return (movie = {
    title: title.value.trim(),
    year: yearValue,
    director: formattedDirector,
    duration: duration.value,
    genre: genres,
    rate: rateValue,
    poster: poster.value.trim(),
  });
}

const validarFormulario = async () => {
  const formulario = document.getElementById("formularioPelicula");
  const elementosRequeridos = formulario.querySelectorAll(":required");

  // Verifica si todos los campos requeridos tienen valor
  const todosValores = Array.from(elementosRequeridos).every(
    (elemento) => elemento.value.trim() !== ""
  );

  const title = document.getElementById("titulo");
  const year = document.getElementById("anio");
  const director = document.getElementById("director");
  const duration = document.getElementById("duracion");
  const genre = document.getElementById("genero");
  const rate = document.getElementById("puntuacion");
  const poster = document.getElementById("poster");

  let movie = {
    title,
    year,
    director,
    duration,
    genre,
    rate,
    poster,
  };

  const reformedmovie = validateAndCreateData(movie);

  if (todosValores && reformedmovie) {
    console.log(reformedmovie);
    try {
      const response = await fetch("http://localhost:3000/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Especifica el tipo de contenido
        },
        body: JSON.stringify(reformedmovie), // Convierte el objeto a JSON
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json(); // Convierte la respuesta a JSON
      console.log("Película guardada:", data);
      limpiarFormulario(); // Limpiar el formulario después de enviar
    } catch (error) {
      console.error("Error al guardar la película:", error);
    }
  } else {
    // Si algún campo está vacío, muestra un mensaje de error
    alert("Por favor, llene todos los campos obligatorios.");
    return false; // Formulario inválido
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Tu código aquí
  console.log(document.getElementById("limpiar")); // Debe imprimir el elemento o `null`
  console.log(document.getElementById("formularioPelicula"));
  // Asegúrate de usar el selector correcto
  const limpiarBtn = document.getElementById("limpiar");
  if (limpiarBtn) {
    limpiarBtn.addEventListener("click", limpiarFormulario);
  } else {
    console.error("El botón limpiar no se encontró en el DOM");
  }
  const formulario = document.getElementById("formularioPelicula");
  const butonguardar = document.getElementById("guardar");
  if (formulario) {
    butonguardar.addEventListener("click", (e) => {
      const resp = validarFormulario();
      if (resp) {
        console.log("Formulario enviado correctamente");
      }
    });
  } else {
    console.error("El formulario no se encontró en el DOM");
  }
});
