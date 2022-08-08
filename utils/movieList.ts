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
        title: 'Star Wars',
        releaseDate: '1977',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX828_.jpg',
        wallpaper: 'https://m.media-amazon.com/images/M/MV5BMTYzOTE1ODI5NF5BMl5BanBnXkFtZTcwMTMxMzA4NA@@._V1_.jpg'
    },
    {
        title: 'Star Wars 2',
        releaseDate: '2001',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX828_.jpg',
        wallpaper: 'https://m.media-amazon.com/images/M/MV5BMTYzOTE1ODI5NF5BMl5BanBnXkFtZTcwMTMxMzA4NA@@._V1_.jpg'
    },
    {
        title: 'Star Wars 3',
        releaseDate: '2010',
        director: 'George Lucas',
        writers: ['George Lucas'],
        synopis: `Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX828_.jpg',
        wallpaper: 'https://m.media-amazon.com/images/M/MV5BMTYzOTE1ODI5NF5BMl5BanBnXkFtZTcwMTMxMzA4NA@@._V1_.jpg'
    }
]