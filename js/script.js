//SLIDER PAGINA INICIO
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
let index = 0;

function showNextSlide() {
    index = (index + 1) % images.length;
    slides.style.transform = `translateX(-${index * 100}%)`;
}
setInterval(showNextSlide, 2500);
//PAGINA PERSONAJES
const characters = [
    {
        name: 'Naruto Uzumaki',
        clan: 'Clan Uzumaki',
        description: `Naruto Uzumaki, un joven ninja con el sueño de convertirse en el Hokage (líder de su aldea), 
        ha sido rechazado por todos debido a que lleva dentro al Zorro de Nueve Colas, una bestia destructiva. A lo
        largo de la serie, Naruto se une a su equipo, enfrenta a poderosos enemigos, y lucha por traer de vuelta a
        su amigo Sasuke, quien se ha unido al villano Orochimaru.
        En la segunda parte, "Naruto Shippuden", Naruto regresa después de entrenar con Jiraiya y enfrenta a la organización
         Akatsuki, que busca capturar bestias como Kurama. La serie culmina en una gran guerra ninja contra el verdadero 
         villano, Obito Uchiha, y su plan para imponer un mundo de ilusiones. Al final, Naruto se convierte en el Séptimo
          Hokage, logrando su sueño, mientras resuelve conflictos y establece una nueva era de paz.`,
        image: 'personajes/perfil-naruto.webp',
        featuredImages: [
            'sub-personajes/naruto-1.webp',
            'sub-personajes/naruto-2.webp',
            'sub-personajes/naruto-3.webp'
        ]
    },
    {
        name: 'Sasuke Uchiha',
        clan: 'Clan Uchiha',
        description: 'Sasuke Uchiha es uno de los últimos sobrevivientes del poderoso Clan Uchiha, conocido por su Kekkei Genkai, el Sharingan. Desde joven, Sasuke fue consumido por el deseo de vengar a su clan, ya que su hermano mayor, Itachi Uchiha, masacró a toda su familia. Este deseo de venganza lo llevó a abandonar la aldea de Konoha y unirse a Orochimaru, con la esperanza de obtener el poder necesario para derrotar a Itachi. A lo largo de la serie, Sasuke lucha con su identidad y su lugar en el mundo, enfrentándose a decisiones difíciles que lo llevan a cuestionar su moralidad. Eventualmente, después de descubrir la verdad sobre su hermano y el oscuro pasado de su clan, Sasuke redefine su propósito y se convierte en un personaje clave en la lucha por la paz mundial.',
        image: 'personajes/perfil-sasuke.webp',
        featuredImages: [
            'sub-personajes/sasuke-1.webp',
            'sub-personajes/sasuke-2.webp',
            'sub-personajes/sasuke-3.webp'
        ]
    },
    {
        name: 'Sakura Haruno',
        clan: 'Sakura no pertenece a un clan específico destacado en la serie',
        description: 'Sakura Haruno es una ninja muy talentosa que comienza su camino como una estudiante dedicada pero insegura, en gran parte motivada por su admiración y amor hacia Sasuke Uchiha. A lo largo de la serie, Sakura desarrolla un increíble crecimiento personal y profesional. Bajo la tutela de Tsunade, la Quinta Hokage, Sakura se convierte en una experta en jutsu médico y obtiene una fuerza sobrehumana gracias al control preciso de su chakra. Aunque al principio parecía estar a la sombra de sus compañeros de equipo, Sakura demuestra ser una pieza clave en las batallas más importantes de la serie. Su carácter fuerte y su gran capacidad de empatía la convierten en un personaje central en el equipo 7. Además, su relación con Sasuke evoluciona a lo largo del tiempo, y eventualmente, se casan y tienen una hija llamada Sarada',
        image: 'personajes/perfil-sakura.webp',
        featuredImages: [
            'sub-personajes/sakura-1.webp',
            'sub-personajes/sakura-2.webp',
            'sub-personajes/sakura-3.webp'
        ]
    },
    {
        name: 'Kakashi Hatake',
        clan: 'Clan Hatake',
        description: ' Kakashi Hatake es un ninja prodigio de Konoha, conocido como el "Ninja que Copia" debido a su habilidad para imitar casi cualquier técnica que vea con su Sharingan, un ojo que le fue dado por su compañero de equipo Obito Uchiha antes de que este supuestamente muriera en una misión. Kakashi es hijo del legendario ninja Sakumo Hatake, también conocido como el "Colmillo Blanco de Konoha". A pesar de su gran talento, Kakashi pasó por momentos difíciles tras la pérdida de su padre, su compañero Obito, y su amiga Rin, lo que lo hizo volverse distante y serio.',
        image: 'personajes/perfil-kakashi.webp',
        featuredImages: [
            'sub-personajes/kakashi-1.webp',
            'sub-personajes/kakashi-2.webp',
            'sub-personajes/kakashi-3.webp'
        ]
    },
    {
        name: 'Anko Mitarashi',
        clan: 'No pertenece a un clan específico conocido en la serie.',
        description: 'Anko Mitarashi es una kunoichi de Konoha que fue discípula de Orochimaru, uno de los legendarios Sannin. Durante su entrenamiento con Orochimaru, Anko fue marcada con el Sello Maldito del Cielo, una técnica oscura que le otorgaba poder a costa de su vida y su voluntad. Sin embargo, después de darse cuenta de las verdaderas intenciones de Orochimaru y su deseo de usarla como experimento, Anko lo rechazó y abandonó su tutelaje.',
        image: 'personajes/perfil-anko.webp',
        featuredImages: [
            'sub-personajes/anko-1.webp',
            'sub-personajes/anko-2.webp',
            'sub-personajes/anko-3.webp'
        ]
    },
    {
        name: 'Asuma Sarutobi',
        clan: 'Clan Sarutobi',
        description: 'es un jonin de Konoha, hijo del Tercer Hokage, Hiruzen Sarutobi, y líder del equipo 10, compuesto por Shikamaru, Ino y Choji. Es un ninja hábil, conocido por sus cuchillas de chakra infundidas con viento. Aunque de carácter relajado, se preocupa profundamente por sus alumnos y lucha por proteger la aldea. Durante una misión para detener a la organización Akatsuki, Asuma es asesinado por Hidan. Antes de su muerte, revela que espera un hijo con Kurenai Yuhi, dejando un legado emocional en Konoha.',
        image: 'personajes/perfil-asuma.webp',
        featuredImages: [
            'sub-personajes/asuma-1.webp',
            'sub-personajes/asuma-2.webp',
            'sub-personajes/asuma-3.webp'
        ]
    },
    {
        name: 'Choji Akimichi',
        clan: 'Clan Akimichi',
        description: 'Choji Akimichi es un miembro del Clan Akimichi de Konoha, conocido por su habilidad de convertir calorías en chakra para aumentar su tamaño y fuerza. Como parte del equipo 10 junto a Shikamaru e Ino, guiado por Asuma Sarutobi, Choji supera sus inseguridades sobre su peso y demuestra ser un ninja poderoso y leal. En la serie, destaca por su participación en la misión de rescate de Sasuke y en la Cuarta Gran Guerra Ninja, donde demuestra su valentía y crecimiento personal, consolidándose como un miembro crucial del trío Ino-Shika-Cho.',
        image: 'personajes/perfil-choji.webp',
        featuredImages: [
            'sub-personajes/choji-1.webp',
            'sub-personajes/choji-2.webp',
            'sub-personajes/choji-3.webp'
        ]
    },
    {
        name: 'Danzo Shimura',
        clan: 'Clan Shimura',
        description: ' Danzo Shimura, líder de la organización ANBU Raíz, es un miembro influyente de Konoha que opera en las sombras. Motivado por su creencia en el poder absoluto para proteger la aldea, Danzo toma decisiones extremas, como orquestar la masacre del Clan Uchiha. Ambicioso y calculador, Danzo busca convertirse en Hokage y llega a obtener varios Sharingan y el brazo de Hashirama Senju para aumentar su poder. Su liderazgo y métodos despiadados lo convierten en un personaje controvertido. Muere a manos de Sasuke Uchiha en un enfrentamiento donde revela su verdadera naturaleza y la profundidad de sus acciones secretas en nombre de la aldea.',
        image: 'personajes/perfil-danzo.webp',
        featuredImages: [
            'sub-personajes/danzo-1.webp',
            'sub-personajes/danzo-2.webp',
            'sub-personajes/danzo-3.webp'
        ]
    },
    {
        name: 'Deidara',
        clan: ' no pertenece a un clan conocido',
        description: 'Deidara es un miembro de la organización Akatsuki y es conocido por su habilidad en el uso del arte explosivo. Utiliza arcilla que puede convertir en explosivos de diferentes formas y tamaños, creando esculturas y criaturas que explotan para causar destrucción. Deidara tiene una filosofía artística que considera la explosión como la forma más pura de arte. Es un ex-ninja de la aldea del País de las Piedras y tiene un conflicto con su antiguo maestro, que no valoraba su arte. Durante su tiempo en Akatsuki, forma pareja con Tobi y busca capturar a los Jinchūriki. Deidara muere en una batalla contra Sasuke Uchiha, en la que usa su último gran ataque explosivo para enfrentar a su oponente.',
        image: 'personajes/perfil-deidara.webp',
        featuredImages: [
            'sub-personajes/deidara-1.webp',
            'sub-personajes/deidara-2.webp',
            'sub-personajes/deidara-3.webp'
        ]
    },
    {
        name: 'Fū',
        clan: 'no pertenece a un clan conocido,',
        description: ' Fū es una ninja del País del Viento y la portadora del Bijū de seis colas, Chōmei . Pertenece al Clan Fūma, conocido por sus habilidades relacionadas con los insectos. A lo largo de la serie Naruto , su historia se centra en su captura y liberación durante la Cuarta Gran Guerra Ninja.Fū es secuestrada por la organización Akatsuki, que busca recolectar todos los Bijū para sus propios fines. A pesar de la tortura y el sufrimiento que enfrenta en manos de Akatsuki, Fū mantiene una actitud optimista y amable. Su habilidad con los insectos, otorgada por su Bijū Chōmei, le permite utilizar técnicas especializadas en combate.Eventualmente, Fū es liberada, y su historia pone de aliviar el dolor y la lucha de los Jinchūriki . Aunque su aparición en la serie es relativamente breve, mostrando la crueldad de Akatsuki y la resiliencia de los Jinchūriki .',
        image: 'personajes/perfil-Fuu.webp',
        featuredImages: [
            'sub-personajes/fuu-1.webp',
            'sub-personajes/fuu-2.webp',
            'sub-personajes/fuu-3.webp'
        ]
    },
    {
        name: 'Gaara',
        clan: 'Clan Uzumaki (por parte de su madre, aunque él es más conocido como miembro del Clan Sabaku)',
        description: 'Gaara es el jinchūriki del Shukaku, el Demonio de una Cola, y es el actual Kazekage de la aldea de Sunagakure (Aldea de la Arena). Desde una edad temprana, Gaara fue marcado por la tragedia y el odio debido a la presencia del Bijū en su interior, lo que le llevó a ser visto como una amenaza por su propia aldea. Su infancia estuvo llena de soledad y violencia, y su objetivo inicial era demostrar su poder para ganarse el respeto y el miedo de los demás.',
        image: 'personajes/perfil-gaara.webp',
        featuredImages: [
            'sub-personajes/gaara-1.webp',
            'sub-personajes/gaara-2.webp',
            'sub-personajes/gaara-3.webp'
        ]
    },
    {
        name: 'Might Guy',
        clan: 'no se menciona un clan específico en la serie',
        description: 'Might Guy es un destacado ninja de Konoha conocido por su maestría en taijutsu (técnicas de combate cuerpo a cuerpo). Es el líder del equipo 9, que incluye a su estudiante y amigo Rock Lee, así como a Neji Hyuga y Tenten. Guy es famoso por su inquebrantable determinación y su estilo de combate basado en el uso de los Ocho Portones (Gate) para aumentar temporalmente su fuerza y velocidad a costa de su propio cuerpo.',
        image: 'personajes/perfil-guy.webp',
        featuredImages: [
            'sub-personajes/guy-1.webp',
            'sub-personajes/guy-2.webp',
            'sub-personajes/guy-3.webp'
        ]
    },
    {
        name: 'Haku',
        clan: ' no pertenece a un clan conocido',
        description: ' Haku es un talentoso ninja de la aldea oculta del País de las Nieves, conocido por su habilidad con el jutsu de hielo. Fue recogido por Zabuza Momochi, uno de los miembros del grupo de ninjas renegados del País de las Nieves, después de la muerte de sus padres. Haku se convierte en el asistente leal de Zabuza y está dispuesto a hacer cualquier cosa para protegerlo, viéndolo como una figura paternal.',
        image: 'personajes/perfil-haku.webp',
        featuredImages: [
            'sub-personajes/haku-1.webp',
            'sub-personajes/haku-2.webp',
            'sub-personajes/haku-3.webp'
        ]
    },
    {
        name: 'Hidan',
        clan: 'no pertenece a un clan conocido',
        description: 'Hidan es un miembro de la organización Akatsuki, conocido por su inmortalidad y su culto a la religión Jashin. Es uno de los miembros más peligrosos de Akatsuki debido a su capacidad para infligir daño a sus oponentes y transferirlo a sí mismo a través de rituales oscuros. Hidan tiene una creencia fanática en su deidad, lo que lo lleva a actuar de manera extremadamente violenta y despiadada.',
        image: 'personajes/perfil-hidan.webp',
        featuredImages: [
            'sub-personajes/hidan-1.webp',
            'sub-personajes/hidan-2.webp',
            'sub-personajes/hidan-3.webp'
        ]
    },
    {
        name: 'Hinata Hyuga',
        clan: 'Clan Hyuga',
        description: 'Hinata Hyuga es una kunoichi de la aldea de Konoha, miembro del prestigioso Clan Hyuga, conocido por su habilidad en el uso del Byakugan, un dōjutsu que permite una visión casi de 360 grados y la capacidad de ver el flujo de chakra. Desde joven, Hinata ha sido tímida y reservada, a menudo eclipsada por su hermana mayor, Hanabi, y presionada para cumplir con las expectativas del clan',
        image: 'personajes/perfil-hinata.webp',
        featuredImages: [
            'sub-personajes/hinata-1.webp',
            'sub-personajes/hinata-2.webp',
            'sub-personajes/hinata-3.webp'
        ]
    },
    {
        name: 'Ino Yamanaka',
        clan: 'Clan Yamanaka',
        description: ' Ino Yamanaka es una kunoichi de Konoha y miembro del Clan Yamanaka, conocido por sus habilidades en técnicas de control mental. Inicialmente, Ino es conocida por su rivalidad con Sakura Haruno y su deseo de ser la mejor kunoichi. A lo largo de la serie, Ino evoluciona, desarrollando una profunda amistad con Sakura y convirtiéndose en una ninja valiente y capaz. Participa en batallas importantes, como la lucha contra el grupo del sonido y en la Cuarta Gran Guerra Ninja. Ino también trabaja como médico en la aldea y eventualmente se convierte en una figura clave en la defensa de Konoha, y se casa con Sai, con quien tiene un hijo llamado Inojin.',
        image: 'personajes/perfil-ino.webp',
        featuredImages: [
            'sub-personajes/ino-1.webp',
            'sub-personajes/ino-2.webp',
            'sub-personajes/ino-3.webp'
        ]
    },
    {
        name: 'Iruka Umino',
        clan: 'Clan Umino',
        description: 'Iruka Umino es un ninja de Konoha que trabaja como maestro en la Academia Ninja. Aunque no pertenece a un clan destacado, Iruka juega un papel crucial como mentor y figura paternal para muchos estudiantes. Tras perder a sus padres en una misión, Iruka se convierte en un ferviente defensor de los jóvenes ninjas, especialmente de Naruto Uzumaki, a quien inicialmente desconfía pero luego llega a considerar como un hijo adoptivo. Su apoyo y guía son fundamentales para el desarrollo de Naruto y otros estudiantes. A lo largo de la serie, Iruka continúa desempeñando un papel importante en la educación y protección de la próxima generación de ninjas, demostrando su dedicación y amor por su aldea.',
        image: 'personajes/perfil-iruka.webp',
        featuredImages: [
            'sub-personajes/iruka-1.webp',
            'sub-personajes/iruka-2.webp',
            'sub-personajes/iruka-3.webp'
        ]
    },
    {
        name: 'Itachi Uchiha',
        clan: 'Clan Uchiha',
        description: 'Itachi Uchiha, miembro del clan Uchiha, es un prodigio del Sharingan que, bajo órdenes del consejo de Konoha, masacra a su propio clan para prevenir un golpe de estado. Es visto como un villano al unirse a Akatsuki, pero más tarde se revela que actuó para proteger a su hermano Sasuke y a la aldea. Itachi muere a manos de Sasuke, pero su verdadera intención y sacrificio se conocen posteriormente, mostrando su amor y dedicación hacia su hermano y su lealtad a Konoha.',
        image: 'personajes/perfil-itachi.webp',
        featuredImages: [
            'sub-personajes/itachi-1.webp',
            'sub-personajes/itachi-2.webp',
            'sub-personajes/itachi-3.webp'
        ]
    },
    {
        name: 'Jiraiya',
        clan: 'no pertenece a un clan específico',
        description: 'Jiraiya es uno de los tres legendarios Sannin de Konoha. Es un ninja poderoso y un maestro venerado conocido por su habilidad en técnicas de invocación y su gran conocimiento en jutsu. Jiraiya actúa como mentor de Naruto Uzumaki, ayudándolo a desarrollar sus habilidades y a comprender su papel en la protección de la aldea.A lo largo de la serie, Jiraiya busca un equilibrio entre su vida como maestro y sus propias búsquedas, incluyendo la investigación sobre la organización Akatsuki. Su papel como mentor y su búsqueda de conocimiento y fuerza lo convierten en un personaje fundamental en el desarrollo de Naruto y en la lucha contra las amenazas que enfrenta Konoha. Jiraiya muere en una batalla contra Pain mientras intenta obtener información crucial para salvar a su aldea.',
        image: 'personajes/perfil-jiraya.webp',
        featuredImages: [
            'sub-personajes/jiraya-1.webp',
            'sub-personajes/jiraya-2.webp',
            'sub-personajes/jiraya-3.webp'
        ]
    },
    {
        name: 'Jūzō Biwa',
        clan: 'Clan Biwa',
        description: 'Jūzō Biwa es uno de los "Siete Espadachines de la Niebla" del País de las Nieblas y es famoso por su habilidad con la espada "Kubikiribōchō" (Espada del Desmembramiento). Jūzō es conocido por su carácter despiadado y su habilidad en combate. Su apariencia incluye una cicatriz en forma de cruz en su rostro y una capa que oculta su rostro.Jūzō es un antagonista en el arco del País de las Nieblas, donde se enfrenta al equipo 7 de Konoha, liderado por Kakashi Hatake. Su relación con su antiguo compañero Zabuza Momochi es notable, ya que Jūzō sigue a Zabuza incluso después de su muerte. Tras la caída de Zabuza, Jūzō busca venganza y continúa su carrera como un ninja formidable. Eventualmente, Jūzō es derrotado en la serie, y su historia refleja la brutalidad y la complejidad de los espadachines de la Niebla.',
        image: 'personajes/perfil-Juzo.webp',
        featuredImages: [
            'sub-personajes/juzo-1.webp',
            'sub-personajes/juzo-2.webp',
            'sub-personajes/juzo-3.webp'
        ]
    },
    {
        name: 'Kakuzu',
        clan: ' no pertenece a un clan conocido',
        description: 'Kakuzu es un miembro de la organización Akatsuki, conocido por su habilidad para manipular su cuerpo con hilos de chakra, lo que le permite reparar y controlar partes de su cuerpo e incluso cambiar de forma. Es uno de los miembros más antiguos de Akatsuki y forma pareja con Hidan.Kakuzu es conocido por su naturaleza despiadada y su enfoque pragmático hacia las misiones. Su habilidad para absorber el chakra y su inmortalidad parcial hacen de él un adversario formidable. En la serie, Kakuzu se enfrenta a los miembros del equipo 10 de Konoha durante una misión para capturar a un Jinchūriki. Finalmente, es derrotado por Shikamaru Nara, que usa su ingenio para superar sus habilidades y capturarlo. Kakuzu muere tras la derrota, y su historia destaca la amenaza que representa para la aldea y el impacto de su derrota en la lucha contra Akatsuki.',
        image: 'personajes/perfil-kakusu.webp',
        featuredImages: [
            'sub-personajes/kakusu-1.webp',
            'sub-personajes/kakusu-2.webp',
            'sub-personajes/kakusu-3.webp'
        ]
    },
    {
        name: 'Kankuro',
        clan: 'Clan Sabaku',
        description: 'Kankuro es un ninja de Konoha del Clan Sabaku y el hermano mayor de Gaara. Es conocido por su habilidad en el uso de títeres en combate, lo que le permite realizar ataques estratégicos y letales con sus marionetas. Como miembro de la familia real de la aldea de Sunagakure, Kankuro desempeña un papel crucial en la defensa de su aldea y en la protección de su hermano Gaara. A lo largo de la serie, Kankuro participa en varias batallas importantes y demuestra su habilidad y determinación. Su desarrollo como ninja incluye superar desafíos y fortalecer su relación con sus hermanos. Kankuro se convierte en un personaje respetado y valiente, contribuyendo significativamente en la lucha contra las amenazas que enfrentan él y su aldea.',
        image: 'personajes/perfil-kankuro.webp',
        featuredImages: [
            'sub-personajes/kankuro-1.webp',
            'sub-personajes/kankuro-2.webp',
            'sub-personajes/kankuro-3.webp'
        ]
    },
    {
        name: 'Samui',
        clan: 'no pertenece a un clan conocido',
        description: 'Samui es presentada durante el arco de la reunión de los Cinco Kages, donde es enviada como mensajera de su aldea para informar a Konoha sobre la captura de Killer Bee por parte de Akatsuki. Más adelante, se la ve junto a su equipo, compuesto por Karui y Omoi, participando en la Cuarta Gran Guerra Ninja.',
        image: 'personajes/perfil-samui.webp',
        featuredImages: [
            'sub-personajes/samui-1.webp',
            'sub-personajes/samui-2.webp',
            'sub-personajes/samui-3.webp'
        ]
    },
    {
        name: 'Karin',
        clan: 'Clan Uzumaki',
        description: 'Karin es un miembro de la organización Akatsuki y de la antigua aldea del País de las Serpientes. Es conocida por su habilidad para detectar chakra y su capacidad de curar heridas al absorber chakra de otras personas. Karin es inicialmente presentada como una aliada de Sasuke Uchiha, y su habilidad de rastreo es esencial para el grupo. A lo largo de la serie, Karin muestra un lado más complejo de su personalidad, revelando su deseo de proteger a su equipo y su lealtad a Sasuke. Tras el final del conflicto con Akatsuki, Karin se establece en la aldea de Konoha y se convierte en un miembro valioso, desempeñando un papel en la reconstrucción y protección de la aldea. Su historia destaca su evolución de antagonista a aliada, así como su impacto en la trama y en la vida de los personajes principales.',
        image: 'personajes/perfil-karin.webp',
        featuredImages: [
            'sub-personajes/karin-1.webp',
            'sub-personajes/karin-2.webp',
            'sub-personajes/karin-3.webp'
        ]
    },
    {
        name: 'Karui',
        clan: 'no pertenece a un clan específico',
        description: 'Karui es una kunoichi de la aldea de Kumogakure (Aldea de las Nubes) y miembro del equipo de los Cuatro de la Nube, junto a Omoi, Samui y su líder, Darui. Es conocida por su carácter fuerte y su habilidad en técnicas de rayo. Karui es inicialmente presentada como una rival de los ninjas de Konoha durante el Examen Chūnin y tiene un enfrentamiento con Sakura Haruno.A lo largo de la serie, Karui muestra su lealtad a su aldea y se involucra en importantes misiones. Durante la Cuarta Gran Guerra Ninja, lucha junto a sus compañeros para proteger su hogar y enfrentar a las amenazas que atacan la aldea. Su desarrollo como personaje incluye superar conflictos personales y trabajar en equipo para contribuir a la defensa de su país y de los aliados.',
        image: 'personajes/perfil-karui.webp',
        featuredImages: [
            'sub-personajes/karui-1.webp',
            'sub-personajes/karui-2.webp',
            'sub-personajes/karui-3.webp'
        ]
    },
    {
        name: 'Killer Bee',
        clan: 'Clan Aozaki',
        description: 'Killer Bee es el jinchūriki del Ocho Colas, Gyūki, y el líder del equipo de los Cuatro de la Nube en la aldea de Kumogakure. Conocido por su habilidad en el uso del rayo y su estilo único de combate basado en el rap y la danza, Killer Bee es un ninja poderoso y carismático. A pesar de ser un jinchūriki, mantiene una relación armoniosa con Gyūki, lo que le permite utilizar el poder del Bijū de manera efectiva. Durante la Cuarta Gran Guerra Ninja, Killer Bee juega un papel clave en la lucha contra los enemigos de la aldea y en la protección de su tierra natal. Su habilidad y personalidad lo convierten en un aliado valioso y en un personaje querido por su actitud positiva y su habilidad en combate.',
        image: 'personajes/perfil-killerbee.webp',
        featuredImages: [
            'sub-personajes/killer-1.webp',
            'sub-personajes/killer-2.webp',
            'sub-personajes/killer-3.webp'
        ]
    },
    {
        name: 'Kimimaro',
        clan: 'Clan Kaguya',
        description: 'Kimimaro es un miembro del Clan Kaguya, conocido por su habilidad en el uso de su propio esqueleto como arma. El clan Kaguya es famoso por su habilidad para manipular su cuerpo y utilizarlo en combate. Kimimaro, uno de los últimos supervivientes del clan, posee el poder del "Cuerpo de Huesos" que le permite usar huesos de su propio cuerpo para atacar y defenderse. Es presentado como un antagonista durante el arco de la recuperación de Sasuke, donde lucha contra el equipo 7 y sus aliados. A pesar de su enfermedad terminal, Kimimaro demuestra un impresionante nivel de habilidad y determinación. Muere a causa de su enfermedad después de luchar con valentía y de desempeñar un papel significativo en la captura de Sasuke.',
        image: 'personajes/perfil-kimimaro.webp',
        featuredImages: [
            'sub-personajes/kimimaro-1.webp',
            'sub-personajes/kimimaro-2.webp',
            'sub-personajes/kimimaro-3.webp'
        ]
    },
    {
        name: 'Kisame Hoshigaki',
        clan: 'Clan Hoshigaki',
        description: 'Kisame Hoshigaki es un miembro de Akatsuki y uno de los "Siete Espadachines de la Niebla" del País de las Nieblas. Conocido por su apariencia de tiburón y su habilidad con la espada "Samehada", que absorbe chakra, Kisame es extremadamente fuerte y tiene una gran afinidad por el agua. Forma pareja con Itachi Uchiha en Akatsuki. Kisame es conocido por su brutalidad y lealtad hacia Itachi. Participa en batallas importantes contra personajes principales y es finalmente derrotado en un enfrentamiento con Might Guy, quien lo obliga a suicidarse para evitar ser capturado. Su historia destaca su formidable poder y su impacto en la trama de la serie.',
        image: 'personajes/perfil-kisame.webp',
        featuredImages: [
            'sub-personajes/kisame-1.webp',
            'sub-personajes/kisame-2.webp',
            'sub-personajes/kisame-3.webp'
        ]
    },
    {
        name: 'Konan',
        clan: 'no pertenece a un clan específico',
        description: 'Konan es una miembro de Akatsuki y una de sus fundadoras originales junto a Nagato y Yahiko. Es conocida por su habilidad en el uso de técnicas de papel, que le permiten transformar su cuerpo en una gran cantidad de papeles que puede manipular para atacar, defenderse y volar. A lo largo de la serie, Konan se convierte en la líder del grupo Akatsuki tras la muerte de Yahiko y trabaja junto a Nagato para cumplir sus objetivos. Es una figura clave en la organización y se enfrenta a Naruto Uzumaki en una batalla importante, donde demuestra su habilidad y determinación. Konan muere durante el enfrentamiento con Tobi, quien traiciona a Akatsuki, pero su legado y su impacto en la organización y en Naruto son significativos.',
        image: 'personajes/perfil-konan.webp',
        featuredImages: [
            'sub-personajes/konan-1.webp',
            'sub-personajes/konan-2.webp',
            'sub-personajes/konan-3.webp'
        ]
    },
    {
        name: 'Kurenai Yuhi',
        clan: 'Clan Yuhi',
        description: 'Kurenai Yuhi es una kunoichi de Konoha, conocida por su habilidad en técnicas de ilusión (genjutsu) y su dominio del jutsu de ilusiones. Es mentora del equipo 8, compuesto por Kiba Inuzuka, Shino Aburame y Hinata Hyuga. Kurenai es una figura maternal y protectora hacia sus estudiantes, y juega un papel importante en su desarrollo y en las misiones que llevan a cabo. A lo largo de la serie, Kurenai se convierte en una aliada valiosa y participa en varias batallas, incluyendo la defensa de Konoha durante la Cuarta Gran Guerra Ninja. También tiene un vínculo personal con Asuma Sarutobi, con quien forma una relación sentimental y eventualmente tiene una hija, Mirai Sarutobi. Su historia destaca su habilidad en genjutsu, su dedicación a su equipo y su rol en la protección de la aldea.',
        image: 'personajes/perfil-kurenai.webp',
        featuredImages: [
            'sub-personajes/kurenai-1.webp',
            'sub-personajes/kurenai-2.webp',
            'sub-personajes/kurenai-3.webp'
        ]
    },
    {
        name: 'Kushina Uzumaki',
        clan: 'Clan Uzumaki',
        description: 'Kushina Uzumaki es la madre de Naruto Uzumaki y la esposa de Minato Namikaze, el Cuarto Hokage. Es conocida por su valentía y su fuerte espíritu, así como por su habilidad en el uso del chakra del clan Uzumaki. Kushina era el jinchūriki del Nueve Colas (Kurama) antes de que su hijo, Naruto, heredara la misma carga. Durante su tiempo como jinchūriki, enfrentó grandes desafíos y luchó para proteger a su aldea. Kushina juega un papel importante en la historia de Naruto, ya que su sacrificio y amor por su hijo son fundamentales para la trama. En los momentos finales antes de su muerte, Kushina transmite sus sentimientos y deseos a Naruto, dejando un legado de amor y fortaleza. Su historia destaca su valentía, su sacrificio y el impacto duradero que tiene en la vida de Naruto.',
        image: 'personajes/perfil-kushina.webp',
        featuredImages: [
            'sub-personajes/kushina-1.webp',
            'sub-personajes/kushina-2.webp',
            'sub-personajes/kushina-3.webp'
        ]
    },
    {
        name: 'Madara Uchiha',
        clan: 'Clan Uchiha',
        description: 'Madara Uchiha es uno de los fundadores de Konoha y uno de los personajes más poderosos de la serie. Inicialmente luchó con Hashirama Senju para establecer la aldea, pero sus diferencias llevaron a una rivalidad. Madara se convierte en antagonista principal con el "Plan Ojo de la Luna", que busca controlar el mundo mediante una ilusión infinita. Resucita durante la Cuarta Gran Guerra Ninja, demostrando habilidades extraordinarias. Su historia culmina en batallas épicas y su legado es complejo, abarcando su deseo de paz y su búsqueda de dominio. Madara es derrotado al final, dejando un impacto duradero en la serie.',
        image: 'personajes/perfil-madara.webp',
        featuredImages: [
            'sub-personajes/madara-1.webp',
            'sub-personajes/madara-2.webp',
            'sub-personajes/madara-3.webp'
        ]
    },
    {
        name: 'Mei Terumi',
        clan: 'Clan Terumi',
        description: 'Mei Terumi es la Quinta Mizukage de la aldea de Kirigakure (Aldea de la Niebla). Es conocida por su habilidad en técnicas de agua y fuego, y por su habilidad para utilizar el "Cuerpo de Niebla" para crear poderosos jutsus combinados. Mei desempeña un papel importante en la Cuarta Gran Guerra Ninja, liderando a su aldea y participando en la batalla contra las fuerzas de Akatsuki y los enemigos de la aldea. Su liderazgo y habilidades en combate la convierten en una figura respetada y poderosa en la serie. Su papel destaca la importancia de la cooperación entre las aldeas y su contribución significativa en la protección de su tierra y la lucha contra las amenazas.',
        image: 'personajes/perfil-mei.webp',
        featuredImages: [
            'sub-personajes/mei-1.webp',
            'sub-personajes/mei-2.webp',
            'sub-personajes/mei-3.webp'
        ]
    },
    {
        name: 'Neji Hyuga',
        clan: 'Clan Hyuga',
        description: 'Neji Hyuga es un talentoso ninja del Clan Hyuga, conocido por su habilidad en el uso del Byakugan, un dojutsu que le permite ver a través de objetos y detectar puntos de chakra. Inicialmente, Neji es presentado como un rival de Naruto Uzumaki durante el Examen Chūnin, con una actitud arrogante y una creencia en el destino inmutable debido a su estatus como miembro de la rama secundaria del clan. Sin embargo, a medida que avanza la serie, Neji experimenta un cambio en su perspectiva sobre el destino y el esfuerzo personal. Neji juega un papel importante en varias batallas, incluyendo la Cuarta Gran Guerra Ninja, donde lucha valientemente contra las fuerzas enemigas. Su habilidad y dedicación lo convierten en un miembro valioso del equipo 8 y un héroe en la protección de Konoha. Neji muere heroicamente durante la guerra, sacrificándose para proteger a sus compañeros y a la aldea, dejando un legado de valentía y superación personal.',
        image: 'personajes/perfil-neji.webp',
        featuredImages: [
            'sub-personajes/neji-1.webp',
            'sub-personajes/neji-2.webp',
            'sub-personajes/neji-3.webp'
        ]
    },
    {
        name: 'Omoi',
        clan: 'no pertenece a un clan específico conocido',
        description: 'Omoi es un ninja de Kumogakure y miembro del equipo de los Cuatro de la Nube, junto a Karui, Samui y su líder, Darui. Es conocido por su actitud seria y su habilidad en técnicas de rayo. Omoi se destaca por su pragmatismo y su capacidad para enfrentar situaciones difíciles con calma. Durante la Cuarta Gran Guerra Ninja, Omoi participa en la defensa de su aldea y en la lucha contra las fuerzas de Akatsuki. Su papel en la serie resalta su lealtad a su equipo y a su aldea, así como su habilidad en combate y su contribución en la protección de su país y sus aliados.',
        image: 'personajes/perfil-omoi.webp',
        featuredImages: [
            'sub-personajes/omoi-1.webp',
            'sub-personajes/omoi-2.webp',
            'sub-personajes/omoi-3.webp'
        ]
    },
    {
        name: 'Orochimaru',
        clan: 'No pertenece a un clan específico conocido',
        description: 'Orochimaru es un ninja extremadamente talentoso y uno de los tres legendarios Sannin de Konoha. Es conocido por su obsesión con la inmortalidad y la investigación de técnicas prohibidas. Orochimaru inicialmente actúa como un antagonista, buscando apoderarse del cuerpo de Sasuke Uchiha para obtener más poder. A lo largo de la serie, se convierte en uno de los principales villanos, formando su propia organización y realizando experimentos oscuros. Sin embargo, su carácter y sus objetivos evolucionan con el tiempo. Finalmente, Orochimaru se convierte en un personaje más neutral, desempeñando un papel en la Cuarta Gran Guerra Ninja y ayudando a los héroes de Konoha con sus conocimientos y habilidades. Su historia destaca su ambición, su búsqueda de poder y su eventual redención y cambio de enfoque en la vida.',
        image: 'personajes/perfil-orochimaru.webp',
        featuredImages: [
            'sub-personajes/orochimaru-1.webp',
            'sub-personajes/orochimaru-2.webp',
            'sub-personajes/orochimaru-3.webp'
        ]
    },
    {
        name: 'Pain',
        clan: 'su clan no tiene un nombre específico',
        description: 'Pain, cuyo verdadero nombre es Nagato, es uno de los líderes de Akatsuki y el portador del Rinnegan, un dojutsu extremadamente poderoso. Originalmente, Nagato era un niño de la aldea del País de la Lluvia que sufrió grandes pérdidas durante la guerra. Más tarde, se convierte en un líder de Akatsuki con la intención de lograr la paz mundial a través de la fuerza y el control. Utiliza seis cuerpos (los Seis Caminos de Pain) para luchar y manipular las técnicas del Rinnegan. Finalmente, su visión de la paz y sus acciones llevan a una confrontación con Naruto, quien logra cambiar su perspectiva. Después de su derrota, Nagato se sacrifica para revivir a los que murieron durante su ataque a Konoha, mostrando una última muestra de redención y la esperanza de un mundo en paz.',
        image: 'personajes/perfil-pain.webp',
        featuredImages: [
            'sub-personajes/pain-1.webp',
            'sub-personajes/pain-2.webp',
            'sub-personajes/pain-3.webp'
        ]
    },
    {
        name: 'Hiruzen Sarutobi',
        clan: 'Clan Sarutobi',
        description: 'Hiruzen Sarutobi es el Tercer Hokage de Konoha, conocido por su gran habilidad en ninjutsu y su sabiduría. Como uno de los personajes más respetados de la serie, Hiruzen es responsable de proteger y guiar la aldea durante tiempos de paz y conflicto. Durante su mandato, enfrenta varias amenazas, incluyendo la invasión de Orochimaru y los ataques de los enemigos de Konoha. Hiruzen es mentor de los legendarios Sannin (Jiraiya, Tsunade y Orochimaru) y desempeña un papel crucial en la formación de la próxima generación de ninjas. Su liderazgo y habilidades en combate son fundamentales para la defensa de la aldea. Hiruzen muere heroicamente durante la invasión de Konoha, sacrificándose para proteger a su pueblo y asegurando la seguridad de la aldea hasta el final. Su legado es uno de valentía, sabiduría y devoción a Konoha.',
        image: 'personajes/perfil-sarutobi.webp',
        featuredImages: [
            'sub-personajes/hiruzen-1.webp',
            'sub-personajes/hiruzen-2.webp',
            'sub-personajes/hiruzen-3.webp'
        ]
    },
    {
        name: 'Sasori',
        clan: 'No pertenece a un clan específico conocido',
        description: 'Sasori es un miembro de Akatsuki y un maestro en el uso de marionetas en combate. Originario de la aldea de Sunagakure, es conocido por su habilidad para manipular marionetas y por su estilo de combate basado en ellas. Sasori utiliza su técnica de marionetas para realizar ataques letales y es temido por su capacidad para crear marionetas con partes humanas, haciéndolas extremadamente peligrosas. En la serie, Sasori enfrenta a Sakura Haruno y Chiyo durante el arco de la recuperación de Sasuke. Su historia revela una profunda tristeza y desencanto con el mundo, así como su deseo de obtener una inmortalidad a través de sus marionetas. Finalmente, Sasori es derrotado en combate por sus adversarios y su historia destaca su habilidad, su impacto en la trama y su búsqueda de significado y poder.',
        image: 'personajes/perfil-sasori.webp',
        featuredImages: [
            'sub-personajes/sasori-1.webp',
            'sub-personajes/sasori-2.webp',
            'sub-personajes/sasori-3.webp'
        ]
    },
    {
        name: 'Shikamaru Nara',
        clan: 'Clan Nara',
        description: 'Shikamaru Nara es un ninja de Konoha conocido por su intelecto superior y su habilidad en técnicas de sombra. Es miembro del equipo 10, junto a Ino Yamanaka y Choji Akimichi, bajo la dirección de Asuma Sarutobi. Shikamaru es famoso por su estrategia y habilidades en combate, especialmente en el uso del "Jutsu de Sombra" que le permite controlar las sombras para atrapar y manipular a sus enemigos. Inicialmente, Shikamaru es presentado como un joven perezoso y desinteresado, pero a medida que avanza la serie, demuestra ser un líder competente y valiente. Participa en importantes batallas, incluida la Cuarta Gran Guerra Ninja, donde juega un papel crucial en la estrategia y la coordinación del equipo. Su inteligencia, habilidades y lealtad a sus amigos y a su aldea lo convierten en un personaje fundamental en la serie.',
        image: 'personajes/perfil-shikamaru.webp',
        featuredImages: [
            'sub-personajes/shikamaru-1.webp',
            'sub-personajes/shikamaru-2.webp',
            'sub-personajes/shikamaru-3.webp'
        ]
    },
    {
        name: 'Shizune',
        clan: 'No pertenece a un clan específico conocido',
        description: 'Shizune es una kunoichi de Konoha y la asistente de Tsunade, la Quinta Hokage. Es conocida por su habilidad en técnicas de medicina y su conocimiento en el uso del chakra para curar heridas. Shizune desempeña un papel importante en la administración de la aldea y en el cuidado de los ninjas heridos. Además, es una experta en técnicas de combate, aunque su principal enfoque está en la medicina. Durante la Cuarta Gran Guerra Ninja, Shizune participa activamente en el tratamiento de los heridos y en la defensa de la aldea. Su lealtad a Tsunade y su dedicación al bienestar de Konoha la convierten en una figura valiosa y respetada en la serie.',
        image: 'personajes/perfil-shizune.webp',
        featuredImages: [
            'sub-personajes/shizune-1.webp',
            'sub-personajes/shizune-2.webp',
            'sub-personajes/shizune-3.webp'
        ]
    },
    {
        name: 'Temari',
        clan: 'Clan Sabaku',
        description: 'Temari es una kunoichi de Sunagakure y la hermana mayor de Gaara y Kankuro. Es conocida por su habilidad en el uso de técnicas de viento y su maestría con el abanico de gran tamaño que utiliza en combate. Inicialmente, Temari es presentada como una rival durante el Examen Chūnin, pero con el tiempo, se convierte en una aliada valiosa de Konoha. Durante la Cuarta Gran Guerra Ninja, Temari participa activamente en la defensa de su aldea y en la lucha contra las fuerzas enemigas. Su habilidad, estrategia en combate y lealtad a su familia y a su aldea la convierten en una figura clave en la serie.',
        image: 'personajes/perfil-temari.webp',
        featuredImages: [
            'sub-personajes/temari-1.webp',
            'sub-personajes/temari-2.webp',
            'sub-personajes/temari-3.webp'
        ]
    },
    {
        name: 'Tenten',
        clan: ' No pertenece a un clan específico conocido',
        description: 'Tenten es una kunoichi de Konoha y miembro del equipo 10, junto a Neji Hyuga y Rock Lee, bajo la dirección de Might Guy. Es conocida por su habilidad en el uso de técnicas de armas y su destreza en el manejo de una amplia variedad de herramientas ninja, como shuriken y kunai. Tenten se especializa en el combate a distancia y en técnicas de ataque rápido y preciso. Aunque su papel en la serie es más secundario en comparación con otros personajes, Tenten participa en varias batallas importantes y demuestra su habilidad y valentía. Durante la Cuarta Gran Guerra Ninja, Tenten combate contra las fuerzas enemigas y contribuye a la defensa de la aldea, mostrando su lealtad y compromiso con su equipo y su país.',
        image: 'personajes/perfil-tenten.webp',
        featuredImages: [
            'sub-personajes/tenten-1.webp',
            'sub-personajes/tenten-2.webp',
            'sub-personajes/tenten-3.webp'
        ]
    },
    {
        name: 'Tobi (Obito Uchiha)',
        clan: 'Clan Uchiha',
        description: 'Tobi es en realidad Obito Uchiha, un antiguo miembro del Clan Uchiha y compañero de Kakashi Hatake. Inicialmente, Obito es un joven ninja prometedor que se convierte en el portador del Sharingan y un aliado cercano de Kakashi y Rin Nohara. Sin embargo, después de ser gravemente herido en una misión y dado por muerto, Obito es rescatado y manipulado por Madara Uchiha. Su odio y desilusión lo llevan a convertirse en Tobi, un antagonista principal de la serie. Tobi, bajo la identidad de Obito, se convierte en uno de los líderes de Akatsuki y el cerebro detrás del "Plan Ojo de la Luna", A lo largo de la serie, Obito muestra una lucha interna entre sus antiguos ideales y su actual deseo de venganza. Su historia culmina en un enfrentamiento con Naruto Uzumaki y sus aliados, donde finalmente encuentra redención y revela su verdadera identidad.',
        image: 'personajes/perfil-tobi.webp',
        featuredImages: [
            'sub-personajes/tobi-1.webp',
            'sub-personajes/tobi-2.webp',
            'sub-personajes/tobi-3.webp'
        ]
    },
    {
        name: 'Tsunade Senju',
        clan: 'Clan Senju',
        description: 'Tsunade Senju es la Quinta Hokage de Konoha y una de los tres legendarios Sannin, junto a Jiraiya y Orochimaru. Es conocida por su habilidad en técnicas médicas y su fuerza física excepcional. Tsunade es una experta en la utilización del chakra para curar heridas y es una de las mejores médicas del mundo ninja. A lo largo de la serie, Tsunade asume el papel de Hokage después de la muerte de Hiruzen Sarutobi y enfrenta numerosos desafíos, incluyendo la invasión de Orochimaru y la Cuarta Gran Guerra Ninja. Su liderazgo y habilidades son fundamentales para la defensa de Konoha y el cuidado de los heridos. Tsunade también lidia con el dolor de perder a su hermano y a su maestro, lo que la lleva a una profunda lucha personal. Su historia destaca su fortaleza, su dedicación a la aldea y su impacto en la protección y recuperación de Konoha.',
        image: 'personajes/perfil-tsunade.webp',
        featuredImages: [
            'sub-personajes/tsunade-1.webp',
            'sub-personajes/tsunade-2.webp',
            'sub-personajes/tsunade-3.webp'
        ]
    },
    {
        name: 'Yagura Karatachi',
        clan: 'Clan Karatachi',
        description: 'Yagura Karatachi fue el Cuarto Mizukage de la aldea de Kirigakure (Aldea de la Niebla). Es conocido por su habilidad en el uso del agua y su control sobre el "Jutsu de la Niebla Sangrienta", una técnica que le permite crear una niebla espesa y sanguinolenta que lo vuelve casi invulnerable en combate. Durante su mandato como Mizukage, Yagura fue conocido por su tiranía y su brutalidad, lo que llevó a la aldea a ser temida en todo el mundo ninja. A lo largo de la serie, se revela que Yagura estaba bajo el control del Zetsu Blanco, una influencia que lo manipulaba y lo mantenía en su estado de tiranía. Su reinado termina con su muerte y la posterior liberación de la aldea de su control opresivo. Su historia destaca el impacto de su gobierno tiránico en la aldea y el conflicto que surge a partir de su influencia.',
        image: 'personajes/perfil-yagura.webp',
        featuredImages: [
            'sub-personajes/yagura-1.webp',
            'sub-personajes/yagura-2.webp',
            'sub-personajes/yagura-3.webp'
        ]
    },
    {
        name: 'Yamato (Tenzō)',
        clan: 'No pertenece a un clan específico conocido',
        description: 'Yamato, cuyo nombre real es Tenzō, es un ninja de Konoha y un miembro de la Unidad Anbu. Es conocido por su habilidad en el uso del Mokuton (Jutsu de Madera), una técnica que le permite manipular y crear madera. Yamato es asignado para supervisar y proteger a Naruto Uzumaki durante su entrenamiento y desarrollo como jinchūriki del Nueve Colas. Su habilidad en el Mokuton proviene de experimentos realizados por Orochimaru con células de Hashirama Senju, lo que le otorga la capacidad de controlar la madera y utilizar técnicas poderosas. Durante la Cuarta Gran Guerra Ninja, Yamato participa en la defensa de la aldea y en el combate contra las fuerzas enemigas. Su papel destaca su lealtad, habilidad en combate y su importancia en la protección y orientación de los protagonistas.',
        image: 'personajes/perfil-yamato.webp',
        featuredImages: [
            'sub-personajes/yamato-1.webp',
            'sub-personajes/yamato-2.webp',
            'sub-personajes/yamato-3.webp'
        ]
    },
    {
        name: 'Yugito Nii',
        clan: 'Clan Nii (aunque el clan no es ampliamente destacado en la serie)',
        description: 'Yugito Nii es la jinchūriki del Segundo Colas (Matatabi) y una ninja de la aldea de Kumogakure (Aldea de la Nube). Es conocida por su habilidad en el uso del chakra de Matatabi, un demonio de dos colas, que le concede grandes poderes relacionados con el fuego y el control de las llamas. Yugito es una figura destacada en su aldea y participa en varios enfrentamientos durante la serie. Durante la Cuarta Gran Guerra Ninja, es capturada por Akatsuki y su bestia de colas es extraída. Su captura y muerte marcan un momento crítico en la serie, resaltando el peligro que enfrentan los jinchūriki y el impacto de las acciones de Akatsuki en el mundo ninja. Su historia es un recordatorio del sacrificio y el sufrimiento de los jinchūriki en su papel como contenedores de las bestias de colas.',
        image: 'personajes/perfil-yugito.webp',
        featuredImages: [
            'sub-personajes/yugito-1.webp',
            'sub-personajes/yugito-2.webp',
            'sub-personajes/yugito-3.webp'
        ]
    },
    {
        name: 'Zabuza Momochi',
        clan: 'Clan Momochi (aunque el clan no es ampliamente destacado en la serie)',
        description: 'Zabuza Momochi es un ninja de la aldea de Kirigakure (Aldea de la Niebla) y uno de los "Siete Espadachines de la Niebla". Es conocido por su habilidad en el uso de la espada "Kubikiribōchō" y sus técnicas de ocultación en la niebla. Zabuza es presentado como un antagonista al principio de la serie durante el arco de la misión de protección de Tazuna, donde se enfrenta a Naruto Uzumaki y sus compañeros. A pesar de su actitud despiadada y su enfoque en el asesinato, Zabuza muestra una complejidad en su carácter, especialmente en su relación con su joven aprendiz, Haku. Su historia está marcada por su ambición, su caída y su redención. Zabuza muere en una batalla final en la que lucha valientemente junto a Haku, mostrando una faceta más noble y redimiéndose a través de su sacrificio.',
        image: 'personajes/perfil-zabuza.webp',
        featuredImages: [
            'sub-personajes/zabuza-1.webp',
            'sub-personajes/zabuza-2.webp',
            'sub-personajes/zabuza-3.webp'
        ]
    },
    // Añade más personajes según sea necesario
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profile-image');
    const characterName = document.getElementById('character-name');
    const characterClan = document.getElementById('character-clan');
    const characterDescription = document.getElementById('character-description');
    const featuredImage1 = document.getElementById('featured-image1');
    const featuredImage2 = document.getElementById('featured-image2');
    const featuredImage3 = document.getElementById('featured-image3');
    const thumbnailsContainer = document.getElementById('character-thumbnails');

    const loadProfile = (index) => {
        profileImage.src = characters[index].image;
        characterName.textContent = characters[index].name;
        characterClan.textContent = characters[index].clan;
        characterDescription.textContent = characters[index].description;
        featuredImage1.src = characters[index].featuredImages[0];
        featuredImage2.src = characters[index].featuredImages[1];
        featuredImage3.src = characters[index].featuredImages[2];
    };

    const loadThumbnails = () => {
        thumbnailsContainer.innerHTML = '';
        characters.forEach((character, index) => {
            const thumbnail = document.createElement('img');
            thumbnail.src = character.image;
            thumbnail.className = 'thumbnail';
            thumbnail.addEventListener('click', () => {
                loadProfile(index);
            });
            thumbnailsContainer.appendChild(thumbnail);
        });
    };

    document.getElementById('prev-button').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : characters.length - 1;
        loadProfile(currentIndex);
    });

    document.getElementById('next-button').addEventListener('click', () => {
        currentIndex = (currentIndex < characters.length - 1) ? currentIndex + 1 : 0;
        loadProfile(currentIndex);
    });

    loadThumbnails();
    loadProfile(currentIndex);
});
//NAV BAR
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
