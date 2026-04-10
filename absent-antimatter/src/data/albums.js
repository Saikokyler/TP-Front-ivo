const albumFacts = [
  {
    id: 1,
    title: 'The Sidewinder',
    artist: 'Lee Morgan',
    year: 1964,
    recorded: 1963,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4157',
    cover: 'https://upload.wikimedia.org/wikipedia/en/c/c6/LeeMorganTheSidewinder.jpg',
    fact: 'El tema titular fue editado como single y termino convertido en uno de los grandes exitos de Blue Note.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 2,
    title: 'Search for the New Land',
    artist: 'Lee Morgan',
    year: 1966,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4169',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Lee_Morgan_Search_for_the_New_Land.jpg',
    fact: 'La sesion reunio a Wayne Shorter, Herbie Hancock y Grant Green, y la pieza principal supera los quince minutos.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 3,
    title: 'Cornbread',
    artist: 'Lee Morgan',
    year: 1967,
    recorded: 1965,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4222',
    cover: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Lee_Morgan_-_Cornbread.jpg',
    fact: 'Incluye "Ceora", una composicion de Morgan que con el tiempo paso al repertorio estandar del jazz.',
    tracks: 5,
    rating: 4,
  },
  {
    id: 4,
    title: 'On View at the Five Spot Cafe',
    artist: 'Kenny Burrell',
    year: 1959,
    recorded: 1959,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4021',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Kenny_Burrell_On_View_at_the_Five_Spot_Cafe.jpg',
    fact: 'Es un registro en vivo del Five Spot Cafe junto a Art Blakey, una de las actuaciones mas celebradas de Burrell.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 5,
    title: 'Blue Train',
    artist: 'John Coltrane',
    year: 1958,
    recorded: 1957,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 1577',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/b4/John_Coltrane_-_Blue_Train.jpg',
    fact: 'Es la unica sesion de Coltrane como lider para Blue Note y uno de los discos clave de su primera etapa.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 6,
    title: 'No Room for Squares',
    artist: 'Hank Mobley',
    year: 1964,
    recorded: 'marzo y octubre de 1963',
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BST 84149',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/16/Hank_Mobley_No_Room_for_Squares.jpg',
    fact: 'Reune en distintas sesiones a Lee Morgan, Donald Byrd, Andrew Hill y Herbie Hancock, y muestra a Mobley en una etapa especialmente afilada.',
    tracks: 8,
    rating: 4,
  },
  {
    id: 7,
    title: 'A Blowing Session',
    artist: 'Johnny Griffin',
    year: 1957,
    recorded: 1957,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 1559',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/72/Johnny_Griffin_A_Blowing_Session.jpg',
    fact: 'Reune a Johnny Griffin con John Coltrane y Hank Mobley en un verdadero encuentro de tenores.',
    tracks: 4,
    rating: 4,
  },
  {
    id: 8,
    title: 'Royal Flush',
    artist: 'Donald Byrd',
    year: 1962,
    recorded: 1961,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4101',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Donald_Byrd_-_Royal_Flush.jpg',
    fact: 'Fue la primera sesion de Herbie Hancock para Blue Note en ver la luz.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 9,
    title: 'The Cat Walk',
    artist: 'Donald Byrd',
    year: 1962,
    recorded: 1961,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4075',
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/40/Donald_Byrd_The_Cat_Walk.jpg',
    fact: 'La sesion junto a Pepper Adams y Duke Pearson muestra a Byrd en un hard bop elegante y muy enfocado.',
    tracks: 6,
    rating: 5,
  },
  {
    id: 10,
    title: 'Slow Drag',
    artist: 'Donald Byrd',
    year: 1968,
    recorded: 1967,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BST 84292',
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/41/Donald_Byrd_Slow_Drag.jpg',
    fact: 'La sesion de 1967 se publico a fines de 1968 y muestra a Byrd justo antes de su giro hacia sonidos mas funk.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 11,
    title: "Moanin'",
    artist: 'Art Blakey & The Jazz Messengers',
    year: 1958,
    recorded: 1958,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4003',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Art_Blakey_Moanin.jpg',
    fact: "El LP salio originalmente con el nombre de la banda, pero la popularidad de 'Moanin' termino imponiendo ese titulo.",
    tracks: 6,
    rating: 5,
  },
  {
    id: 12,
    title: 'A Night in Tunisia',
    artist: 'Art Blakey & The Jazz Messengers',
    year: 1961,
    recorded: 1960,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4049',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/28/Art_Blakey_A_Night_in_Tunisia.jpg',
    fact: 'La formacion con Lee Morgan, Wayne Shorter y Bobby Timmons convierte esta edicion en una de las mas fuertes de los Messengers.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 13,
    title: 'Midnight Blue',
    artist: 'Kenny Burrell',
    year: 1963,
    recorded: 1963,
    genre: 'Soul Jazz',
    label: 'Blue Note',
    catalogNumber: 'BLP 4123',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Midnight_Blue_Kenny_Burrell.jpg',
    fact: 'Su clima bluesero y nocturno lo convirtio en uno de los trabajos mas queridos de Kenny Burrell.',
    tracks: 7,
    rating: 5,
  },
  {
    id: 14,
    title: 'Idle Moments',
    artist: 'Grant Green',
    year: 1965,
    recorded: 1963,
    genre: 'Soul Jazz',
    label: 'Blue Note',
    catalogNumber: 'BLP 4154',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/39/Grant_Green_Idle_Moments.jpg',
    fact: 'La toma original de "Idle Moments" se mantuvo aunque excedia la duracion prevista, y termino definiendo el caracter del album.',
    tracks: 4,
    rating: 5,
  },
  {
    id: 15,
    title: 'Solid',
    artist: 'Grant Green',
    year: 1979,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'LT-990',
    cover: 'https://upload.wikimedia.org/wikipedia/en/6/6f/Grant_Green_-_Solid.jpg',
    fact: 'La sesion de 1964 quedo guardada durante anos y recien aparecio en 1979, cuando Blue Note recupero ese costado mas avanzado de Green.',
    tracks: 5,
    rating: 4,
  },
  {
    id: 16,
    title: 'Speak No Evil',
    artist: 'Wayne Shorter',
    year: 1966,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4194',
    cover: 'https://upload.wikimedia.org/wikipedia/en/e/e5/Wayne_Shorter_Speak_No_Evil.jpg',
    fact: 'El quinteto con Freddie Hubbard, Herbie Hancock, Ron Carter y Elvin Jones es una de las formaciones mas recordadas de Wayne Shorter.',
    tracks: 6,
    rating: 5,
  },
  {
    id: 17,
    title: 'JuJu',
    artist: 'Wayne Shorter',
    year: 1965,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4182',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/77/Wayne_shorter_juju.jpg',
    fact: 'Shorter grabo el disco con McCoy Tyner, Reggie Workman y Elvin Jones, la base ritmica asociada a Coltrane.',
    tracks: 6,
    rating: 5,
  },
  {
    id: 18,
    title: 'Song for My Father',
    artist: 'Horace Silver',
    year: 1965,
    recorded: '1963 y 1964',
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4185',
    cover: 'https://upload.wikimedia.org/wikipedia/en/9/92/Song_for_My_Father.jpg',
    fact: 'El tema principal fue dedicado a su padre y nacio despues de un viaje de Silver a Brasil.',
    tracks: 6,
    rating: 5,
  },
  {
    id: 19,
    title: 'The Cape Verdean Blues',
    artist: 'Horace Silver',
    year: 1966,
    recorded: 1965,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4220',
    cover: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Horace_Silver_-_The_Cape_Verdean_Blues.jpg',
    fact: 'La inspiracion remite a la herencia caboverdiana de Silver y en la mitad final del album se suma J.J. Johnson.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 20,
    title: 'Empyrean Isles',
    artist: 'Herbie Hancock',
    year: 1964,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4175',
    cover: 'https://upload.wikimedia.org/wikipedia/en/1/17/Herbie_Hancock_-_Empyrean_Isles.jpg',
    fact: 'Contiene las cuatro composiciones originales del LP, entre ellas "Cantaloupe Island", futura pieza de referencia del jazz moderno.',
    tracks: 4,
    rating: 5,
  },
  {
    id: 21,
    title: 'Maiden Voyage',
    artist: 'Herbie Hancock',
    year: 1965,
    recorded: 1965,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4195',
    cover: 'https://upload.wikimedia.org/wikipedia/en/2/2e/Maiden_Voyage_Herbie_Hancock.jpg',
    fact: 'Fue pensado como un disco con atmosfera marina y hoy es uno de los titulos mas emblematicos de Hancock en Blue Note.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 22,
    title: 'Point of Departure',
    artist: 'Andrew Hill',
    year: 1965,
    recorded: 1964,
    genre: 'Avant-Garde',
    label: 'Blue Note',
    catalogNumber: 'BLP 4167',
    cover: 'https://upload.wikimedia.org/wikipedia/en/5/56/Point_of_Departure_-_Andrew_Hill.jpg',
    fact: 'El sexteto con Eric Dolphy, Joe Henderson y Tony Williams llevo a Hill a una zona de vanguardia decisiva.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 23,
    title: 'Out to Lunch!',
    artist: 'Eric Dolphy',
    year: 1964,
    recorded: 1964,
    genre: 'Avant-Garde',
    label: 'Blue Note',
    catalogNumber: 'BLP 4163',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Eric_Dolphy_-_Out_to_Lunch%21.jpg',
    fact: 'Es la unica fecha de Eric Dolphy como lider para Blue Note y fue grabada pocos meses antes de su muerte.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 24,
    title: 'Go!',
    artist: 'Dexter Gordon',
    year: 1962,
    recorded: 1962,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4112',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Dexter_Gordon_Go.jpg',
    fact: 'El cuarteto con Sonny Clark, Butch Warren y Billy Higgins dejo una de las sesiones mas relajadas y celebradas de Dexter Gordon.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 25,
    title: 'Good Move!',
    artist: 'Freddie Roach',
    year: 1963,
    recorded: 1963,
    genre: 'Soul Jazz',
    label: 'Blue Note',
    catalogNumber: 'BLP 4158',
    cover: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Freddie_Roach_Good_Move.jpg',
    fact: 'Es el tercer album de Freddie Roach como lider y uno de sus mejores ejemplos de organo soul-jazz para Blue Note.',
    tracks: 8,
    rating: 4,
  },
  {
    id: 26,
    title: "Cool Struttin'",
    artist: 'Sonny Clark',
    year: 1958,
    recorded: 1958,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 1588',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Sonny_Clark_Cool_Struttin.jpg',
    fact: 'Ademas de su musica, se volvio celebre por una de las portadas mas iconicas del catalogo Blue Note.',
    tracks: 4,
    rating: 5,
  },
  {
    id: 27,
    title: "Leapin' and Lopin'",
    artist: 'Sonny Clark',
    year: 1962,
    recorded: 1961,
    genre: 'Hard Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4091',
    cover: 'https://upload.wikimedia.org/wikipedia/en/e/e8/Sonny_Clark_Leapin_and_Lopin.jpg',
    fact: 'Fue el ultimo album de Sonny Clark como lider publicado en vida antes de su muerte en 1963.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 28,
    title: 'The Real McCoy',
    artist: 'McCoy Tyner',
    year: 1967,
    recorded: 1967,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BST 84264',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a4/McCoy_Tyner_-_The_Real_McCoy.jpg',
    fact: 'Marco el debut discografico de Tyner en Blue Note y afirmo su voz propia despues de dejar el cuarteto de Coltrane.',
    tracks: 5,
    rating: 5,
  },
  {
    id: 29,
    title: 'Judgment!',
    artist: 'Andrew Hill',
    year: 1964,
    recorded: 1964,
    genre: 'Avant-Garde',
    label: 'Blue Note',
    catalogNumber: 'BST 84159',
    cover: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Andrew_Hill_Judgment.jpg',
    fact: 'Hill lo grabo con Bobby Hutcherson, Richard Davis y Elvin Jones; la apertura "Siete Ocho" esta escrita en 7/8.',
    tracks: 6,
    rating: 4,
  },
  {
    id: 30,
    title: 'Inner Urge',
    artist: 'Joe Henderson',
    year: 1966,
    recorded: 1964,
    genre: 'Post-Bop',
    label: 'Blue Note',
    catalogNumber: 'BLP 4189',
    cover: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Joe_Henderson_Inner_Urge.jpg',
    lastfmTitle: 'Inner Urge',
    fact: 'Fue la cuarta sesion de Henderson como lider para Blue Note y su primera en formato de cuarteto.',
    tracks: 5,
    rating: 5,
  },
];

