export interface viewOrder {chronologicalOrder: number; releaseOrder:number; macheteOrder:number}
export interface Movie {
    title: string;
    id: string;
    poster: string;
    wallpaper: string;
    viewOrder: viewOrder
}

export const movieList : Movie[] = [
    {
        title: `{Star Wars: Épisode I - La menace fantôme}`,
        id: 'tt0120915',
        poster: '/phantom-menace-title.png',
        wallpaper: '/phantom-menace.jpg',
        viewOrder: {
            chronologicalOrder: 1,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode II - L'Attaque des clones}`,
        id: 'tt0121765',
        poster: '/clone-wars-title.png',
        wallpaper: '/clone-wars.jpg',
        viewOrder: {
            chronologicalOrder: 2,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars: The Clone Wars}`,
        id: 'tt0458290',
        poster: '/the-clone-wars-title.png',
        wallpaper: '/the-clone-wars.jpg',
        viewOrder: {
            chronologicalOrder: 3,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode III - La Revanche des Sith}`,
        id: 'tt19635566',
        poster: '/revenge-of-the-sith-title.png',
        wallpaper: '/revenge-of-the-sith.jpg',
        viewOrder: {
            chronologicalOrder: 4,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars: The Bad Batch}`,
        id: 'tt12708542',
        poster: '/the-bad-batch-title.png',
        wallpaper: '/the-bad-batch.jpg',
        viewOrder: {
            chronologicalOrder: 5,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Solo: A Star Wars Story}`,
        id: 'tt3778644',
        poster: '/solo-title.png',
        wallpaper: '/solo.jpg',
        viewOrder: {
            chronologicalOrder: 6,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Obi-Wan Kenobi}`,
        id: 'tt21573964',
        poster: '/obi-wan-kenobi-title.png',
        wallpaper: '/obi-wan-kenobi.jpg',
        viewOrder: {
            chronologicalOrder: 7,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars Rebels}`,
        id: 'tt3956090',
        poster: '/star-wars-rebels-title.png',
        wallpaper: '/star-wars-rebels.jpg',
        viewOrder: {
            chronologicalOrder: 8,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Rogue One: A Star Wars Story}`,
        id: 'tt3748528',
        poster: '/rogue-one-title.png',
        wallpaper: '/rogue-one.jpg',
        viewOrder: {
            chronologicalOrder: 9,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode IV - Un Nouvel Espoir}`,
        id: 'tt0076759',
        poster: '/a-new-hope-title.png',
        wallpaper: '/a-new-hope.jpg',
        viewOrder: {
            chronologicalOrder: 10,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `Star Wars : Épisode V - L'Empire Contre-Attaque`,
        id: 'tt0080684',
        poster: '/the-empire-strike-back-title.png',
        wallpaper: '/the-empire-strike-back.jpg',
        viewOrder: {
            chronologicalOrder: 11,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode VI - Le Retour du Jedi}`,
        id: 'tt0086190',
        poster: '/the-return-of-the-jedi-title.png',
        wallpaper: '/the-return-of-the-jedi.jpg',
        viewOrder: {
            chronologicalOrder: 12,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{The Mandalorian}`,
        id: 'tt17677758',
        poster: '/the-mandalorian-title.png',
        wallpaper: '/the-mandalorian.jpg',
        viewOrder: {
            chronologicalOrder: 13,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Le Livre de Boba Fett}`,
        id: 'tt15964392',
        poster: '/the-book-of-boba-fett-title.png',
        wallpaper: '/the-book-of-boba-fett.jpg',
        viewOrder: {
            chronologicalOrder: 14,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars Resistance}`,
        id: 'tt8336340',
        poster: '/star-wars-resistance-title.png',
        wallpaper: '/star-wars-resistance.jpg',
        viewOrder: {
            chronologicalOrder: 15,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode VII - Le Réveil de la Force}`,
        id: 'tt6342710',
        poster: '/the-force-awakens-title.png',
        wallpaper: '/the-force-awakens.jpg',
        viewOrder: {
            chronologicalOrder: 16,
            releaseOrder: 4,
            macheteOrder: 1
        }
    },
    {
        title: `{Star Wars : Épisode VIII - Les Derniers Jedi}`,
        id: 'tt2527336',
        poster: '/the-last-jedi-title.png',
        wallpaper: '/the-last-jedi.jpg',
        viewOrder: {
            chronologicalOrder: 17,
            releaseOrder: 4,
            macheteOrder: 1
        }
    }
]

export const chronologicalOrder = movieList.sort((a, b) => a.viewOrder.chronologicalOrder - b.viewOrder.chronologicalOrder);
export const releaseOrder = movieList.sort((a, b) => a.viewOrder.releaseOrder - b.viewOrder.releaseOrder);
export const macheteOrder = movieList.sort((a, b) => a.viewOrder.macheteOrder - b.viewOrder.macheteOrder);
