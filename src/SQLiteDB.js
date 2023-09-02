const { contextBridge } = require('electron')
const db = require('better-sqlite3')('./resources/[z°]Musique.db');
// const db = require('better-sqlite3')('./resources/jukebox.db');
var fs = require('fs');
var Path = require('path');
console.log('fs', fs);
console.log('typeOf', typeof fs.writeFile);

//* Create File
// var FicherSon = Fichier.value
// fs.writeFile(FicherSon, "!!!!!Hello content!!!", (err) => {
//     if (err) throw err
//     console.log('Saved!')
// });

//* Read File
// fs.open('mynewfile2.txt', 'w', function (err, content) {
//   if (err) throw err
//   console.log('Saved!')
// });

//* Read File
// const filePath = Path.join(process.cwd(), 'MonPremierFichier2.txt')
// fs.readFile(filePath, (erreur, content) =>{
//   if (erreur) throw erreur
//   console.log(content.toString())
// })

//* Rename File
// fs.rename(`${process.cwd()}/MonPremierFichier.txt`, `${process.cwd()}/MonPremierFichier2.txt`, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Folder Update Rename successfully !!!")
// })

//* Update File
// fs.appendFile(filePath, "\nNew Update File", (erreur) =>{
//   if (erreur) throw erreur
//   console.log(content.toString())
// })

//* Delete File
// fs.unlink("mynewfile2.txt", (erreur) =>{
//   if (erreur) throw erreur
//   console.log("file Delete")
// })

//* Create Director in Director
// fs.mkdir(`${process.cwd()}/myFolder/secondeFolder`, {recursive: true}, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Recursive Folder Created successfully !!!")
// })

//* Create 1 Director
// fs.mkdir(`${process.cwd()}/myFolder2`, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Folder Created successfully !!!")
// })

//* Read Director
// fs.readdir(process.cwd(), (erreur, files) =>{
//   if (erreur) throw erreur
//   console.log(files)
// })

//* Delete Director
// fs.rmdir(`${process.cwd()}/myFolder/`, {recursive: true}, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Recursive Folder Delete !!!")
// })

// fs.rmdir(`${process.cwd()}/myFolder/`, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Folder Delete !!!")
// })

// * Update Rename Directory
// fs.rename(`${process.cwd()}/myFolder/secondeFolder`, `${process.cwd()}/myFolder/secondFolder`, (erreur) => {
//   if (erreur) throw erreur
//   console.log("Folder Update Rename successfully !!!")
// })

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  findAllAlbums: () => {
    const rows = db.prepare("SELECT * FROM albums").all()
    console.log("I searched all albums")
    return rows
  },
  findAllSongs: () => {
    const rows = db.prepare("SELECT * FROM songs").all()
    console.log("I searched all songs")
    return rows
  },
  findAllArtists: () => {
    const rows = db.prepare("SELECT * FROM artists").all()
    console.log("I searched all artists")
    return rows
  },
  findAllSongsForAlbum: (id) => {
    const rows = db.prepare(`SELECT * FROM songs WHERE album_id = ${id}`).all()
    console.log("I searched all songsforAlbum "+id)
    return rows
  },
  addArtist: (name) => {
    const rows = db.prepare(`INSERT INTO artists (name) VALUES (?)`).run(name)
    // const adopt = db.transaction((artist) => {
    //   rows.run("chriss Fufti");
    //   insertMany(artist); // nested transaction
    // });
    console.log("New Artist Added")
  },
  addAlbum: (AlbumName) => {
    // const artist_id = db.prepare(`SELECT id FROM artists WHERE name = ?`).get(ArtistName)
    // artist_id === null || artist_id === undefined || artist_id === "" ? addArtist(ArtistName) : null;
    // const album_name = db.prepare(`INSERT INTO albums (name, artist_id) VALUES (?, ?)`).run(`${AlbumName}`, artist_id)
    const album_name = db.prepare(`INSERT INTO albums VALUES (?)`).run(AlbumName)
    // const album_name = db.prepare(`INSERT INTO albums (name) VALUES (?)`).run(AlbumName)
    // console.log("album_name", album_name)
    console.log("New Album Added")
  },
  addSong: (name, path, positon) => {
    const rows = db.prepare(`INSERT INTO Song (name) VALUES (?)`).run(name)

    console.log("New Song Added")
  },
  searchArtistByName: (ArtistName) => {
    const artist_id = db.prepare(`SELECT id FROM artists WHERE name = ?`).run(ArtistName)
    console.log("Artists founded")
    return artist_id
  },
  AlbumsGroupByArtists: () => {
    const rows = db.prepare("SELECT name FROM albums GROUP BY artist_id").all()
    console.log("I searched all albums order by artists")
    return rows
  }
  
})

// var FicherSon = Fichier.value
// return db.prepare(SELECT name FROM albums WHERE name LIKE '%${name}%' UNION SELECT name FROM artists WHERE name LIKE '%${name}%' UNION SELECT name FROM songs WHERE name LIKE '%${name}%' ).all()