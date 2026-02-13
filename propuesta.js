let intentosNo = 0;
let escalaSi = 1;

function mostrarPregunta() {
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("modal").classList.remove("hidden");
}

function rechazar() {
  intentosNo++;

  if (intentosNo === 1) {
    // Primera vez: Solo "parpadea" el recuadro (se quita y vuelve rápido)
    const modal = document.querySelector(".modal-content");
    modal.style.opacity = "0";
    setTimeout(() => {
      modal.style.opacity = "1";
    }, 200);
  } else if (intentosNo === 2) {
    // Segunda vez: Cambia el texto y empieza a crecer el SI
    document.getElementById("pregunta-texto").innerText =
      "veo que estas pulsando la opcion incorrecta... de todos modos te dejo la opcion correcta un poco mas grande para que la veas";
    agrandarSi();
  } else {
    // Siguientes veces: Sigue creciendo dramáticamente
    agrandarSi();
  }
}

function agrandarSi() {
  // CAMBIO DRAMÁTICO: En lugar de sumar, multiplicamos el tamaño por 1.5
  // Esto hace que crezca un 50% sobre su tamaño actual cada vez.
  escalaSi *= 1.5;

  const btnSi = document.getElementById("btn-si");
  btnSi.style.transform = `scale(${escalaSi})`;

  // Ajusté un poco el límite para que se note más la explosión antes de llenar la pantalla
  if (escalaSi > 8) {
    btnSi.style.position = "fixed";
    btnSi.style.top = "0";
    btnSi.style.left = "0";
    btnSi.style.width = "100vw";
    btnSi.style.height = "100vh";
    btnSi.style.zIndex = "2000";
    btnSi.style.borderRadius = "0";
    btnSi.style.display = "flex";
    btnSi.style.justifyContent = "center";
    btnSi.style.alignItems = "center";
    btnSi.style.fontSize = "10rem"; // ¡Texto gigante también!
    btnSi.innerText = "SI!!!"; // Cambia el texto para que sea más impactante
  }
}

function aceptar() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");
  // Reseteamos el botón por si acaso
  const btnSi = document.getElementById("btn-si");
  btnSi.style.position = "static";
  btnSi.style.transform = "scale(1)";
  btnSi.innerText = "si";
  escalaSi = 1;
  intentosNo = 0;
}
