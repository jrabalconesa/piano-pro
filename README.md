# Piano PRO · Primera edición
Aplicación estática en español para aprendizaje adulto. Identidad lila, DM Sans y Manrope, navegación de la familia PRO.

## Ejecución
Servir `dist/` mediante HTTPS o localhost. No necesita instalación ni compilación. Para GitHub Pages publicar el contenido de `dist/` en el repositorio `piano-pro`; los enlaces a recursos son relativos y las rutas utilizan fragmentos. No contiene claves ni necesita servidor propio.

## Incluido
- 12 ejercicios originales revisados, tres pequeñas piezas; etapas iniciales y estudios introductorios para etapas posteriores.
- Datos musicales comunes a guía, partitura SVG, teclado, reproducción y práctica MIDI.
- Notación inicial diatónica en Do mayor; 2/4, 3/4, 4/4 y 6/8 en metrónomo.
- Audio sintetizado mediante Web Audio, reloj de audio y programación anticipada.
- Práctica libre MIDI por grupos de notas y práctica con tempo; notas y entradas, sin atribuir técnica ni expresión.
- AIA v1 por historial, dificultad declarada y revisión de última toma MIDI; no acredita consolidación ni niveles.
- Historial local exportable/importable y biblioteca local IndexedDB de originales (sin transcripción).
- Asistente VEVOR BD-881D según manual aportado: sensibilidad Sync/Vel 5 s, transposición 0 y modo normal.

## Verificación
`node --check dist/app.js`
`node tests/music.cjs`
Los tests comprueban compases completos, duración igual en manos, alturas, generación de vistas y grupos MIDI para los doce ejercicios. Verificar en navegador reproducción, navegación, 6/8, autoevaluación y biblioteca. MIDI, velocidad transmitida, CC64, latencia y comportamiento en móviles requieren hardware real.

## Límites de v1
No reconoce audio por micrófono, no controla LEDs físicos, no sincroniza entre dispositivos, no importa partituras a ejercicios evaluables ni exporta MIDI/MusicXML. La partitura SVG se limita al catálogo inicial; para repertorio externo y notación compleja debe incorporarse un motor completo con MusicXML. Los niveles medios y avanzados muestran contenidos preparatorios, no cursos completos. AIA aún no contiene consolidación espaciada ni sesiones por cuenta en nube.

## Siguientes iteraciones
1. Validación con VEVOR real y calibración de latencia.
2. AIA con objetivos por habilidad, sesiones recuperables, variantes y repaso espaciado.
3. Repertorio y motor MusicXML completo, exportaciones y fragmentos de práctica.
4. Ampliación metodológica gradual, dinámica y pedal interpretados con límites explícitos.

## Datos
El historial se guarda bajo `piano-pro-v1` en localStorage. Los archivos se guardan en `piano-pro-files` de IndexedDB. Cada dominio tiene almacenamiento independiente: exportar/importar historial al migrar de Sites a Pages; archivos originales se trasladan aparte.

## Perfiles locales (v2)
Selector en cabecera y sección Perfiles: crear con nombre/avatar, renombrar y cambiar de persona. Cada perfil guarda historial, preferencias y preparación del piano en una clave propia. El historial y preferencias anteriores se copian una vez a `legacy` («Perfil inicial»), conservando la clave original. Los archivos antiguos sin propietario se asignan lógicamente a ese perfil; los nuevos incluyen `profileId`. Lectura y eliminación comprueban propietario, y las operaciones asíncronas conservan el perfil de origen. Cambiar perfil detiene audio/captura MIDI y restablece el contexto. Cada pestaña mantiene su perfil, aunque cambie la selección en otra pestaña.

La exportación incluye solo el perfil activo; importar combina el historial en el perfil activo sin crear ni sobrescribir otros. No hay contraseña ni privacidad entre personas que comparten navegador. No se elimina ningún historial ni archivo al cambiar perfiles.

Prueba adicional: `node tests/profiles.cjs` (migración, aislamiento, nombres, archivos heredados, recarga y pestañas).

## Mi piano · Manual (v4)
Sección propia con icono, acceso desde el menú y desde el bloque Mi piano. Incluye únicamente la parte española del manual VEVOR BD-881D aportado (páginas 85–104 del PDF original, conservadas sin cambiar su contenido), en `dist/manuals/vevor-bd-881d-es.pdf`. Guía de diez grupos de controles, catálogos enlazados y trece FAQ con referencias al PDF español. Los controles se accionan en el instrumento; la app no envía órdenes para cambiar sus ajustes ni LED.
