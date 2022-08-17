export interface Movie {
    title: string;
    releaseDate: string;
    director: string;
    writers: string[];
    synopis: string;
    poster: string;
    wallpaper: string
}

export const movieList : Movie[] = [
    {
        title: `{Star Wars: Épisode I - La menace fantôme}`,
        releaseDate: '1999',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Deux chevaliers Jedi échappent à un blocus hostile pour trouver des alliés lorsqu'ils rencontrent un jeune garçon qui pourrait apporter un équilibre à la Force, mais les Sith, longtemps inactifs, refont surface pour réclamer leur ancienne gloire.`,
        poster: '/phantom-menace-title.png',
        wallpaper: '/phantom-menace.jpg'
    },
    {
        title: `{Star Wars : Épisode II - L'Attaque des clones}`,
        releaseDate: '2002',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Dix ans après sa rencontre originale, Anakin Skywalker a une aventure interdite avec Padmé Amidala, alors que Obi-wan Kenobi enquêtait sur un attentat contre le sénateur et découvre une armée clonée secrète, fabriquée pour les Jedi.`,
        poster: '/clone-wars-title.png',
        wallpaper: '/clone-wars.jpg'
    },
    {
        title: `{Star Wars : Épisode III - La Revanche des Sith}`,
        releaseDate: '2005',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Dans la troisième année de la Guerre des Clones, le Jedi sauve Palpatine du Comte Dooku. Alors qu'Obi-Wan se lance à la poursuite d'une nouvelle menace, Anakin agit comme agent double entre le Conseil Jedi et Palpatine, et il est attiré dans un plan sinistre pour régner sur la galaxie.`,
        poster: '/revenge-of-the-sith-title.png',
        wallpaper: '/revenge-of-the-sith.jpg'
    },
    {
        title: `{Star Wars : Épisode IV - Un Nouvel Espoir}`,
        releaseDate: '1977',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Luke Skywalker se joint à un chevalier Jedi, un pilote arrogant, un Wookiee et à deux droïdes pour sauver la galaxie de l'Empire, tout en essayant de sauver la princesse Léia du maléfique Dark Vador.`,
        poster: '/a-new-hope-title.png',
        wallpaper: '/a-new-hope.jpg'
    },
    {
        title: `Star Wars : Épisode V - L'Empire Contre-Attaque`,
        releaseDate: '1980',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Après que les rebelles soient brutalement maîtrisés par l'Empire sur la planète de glace Hoth, Luke Skywalker commence son entraînement de Jedi avec Yoda, tandis que ses amis sont poursuivis par Dark Vador.`,
        poster: '/the-empire-strike-back-title.png',
        wallpaper: '/the-empire-strike-back.jpg'
    },
    {
        title: `{Star Wars : Épisode VI - Le Retour du Jedi}`,
        releaseDate: '1983',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Après une mission risquée qui a permis de sauver Han Solo des mains de Jabba le Hutt, les rebelles se rendent à Endor pour détruire une nouvelle Etoile de la mort, encore plus puissante. Pendant ce temps, Luke se bat pour aider Dark Vador à sortir du côté obscur sans tomber dans le piège de l'Empereur.`,
        poster: '/the-return-of-the-jedi-title.png',
        wallpaper: '/the-return-of-the-jedi.jpg'
    },
    {
        title: `{Star Wars : Épisode VII - Le Réveil de la Force}`,
        releaseDate: '2015',
        director: 'J.J. Abrams',
        writers: ['J.J. Abrams'],
        synopis: `Trente ans après la défaite de l'Empire, une nouvelle menace apparaît au sein du Premier Ordre. Le Stormtrooper déserteur Finn et Rey se retrouvent impliqués par la Résistance dans la recherche de Luke Skywalker.`,
        poster: '/the-force-awakens-title.png',
        wallpaper: '/the-force-awakens.jpg'
    },
    {
        title: `{Star Wars : Épisode VIII - Les Derniers Jedi}`,
        releaseDate: '2017',
        director: 'Rian Johson',
        writers: ['Rian Johson'],
        synopis: `Rey continue de développer ses nouvelles capacités en suivant les conseils de Luke Skywalker, qui se voit déstabilisé par la force de ses pouvoirs. Pendant ce temps, la Résistance se prépare au combat contre le Premier Ordre.`,
        poster: '/the-last-jedi-title.png',
        wallpaper: '/the-last-jedi.jpg'
    }
]