const catalogPool = albumFacts.map((album) => album.catalogNumber);

const albumSpotlights = {
  1: { musician: 'Joe Henderson', track: 'The Sidewinder' },
  2: { musician: 'Wayne Shorter', track: 'Search for the New Land' },
  3: { musician: 'Jackie McLean', track: 'Ceora' },
  4: { musician: 'Art Blakey', track: "Birks' Works" },
  5: { musician: 'Curtis Fuller', track: 'Blue Train' },
  6: { musician: 'Andrew Hill', track: 'Up a Step' },
  7: { musician: 'Hank Mobley', track: 'Smoke Stack' },
  8: { musician: 'Pepper Adams', track: 'Requiem' },
  9: { musician: 'Pepper Adams', track: 'Hello Bright Sunflower' },
  10: { musician: 'Sonny Red', track: "Book's Bossa" },
  11: { musician: 'Bobby Timmons', track: "Moanin'" },
  12: { musician: 'Wayne Shorter', track: 'A Night in Tunisia' },
  13: { musician: 'Stanley Turrentine', track: 'Chitlins con Carne' },
  14: { musician: 'Joe Henderson', track: 'Idle Moments' },
  15: { musician: 'McCoy Tyner', track: 'Minor League' },
  16: { musician: 'Freddie Hubbard', track: 'Witch Hunt' },
  17: { musician: 'McCoy Tyner', track: 'House of Jade' },
  18: { musician: 'Joe Henderson', track: 'Song for My Father' },
  19: { musician: 'J.J. Johnson', track: 'The Cape Verdean Blues' },
  20: { musician: 'Freddie Hubbard', track: 'Cantaloupe Island' },
  21: { musician: 'Freddie Hubbard', track: 'Dolphin Dance' },
  22: { musician: 'Joe Henderson', track: 'Refuge' },
  23: { musician: 'Bobby Hutcherson', track: 'Hat and Beard' },
  24: { musician: 'Sonny Clark', track: 'Cheese Cake' },
  25: { musician: 'Blue Mitchell', track: 'Wine, Wine, Wine' },
  26: { musician: 'Art Farmer', track: "Cool Struttin'" },
  27: { musician: 'Ike Quebec', track: 'Deep in a Dream' },
  28: { musician: 'Joe Henderson', track: 'Passion Dance' },
  29: { musician: 'Bobby Hutcherson', track: 'Siete Ocho' },
  30: { musician: 'McCoy Tyner', track: 'Isotope' },
};

