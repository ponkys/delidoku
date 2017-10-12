import { SafeResourceUrl } from '@angular/platform-browser';

export const Films: Films[] = [
    {
        title: 'The room of bones',
        synopsis: `Over the last three decades, forensic anthropologists
        in El Salvador have accumulated thousands of unidentified remains, piling them up heartbreakingly in one cramped and overflowing
        room at the Legal Medicine Institute. This chilling documentary by filmmaker Marcela Zamora follows the stories of
        four mothers who, like so many others, desperately continue to search for their missing children year after year.
        `,
        trailer: 'https://youtube.com/embed/oryP7F4FWlQ',
        duration: 60,
        year: 2015,
        author: 'Marcela Zamora',
        country: 'El Salvador'
    },
    {
        title: 'THE RETURN OF THE DEAD MAN',
        synopsis: `The Return of the Dead is a story about human condition and repentance.
            This documentary is the story of a tormented man, Don Rosendo, who has been haunted by his past and
            in the dawn of his life tries to find a sense for his existence. This story happens at the Mexico-USA border,
            in a transitory hostel.
        `,
        trailer: 'https://www.youtube.com/embed/pZrOow7mbCg',
        duration: 83,
        year: 2015,
        author: 'Gustavo Gamou',
        country: 'Mexico'
    },
    {
        title: 'CUMBIA LA REINA',
        synopsis: `Recounts the phenomenon by which Cumbia was
            becoming part of the argentinean culture since the beginning if the 50’s with
            Mario Castellon (founder of The Wawancó) until the 2000 with Pablo Lescano
            (creator of Cumbia Villera).
        `,
        trailer: 'https://www.youtube.com/embed/HA6yisytSDA',
        duration: 80,
        year: 2015,
        author: 'Pablo Coronel',
        country: 'Argentina'
    },
    {
        title: 'YOU AND ME',
        synopsis: `The Mrs., an old widow and Aridia, a young maid, live together in a house filled with orchids in
        the center of Santo Domingo. Aridia cleans, the Mrs. gardens, and when work is slow, they can
        share some gossip. But sometimes, the atmosphere gets tense: the Mrs. wakes up grumpy, she
        blames Aridia and when Aridia tries to defend herself, the Mrs. has to remind her “where her
        place is”; in time, they end up not talking to each other. But the hours pass by, the soap appears
        on TV, something happens in the neighborhood, and, out of nowhere, the Mrs. and Aridia come
        close again, ending the day sharing some laughs...
        The film is an excuse to watch theirrelationship closely, to perceive what happens
        when the border seem to diuse itself in a placewhere dierence of social class and
        race remain deep in the culture.`,
        trailer: 'https://youtube.com/embed/6bu4YXTH4pw',
        duration: 86,
        year: 2015,
        author: 'Natalia Cabral and Oriol Estrada',
        country: 'Dominican Republic'
    },
    {
        title: 'SURIRE',
        synopsis: `The Surire salt flat is located in the Chilean high plateau at 4,300 meters
        over the sea level, on the border with Bolivia. In its surroundings live
        a handful of elders, the last survivors of the Aymara culture in the area.
        As background, the machinery of a mine site roams the landscape,
        intermingled with flamingos, vicunas and llamas. SURIRE is a film that from
        observation and visual language portrays this unique space in which coexist
        natural beauty, human absurdity,and cultural decline.`,
        trailer: 'https://player.vimeo.com/video/120189057',
        duration: 77,
        year: 2015,
        author: 'Iván Osnoviko and Bettina Perut',
        country: 'Chile'
    },
    {
        title: 'THE JOY OF SOUND',
        synopsis: `What we hear is a vibration in the air, a vibration no one sees. Sound is invisible,
        but it drives us; it makes us cry, laugh, remember and dance; it rattles our insides,
        it moves us.Through a series of outlandish characters, The Joy of Sound takes the
        viewer on a voyage of the senses, as it reflects on nature, communal life, solitude
        and silence... An ode to sound, that mysterious, invisible and intangible phenomenon
        that brings pleasure andtogetherness – and sometimes irritation.`,
        trailer: 'https://youtube.com/embed/_5myqwx3_wM',
        duration: 61,
        year: 2015,
        author: 'Ana Endara Mislov',
        country: 'Panama'
    },
    {
        title: 'ELENA',
        synopsis: `Elena, a young Brazilian woman, travels to New York with dreams of becoming an actress. She leaves
        behind a childhood spent in hiding during the military dictatorship, and she leaves behind Petra, her
        seven-year-old sister. Two decades later, Petra goes to New York to pursue acting... and in search of
        Elena. But the film (and the filmmaker) cannot escape the similarities between Petra and Elena’s stories,
        and as they overlap, they begin to blur. In the spirit of Tarnation, ELENA obliterates the line between
        documentary, diary, and fever dream, and is at once captivating and devastating.`,
        trailer: 'https://youtube.com/embed/y5hTIOCuwy4',
        duration: 82,
        year: 2013,
        author: 'Petra Costa',
        country: 'Brazil'
    },
];

interface Films {
    title: string;
    synopsis: string;
    trailer: string;
    trailerSafe?: SafeResourceUrl;
    duration: number;
    year: number;
    author: string;
    country: string;
};
