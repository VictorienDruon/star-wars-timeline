export interface Movie {
    title: string;
    release: number;
    synopis: string;
    poster: string;
    wallpaper: string;
    macheteOrder?: number;
    playerId: string;
    trailerId: string;

}

export const movieList : Movie[] = [
    {
        title: `Star Wars: Épisode I - La menace fantôme`,
        release: 1999,
        synopis: `Deux chevaliers Jedi échappent à un blocus hostile pour trouver des alliés lorsqu'ils rencontrent un jeune garçon qui pourrait apporter un équilibre à la Force, mais les Sith, longtemps inactifs, refont surface pour réclamer leur ancienne gloire.`,
        poster: '/phantom-menace-title.png',
        wallpaper: '/phantom-menace.jpg',
        playerId: "cfaac7b8-2f21-43cb-8afe-39466c3a6edd",
        trailerId: "d7ce7e85-deb8-4fa9-8693-5206c144e317"
    },
    {
        title: `Star Wars : Épisode II - L'Attaque des clones`,
        release: 2002,
        synopis: `Dix ans après sa rencontre originale, Anakin Skywalker a une aventure interdite avec Padmé Amidala, alors que Obi-wan Kenobi enquêtait sur un attentat contre le sénateur et découvre une armée clonée secrète, fabriquée pour les Jedi.`,
        poster: '/clone-wars-title.png',
        wallpaper: '/clone-wars.jpg',
        macheteOrder: 3,
        playerId: "d835ada5-e760-4fff-b3ba-c13c67379342",
        trailerId: "5ce189be-5844-47bb-8adc-d2284c6ea00d"
    },
    {
        title: `Star Wars: The Clone Wars`,
        release: 2008,
        synopis: `Yoda, Mace Windu, Obi-Wan Kenobi, Anakin Skywalker et d'autres chevaliers Jedi dirigent la Grande Armée de la République contre l'armée droïde des Séparatistes.`,
        poster: '/the-clone-wars-title.png',
        wallpaper: '/the-clone-wars.jpg',
        playerId: "0bf87f10-d9a1-44ca-8371-f38543eb3706",
        trailerId: "b92e423a-559b-4862-8ae6-789c82f14dec"
    },
    {
        title: `Star Wars : Épisode III - La Revanche des Sith`,
        release: 2005,
        synopis: `Dans la troisième année de la Guerre des Clones, le Jedi sauve Palpatine du Comte Dooku. Alors qu'Obi-Wan se lance à la poursuite d'une nouvelle menace, Anakin agit comme agent double entre le Conseil Jedi et Palpatine, et il est attiré dans un plan sinistre pour régner sur la galaxie.`,
        poster: '/revenge-of-the-sith-title.png',
        wallpaper: '/revenge-of-the-sith.jpg',
        macheteOrder: 4,
        playerId: "e6c11857-0e8d-4bb4-9303-8bad77dc6890",
        trailerId: "ec8e3e77-bb10-4fde-a9e9-5acc9fd083d9"
    },
    {
        title: `Star Wars: The Bad Batch`,
        release: 2021,
        synopis: `Le «Bad Batch», une troupe d'élite de clones expérimentaux se fraye un chemin à travers une galaxie en constante évolution au lendemain de la guerre des clones.`,
        poster: '/the-bad-batch-title.png',
        wallpaper: '/the-bad-batch.jpg',
        playerId: "07370ce7-64fa-4953-93a2-5e8501539ac7",
        trailerId: "cd75794b-6a75-4829-bb1a-e2b99625d8f8"
    },
    {
        title: `Solo: A Star Wars Story`,
        release: 2018,
        synopis: `Au cours d'une aventure dans la pègre, Han Solo rencontre son futur co-pilote Chewbacca ainsi que Lando Calrissian des années avant de rejoindre la Rébellion.`,
        poster: '/solo-title.png',
        wallpaper: '/solo.jpg',
        playerId: "f3b2f44e-5818-476c-97a6-211b1d1dc888",
        trailerId: "6f92ca39-98e5-4ed2-b76b-cec00eb9075d"
    },
    {
        title: `Obi-Wan Kenobi`,
        release: 2022,
        synopis: `Le Maître Jedi Obi-Wan Kenobi veille en secret sur le jeune Luke Skywalker et doit échapper aux chasseurs élites de l'Empire durant son exil sur la planète désertique Tatooine.`,
        poster: '/obi-wan-kenobi-title.png',
        wallpaper: '/obi-wan-kenobi.jpg',
        playerId: "8b783732-c891-482f-aeb9-6a52182abd70",
        trailerId: "4a2924c5-68e7-44b7-9d46-a89bc37f8276"
    },
    {
        title: `Star Wars Rebels`,
        release: 2014,
        synopis: `Un équipage courageux et malin se dresse contre l'Empire maléfique alors qu'il renforce son emprise sur la galaxie et pourchasse le dernier des Chevaliers Jedi (Jedi Knights).`,
        poster: '/star-wars-rebels-title.png',
        wallpaper: '/star-wars-rebels.jpg',
        playerId: "d7fdc28e-6a36-44bd-a0c3-df8661ea1d6e",
        trailerId: ""
    },
    {
        title: `Rogue One: A Star Wars Story`,
        release: 2016,
        synopis: `La fille d'un scientifique impérial se joint à l'Alliance Rebelle dans une tentative risquée pour voler les plans de l'Étoile de la mort.`,
        poster: '/rogue-one-title.png',
        wallpaper: '/rogue-one.jpg',
        playerId: "32678966-0fb2-4fe4-a8d2-466fdadc1930",
        trailerId: "e6a67e31-6873-4cb2-812c-ff1ca241d6f8"
    },
    {
        title: `Star Wars : Épisode IV - Un Nouvel Espoir`,
        release: 1977,
        synopis: `Luke Skywalker se joint à un chevalier Jedi, un pilote arrogant, un Wookiee et à deux droïdes pour sauver la galaxie de l'Empire, tout en essayant de sauver la princesse Léia du maléfique Dark Vador.`,
        poster: '/a-new-hope-title.png',
        wallpaper: '/a-new-hope.jpg',
        macheteOrder: 1,
        playerId: "3e66f25f-9f6b-441f-ba80-d2eb0829b8ec",
        trailerId: "74c90a02-46d6-4d64-93fc-c2cc5453e1cc"
    },
    {
        title: `Star Wars : Épisode V - L'Empire Contre-Attaque`,
        release: 1980,
        synopis: `Après que les rebelles soient brutalement maîtrisés par l'Empire sur la planète de glace Hoth, Luke Skywalker commence son entraînement de Jedi avec Yoda, tandis que ses amis sont poursuivis par Dark Vador.`,
        poster: '/the-empire-strike-back-title.png',
        wallpaper: '/the-empire-strike-back.jpg',
        macheteOrder: 2,
        playerId: "51e68175-a886-43a4-9443-7eaa2192d94e",
        trailerId: "df5297a4-301d-4e8c-9fab-caffd3a4b49a"
    },
    {
        title: `Star Wars : Épisode VI - Le Retour du Jedi`,
        release: 1983,
        synopis: `Après une mission risquée qui a permis de sauver Han Solo des mains de Jabba le Hutt, les rebelles se rendent à Endor pour détruire une nouvelle Etoile de la mort, encore plus puissante. Pendant ce temps, Luke se bat pour aider Dark Vador à sortir du côté obscur sans tomber dans le piège de l'Empereur.`,
        poster: '/the-return-of-the-jedi-title.png',
        wallpaper: '/the-return-of-the-jedi.jpg',
        macheteOrder: 5,
        playerId: "d6b17080-ddec-496d-8e3d-ddcb32415367",
        trailerId: "bf76dec3-264c-4643-b926-acd2930c9338"
    },
    {
        title: `The Mandalorian`,
        release: 2019,
        synopis: `La série se déroule après la chute de l'Empire et avant l'émergence du Premier Ordre, et suit les épreuves d'un tireur solitaire dans les confins de la galaxie, loin de l'autorité de la Nouvelle République.`,
        poster: '/the-mandalorian-title.png',
        wallpaper: '/the-mandalorian.jpg',
        playerId: "30ea8a44-797d-4da8-b776-2e3636a2bf5a",
        trailerId: "73b1f5c3-cadd-496b-9c0b-89a3cddbedf7"
    },
    {
        title: `Le Livre de Boba Fett`,
        release: 2021,
        synopis: `Un spin-off de "The Mandalorian" qui met en vedette Temeura Morrison dans le rôle de Boba Fett et Ming-Na Wen dans le rôle de Fennec Shand.`,
        poster: '/the-book-of-boba-fett-title.png',
        wallpaper: '/the-book-of-boba-fett.jpg',
        playerId: "a92bdf06-e51a-462d-919f-3341a9d5e083",
        trailerId: "1c081e93-d0dc-4f9e-810b-4f996011f9c9"
    },
    {
        title: `Star Wars Resistance`,
        release: 2018,
        synopis: `Kazuda Xiono, jeune pilote de la Résistance, est taché d'une mission top secret afin de d'enquêter le First Order (La Première Ordre), menace croissante dans la galaxie.`,
        poster: '/star-wars-resistance-title.png',
        wallpaper: '/star-wars-resistance.jpg',
        playerId: "61b96dcb-91c7-4014-8392-901098ae5697",
        trailerId: ""
    },
    {
        title: `Star Wars : Épisode VII - Le Réveil de la Force`,
        release: 2015,
        synopis: `Trente ans après la défaite de l'Empire, une nouvelle menace apparaît au sein du Premier Ordre. Le Stormtrooper déserteur Finn et Rey se retrouvent impliqués par la Résistance dans la recherche de Luke Skywalker.`,
        poster: '/the-force-awakens-title.png',
        wallpaper: '/the-force-awakens.jpg',
        macheteOrder: 6,
        playerId: "8dda614a-7b66-42b3-974a-b85351d9cd97",
        trailerId: "b6ba9fb4-85ab-461f-ac2a-e45406d22095"
    },
    {
        title: `Star Wars : Épisode VIII - Les Derniers Jedi`,
        release: 2017,
        synopis: `Rey continue de développer ses nouvelles capacités en suivant les conseils de Luke Skywalker, qui se voit déstabilisé par la force de ses pouvoirs. Pendant ce temps, la Résistance se prépare au combat contre le Premier Ordre.`,
        poster: '/the-last-jedi-title.png',
        wallpaper: '/the-last-jedi.jpg',
        macheteOrder: 7,
        playerId: "fcc49a0a-ba42-4a95-8bca-af69fc7d7275",
        trailerId: "46afca36-6c49-463c-8d42-163a9d4d2819"
    },
    {
        title: `Star Wars : Épisode IX - L'Ascension de Skywalker`,
        release: 2019,
        synopis: `La conclusion de la nouvelle trilogie «Star Wars».`,
        poster: 'the-rise-of-skywalker-title.png',
        wallpaper: 'the-rise-of-skywalker.jpg',
        macheteOrder: 8,
        playerId: "79938276-b6d2-41e2-938d-5dc5decd4d53",
        trailerId: "35a8fdc4-3938-4a85-b676-8907e58ac909"
    }
]