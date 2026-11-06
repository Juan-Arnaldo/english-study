// ============================================================
// CONTENIDO DE LA PÁGINA — aquí es donde agregas/editas todo.
// - "tenses": notas por tiempo verbal (explicaciones con TUS palabras).
// - "files": unidades del libro (File 1–10, lecciones A/B/C).
//   En cada lección, "tenses" enlaza con los ids de arriba.
// ============================================================
window.CONTENT = {
  groups: ["Presente", "Pasado", "Futuro", "Perfectos", "Modales", "Condicionales", "Preposiciones"],

  tenses: [
    {
      id: "present-simple", group: "Presente", name: "Present simple",
      es: "Hábitos, rutinas y hechos que siempre son verdad.",
      form: ["+ I/you/we/they work · he/she/it works", "− don't / doesn't + verbo base", "? Do / Does + sujeto + verbo base?"],
      examples: ["I play football on Sundays.", "She doesn't like coffee.", "Does he live here?"],
      mistakes: ["✗ She work here → ✓ She works here", "✗ Does she works? → ✓ Does she work?"],
      rules: ["He / she / it → el verbo lleva -s: work → works",
        "Verbos que terminan en -s, -sh, -ch, -x, -o → -es: watch → watches, go → goes",
        "Consonante + y → quita la y y pon -ies: study → studies (vocal + y solo -s: play → plays)",
        "Excepción: have → has",
        "En negativas y preguntas el verbo vuelve a la base: She doesn't work / Does she work?"],
      note: ""
    },
    {
      id: "present-continuous", group: "Presente", name: "Present continuous",
      es: "Lo que pasa ahora mismo o planes ya organizados.",
      form: ["+ am / is / are + verbo-ing", "− am not / isn't / aren't + verbo-ing", "? Am / Is / Are + sujeto + verbo-ing?"],
      examples: ["I'm studying English.", "They aren't watching TV.", "Are you coming tonight?"],
      mistakes: ["✗ I studying → ✓ I'm studying"],
      rules: ["Verbo + -ing: work → working",
        "Termina en -e muda → quita la e: make → making",
        "Consonante-vocal-consonante corta → duplica la última: run → running, sit → sitting",
        "Termina en -ie → y + ing: lie → lying",
        "Los verbos de estado (like, know, want, love) normalmente no se usan en continuous"],
      note: ""
    },
    {
      id: "imperative", group: "Presente", name: "Imperative",
      es: "Órdenes, instrucciones e invitaciones.",
      form: ["+ verbo base", "− Don't + verbo base"],
      examples: ["Open the door.", "Don't be late."],
      mistakes: [],
      rules: ["Se usa el verbo base, sin sujeto: Sit down.",
        "Negativo: Don't + verbo base",
        "Para proponer algo en grupo: Let's + verbo base"],
      note: ""
    },
    {
      id: "past-simple", group: "Pasado", name: "Past simple",
      es: "Acciones terminadas en un momento del pasado.",
      form: ["+ verbo-ed (regular) o forma irregular", "− didn't + verbo base", "? Did + sujeto + verbo base?"],
      examples: ["I visited my aunt yesterday.", "She didn't go to work.", "Did you see that movie?"],
      mistakes: ["✗ Did you went? → ✓ Did you go?"],
      rules: ["Regulares: verbo + -ed: work → worked",
        "Termina en -e → solo -d: like → liked",
        "Consonante + y → -ied: study → studied",
        "Consonante-vocal-consonante corta → duplica: stop → stopped",
        "Irregulares: se memorizan (go → went, see → saw)",
        "En negativas y preguntas el verbo vuelve a la base: didn't go / Did you go?",
        "To be: was (I, he, she, it) · were (you, we, they)"],
      note: ""
    },
    {
      id: "past-continuous", group: "Pasado", name: "Past continuous",
      es: "Algo que estaba en progreso en un momento del pasado.",
      form: ["+ was / were + verbo-ing", "− wasn't / weren't + verbo-ing", "? Was / Were + sujeto + verbo-ing?"],
      examples: ["I was sleeping at 10.", "They were playing when it started to rain."],
      mistakes: [],
      rules: ["I / he / she / it → was · you / we / they → were",
        "Verbo + -ing (mismas reglas de ortografía que present continuous)",
        "Se usa mucho con when (acción corta) y while (acción larga)"],
      note: ""
    },
    {
      id: "will", group: "Futuro", name: "Will",
      es: "Decisiones en el momento, predicciones y promesas.",
      form: ["+ will + verbo base", "− won't + verbo base", "? Will + sujeto + verbo base?"],
      examples: ["I'll help you.", "It will rain tomorrow.", "I won't tell anyone."],
      mistakes: ["✗ I will to go → ✓ I will go"],
      rules: ["Es igual para todas las personas: no lleva -s (he will go)",
        "Después de will va el verbo base, sin to",
        "Contracciones: I will → I'll · will not → won't"],
      note: ""
    },
    {
      id: "going-to", group: "Futuro", name: "Be going to",
      es: "Planes e intenciones, o predicciones basadas en evidencia.",
      form: ["+ am / is / are going to + verbo base", "− am not / isn't / aren't going to + verbo base"],
      examples: ["I'm going to study tonight.", "Look at those clouds! It's going to rain."],
      mistakes: [],
      rules: ["Cambia am / is / are según el sujeto: I am, he is, they are",
        "Después de going to va el verbo base: going to eat",
        "Hablando se suele contraer: I'm going to, she's going to"],
      note: ""
    },
    {
      id: "present-perfect", group: "Perfectos", name: "Present perfect",
      es: "Experiencias de vida o cosas pasadas con relevancia en el presente.",
      form: ["+ have / has + participio pasado", "− haven't / hasn't + participio", "? Have / Has + sujeto + participio?"],
      examples: ["I've been to Mexico.", "She hasn't finished yet.", "Have you ever eaten sushi?"],
      mistakes: ["✗ I have went → ✓ I have gone"],
      rules: ["I / you / we / they → have · he / she / it → has",
        "Participio regular = igual que el past simple (-ed): worked",
        "Participio irregular se memoriza: go → gone, see → seen, do → done",
        "Yet va al final en negativas y preguntas · already va en afirmativas",
        "been = fue y volvió · gone = fue y sigue allá"],
      note: ""
    },
    {
      id: "can-could", group: "Modales", name: "Can / Could",
      es: "Habilidad, permiso y peticiones.",
      form: ["+ can / could + verbo base", "− can't / couldn't + verbo base"],
      examples: ["I can swim.", "Could you open the window?"],
      mistakes: ["✗ She cans swim → ✓ She can swim"],
      rules: ["No lleva -s con he / she / it: she can swim",
        "Después va el verbo base, sin to",
        "Negativo: can't / cannot · couldn't",
        "Preguntas: se invierte el orden: Can you swim?"],
      note: ""
    },
    {
      id: "should-must", group: "Modales", name: "Should / Must / Have to",
      es: "Consejos (should), obligación fuerte (must) y obligación externa (have to).",
      form: ["+ should / must + verbo base", "+ have to / has to + verbo base", "− shouldn't / mustn't / don't have to"],
      examples: ["You should sleep more.", "I have to work tomorrow.", "You mustn't park here."],
      mistakes: ["mustn't = prohibido · don't have to = no es necesario"],
      rules: ["Should y must no llevan -s ni to: she should go",
        "Have to sí cambia: he has to work",
        "mustn't = prohibido · don't have to = no es necesario",
        "Preguntas con have to usan do / does: Do you have to go?"],
      note: ""
    },
    {
      id: "zero-first", group: "Condicionales", name: "Zero & First conditional",
      es: "Zero: hechos generales. First: situaciones reales en el futuro.",
      form: ["Zero: If + presente, presente", "First: If + presente, will + verbo base"],
      examples: ["If you heat ice, it melts.", "If it rains, I'll stay home."],
      mistakes: ["✗ If it will rain → ✓ If it rains"],
      rules: ["En la parte del if va presente, nunca will: If it rains (✗ will rain)",
        "Si el if va primero, se pone coma: If it rains, I'll stay.",
        "Se puede invertir el orden y entonces no hay coma: I'll stay if it rains."],
      note: ""
    },
    {
      id: "second", group: "Condicionales", name: "Second conditional",
      es: "Situaciones imaginarias o poco probables.",
      form: ["If + past simple, would + verbo base"],
      examples: ["If I had more time, I would travel."],
      mistakes: [],
      rules: ["En la parte del if va past simple, y en la otra would + verbo base",
        "Nunca pongas would en la parte del if",
        "Con to be se usa were para todos: If I were you…"],
      note: ""
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-time",
      "name": "Tiempo: in / on / at",
      "es": "Para decir cuándo ocurre algo.",
      "form": [
        "at → horas y momentos puntuales: at 8:00, at night, at Christmas",
        "on → días y fechas: on Monday, on May 5th, on my birthday",
        "in → meses, años, estaciones y partes del día: in July, in 2025, in summer, in the morning"
      ],
      "rules": [
        "Va de lo más específico a lo más general: at (hora) → on (día) → in (mes / año)",
        "Se dice in the morning / afternoon / evening, pero at night",
        "Fin de semana: at the weekend (UK) · on the weekend (US)",
        "Con this, next, last y every NO se usa preposición: next Friday, every day"
      ],
      "examples": [
        "I get up at 7:00.",
        "We have class on Tuesdays.",
        "My birthday is in March.",
        "I'll see you next Friday."
      ],
      "mistakes": [
        "✗ in Monday → ✓ on Monday",
        "✗ at the morning → ✓ in the morning",
        "✗ on next Friday → ✓ next Friday"
      ]
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-place",
      "name": "Lugar: in / on / at",
      "es": "Para decir dónde está alguien o algo.",
      "form": [
        "in → dentro de un espacio, ciudad o país: in the room, in London, in Mexico",
        "on → sobre una superficie o línea: on the table, on the wall, on the second floor",
        "at → un punto o lugar concreto: at home, at work, at the bus stop"
      ],
      "rules": [
        "Con at home, at work, at school y at university no se usa artículo",
        "Ciudad o país → in · dirección con número → at: at 25 Main Street",
        "Transporte: on the bus / train / plane, pero in a car / taxi",
        "On the left / on the right (a la izquierda / derecha)"
      ],
      "examples": [
        "She's in the kitchen.",
        "The keys are on the table.",
        "I'm at work.",
        "We live in Guadalajara."
      ],
      "mistakes": [
        "✗ I'm in home → ✓ I'm at home",
        "✗ I'm in the bus → ✓ I'm on the bus"
      ]
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-position",
      "name": "Posición: next to, between, behind…",
      "es": "Para describir dónde está algo en relación a otra cosa.",
      "form": [
        "in front of = delante de",
        "behind = detrás de",
        "next to / beside = al lado de",
        "between = entre (dos cosas)",
        "opposite = enfrente de",
        "under = debajo de",
        "above = por encima de",
        "near = cerca de"
      ],
      "rules": [
        "Between se usa con dos cosas · among con varias",
        "Después de la preposición va un sustantivo o pronombre de objeto: next to me (✗ next to I)",
        "In front of se escribe en tres palabras"
      ],
      "examples": [
        "The bank is next to the supermarket.",
        "The park is between the school and the hospital.",
        "He's sitting opposite me.",
        "The cat is under the table."
      ],
      "mistakes": [
        "✗ in front the school → ✓ in front of the school",
        "✗ next of the bank → ✓ next to the bank"
      ]
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-movement",
      "name": "Movimiento: to, from, into…",
      "es": "Para decir hacia dónde o desde dónde se mueve alguien.",
      "form": [
        "to → hacia un destino: go to school",
        "from → origen: from Spain",
        "into → entrar a: walk into the room",
        "out of → salir de: get out of the car",
        "through → a través de: through the park",
        "across → cruzando: across the street",
        "along → a lo largo de: along the river",
        "past → pasando por delante de: past the bank"
      ],
      "rules": [
        "Se dice go home, no go to home",
        "Arrive in + ciudad o país · arrive at + lugar concreto: arrive in Madrid, arrive at the station",
        "Get to = llegar a: get to work",
        "Go to + lugar, pero go home / go abroad / go downtown"
      ],
      "examples": [
        "I walk to school.",
        "She's from Italy.",
        "He ran into the house.",
        "Turn left and go past the bank."
      ],
      "mistakes": [
        "✗ I go to home → ✓ I go home",
        "✗ I arrived to London → ✓ I arrived in London"
      ]
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-duration",
      "name": "Duración: for / since / during / ago",
      "es": "Para hablar de cuánto dura algo, desde cuándo o hace cuánto pasó.",
      "form": [
        "for + cantidad de tiempo: for two years, for an hour",
        "since + punto de inicio: since 2020, since Monday",
        "during + evento o periodo: during the class, during the summer",
        "ago + cantidad de tiempo, va al final: two years ago"
      ],
      "rules": [
        "For y since suelen ir con present perfect: I've lived here for 3 years",
        "Ago va con past simple, nunca con present perfect: I moved here 3 years ago",
        "During + sustantivo · while + sujeto + verbo",
        "For también se usa con past simple: I studied for two hours"
      ],
      "examples": [
        "I've studied English for six months.",
        "She has worked here since 2022.",
        "I fell asleep during the movie.",
        "We met three years ago."
      ],
      "mistakes": [
        "✗ I live here since 2020 → ✓ I've lived here since 2020",
        "✗ I have moved here 3 years ago → ✓ I moved here 3 years ago"
      ]
    },
    {
      "group": "Preposiciones",
      "formLabel": "Resumen",
      "note": "",
      "id": "prep-verbs",
      "name": "Con verbos y adjetivos",
      "es": "Muchos verbos y adjetivos van siempre con una preposición concreta.",
      "form": [
        "Verbos: listen to, look at, look for, wait for, talk about, think about, depend on, belong to, believe in, pay for",
        "Adjetivos: good at, interested in, afraid of, worried about, tired of, different from, married to, excited about"
      ],
      "rules": [
        "No se pueden deducir: se memorizan junto al verbo o adjetivo",
        "Después de la preposición, un verbo va en -ing: good at swimming, interested in learning",
        "En inglés algunos verbos NO llevan preposición: enter a room, discuss a topic, marry someone"
      ],
      "examples": [
        "I'm interested in music.",
        "She's good at maths.",
        "We're waiting for the bus.",
        "He's afraid of dogs."
      ],
      "mistakes": [
        "✗ interested on → ✓ interested in",
        "✗ good in English → ✓ good at English",
        "✗ I'm agree with you → ✓ I agree with you"
      ]
    }
  ],

  // Unidades del libro. Cuando tengas el índice, rellena "grammar" y "tenses".
  files: Array.from({ length: 10 }, (_, i) => ({
    n: i + 1,
    title: "File " + (i + 1),
    lessons: ["A", "B", "C"].map(l => ({
      id: (i + 1) + l,
      title: "Lesson " + l,
      grammar: "",   // ej: "Present simple questions"
      tenses: []     // ej: ["present-simple"]
    }))
  }))
};
