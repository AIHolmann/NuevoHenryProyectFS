const limpiarFormulario = () => {
  console.log("limpieza");
  const formulario = document.getElementById("formularioPelicula");

  // Limpia cada campo del formulario
  formulario.reset();
  console.log("form limpio");
};

const validarFormulario = () => {
  const formulario = document.getElementById("formularioPelicula");
  const elementosRequeridos = formulario.querySelectorAll(":required");

  // Verifica si todos los campos requeridos tienen valor
  const todosValores = Array.from(elementosRequeridos).every(
    (elemento) => elemento.value.trim() !== ""
  );

  if (todosValores) {
    alert("Formulario aceptado.");
    return true; // Formulario válido
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
  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      if (validarFormulario()) {
        console.log("Formulario enviado correctamente");
      }
    });
  } else {
    console.error("El formulario no se encontró en el DOM");
  }
  /*
  document
    .getElementById("limpiar")
    .addEventListener("click", limpiarFormulario);

  // Agrega el evento al botón de enviar
  document
    .getElementById("formularioPelicula")
    .addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
      if (validarFormulario()) {
        console.log("Formulario enviado correctamente");
        // Aquí va tu lógica para enviar los datos
      }
    });*/
});

/*
// Botón de limpieza
document.getElementById("limpiar").addEventListener("click", limpiarFormulario);

// Botón de enviar
document.getElementById("guardar").addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // Aquí iría el código para enviar el formulario
    console.log("Formulario enviado correctamente");

    /*
    
     axios.post("http://localhost:3000/movies", formData)
      .then(response => {
        console.log("Película guardada:", response.data);
        limpiarFormulario(); // Limpiar el formulario después de enviar
      })
      .catch(error => {
        console.error("Error al guardar la película:", error);
      });

    
  }
});
*/
