document.addEventListener('DOMContentLoaded', () => {
  const preguntas = [
    ["Gestión de residuos y reciclaje", "¿Qué haces con tus residuos orgánicos en casa?", 
     ["A) Los tiro con el resto de la basura.", "B) Los separo en una bolsa distinta para orgánicos.", 
      "C) Tengo compostadora o los llevo a un punto de compostaje.", "D) A veces los separo, pero depende del día."]],
    ["Gestión de residuos y reciclaje", "¿Qué haces con los aparatos electrónicos viejos?", 
     ["A) Los tiro con la basura.", "B) Los guardo 'por si acaso', aunque no los uso.", 
      "C) Los llevo a un punto limpio o los dono.", "D) Los vendo o reciclo en programas de intercambio."]],
    ["Gestión de residuos y reciclaje", "¿Qué haces con los restos de aceite usado?", 
     ["A) Lo tiro por el fregadero.", "B) Lo tiro con la basura.", 
      "C) Lo guardo y lo llevo a un punto de reciclaje.", "D) Lo reutilizo (jabón casero, etc.) o lo reciclo siempre."]],
    ["Gestión de residuos y reciclaje", "¿Qué haces con la ropa que ya no usas?", 
     ["A) La tiro.", "B) La dejo en contenedores de ropa.", "C) La dono, regalo o vendo.", 
      "D) La reutilizo como trapo, la arreglo o hago 'upcycling'."]],
    ["Gestión de residuos y reciclaje", "¿Qué haces con las pilas usadas?", 
     ["A) Las tiro con la basura normal.", "B) Las guardo sin saber qué hacer con ellas.", 
      "C) Las llevo al contenedor especial.", "D) Solo uso pilas recargables."]],
    ["Gestión de residuos y reciclaje", "¿Cómo gestionas el papel en tu vida diaria?", 
     ["A) Imprimo lo que necesito, sin pensar.", "B) Intento no imprimir, pero no siempre lo logro.", 
      "C) Uso digital casi todo y si imprimo, es doble cara.", "D) Casi no uso papel, y reciclo o reutilizo el que tengo."]],
    ["Consumo responsable", "Cuando compras ropa, ¿en qué piensas primero?", 
     ["A) Que sea barata.", "B) Que me guste, sin mirar más.", "C) Que sea de segunda mano o sostenible.", 
      "D) Que dure mucho y sea de buena calidad."]],
    ["Consumo responsable", "¿Cómo eliges los productos que compras en el supermercado?", 
     ["A) Elijo lo más barato.", "B) Miro el envase y la marca.", 
      "C) Elijo productos locales o ecológicos si puedo.", "D) Reviso etiquetas como 'bio', 'KM0', 'sin plástico', etc."]],
    ["Consumo responsable", "¿Qué haces cuando compras online?", 
     ["A) No pienso en el impacto.", "B) Intento pedir varias cosas juntas.", 
      "C) Solo compro lo necesario.", "D) Evito comprar online por los envíos y residuos."]],
    ["Consumo responsable", "¿Cómo te relacionas con la moda rápida (fast fashion)?", 
     ["A) Compro ropa nueva constantemente, me encanta seguir tendencias.", 
      "B) Compro ropa nueva de vez en cuando, sin pensar mucho.", "C) Intento evitar marcas de fast fashion.", 
      "D) Solo compro segunda mano, sostenible o reutilizo lo que ya tengo."]],
    ["Consumo responsable", "¿En qué piensas cuando eliges productos de limpieza?", 
     ["A) Solo que limpien bien.", "B) Que no sean muy caros.", 
      "C) Que sean biodegradables o sin químicos agresivos.", "D) Hago mis propios productos caseros o a granel."]],
    ["Consumo responsable", "¿Qué importancia tiene para ti el origen de los alimentos?", 
     ["A) Ninguna, con que estén buenos basta.", "B) Me fijo si es nacional.", 
      "C) Prefiero productos locales o de proximidad.", "D) Compro directamente a productores o en mercados locales."]],
    ["Movilidad sostenible", "¿Cómo te desplazas habitualmente?", 
     ["A) En coche propio.", "B) Transporte público.", "C) En bicicleta o caminando.", "D) Vehículo eléctrico compartido."]],
    ["Movilidad sostenible", "¿Cuál es tu medio de transporte más habitual para desplazarte al trabajo, clase o recados?", 
     ["A) Coche particular con motor de combustión.", "B) Transporte público (bus, tren, metro…).", 
      "C) Bicicleta o a pie.", "D) Vehículo compartido o coche eléctrico."]],
    ["Movilidad sostenible", "¿Has probado alguna vez compartir un vehículo (ej. BlaBlaCar)?", 
     ["A) No, ni me interesa.", "B) Lo conozco, pero nunca lo he usado.", 
      "C) Lo he usado alguna vez.", "D) Lo uso con frecuencia para evitar tener coche propio."]],
    ["Movilidad sostenible", "¿Cómo eliges los trayectos urbanos cortos (menos de 5 km)?", 
     ["A) En coche, por costumbre o comodidad.", "B) A veces andando, a veces en coche.", 
      "C) A pie o en bici si puedo.", "D) Siempre intento evitar el coche, aunque llueva."]],
    ["Movilidad sostenible", "¿Con qué frecuencia usas la bicicleta como medio de transporte?", 
     ["A) Nunca.", "B) Alguna vez por ocio.", "C) Varias veces por semana.", 
      "D) Es mi medio de transporte principal."]],
    ["Movilidad sostenible", "¿Tienes en cuenta el impacto ambiental cuando eliges cómo moverte?", 
     ["A) No, me importa más la rapidez.", "B) A veces lo pienso, pero no influye mucho.", 
      "C) Intento elegir opciones menos contaminantes.", "D) Sí, priorizo siempre la movilidad sostenible."]],
    ["Energía y agua", "¿Cómo gestionas el consumo de agua en casa?", 
     ["A) No me fijo, pago lo que toque.", "B) Intento cerrar el grifo y hacer duchas cortas.", 
      "C) Tengo sistemas de ahorro (grifos, cisternas, etc.).", "D) Recojo agua de lluvia o reutilizo aguas grises."]],
    ["Energía y agua", "¿Cómo gestionas el consumo energético en tu hogar?", 
     ["A) No me fijo.", "B) Apago luces si me acuerdo.", 
      "C) Uso bombillas LED y controlo aparatos en espera.", "D) Tengo electrodomésticos eficientes y monitorizo el consumo."]],
    ["Energía y agua", "¿Has revisado alguna vez la eficiencia energética de tus electrodomésticos?", 
     ["A) No, solo miro el precio.", "B) Sí, pero no fue decisivo para comprar.", 
      "C) Sí, intento que tengan etiqueta A o superior.", "D) Solo compro electrodomésticos de alta eficiencia energética."]],
    ["Energía y agua", "¿Tienes fuentes de energía renovable en casa?", 
     ["A) No, y no me lo he planteado.", "B) No, pero me gustaría.", 
      "C) He contratado energía verde a mi compañía.", "D) Tengo paneles solares, aerogeneradores u otro sistema renovable propio."]],
    ["Energía y agua", "¿Cómo gestionas la calefacción y el aire acondicionado?", 
     ["A) Los uso sin medida, según me apetece.", "B) Intento no abusar, pero a veces me paso.", 
      "C) Uso ropa adecuada o ventilo para evitar depender del sistema.", "D) Uso termostato programado, aislamiento, y bajo consumo."]],
    ["Energía y agua", "¿Cómo lavas la ropa?", 
     ["A) Siempre con agua caliente, aunque sea poca ropa.", "B) Mezclo ropa sin fijarme mucho, a temperatura alta.", 
      "C) Uso programas cortos o en frío, y espero tener carga completa.", "D) Solo lavo a baja temperatura y al aire libre, sin secadora."]],
    ["Participación e implicación social", "¿Cómo te involucras con el medio ambiente a nivel social?", 
     ["A) No me interesa.", "B) Firmo peticiones o comparto posts.", 
      "C) Participo en campañas, charlas o talleres.", "D) Soy parte activa de una ONG o colectivo ambiental."]],
    ["Participación e implicación social", "¿Has hecho voluntariado ambiental?", 
     ["A) No.", "B) Lo he pensado, pero nunca lo hice.", "C) Sí, en alguna actividad puntual.", 
      "D) Sí, de forma regular."]],
    ["Participación e implicación social", "¿Participas en iniciativas de economía circular o trueque?", 
     ["A) No, nunca.", "B) He escuchado algo pero no participo.", 
      "C) A veces participo en mercados de segunda mano o intercambio.", "D) Sí, practico activamente el trueque, reparación, intercambio."]],
    ["Participación e implicación social", "¿Tienes algún compromiso público con el medio ambiente?", 
     ["A) No, no me interesa.", "B) Lo apoyo desde la distancia.", 
      "C) He firmado manifiestos o me informo para votar con criterio.", "D) He asistido a marchas, acciones o debates ecológicos."]],
    ["Participación e implicación social", "¿Has participado en manifestaciones o actos públicos por causas ambientales?", 
     ["A) No, y no me interesa.", "B) Fui a alguna por curiosidad o acompañando a alguien.", 
      "C) Participo cuando puedo.", "D) Me movilizo regularmente o soy parte de la organización."]],
    ["Participación e implicación social", "¿Formas parte de alguna asociación, ONG o colectivo ecologista?", 
     ["A) No, ni me interesa.", "B) Conozco algunos, pero no soy miembro.", 
      "C) Estoy suscrito/a o colaboro puntualmente.", "D) Soy miembro activo/a o voluntario/a regular."]],
    ["Consciencia e información ecológica", "¿Cómo sueles informarte sobre temas ecológicos?", 
     ["A) No me interesan mucho.", "B) Lo que me sale en redes sociales.", 
      "C) Sigo cuentas y medios especializados.", "D) Leo informes, libros o participo en grupos/ecologistas."]],
    ["Consciencia e información ecológica", "¿Tienes algún tipo de compensación de huella de carbono?", 
     ["A) No sé lo que es eso.", "B) Me interesa, pero no lo he hecho.", 
      "C) Lo he calculado alguna vez.", "D) Compenso voluntariamente (donaciones, reforestación, etc.)."]],
    ["Consciencia e información ecológica", "¿Usas apps o tecnología para mejorar tu impacto ambiental?", 
     ["A) No, no me interesa.", "B) Conozco algunas pero no las uso.", 
      "C) Uso apps para movilidad, reciclaje, ahorro energético, etc.", "D) Sigo datos de mi huella y actúo en consecuencia."]],
    ["Consciencia e información ecológica", "¿Tienes algún tipo de cuenta bancaria o fondo ético/sostenible?", 
     ["A) No sabía que eso existía.", "B) Nunca lo he pensado.", 
      "C) Lo he considerado, pero no he cambiado aún.", "D) Sí, uso banca ética o invierto en proyectos sostenibles."]],
    ["Consciencia e información ecológica", "¿En tu trabajo o estudios, cómo actúas ante decisiones no sostenibles?", 
     ["A) Me callo, no es mi responsabilidad.", "B) Me incomoda, pero no actúo.", 
      "C) Propongo ideas más sostenibles si puedo.", "D) Lidero iniciativas ecológicas o sugiero cambios estructurales."]],
    ["Consciencia e información ecológica", "¿Conoces los Objetivos de Desarrollo Sostenible (ODS)?", 
     ["A) No.", "B) Los he oído, pero no sabría decir cuáles son.", 
      "C) Conozco algunos y sé en qué consisten.", "D) Me guío por ellos o los aplico en proyectos."]]
  ];

  const quizForm = document.getElementById('quizForm');
  const btnEmpezar = document.getElementById('btnEmpezar');
  const botonSiguiente = document.getElementById('botonSiguiente');
  const resultadoDiv = document.getElementById('resultado');
  const inicioDiv = document.getElementById('inicio');
  let chart = null;

  let preguntaActual = 0;
  let puntuacionTotal = 0;
  let preguntasSeleccionadas = [];
  const puntuacionesTematicas = {
    "Gestión de residuos y reciclaje": { puntuacion: 0, preguntas: 0 },
    "Consumo responsable": { puntuacion: 0, preguntas: 0 },
    "Movilidad sostenible": { puntuacion: 0, preguntas: 0 },
    "Energía y agua": { puntuacion: 0, preguntas: 0 },
    "Participación e implicación social": { puntuacion: 0, preguntas: 0 },
    "Consciencia e información ecológica": { puntuacion: 0, preguntas: 0 }
  };

  function seleccionarPreguntasAleatorias() {
    const preguntasPorTematica = {};
    preguntas.forEach(pregunta => {
      const tematica = pregunta[0];
      if (!preguntasPorTematica[tematica]) {
        preguntasPorTematica[tematica] = [];
      }
      preguntasPorTematica[tematica].push(pregunta);
    });

    const tematicas = Object.keys(preguntasPorTematica);
    const tematicasSeleccionadas = [];
    const indicesTematicas = [...Array(tematicas.length).keys()];
    for (let i = 0; i < 5; i++) {
      const indiceAleatorio = Math.floor(Math.random() * indicesTematicas.length);
      tematicasSeleccionadas.push(tematicas[indicesTematicas[indiceAleatorio]]);
      indicesTematicas.splice(indiceAleatorio, 1);
    }

    const seleccionadas = [];
    tematicasSeleccionadas.forEach(tematica => {
      const preguntasTematica = preguntasPorTematica[tematica];
      const indicesPreguntas = [...Array(preguntasTematica.length).keys()];
      for (let i = 0; i < Math.min(3, preguntasTematica.length); i++) {
        const indiceAleatorio = Math.floor(Math.random() * indicesPreguntas.length);
        seleccionadas.push(preguntasTematica[indicesPreguntas[indiceAleatorio]]);
        indicesPreguntas.splice(indiceAleatorio, 1);
        puntuacionesTematicas[tematica].preguntas++;
      }
    });

    for (let i = seleccionadas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [seleccionadas[i], seleccionadas[j]] = [seleccionadas[j], seleccionadas[i]];
    }

    return seleccionadas;
  }

  function mostrarPregunta(indice) {
    const pregunta = preguntasSeleccionadas[indice];
    const categoria = pregunta[0];
    const textoPregunta = pregunta[1];
    const respuestas = pregunta[2];

    let html = `<fieldset>
        <legend>${categoria}</legend>
        <p class="pregunta-contador">Pregunta ${indice + 1} de 15</p>
        <h2>${textoPregunta}</h2>`;

    respuestas.forEach((respuesta, i) => {
      html += `
        <label>
          <input type="radio" name="respuesta" value="${i}" required />
          <span>${respuesta}</span>
        </label>`;
    });

    html += `</fieldset>`;
    quizForm.innerHTML = html;
  }

  function calcularPuntuacion(valor, tematica) {
    puntuacionTotal += Number(valor);
    puntuacionesTematicas[tematica].puntuacion += Number(valor);
  }

  function evaluarTematica(puntuacion, numPreguntas) {
    const maxPuntuacion = numPreguntas * 3;
    const porcentaje = (puntuacion / maxPuntuacion) * 100;
    let evaluacion, color;
    if (porcentaje <= 33) {
      evaluacion = "Necesitas mejorar mucho en esta área.";
      color = '#ff6666';
    } else if (porcentaje <= 66) {
      evaluacion = "Tienes buenas prácticas, pero puedes mejorar.";
      color = '#ff9933';
    } else if (porcentaje <= 85) {
      evaluacion = "Eres bastante sostenible, ¡bien hecho!";
      color = '#66ff66';
    } else {
      evaluacion = "¡Eres un ejemplo en esta área!";
      color = '#33cc33';
    }
    return { evaluacion, color };
  }

  function getImagenTematica(puntuacion) {
    if (puntuacion >= 8) return "https://cdn-icons-png.flaticon.com/256/8445/8445903.png";
    if (puntuacion >= 6) return "https://cdn-icons-png.flaticon.com/256/8445/8445936.png";
    if (puntuacion >= 4) return "https://cdn-icons-png.flaticon.com/256/8445/8445784.png";
    if (puntuacion >= 2) return "https://cdn-icons-png.flaticon.com/256/8445/8445858.png";
    return "https://cdn-icons-png.flaticon.com/256/8445/8445922.png";
  }

  function mostrarResultado() {
    quizForm.style.display = 'none';
    botonSiguiente.style.display = 'none';

    const maxPuntuacionTotal = 15 * 3;
    let nivelGeneral, imagen;

    if (puntuacionTotal <= maxPuntuacionTotal * 0.33) {
      nivelGeneral = "Necesitas mejorar mucho en sostenibilidad.";
      imagen = "https://heura.net/wp-content/uploads/2019/11/plasticos.jpg";
    } else if (puntuacionTotal <= maxPuntuacionTotal * 0.66) {
      nivelGeneral = "Tienes buenas prácticas, pero puedes mejorar.";
      imagen = "https://img.freepik.com/fotos-premium/cerrar-mano-tirando-botella-plastico-vacia-basura-concepto-reciclaje_43780-3257.jpg";
    } else if (puntuacionTotal <= maxPuntuacionTotal * 0.85) {
      nivelGeneral = "Eres bastante sostenible, ¡bien hecho!";
      imagen = "https://m-24.com.ar/wp-content/uploads/voluntarios-recogiendo-basura-en-la-playa-scaled.jpg";
    } else {
      nivelGeneral = "¡Eres un ejemplo de sostenibilidad!";
      imagen = "https://ecologiadigital.bio/wp-content/uploads/un-mundo-sin-contaminacion-estrategias-para-un-futuro-sostenible-y-saludable.jpg";
    }

    let resultadoHTML = `
      <div><strong>Puntuación total: ${puntuacionTotal} de ${maxPuntuacionTotal}</strong><br>${nivelGeneral}</div>
      <img src="${imagen}" alt="Resultado de sostenibilidad">
      <h3>Resultados por temática:</h3>`;

    const chartData = {
      labels: [],
      datasets: [{
        label: 'Porcentaje de sostenibilidad',
        data: [],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)'
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    for (const [tematica, datos] of Object.entries(puntuacionesTematicas)) {
      if (datos.preguntas > 0) {
        const { evaluacion, color } = evaluarTematica(datos.puntuacion, datos.preguntas);
        const porcentaje = (datos.puntuacion / (datos.preguntas * 3)) * 100;
        const imagenTematica = getImagenTematica(datos.puntuacion);
        resultadoHTML += `
          <div class="tematica-result" style="background-color: ${color};">
            <img src="${imagenTematica}" alt="Icono de resultado">
            <div>
              <strong>${tematica}</strong>: ${datos.puntuacion} de ${datos.preguntas * 3}<br>
              ${evaluacion}
            </div>
            <img src="${imagenTematica}" alt="Icono de resultado">
          </div>`;
        chartData.labels.push(tematica);
        chartData.datasets[0].data.push(porcentaje);
      }
    }

    resultadoDiv.innerHTML = resultadoHTML;

    if (chart) {
      chart.destroy();
    }

    const ctx = document.getElementById('resultChart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'pie',
      data: chartData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                const label = context.label || '';
                const value = context.parsed || 0;
                return `${label}: ${value.toFixed(1)}%`;
              }
            }
          }
        }
      }
    });
  }

  btnEmpezar.addEventListener('click', () => {
    console.log('Botón Empezar clicado');
    puntuacionTotal = 0;
    preguntaActual = 0;
    for (const tematica in puntuacionesTematicas) {
      puntuacionesTematicas[tematica].puntuacion = 0;
      puntuacionesTematicas[tematica].preguntas = 0;
    }
    preguntasSeleccionadas = seleccionarPreguntasAleatorias();
    inicioDiv.style.display = 'none';
    resultadoDiv.textContent = '';
    quizForm.style.display = 'block';
    botonSiguiente.style.display = 'block';
    mostrarPregunta(preguntaActual);
  });

  botonSiguiente.addEventListener('click', () => {
    const seleccion = quizForm.elements['respuesta'];
    let respuestaElegida = null;
    for (const radio of seleccion) {
      if (radio.checked) {
        respuestaElegida = radio.value;
        break;
      }
    }
    if (respuestaElegida === null) {
      alert('Por favor, selecciona una respuesta para continuar.');
      return;
    }
    const tematicaActual = preguntasSeleccionadas[preguntaActual][0];
    calcularPuntuacion(respuestaElegida, tematicaActual);
    preguntaActual++;
    if (preguntaActual < preguntasSeleccionadas.length) {
      mostrarPregunta(preguntaActual);
    } else {
      mostrarResultado();
    }
  });
});
