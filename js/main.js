const main = document.getElementById("main");
const row = document.createElement("div");
const container = document.createElement("div");


main.appendChild(container);
container.appendChild(row);

row.classList.add("row");
row.classList.add('mx-2')
container.classList.add("container")
console.log(movies);

var movies = [
  {
    title: "Thank You for Your Service",
    year: 2017,
    categories: ["Biography", "Drama", "War"],
    imdbId: "tt2776878",
    imdbRating: 6.5,
    runtime: 109,
    language: "English",
    youtubeId: "GTl5SHYJxz4",
    summary:
      "DreamWorks Pictures' Thank You for Your Service follows a group of U.S. soldiers returning from Iraq who struggle to integrate back into family and civilian life, while living with the memory of a war that threatens to destroy them long after they've left the battlefield. Starring an ensemble cast led by Miles Teller, Haley Bennett, Joe Cole, Amy Schumer, Beulah Koale, Scott Haze, Keisha Castle-Hughes, Brad Beyer, Omar J. Dorsey and Jayson Warner Smith, the drama is based on the bestselling book by Pulitzer Prize-winning reporter and author David Finkel. Jason Hall, who wrote the screenplay of American Sniper, makes his directorial debut with Thank You for Your Service and also serves as its screenwriter. Jon Kilik (The Hunger Games series, Babel) produces the film, while Ann Ruark (Biutiful) and Jane Evans (Sin City) executive produces.",
    smallThumbnail: "http://i3.ytimg.com/vi/GTl5SHYJxz4/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/GTl5SHYJxz4/maxresdefault.jpg",
  },
  {
    title: "Professor Marston and the Wonder Women",
    year: 2017,
    categories: ["Biography", "Drama"],
    imdbId: "tt6133130",
    imdbRating: 7.1,
    runtime: 108,
    language: "English",
    youtubeId: "r991pr4Fohk",
    summary:
      "Details the unconventional life of Dr. William Marston, the Harvard psychologist and inventor who helped invent the modern lie detector test and created Wonder Woman in 1941. Marston was in a polyamorous relationship with his wife Elizabeth, a psychologist and inventor in her own right, and Olive Byrne, a former student who became an academic. This relationship was key to the creation of Wonder Woman, as Elizabeth and Olive's feminist ideals were ingrained in the character from her creation. Marston died of skin cancer in 1947, but Elizabeth and Olive remained a couple and raised their and Marston's children together. The film is said to focus on how Marston dealt with the controversy surrounding Wonder Woman's creation.",
    smallThumbnail: "http://i3.ytimg.com/vi/r991pr4Fohk/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/r991pr4Fohk/maxresdefault.jpg",
  },
  {
    title: "Goodbye Christopher Robin",
    year: 2017,
    categories: ["Biography", "Drama", "Family", "History"],
    imdbId: "tt1653665",
    imdbRating: 7.1,
    runtime: 107,
    language: "English",
    youtubeId: "uQq3aFSijRg",
    summary:
      "A rare glimpse into the relationship between beloved children's author A. A. Milne (Domhnall Gleeson) and his son Christopher Robin, whose toys inspired the magical world of Winnie the Pooh. Along with his mother Daphne (Margot Robbie), and his nanny Olive, Christopher Robin and his family are swept up in the international success of the books; the enchanting tales bringing hope and comfort to England after the First World War. But with the eyes of the world on Christopher Robin, what will the cost be to the family?",
    smallThumbnail: "http://i3.ytimg.com/vi/uQq3aFSijRg/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/uQq3aFSijRg/maxresdefault.jpg",
  },
  {
    title: "Kenny",
    year: 2017,
    categories: ["Documentary", "Sport"],
    imdbId: "tt7479144",
    imdbRating: 7.3,
    runtime: 86,
    language: "English",
    youtubeId: "ZHjc0cu9CgU",
    summary:
      "The day after the Heysel disaster, Kenny Dalglish became manager of Liverpool Football Club. Six years later he resigned from the club, shell-shocked in the wake of the Hillsborough disaster. In between he created one of the most exciting football teams of all times. 'Kenny' explores more than just the roller-coaster career of an iconic footballer and manager. It goes behind the scenes to reveal an intimate portrait of a man who sacrificed all in the service of his club, his family and the people of Liverpool.",
    smallThumbnail: "http://i3.ytimg.com/vi/ZHjc0cu9CgU/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/ZHjc0cu9CgU/maxresdefault.jpg",
  },
  {
    title: "Loving Vincent",
    year: 2017,
    categories: ["Animation", "Biography", "Crime", "Drama", "Mystery"],
    imdbId: "tt3262342",
    imdbRating: 7.9,
    runtime: 94,
    language: "English",
    youtubeId: "Gy0RVDM1sNA",
    summary:
      "A year after the death of the artist, Vincent van Gogh, Postman Roulin gets his slacker son, Armand, to hand deliver the artist's final letter written to his now late brother, Theo, to some worthy recipient after multiple failed postal delivery attempts. Although disdainful of this seemingly pointless chore, Armand travels to Auvers-sur-Oise where a purported close companion to Vincent, Dr. Gachet, lives. Having to wait until the doctor returns from business, Armand meets many of the people of that village who not only knew Vincent, but were apparently also models and inspirations for his art. In doing so, Armond becomes increasingly fascinated in the psyche and fate of Van Gogh as numerous suspicious details fail to add up. However, as Armond digs further, he comes to realize that Vincent's troubled life is as much a matter of interpretation as his paintings and there are no easy answers for a man whose work and tragedy would only be truly appreciated in the future.",
    smallThumbnail: "http://i3.ytimg.com/vi/Gy0RVDM1sNA/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/Gy0RVDM1sNA/maxresdefault.jpg",
  },
  {
    title: "Happy Death Day",
    year: 2017,
    categories: ["Horror", "Mystery", "Thriller"],
    imdbId: "tt5308322",
    imdbRating: 6.5,
    runtime: 96,
    language: "English",
    youtubeId: "1NTaDm3atkc",
    summary:
      "A teenage girl, trying to enjoy her birthday, soon realizes that this is her final one. That is, if she can figure out who her killer is. She must relive that day, over and over again, dying in a different way each time. Can she solve her own murder?",
    smallThumbnail: "http://i3.ytimg.com/vi/1NTaDm3atkc/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/1NTaDm3atkc/maxresdefault.jpg",
  },
  {
    title: "Blade Runner 2049",
    year: 2017,
    categories: ["Drama", "Mystery", "Sci-Fi", "Thriller"],
    imdbId: "tt1856101",
    imdbRating: 8.1,
    runtime: 164,
    language: "English",
    youtubeId: "gCcx85zbxz4",
    summary:
      "Thirty years after the events of the first film, a new blade runner, LAPD Officer K (Ryan Gosling), unearths a long-buried secret that has the potential to plunge what's left of society into chaos. K's discovery leads him on a quest to find Rick Deckard (Harrison Ford), a former LAPD blade runner who has been missing for 30 years.",
    smallThumbnail: "http://i3.ytimg.com/vi/gCcx85zbxz4/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/gCcx85zbxz4/maxresdefault.jpg",
  },
  {
    title: "My Little Pony: The Movie",
    year: 2017,
    categories: ["Adventure", "Animation", "Comedy", "Family", "Fantasy"],
    imdbId: "tt4131800",
    imdbRating: 6.2,
    runtime: 99,
    language: "English",
    youtubeId: "kIv_ConaZ1c",
    summary:
      "After a dark force conquers Canterlot, the Mane 6 - Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy, and Rarity - embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship to save their homeland.",
    smallThumbnail: "http://i3.ytimg.com/vi/kIv_ConaZ1c/hqdefault.jpg",
    bigThumbnail: "http://i3.ytimg.com/vi/kIv_ConaZ1c/maxresdefault.jpg",
  }
];

console.log(movies.length);



let getMovie = function (movies) {
  res = ""
  for (i of movies) {
    res += `
      <div class="card col-12 col-lg-4 col-xl-3" ">
      <iframe height="250px" src="https://www.youtube.com/embed/${i.youtubeId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div class="d-flex">
      <span class="card-body"><img src="${i.bigThumbnail}"></span>
      <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>
      </div>
      `
  }
  row.innerHTML = res
}

getMovie(movies);