const getDecade = (year) => `${Math.floor(year / 10) * 10}s`;

function buildDescription(album) {
  const publishedBy = `por ${album.label}`;
  const timing =
    album.recorded && String(album.recorded) !== String(album.year)
      ? `Grabado en ${album.recorded} y publicado en ${album.year} ${publishedBy}.`
      : `Publicado en ${album.year} ${publishedBy}.`;

  return `${timing} ${album.fact}`;
}

function createOptions(correct, distractors, seed) {
  const uniqueDistractors = [...new Set(distractors)].filter(
    (option) => option !== correct
  );
  const choices = uniqueDistractors.slice(0, 3).map((texto) => ({
    texto,
    esCorrecta: false,
  }));
  const insertAt = seed % 4;

  choices.splice(insertAt, 0, {
    texto: correct,
    esCorrecta: true,
  });

  return choices.slice(0, 4);
}

function buildRelatedEntries(album) {
  const related = albumFacts.filter(
    (entry) =>
      entry.id !== album.id &&
      (entry.artist === album.artist || entry.genre === album.genre)
  );

  return related.length >= 3 ? related : albumFacts.filter((entry) => entry.id !== album.id);
}

function buildHistoryClue(album) {
  if (String(album.recorded) === String(album.year)) {
    return `La grabacion y la publicacion original ocurrieron en ${album.year}.`;
  }

  return `La sesion fue grabada en ${album.recorded} y el album aparecio en ${album.year}.`;
}

