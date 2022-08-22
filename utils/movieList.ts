export interface Movie {
    title: string;
    release: number;
    synopis: string;
    poster: string;
    wallpaper: string;
    macheteOrder?: number;

}

export const movieList : Movie[] = [
    {
        title: `{Star Wars: Épisode I - La menace fantôme}`,
        release: 1999,
        synopis: `{Deux chevaliers Jedi échappent à un blocus hostile pour trouver des alliés lorsqu'ils rencontrent un jeune garçon qui pourrait apporter un équilibre à la Force, mais les Sith, longtemps inactifs, refont surface pour réclamer leur ancienne gloire.}`,
        poster: '/phantom-menace-title.png',
        wallpaper: '/phantom-menace.jpg'
    },
    {
        title: `{Star Wars : Épisode II - L'Attaque des clones}`,
        release: 2002,
        synopis: `{Dix ans après sa rencontre originale, Anakin Skywalker a une aventure interdite avec Padmé Amidala, alors que Obi-wan Kenobi enquêtait sur un attentat contre le sénateur et découvre une armée clonée secrète, fabriquée pour les Jedi.}`,
        poster: '/clone-wars-title.png',
        wallpaper: '/clone-wars.jpg',
        macheteOrder: 3
    },
    {
        title: `{Star Wars: The Clone Wars}`,
        release: 2008,
        synopis: `{Yoda, Mace Windu, Obi-Wan Kenobi, Anakin Skywalker et d'autres chevaliers Jedi dirigent la Grande Armée de la République contre l'armée droïde des Séparatistes.}`,
        poster: '/the-clone-wars-title.png',
        wallpaper: '/the-clone-wars.jpg',
        
    },
    {
        title: `{Star Wars : Épisode III - La Revanche des Sith}`,
        release: 2005,
        synopis: `{Dans la troisième année de la Guerre des Clones, le Jedi sauve Palpatine du Comte Dooku. Alors qu'Obi-Wan se lance à la poursuite d'une nouvelle menace, Anakin agit comme agent double entre le Conseil Jedi et Palpatine, et il est attiré dans un plan sinistre pour régner sur la galaxie.}`,
        poster: '/revenge-of-the-sith-title.png',
        wallpaper: '/revenge-of-the-sith.jpg',
        macheteOrder: 4
    },
    {
        title: `{Star Wars: The Bad Batch}`,
        release: 2021,
        synopis: `{Le «Bad Batch», une troupe d'élite de clones expérimentaux se fraye un chemin à travers une galaxie en constante évolution au lendemain de la guerre des clones.}`,
        poster: '/the-bad-batch-title.png',
        wallpaper: '/the-bad-batch.jpg',
        
    },
    {
        title: `{Solo: A Star Wars Story}`,
        release: 2018,
        synopis: `{Au cours d'une aventure dans la pègre, Han Solo rencontre son futur co-pilote Chewbacca ainsi que Lando Calrissian des années avant de rejoindre la Rébellion.}`,
        poster: '/solo-title.png',
        wallpaper: '/solo.jpg',
        
    },
    {
        title: `{Obi-Wan Kenobi}`,
        release: 2022,
        synopis: `{Le Maître Jedi Obi-Wan Kenobi veille en secret sur le jeune Luke Skywalker et doit échapper aux chasseurs élites de l'Empire durant son exil sur la planète désertique Tatooine.}`,
        poster: '/obi-wan-kenobi-title.png',
        wallpaper: '/obi-wan-kenobi.jpg',
        
    },
    {
        title: `{Star Wars Rebels}`,
        release: 2014,
        synopis: `{Un équipage courageux et malin se dresse contre l'Empire maléfique alors qu'il renforce son emprise sur la galaxie et pourchasse le dernier des Chevaliers Jedi (Jedi Knights).}`,
        poster: '/star-wars-rebels-title.png',
        wallpaper: '/star-wars-rebels.jpg',
        
    },
    {
        title: `{Rogue One: A Star Wars Story}`,
        release: 2016,
        synopis: `{La fille d'un scientifique impérial se joint à l'Alliance Rebelle dans une tentative risquée pour voler les plans de l'Étoile de la mort.}`,
        poster: '/rogue-one-title.png',
        wallpaper: '/rogue-one.jpg',
        
    },
    {
        title: `{Star Wars : Épisode IV - Un Nouvel Espoir}`,
        release: 1977,
        synopis: `{Luke Skywalker se joint à un chevalier Jedi, un pilote arrogant, un Wookiee et à deux droïdes pour sauver la galaxie de l'Empire, tout en essayant de sauver la princesse Léia du maléfique Dark Vador.}`,
        poster: '/a-new-hope-title.png',
        wallpaper: '/a-new-hope.jpg',
        macheteOrder: 1
    },
    {
        title: `Star Wars : Épisode V - L'Empire Contre-Attaque`,
        release: 1980,
        synopis: `{Après que les rebelles soient brutalement maîtrisés par l'Empire sur la planète de glace Hoth, Luke Skywalker commence son entraînement de Jedi avec Yoda, tandis que ses amis sont poursuivis par Dark Vador.}`,
        poster: '/the-empire-strike-back-title.png',
        wallpaper: '/the-empire-strike-back.jpg',
        macheteOrder: 2
    },
    {
        title: `{Star Wars : Épisode VI - Le Retour du Jedi}`,
        release: 1983,
        synopis: `{Après une mission risquée qui a permis de sauver Han Solo des mains de Jabba le Hutt, les rebelles se rendent à Endor pour détruire une nouvelle Etoile de la mort, encore plus puissante. Pendant ce temps, Luke se bat pour aider Dark Vador à sortir du côté obscur sans tomber dans le piège de l'Empereur.}`,
        poster: '/the-return-of-the-jedi-title.png',
        wallpaper: '/the-return-of-the-jedi.jpg',
        macheteOrder: 5
    },
    {
        title: `{The Mandalorian}`,
        release: 2019,
        synopis: `{La série se déroule après la chute de l'Empire et avant l'émergence du Premier Ordre, et suit les épreuves d'un tireur solitaire dans les confins de la galaxie, loin de l'autorité de la Nouvelle République.}`,
        poster: '/the-mandalorian-title.png',
        wallpaper: '/the-mandalorian.jpg',
        
    },
    {
        title: `{Le Livre de Boba Fett}`,
        release: 2021,
        synopis: `{Un spin-off de "The Mandalorian" qui met en vedette Temeura Morrison dans le rôle de Boba Fett et Ming-Na Wen dans le rôle de Fennec Shand.}`,
        poster: '/the-book-of-boba-fett-title.png',
        wallpaper: '/the-book-of-boba-fett.jpg',
        
    },
    {
        title: `{Star Wars Resistance}`,
        release: 2018,
        synopis: `{Kazuda Xiono, jeune pilote de la Résistance, est taché d'une mission top secret afin de d'enquêter le First Order (La Première Ordre), menace croissante dans la galaxie.}`,
        poster: '/star-wars-resistance-title.png',
        wallpaper: '/star-wars-resistance.jpg',
        
    },
    {
        title: `{Star Wars : Épisode VII - Le Réveil de la Force}`,
        release: 2015,
        synopis: `{Trente ans après la défaite de l'Empire, une nouvelle menace apparaît au sein du Premier Ordre. Le Stormtrooper déserteur Finn et Rey se retrouvent impliqués par la Résistance dans la recherche de Luke Skywalker.}`,
        poster: '/the-force-awakens-title.png',
        wallpaper: '/the-force-awakens.jpg',
        macheteOrder: 6
    },
    {
        title: `{Star Wars : Épisode VIII - Les Derniers Jedi}`,
        release: 2017,
        synopis: `{Rey continue de développer ses nouvelles capacités en suivant les conseils de Luke Skywalker, qui se voit déstabilisé par la force de ses pouvoirs. Pendant ce temps, la Résistance se prépare au combat contre le Premier Ordre.}`,
        poster: '/the-last-jedi-title.png',
        wallpaper: '/the-last-jedi.jpg',
        macheteOrder: 7
    },
    {
        title: `{Star Wars : Épisode IX - L'Ascension de Skywalker}`,
        release: 2019,
        synopis: `{La conclusion de la nouvelle trilogie «Star Wars».}`,
        poster: 'the-rise-of-skywalker-title.png',
        wallpaper: 'the-rise-of-skywalker.jpg',
        macheteOrder: 8
    }
]