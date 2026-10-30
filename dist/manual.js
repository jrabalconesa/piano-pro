// Resumen editorial del manual VEVOR BD-881D aportado por el usuario.
// Las referencias indican la página física del PDF multilingüe, no la impresa.
const pdf='manuals/vevor-bd-881d-es.pdf';
const topics=[
['Tono y volumen','Pulsa Tono y selecciona con +/−. Para el volumen general, pulsa Volumen y ajusta con +/− entre 1 y 16.',88],
['Ritmos y acompañamiento','Pulsa Ritmo y elige con +/−. Start/Stop inicia o detiene el ritmo. Rhythm vol ajusta el acompañamiento entre 0 y 16 y también afecta a demos, acordes y batería.',89],
['Tempo y metrónomo','Tempo permite ajustar de 30 a 300 con +/−. El metrónomo del piano recorre de 1/4 a 7/4 y parada; el tempo preestablecido indicado es 120. El metrónomo de Piano PRO se ajusta de forma independiente.',90],
['Transposición','Pulsa Transponer y utiliza +/−: el intervalo documentado es −12 a +12 semitonos. Para relacionar teclas y notas en las lecciones, comprueba que esté en 0.',89],
['Sensibilidad al toque','Mantén Sync/Vel durante 5 segundos para alternar la respuesta a la intensidad. El manual indica que está desactivada al encender. Una pulsación corta activa o desactiva la sincronización del acompañamiento.',90],
['Luces del teclado','Mantén Reproducir/LED durante 5 segundos para encender o apagar las luces. El manual indica luces encendidas al iniciar. Una pulsación corta reproduce o detiene la grabación del instrumento.',90],
['Demos y lecciones internas','Demo One repite la canción elegida; Demo All recorre las canciones en bucle. +/− cambia de canción. Lección alterna modos de una tecla, conjunto y seguimiento, con pulsaciones intermedias para salir.',89],
['Teclado dual, percusión y acordes','Teclado dual cambia los registros de las dos zonas. Key Drum asigna percusión a las teclas. Chord activa el acompañamiento automático integrado. Desactiva estas funciones para seguir una lección convencional de Piano PRO.',89],
['Grabación en el piano','Al entrar en Grabación se borra la toma anterior. El metrónomo suena y la grabación empieza al tocar una tecla; el manual indica un límite de 700. Reproducir permite escuchar lo registrado. Es una función del piano, separada del historial de la app.',90],
['Cuidado y conservación','Limpia con un paño suave y limpio. Evita líquidos, humedad, sol directo, temperaturas altas y golpes. Si hay humo, calentamiento excesivo o piezas dañadas, deja de usarlo, desconecta la alimentación y contacta con el distribuidor.',103]
];
const faqs=[
['¿Cómo activo la sensibilidad de las teclas?','Mantén Sync/Vel 5 segundos. Es un interruptor: repite la pulsación larga para alternar. Comprueba la respuesta tocando la misma nota suave y fuerte. El manual indica que al encender está desactivada.',90],
['¿Cómo apago las luces?','Mantén Reproducir/LED 5 segundos. Repite para encenderlas. La pulsación corta tiene otra función: reproducir o detener la grabación.',90],
['¿Por qué una tecla suena como un tambor?','Comprueba Key Drum. Si está activado, las teclas reproducen percusión. Pulsa de nuevo para desactivarlo.',89],
['¿Por qué las notas no coinciden con el ejercicio?','Comprueba primero la transposición y vuelve a 0. Revisa también Teclado dual, porque modifica los registros. La numeración de octavas de la app puede diferir de la usada en el manual.',89],
['¿Cómo cambio el sonido de piano?','Pulsa Tono y selecciona con +/−. El catálogo comienza con T001 (piano de cola acústico) y T002 (piano acústico brillante).',92],
['¿Puedo bajar solo el acompañamiento?','Sí. Rhythm vol ajusta su volumen entre 0 y 16; el manual incluye también demos, acordes y batería en este control. El volumen general va de 1 a 16.',89],
['¿Cómo cambio la velocidad?','Pulsa Tempo y usa +/− para ajustar entre 30 y 300. Cambiar el tempo del piano no cambia automáticamente el BPM de Piano PRO.',89],
['¿Por qué Reproducir no hace nada?','Si no hay una grabación previa, el manual indica que ese botón no tendrá efecto. Haz una toma en el instrumento antes de reproducirla.',90],
['¿Se conserva la toma anterior al grabar otra?','No: entrar en el modo Grabación borra la grabación anterior del piano. Esta acción no equivale a guardar una práctica en Piano PRO.',90],
['¿Los modos Lección comprueban siempre que toque la nota correcta?','El modo de una tecla permite avanzar la melodía pulsando teclas a voluntad; el de seguimiento pide la tecla correspondiente. Por eso no deben confundirse con la evaluación MIDI de Piano PRO.',89],
['¿Cómo detengo las canciones de demostración?','Vuelve a pulsar el botón del modo activo: Demo One o Demo All. Demo One repite una canción; Demo All reproduce la secuencia completa en bucle.',88],
['¿Piano PRO controla las luces como POP Piano?','El manual describe funciones con POP Piano y conexiones MIDI/OTG o Bluetooth. Esa descripción no implica compatibilidad automática con Piano PRO. Esta versión recibe notas por Web MIDI cuando el navegador y el dispositivo lo permiten; no controla los LED.',87],
['¿Cómo limpio el teclado?','Usa un paño suave y limpio para quitar polvo y manchas superficiales. Evita que entren líquidos y mantén el instrumento apartado de humedad y calor.',103]
];
const localPage=page=>page-84;
const source=page=>'<a class="manual-source" href="'+pdf+'#page='+localPage(page)+'" target="_blank" rel="noopener">Consultar PDF · pág. '+localPage(page)+'</a>';
export function manualView(){return `<div class="eyebrow">TU INSTRUMENTO · VEVOR BD-881D</div><h1>Mi piano · Manual y ayuda</h1><p class="intro">Controles, instrucciones rápidas y preguntas frecuentes del manual de tu piano. La guía se consulta sin conectar el instrumento.</p>
<section class="card manual-cover"><div><span class="pill">MANUAL DEL FABRICANTE</span><h2>VEVOR BD-881D</h2><p>Instrucciones en español · 20 páginas · PDF extraído del manual original.</p></div><div class="manual-actions"><a class="btn primary" href="${pdf}#page=1" target="_blank" rel="noopener">Abrir manual en español ↗</a><a class="btn" href="${pdf}" download="VEVOR_BD-881D_manual_es.pdf">Descargar manual en español ↓</a><button class="btn" data-page="config">Preparación y conexión MIDI →</button></div></section>
<nav class="row manual-index" aria-label="Índice del manual"><a href="#manual-controles">Controles</a><a href="#manual-catalogos">Catálogos</a><a href="#manual-faq">Preguntas frecuentes</a></nav>
<p class="tiny muted">Resumen redactado a partir del documento aportado. Las referencias usan la numeración del PDF en español (incluida su portada). Algunas traducciones del fabricante son imprecisas: conserva el PDF como referencia y contrasta los nombres con el panel de tu instrumento.</p>
<section id="manual-controles"><h2>Guía rápida de controles</h2><div class="grid two">${topics.map(([t,d,p])=>'<article class="card manual-topic"><h3>'+t+'</h3><p>'+d+'</p>'+source(p)+'</article>').join('')}</div></section>
<section class="card" id="manual-catalogos"><h2>Catálogos y montaje</h2><p>Consulta las tablas completas y los diagramas directamente en el manual.</p><div class="row">${[['Montaje del soporte',91],['Sonidos · T001…',92],['Ritmos · R001…',97],['Canciones de demostración',102],['Cuidados y alimentación',103]].map(([t,p])=>'<a class="btn" href="'+pdf+'#page='+localPage(p)+'" target="_blank" rel="noopener">'+t+' ↗</a>').join('')}</div></section>
<section class="card teacher manual-faq" id="manual-faq"><h2>Preguntas frecuentes</h2>${faqs.map(([q,a,p])=>'<details><summary>'+q+'</summary><p>'+a+'</p>'+source(p)+'</details>').join('')}</section><div class="callout">Los botones descritos se accionan en el piano físico. La app no modifica automáticamente su configuración. Para practicar, revisa sonido de piano, transposición 0 y modos dual, percusión y acordes desactivados.</div>`}
