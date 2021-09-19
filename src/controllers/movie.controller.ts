import express from 'express';

const getMovies = (_req: express.Request, res: express.Response): void => {
  res.json([
    {
      Title: 'The Dark Knight',
      Year: '2008',
      Rated: 'PG-13',
      Released: '18 Jul 2008',
      Runtime: '152 min',
      Genre: 'Action, Crime, Drama',
      Director: 'Christopher Nolan',
      Writer: 'Jonathan Nolan, Christopher Nolan, David S. Goyer',
      Actors: 'Christian Bale, Heath Ledger, Aaron Eckhart',
      Plot: 'Set within a year after the events of Batman Begins (2005), Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City, until a mysterious and sadistic criminal mastermind known only as "The Joker" appears in Gotham, creating a new wave of chaos. Batman\'s struggle against The Joker becomes deeply personal, forcing him to "confront everything he believes" and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent, and Rachel Dawes.',
      Language: 'English, Mandarin',
      Country: 'United States, United Kingdom',
      Awards: 'Won 2 Oscars. 159 wins & 163 nominations total',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '9.0/10' },
        { Source: 'Rotten Tomatoes', Value: '94%' },
        { Source: 'Metacritic', Value: '84/100' },
      ],
      Metascore: '84',
      imdbRating: '9.0',
      imdbVotes: '2,403,192',
      imdbID: 'tt0468569',
      Type: 'movie',
      DVD: '09 Dec 2008',
      BoxOffice: '$534,858,444',
      Production: 'Syncopy',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: "Schindler's List",
      Year: '1993',
      Rated: 'R',
      Released: '04 Feb 1994',
      Runtime: '195 min',
      Genre: 'Biography, Drama, History',
      Director: 'Steven Spielberg',
      Writer: 'Thomas Keneally, Steven Zaillian',
      Actors: 'Liam Neeson, Ralph Fiennes, Ben Kingsley',
      Plot: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
      Language: 'English, Hebrew, German, Polish, Latin',
      Country: 'United States',
      Awards: 'Won 7 Oscars. 91 wins & 49 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.9/10' },
        { Source: 'Rotten Tomatoes', Value: '98%' },
        { Source: 'Metacritic', Value: '94/100' },
      ],
      Metascore: '94',
      imdbRating: '8.9',
      imdbVotes: '1,259,395',
      imdbID: 'tt0108052',
      Type: 'movie',
      DVD: '12 Feb 2008',
      BoxOffice: '$96,898,818',
      Production: 'Universal Pictures, Amblin Entertainment',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Fight Club',
      Year: '1999',
      Rated: 'R',
      Released: '15 Oct 1999',
      Runtime: '139 min',
      Genre: 'Drama',
      Director: 'David Fincher',
      Writer: 'Chuck Palahniuk, Jim Uhls',
      Actors: 'Brad Pitt, Edward Norton, Meat Loaf',
      Plot: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      Language: 'English',
      Country: 'Germany, United States',
      Awards: 'Nominated for 1 Oscar. 11 wins & 38 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '79%' },
        { Source: 'Metacritic', Value: '66/100' },
      ],
      Metascore: '66',
      imdbRating: '8.8',
      imdbVotes: '1,935,272',
      imdbID: 'tt0137523',
      Type: 'movie',
      DVD: '14 Oct 2003',
      BoxOffice: '$37,030,102',
      Production: 'Art Linson Productions, Fox 2000 Pictures, Taurus Film, New Regency Pictures',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Forrest Gump',
      Year: '1994',
      Rated: 'PG-13',
      Released: '06 Jul 1994',
      Runtime: '142 min',
      Genre: 'Drama, Romance',
      Director: 'Robert Zemeckis',
      Writer: 'Winston Groom, Eric Roth',
      Actors: 'Tom Hanks, Robin Wright, Gary Sinise',
      Plot: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweeth',
      Language: 'English',
      Country: 'United States',
      Awards: 'Won 6 Oscars. 50 wins & 75 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '71%' },
        { Source: 'Metacritic', Value: '82/100' },
      ],
      Metascore: '82',
      imdbRating: '8.8',
      imdbVotes: '1,893,086',
      imdbID: 'tt0109830',
      Type: 'movie',
      DVD: '28 Aug 2001',
      BoxOffice: '$330,455,270',
      Production: 'Paramount Pictures',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '16 Jul 2010',
      Runtime: '148 min',
      Genre: 'Action, Adventure, Sci-Fi',
      Director: 'Christopher Nolan',
      Writer: 'Christopher Nolan',
      Actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page',
      Plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      Language: 'English, Japanese, French',
      Country: 'United States, United Kingdom',
      Awards: 'Won 4 Oscars. 157 wins & 220 nominations total',
      Poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.8/10' },
        { Source: 'Rotten Tomatoes', Value: '87%' },
        { Source: 'Metacritic', Value: '74/100' },
      ],
      Metascore: '74',
      imdbRating: '8.8',
      imdbVotes: '2,155,810',
      imdbID: 'tt1375666',
      Type: 'movie',
      DVD: '07 Dec 2010',
      BoxOffice: '$292,576,195',
      Production: 'Syncopy, Warner Bros.',
      Website: 'N/A',
      Response: 'True',
    },
    {
      Title: 'The Matrix',
      Year: '1999',
      Rated: 'R',
      Released: '31 Mar 1999',
      Runtime: '136 min',
      Genre: 'Action, Sci-Fi',
      Director: 'Lana Wachowski, Lilly Wachowski',
      Writer: 'Lilly Wachowski, Lana Wachowski',
      Actors: 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
      Plot: 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',
      Language: 'English',
      Country: 'United States, Australia',
      Awards: 'Won 4 Oscars. 42 wins & 51 nominations total',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
      Ratings: [
        { Source: 'Internet Movie Database', Value: '8.7/10' },
        { Source: 'Rotten Tomatoes', Value: '88%' },
        { Source: 'Metacritic', Value: '73/100' },
      ],
      Metascore: '73',
      imdbRating: '8.7',
      imdbVotes: '1,748,071',
      imdbID: 'tt0133093',
      Type: 'movie',
      DVD: '15 May 2007',
      BoxOffice: '$171,479,930',
      Production: 'Village Roadshow Prod., Silver Pictures',
      Website: 'N/A',
      Response: 'True',
    },
  ]);
};

export { getMovies };
