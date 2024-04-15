//Exercise 1: Get the array of all Artists.
function getAllArtists(array) {
  let result = array.map((songs) => songs.artist);
  //console.log("Exercise 1 ->", result);
  return result;
}

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist) {
  return array.filter((songs) => songs.artist === artist);
}

//Exercise 3: Alphabetic order by title
function orderAlphabetically(songs) {
  if (!Array.isArray(songs)) {
    throw new Error("Input must be an array");
  }
  const titles = songs.map((song) => song.title);
  titles.sort();
  return titles.slice(0, 10);
}

//Exercise 4: Order by year, ascending
function orderByYear(songs) {
  if (!Array.isArray(songs)) {
    throw new Error("Input must be an array");
  }
  const songsCopy = [...songs];
  songsCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });
  return songsCopy;
}

//Exercise 5: Filter songs by genre
function songsByGenre(songs, genre) {
  if (!Array.isArray(songs)) {
    throw new Error("Input must be an array");
  }
  const songsCopy = [...songs];
  const filteredSongs = songsCopy.filter((song) => {
    return song.genre.includes(genre);
  });
  return filteredSongs;
}

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(songs) {
  if (!Array.isArray(songs)) {
    throw new Error("Input must be an array");
  }
  const songsCopy = [...songs];
  const songsWithDurationInSeconds = songsCopy.map((song) => {
    const [minutes, seconds] = song.duration.split("min ");
    const durationInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    return {
      ...song,
      duration: durationInSeconds,
    };
  });
  return songsWithDurationInSeconds;
}

//Exercise 7: Get the longest song
function getLongestSong(songs) {
  const maxLength = Math.max(...songs.map((song) => song.duration));
  const longestSongs = songs.filter((song) => song.duration === maxLength);
  return longestSongs.map((song) => ({ ...song }));
}

//Exercise 8: Get the shortest song
//Write the getShortestSong() function
function getShortestSong(songs) {
  const minLength = Math.min(...songs.map((song) => song.duration));
  const shortestSongs = songs.filter((song) => song.duration === minLength);
  return shortestSongs.map((song) => ({ ...song }));
}

export {
  getAllArtists,
  getSongsFromArtist,
  orderAlphabetically,
  orderByYear,
  songsByGenre,
  minutsToSeconds,
  getLongestSong,
  getShortestSong,
};