function buildTrivia(album) {
  const relatedEntries = buildRelatedEntries(album);
  const spotlight = albumSpotlights[album.id];
  const principalArtist = album.artist.toLowerCase();
  const otherFacts = relatedEntries.map((entry) => entry.fact);
  const otherHistoryClues = relatedEntries.map((entry) => buildHistoryClue(entry));
  const otherTracks = relatedEntries
    .map((entry) => albumSpotlights[entry.id]?.track)
    .filter(Boolean);
  const otherMusicians = relatedEntries
    .map((entry) => albumSpotlights[entry.id]?.musician)
    .filter(
      (musician) =>
        musician &&
        !principalArtist.includes(musician.toLowerCase()) &&
        !musician.toLowerCase().includes(principalArtist)
    );
  return [
    {
      pregunta: `Que musico, aparte del lider, participa en la sesion de "${album.title}"?`,
      opciones: createOptions(
        spotlight.musician,
        otherMusicians,
        album.id
      ),
    },
    {
      pregunta: `Que detalle historico corresponde a este disco?`,
      opciones: createOptions(
        buildHistoryClue(album),
        otherHistoryClues,
        album.id + 1
      ),
    },
    {
      pregunta: `Que tema forma parte del repertorio original de "${album.title}"?`,
      opciones: createOptions(spotlight.track, otherTracks, album.id + 2),
    },
    {
      pregunta: `Que afirmacion es cierta sobre este disco?`,
      opciones: createOptions(album.fact, otherFacts, album.id + 3),
    },
  ];
}

export const albums = albumFacts.map((album) => ({
  ...album,
  decade: getDecade(album.year),
  description: buildDescription(album),
  trivia: buildTrivia(album),
}));

export const genres = [...new Set(albums.map((album) => album.genre))].sort();
export const decades = [...new Set(albums.map((album) => album.decade))].sort();
export const artists = [...new Set(albums.map((album) => album.artist))].sort();


