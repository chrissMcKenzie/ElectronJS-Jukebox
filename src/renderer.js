// import { Header, Main, Footer } from "./pages/js/templates/Template.js";
import { Header } from "./pages/js/templates/Header.js";
import { Main } from "./pages/js/templates/Main.js";
import { Footer } from "./pages/js/templates/Footer.js";

import { OngletAlbum } from "./pages/js/templates/OngletAlbum.js";
import { OngletTeam } from "./pages/js/templates/OngletTeam.js";
import { OngletAdmin } from "./pages/js/templates/OngletAdmin.js";
import { OngletContact } from "./pages/js/templates/OngletContact.js";
// import Player from "./pages/js/Player.js";
// const {writeFile, readFile} = require('fs')

new Header()
new Main();
    new OngletAlbum(); new OngletTeam(); new OngletAdmin(); new OngletContact();
new Footer()


var AllArtists = versions.findAllArtists();  console.log("findAllArtists", AllArtists)
var AllAlbums = versions.findAllAlbums();  console.log("findAllAlbums", AllAlbums)
var AllSongs = versions.findAllSongs();  console.log("findAllSongs", AllSongs)
var AllSongsForAlbum = versions.findAllSongsForAlbum; // console.log("AllSongsForAlbum", AllSongsForAlbum)
var AddArtist = versions.addArtist; // console.log("AllSongsForAlbum", AllSongsForAlbum)
var AddAlbum = versions.addAlbum; // console.log("AllSongsForAlbum", AllSongsForAlbum)
var AddSong = versions.addSong; // console.log("AllSongsForAlbum", AllSongsForAlbum)
var SearchArtistByName = versions.searchArtistByName; // console.log("AllSongsForAlbum", AllSongsForAlbum)
// var BouttonDeFermetureD_Album = document.querySelector(".lightbox-close")

export var Albums = document.querySelector("#Albums"); //console.log("Albums", Albums);
AllAlbums.map(i => Albums.innerHTML += `
  <div class="hex col-sm-6">
    <div>
      <div class="hexagon hexagon2 gallery-item">
        <div class="hexagon-in1">
          <div id="album_${i.id}" class="hexagon-in2" style="background-image: url(./../src/media/images/albums/${i.name.replaceAll(" ", "")}.jpg); border: green 5px solid;">
            <h1>${i.name.replaceAll(" ", "")}</h1>
            <div class="overlay">
              <a href="./../src/media/images/albums/${i.name.replaceAll(" ", "")}.jpg" class="fa fa-expand" data-rel="lightbox"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`)

AllAlbums.map(album => {
  document.querySelector("#album_" + album.id).addEventListener("click",()=>{
    // console.log(AllAlbums.length);
    ShowAlbumSong_s(album.id);
    
    document.querySelector(".lightbox-previous").addEventListener("click",()=>{
        let IdPrécédent = --album.id
        AlbumSongs.innerHTML = ""
        ShowAlbumSong_s(IdPrécédent)

        if(IdPrécédent < 1){
            IdPrécédent = AllAlbums.length
            console.log("IdPrécédent", IdPrécédent);
            AlbumSongs.innerHTML = ""
            ShowAlbumSong_s(--IdPrécédent)
        }
    })
    document.querySelector(".lightbox-next").addEventListener("click",()=>{
        let IdSuivant = ++album.id
        AlbumSongs.innerHTML = ""
        ShowAlbumSong_s(IdSuivant)

        if(IdSuivant > AllAlbums.length){
            IdSuivant = AllAlbums.length
            console.log("IdSuivant", IdSuivant);
            AlbumSongs.innerHTML = ""
            ShowAlbumSong_s(++IdSuivant)
        }
    })
  })

})

// BouttonDeFermetureD_Album.addEventListener('click', ()=>document.location.reload())

// const audio = document.querySelector("#Audio"); console.log("audio", audio);
const track = document.querySelector("#track"); console.log("track", track);
const elapsed = document.querySelector("#elapsed"); console.log("elapsed", elapsed);
const trackTime = document.querySelector("#track-time"); console.log("trackTime", trackTime);
// const BoutonPlay = document.querySelector("#BoutonPlay"); console.log("BoutonPlay", BoutonPlay);
const BoutonPause = document.querySelector("#BoutonPause"); console.log("BoutonPause", BoutonPause);
const BoutonStop = document.querySelector("#BoutonStop"); console.log("BoutonStop", BoutonStop);
const volume = document.querySelector("#volume"); console.log("volume", volume);
const volumeValue = document.querySelector("#volume-value"); console.log("volumeValue", volumeValue);

// let temps = audio.duration

// trackTime.textContent = FormaterLeTemps(temps)

// BoutonPlay.addEventListener("click", function(){
//     Audio.play()
//     Audio.volume = volume.value
//     BoutonPause.style.display = "initial"
//     BoutonStop.style.display = "initial"
//     this.style.display = "none"
// })
// console.log("Audio", Audio);
// console.log("BoutonPlay", BoutonPlay);

// BoutonPause.addEventListener("click", function(){
//     audio.pause()
//     BoutonPlay.style.display = "initial"
//     this.style.display = "none"
// })
// BoutonStop.addEventListener("click", function(){
//     audio.pause(); audio.currentTime = 0;
//     BoutonPlay.style.display = "initial"
//     BoutonPause.style.display = "none"
//     this.style.display = "none"
// })

// audio.addEventListener("timeupdate", function(){
//     track.value = this.currentTime
//     // FormaterLeTemps()
//     elapsed.textContent = FormaterLeTemps(this.currentTime)
// })

// track.addEventListener("input", function(){
//     elapsed.textContent = FormaterLeTemps(this.value)
//     audio.currentTime = this.value
// })

// volume.addEventListener("input", function(){
//     audio.volume = this.value
//     volumeValue.textContent = this.value * 100 + "%"
// })

function FormaterLeTemps(temps){
    let minutes = Math.floor(temps / 60)
    let reste = temps % 60; console.log(reste);
    let secondes = Math.floor(reste)
    secondes = String(secondes).padStart(2, 0)
    return minutes + ":" + secondes    
}

// GeneralPlayer.style.marginLeft = "38%"
// GeneralPlayer.style.marginTop = "-50px"
// GeneralPlayer.innerHTML += `
//     <div>
//         <p>Mickael Jackson - Wanna be...</p>
//         <input type="range" id="track" min="0" value="0" />
//         <span id="elapsed">0:00</span> / <span id="track-time">1:00</span>
//     </div>
//     <div>
//         <audio id="Audio" src="./../src/media/music/albums/thriller/wanna-be-startin-somethin-.mp3">
//             <a href="./../src/media/music/albums/thriller/wanna-be-startin-somethin-.mp3"></a>
//         </audio>
//         <img id="BoutonPlay" height="90px" src="./../src/media/images/bouton-jouer0.png" alt="bouton-jouer">
//         <img id="BoutonPause" height="90px" src="./../src/media/images/bouton-pause0.png" alt="bouton-pause">
//         <img id="BoutonStop" with="90px" src="./../src/media/images/bouton-stop0.png" alt="bouton-stop">
//     </div>
//     <div>
//         <input type="range" id="volume" min="0" max="1" value="1" step="0.1" />
//         <span id="volume-value">100%</span>
//     </div>
// `
// var TitreTropLong = document.querySelector(".TitreTropLong")
// TitreTropLong.scroll = (e) => {
//     var horizontal = e.currentTarget.scrollLeft;
//     // vertical = e.currentTarget.scrollTop;
//     console.log("horizontal", horizontal);
// }

function ShowAlbumSong_s(artist_id){
    document.querySelector(".lightbox-close").addEventListener('click', ()=> document.location.reload())
    // var AlbumSongs = document.querySelector("#AlbumSongs"); console.log("AlbumSongs", AlbumSongs);
    // var GeneralPlayer = document.querySelector("#GeneralPlayer"); console.log("GeneralPlayer", GeneralPlayer);
    AllSongsForAlbum(parseInt(artist_id)).map(i => {
        // console.log("name", i.name);
        // console.log("name.length", i.name.length);
        // console.log("name.join", i.name.join("..."));

        return AlbumSongs.innerHTML +=`
            <div class="Players">
                ${i.name.length >= 15 ? `<span style="border: 1px red solid; overflow: scroll; width: 90px;">${i.name}...</span>` : `<span>${i.name}</span>`}
                <audio controls src="./../src/media/music/albums/${i.path}" style="height: 45px;">
                    <a href="./../src/media/music/albums/${i.path}"></a>
                </audio>
            </div>
        `;
    })

}


Create.onclick = ()=>{
    Create.parentNode.parentNode.style.backgroundColor = "#108810";
    let Administration = document.createElement("form")
    Administration.id = "Administration"
    Administration.method = "POST"
    Administration.innerHTML = `
            <div style="text-align: center;">
                <a href="#" id="FermetureCruds" class="lightbox-close lightbox-button"></a>
                <label style="margin: 5% 1%;">
                    <span id="OngletArtistes" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Artiste<small>(s)</small></span><span id="OngletAlbums" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Album<small>(s)</small></span><span id="OngletMusiques" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Musique<small>(s)</small></span>
                </label>
                <div id="FormArtiste" style="display:none;">
                    <input type="text" id="Artiste" name="" placeholder="Artiste ?" />
                </div>
                <div id="FormAlbum" style="display:none;">
                    <input type="text" id="Album" name="" placeholder="Album ?" />
                    <input type="text" id="ArtisteAuteur" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div id="FormSong" style="display:none;">
                    <input type="text" id="Song" name="" placeholder="Song ?" />
                    <input type="text" id="AlbumAuteur" name="" placeholder="AlbumAuteur ?" />
                    <input type="text" id="ArtisteAuteur2" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div>
                    <button type="submit" style="margin: 2%;" id="CREATE">CREATE</button>
                </div>
            </div>
    `
    document.body.appendChild(Administration)
    FermetureCruds.addEventListener('click', ()=> document.location.reload())

    OngletArtistes.onclick = ()=>{
        OngletArtistes.style.backgroundColor = "#696969";
        FormArtiste.style.display = "block";
        FormAlbum.style.display = "none";
        FormSong.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletAlbums.onclick = ()=>{
        OngletAlbums.style.backgroundColor = "#696969";
        FormAlbum.style.display = "block";
        FormArtiste.style.display = "none";
        FormSong.style.display = "none";
        OngletArtistes.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletMusiques.onclick = ()=>{
        OngletMusiques.style.backgroundColor = "#696969";
        FormSong.style.display = "block";
        FormAlbum.style.display = "none";
        FormArtiste.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletArtistes.style.backgroundColor = "lightgrey";
    }

    CREATE.onclick = (e)=> {
        e.preventDefault();
        var ArtisteInput = Artiste.value
        var AlbumInput = Album.value
        var ArtisteAuteurInput = ArtisteAuteur.value
        var SongInput = Song.value
        var AlbumAuteurInput = AlbumAuteur.value
        var ArtisteAuteurInput2 = ArtisteAuteur2.value
        // console.log(ArtisteInput, ArtisteAuteurInput, AlbumInput)
        ArtisteInput != "" ? AddArtist(ArtisteInput) : null
        // AlbumInput != "" && ArtisteAuteurInput != "" ? AddAlbum(AlbumInput, ArtisteAuteurInput) : null
        if(AlbumInput != "" && ArtisteAuteurInput != ""){
            var artist_id = SearchArtistByName(ArtisteAuteurInput)
            // SearchArtistByName(ArtisteAuteurInput)
            AddAlbum(AlbumInput, artist_id)
            // AddAlbum(AlbumInput)
        }
        if(SongInput != "" && AlbumAuteurInput != "" && ArtisteAuteurInput2 != ""){
            AddSong(SongNameInput, SongPathInput, SongPositionInput, Album_Id)
            var artist_id = SearchArtistByName(ArtisteAuteurInput)
            // SearchArtistByName(ArtisteAuteurInput)
            AddAlbum(AlbumInput, artist_id)
            // AddAlbum(AlbumInput)
        }
    }
}

Read.onclick = ()=>{
    Read.parentNode.parentNode.style.backgroundColor = "#108810";
    let Administration = document.createElement("form")
    Administration.id = "Administration"
    Administration.method = "POST"
    Administration.innerHTML = `
            <div style="text-align: center;">
                <a href="#" id="FermetureCruds" class="lightbox-close lightbox-button"></a>
                <label style="margin: 5% 1%;">
                    <span id="OngletArtistes" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Artiste<small>(s)</small></span><span id="OngletAlbums" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Album<small>(s)</small></span><span id="OngletMusiques" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Musique<small>(s)</small></span>
                </label>
                <div id="FormArtiste" style="display:none;">
                    <input type="text" id="Artiste" name="" placeholder="Artiste ?" />
                </div>
                <div id="FormAlbum" style="display:none;">
                    <input type="text" id="Album" name="" placeholder="Album ?" />
                    <input type="text" id="ArtisteAuteur" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div id="FormSong" style="display:none;">
                    <input type="text" id="Song" name="" placeholder="Song ?" />
                    <input type="text" id="AlbumAuteur" name="" placeholder="AlbumAuteur ?" />
                    <input type="text" id="ArtisteAuteur2" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div>
                    <button type="submit" style="margin: 2%;" id="READ">READ</button>
                </div>
            </div>
    `
    document.body.appendChild(Administration)
    FermetureCruds.addEventListener('click', ()=> document.location.reload())

    OngletArtistes.onclick = ()=>{
        OngletArtistes.style.backgroundColor = "#696969";
        FormArtiste.style.display = "block";
        FormAlbum.style.display = "none";
        FormSong.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletAlbums.onclick = ()=>{
        OngletAlbums.style.backgroundColor = "#696969";
        FormAlbum.style.display = "block";
        FormArtiste.style.display = "none";
        FormSong.style.display = "none";
        OngletArtistes.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletMusiques.onclick = ()=>{
        OngletMusiques.style.backgroundColor = "#696969";
        FormSong.style.display = "block";
        FormAlbum.style.display = "none";
        FormArtiste.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletArtistes.style.backgroundColor = "lightgrey";
    }

}

Update.onclick = ()=>{
    Update.parentNode.parentNode.style.backgroundColor = "#108810";
    let Administration = document.createElement("form")
    Administration.id = "Administration"
    Administration.method = "POST"
    Administration.innerHTML = `
            <div style="text-align: center;">
                <a href="#" id="FermetureCruds" class="lightbox-close lightbox-button"></a>
                <label style="margin: 5% 1%;">
                    <span id="OngletArtistes" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Artiste<small>(s)</small></span><span id="OngletAlbums" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Album<small>(s)</small></span><span id="OngletMusiques" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Musique<small>(s)</small></span>
                </label>
                <div id="FormArtiste" style="display:none;">
                    <input type="text" id="Artiste" name="" placeholder="Artiste ?" />
                </div>
                <div id="FormAlbum" style="display:none;">
                    <input type="text" id="Album" name="" placeholder="Album ?" />
                    <input type="text" id="ArtisteAuteur" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div id="FormSong" style="display:none;">
                    <input type="text" id="Song" name="" placeholder="Song ?" />
                    <input type="text" id="AlbumAuteur" name="" placeholder="AlbumAuteur ?" />
                    <input type="text" id="ArtisteAuteur2" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div>
                    <button type="submit" style="margin: 2%;" id="UPDATE">UPDATE</button>
                </div>
            </div>
    `
    document.body.appendChild(Administration)
    FermetureCruds.addEventListener('click', ()=> document.location.reload())

    OngletArtistes.onclick = ()=>{
        OngletArtistes.style.backgroundColor = "#696969";
        FormArtiste.style.display = "block";
        FormAlbum.style.display = "none";
        FormSong.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletAlbums.onclick = ()=>{
        OngletAlbums.style.backgroundColor = "#696969";
        FormAlbum.style.display = "block";
        FormArtiste.style.display = "none";
        FormSong.style.display = "none";
        OngletArtistes.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletMusiques.onclick = ()=>{
        OngletMusiques.style.backgroundColor = "#696969";
        FormSong.style.display = "block";
        FormAlbum.style.display = "none";
        FormArtiste.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletArtistes.style.backgroundColor = "lightgrey";
    }

}

Delete.onclick = ()=>{
    Delete.parentNode.parentNode.style.backgroundColor = "#108810";
    let Administration = document.createElement("form")
    Administration.id = "Administration"
    Administration.method = "POST"
    Administration.innerHTML = `
            <div style="text-align: center;">
                <a href="#" id="FermetureCruds" class="lightbox-close lightbox-button"></a>
                <label style="margin: 5% 1%;">
                    <span id="OngletArtistes" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Artiste<small>(s)</small></span><span id="OngletAlbums" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Album<small>(s)</small></span><span id="OngletMusiques" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Musique<small>(s)</small></span>
                </label>
                <div id="FormArtiste" style="display:none;">
                    <input type="text" id="Artiste" name="" placeholder="Artiste ?" />
                </div>
                <div id="FormAlbum" style="display:none;">
                    <input type="text" id="Album" name="" placeholder="Album ?" />
                    <input type="text" id="ArtisteAuteur" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div id="FormSong" style="display:none;">
                    <input type="text" id="Song" name="" placeholder="Song ?" />
                    <input type="text" id="AlbumAuteur" name="" placeholder="AlbumAuteur ?" />
                    <input type="text" id="ArtisteAuteur2" name="" placeholder="ArtisteAuteur ?" />
                    <input type="file" name="Fichier" id="Fichier" style="margin: 1% auto"/>
                </div>
                <div>
                    <button type="submit" style="margin: 2%;" id="DELETE">DELETE</button>
                </div>
            </div>
    `
    document.body.appendChild(Administration)
    FermetureCruds.addEventListener('click', ()=> document.location.reload())

    OngletArtistes.onclick = ()=>{
        OngletArtistes.style.backgroundColor = "#696969";
        FormArtiste.style.display = "block";
        FormAlbum.style.display = "none";
        FormSong.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletAlbums.onclick = ()=>{
        OngletAlbums.style.backgroundColor = "#696969";
        FormAlbum.style.display = "block";
        FormArtiste.style.display = "none";
        FormSong.style.display = "none";
        OngletArtistes.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    OngletMusiques.onclick = ()=>{
        OngletMusiques.style.backgroundColor = "#696969";
        FormSong.style.display = "block";
        FormAlbum.style.display = "none";
        FormArtiste.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletArtistes.style.backgroundColor = "lightgrey";
    }

}

Search.onclick = ()=>{
    Search.parentNode.parentNode.style.backgroundColor = "#108810";
    let Administration = document.createElement("form")
    Administration.id = "Administration"
    Administration.method = "POST"
    Administration.innerHTML = `
            <div style="text-align: center;">
                <a href="#" id="FermetureCruds" class="lightbox-close lightbox-button"></a>
                <label style="margin: 5% 1%;">
                    <span id="OngletArtistes" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Artiste<small>(s)</small></span><span id="OngletAlbums" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Album<small>(s)</small></span><span id="OngletMusiques" style="margin: 0% 1%; border: 1px solid grey; padding: 1% 1%; font-size: 2em;">Musique<small>(s)</small></span>
                </label>
                <div id="FormArtiste" style="display:none;">
                    <input type="text" id="Artiste" style="width:200px; height: 25px;" name="" placeholder="Artiste ?" />
                    <!-- <div id="ResultatArtiste" style="display:none;"></div> -->
                    <button type="submit" style="margin: 2%;" id="SEARCH1">SEARCH</button>
                    <div id="ResultatArtiste"></div>
                </div>
                <div id="FormAlbum" style="display:none;">
                    <input type="text" id="Album" name="" placeholder="Album ?" />
                    <button type="submit" style="margin: 2%;" id="SEARCH2">SEARCH</button>
                    <div id="ResultatAlbum"></div>
                </div>
                <div id="FormSong" style="display:none;">
                    <input type="text" id="Song" name="" placeholder="Song ?" />
                    <button type="submit" style="margin: 2%;" id="SEARCH3">SEARCH</button>
                    <div id="ResultatSong"></div>
                </div>
                <!-- <div>
                    <button type="submit" style="margin: 2%;" id="SEARCH">SEARCH</button>
                </div> -->
            </div>
    `
    document.body.appendChild(Administration)
    FermetureCruds.addEventListener('click', ()=> document.location.reload())


    OngletArtistes.onclick = ()=>{
        OngletArtistes.style.backgroundColor = "#696969";
        FormArtiste.style.display = "block";
        FormAlbum.style.display = "none";
        FormSong.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";
    }
    // AllArtists.map(i => ResultatArtiste.innerHTML += `
    //     <li>${i.name}</li>
    // `)

    Artiste.addEventListener("input", (e)=>{
        // artistsDisplay()
        var InputArtiste = Artiste.value.toLowerCase()
        var MatchedArtiste = AllArtists.filter(i => i.name.includes(InputArtiste))
        console.log("InputArtiste", InputArtiste)
        console.log("MatchedArtiste", MatchedArtiste)

        MatchedArtiste.map(i => {
            if(InputArtiste.length >= 2){
                // ResultatArtiste.innerHTML = ""
                ResultatArtiste.innerHTML += `
                    <li style="background-color:black;">${i.name}</li>
                `
            }else{
                ResultatArtiste.innerHTML = ""
            }
        })
    })

    OngletAlbums.onclick = ()=>{
        OngletAlbums.style.backgroundColor = "#696969";
        FormAlbum.style.display = "block";
        FormArtiste.style.display = "none";
        FormSong.style.display = "none";
        OngletArtistes.style.backgroundColor = "lightgrey";
        OngletMusiques.style.backgroundColor = "lightgrey";

    };
    // AllAlbums.map(i => ResultatAlbum.innerHTML += `
    //     <li style="background-color:black;">${i.name}</li>
    // `)

    Album.addEventListener("input", (e)=>{
        // artistsDisplay()
        var InputAlbum = Album.value.toLowerCase()
        var MatchedAlbum = AllAlbums.filter(i => i.name.includes(InputAlbum))
        console.log("InputAlbum", InputAlbum)
        console.log("MatchedAlbum", MatchedAlbum)

        MatchedAlbum.map(i => {
            if(InputAlbum.length >= 2){
                // ResultatAlbum.innerHTML = ""
                ResultatAlbum.innerHTML += `
                    <li style="background-color:black;">${i.name}</li>
                `
            }else{
                ResultatAlbum.innerHTML = ""
            }
        })
    })

    OngletMusiques.onclick = ()=>{
        OngletMusiques.style.backgroundColor = "#696969";
        FormSong.style.display = "block";
        FormAlbum.style.display = "none";
        FormArtiste.style.display = "none";
        OngletAlbums.style.backgroundColor = "lightgrey";
        OngletArtistes.style.backgroundColor = "lightgrey";

    };
    // AllSongs.map(i => ResultatSong.innerHTML += `
    //     <li>${i.name}</li>
    // `)

    Song.addEventListener("input", (e)=>{
        // artistsDisplay()
        var InputSong = Song.value.toLowerCase()
        var MatchedSong = AllSongs.filter(i => i.name.includes(InputSong))
        console.log("InputSong", InputSong)
        console.log("MatchedSong", MatchedSong)

        MatchedSong.map(i => {
            if(InputSong.length >= 1){
                // ResultatSong.innerHTML = ""
                ResultatSong.innerHTML += `
                    <li style="background-color:black;">${i.name}</li>
                `
            }else{
                ResultatSong.innerHTML = ""
            }
        })
    })

    

    // SEARCH1.onclick = (e)=> {
    //     e.preventDefault();
        // var InputArtiste = Artiste.value
    //     // var InputArtiste = Artiste.onchange
    //     // SearchArtistByName("InputArtiste", InputArtiste)
    //     // console.log("SEARCH => SearchArtistByName", SearchArtistByName(InputArtiste))
    //     // var ArtisteTrouvé =
    //     ResultatArtiste.style.display = "block"
    //     ResultatArtiste.style.opacity = "0.7"
    //     var artistsDisplay = AllArtists
    //     .filter(recherche => {
    //         if(InputArtiste === ""){
    //             return recherche
    //         } else if(recherche.toLowerCase().includes(InputArtiste.toLowerCase())){
    //             return recherche
    //         }
    //     })
    //     .map(i => ResultatArtiste.innerHTML += `
    //        <li>${i.name}</li>
    //     `)
    //         // }else{
    //         //     ResultatArtiste.style.display = "block"
    //         //     ResultatArtiste.innerHTML = `
    //         //         <li style="background-color: red;">No Found</li>
    //         //     `;
    //         //     // ResultatArtiste.style.display = "none"
    //         // }
    //     // } )
    //     // var AlbumsTrouvé = AllAlbums.map(i => i.name == InputArtiste)
    //     // var SongsTrouvé = AllSongs.map(i => i.name == InputArtiste)
    //     // ResultatArtiste.innerHTML = `
    //     //     <li>${ArtisteTrouvé}</li>
    //     // `;
    //     // .addEventListener()
        // Artiste.addEventListener("input", (e)=>{
            // artistsDisplay()
            // console.log("e", e)
        // })
        
    // }

}


/**
 * jQuery
 */
// import {AlbumSongs} from "./../../renderer.js"
// console.log("AlbumSongs", AlbumSongs);
// console.log("AllSongsX", AllSongs);

/*!
 * jquery.lightbox.js
 * https://github.com/duncanmcdougall/Responsive-Lightbox
 * Copyright 2013 Duncan McDougall and other contributors; @license Creative Commons Attribution 2.5
 *
 * Options: 
 * margin - int - default 50. Minimum margin around the image
 * nav - bool - default true. enable navigation
 * blur - bool - default true. Blur other content when open using css filter
 * minSize - int - default 0. Min window width or height to open lightbox. Below threshold will open image in a new tab.
 */
(function ($) {

    'use strict';
    $.fn.lightbox  = function (options) {

        var opts = { margin: 50, nav: true, blur: true, minSize: 0};
        var plugin = {

            items: [],
            lightbox: null,
            image: null,
            current: null,
            locked: false,
            caption: null,
			
            init: function (items) {
                plugin.items = items;
				        plugin.selector = "lightbox-"+Math.random().toString().replace('.','');

                if (!plugin.lightbox) {
                    $('body').append(
                      `<div id="lightbox" style="display:none;">
                        <a href="#" class="lightbox-close lightbox-button"></a>
                         <div class="lightbox-nav">
                          <a href="#" class="lightbox-previous lightbox-button"></a>
                          <a href="#" class="lightbox-next lightbox-button"></a>
                         </div>
                        <div href="#" class="lightbox-caption"><p></p></div>
                        <ul id="AlbumSongs"></ul>
                      </div>`
                    );
                    // <div id="GeneralPlayer"></div>

                    plugin.lightbox = $("#lightbox");
                    plugin.caption = $('.lightbox-caption', plugin.lightbox);
                }

                if (plugin.items.length > 1 && opts.nav) {
                    $('.lightbox-nav', plugin.lightbox).show();
                } else {
                    $('.lightbox-nav', plugin.lightbox).hide();
                }

                plugin.bindEvents();

            },

            loadImage: function () {
                if(opts.blur) {
                    $("body").addClass("blurred");
                }
                $("img", plugin.lightbox).remove();
                plugin.lightbox.fadeIn('fast').append('<span class="lightbox-loading"></span>');

                var img = $('<img src="' + $(plugin.current).attr('href') + '" draggable="false">');

                $(img).load(function () {
                    $('.lightbox-loading').remove();
                    plugin.lightbox.append(img);
                    plugin.image = $("img", plugin.lightbox).hide();
                    plugin.resizeImage();
                    plugin.setCaption();
                });
            },

            setCaption: function () {
                var caption = $(plugin.current).data('caption');
                if(!!caption && caption.length > 0) {
                    plugin.caption.fadeIn();
                    $('p', plugin.caption).text(caption);
                }else{
                    plugin.caption.hide();
                }
            },

            resizeImage: function () {
                var ratio, wHeight, wWidth, iHeight, iWidth;
                wHeight = $(window).height() - opts.margin;
                wWidth = $(window).outerWidth(true) - opts.margin;
                plugin.image.width('').height('');
                iHeight = plugin.image.height();
                iWidth = plugin.image.width();
                if (iWidth > wWidth) {
                    ratio = wWidth / iWidth;
                    iWidth = wWidth;
                    iHeight = Math.round(iHeight * ratio);
                }
                if (iHeight > wHeight) {
                    ratio = wHeight / iHeight;
                    iHeight = wHeight;
                    iWidth = Math.round(iWidth * ratio);
                }

                plugin.image.width(iWidth).height(iHeight).css({
						'top': ($(window).height() - plugin.image.outerHeight()) / 2 + 'px',
						'left': ($(window).width() - plugin.image.outerWidth()) / 2 + 'px'
					}).show();
                plugin.locked = false;
            },

            getCurrentIndex: function () {
                return $.inArray(plugin.current, plugin.items);
            },

            next: function () {
                if (plugin.locked) {
                    return false;
                }
                plugin.locked = true;
                if (plugin.getCurrentIndex() >= plugin.items.length - 1) {
                    $(plugin.items[0]).click();
                } else {
                    $(plugin.items[plugin.getCurrentIndex() + 1]).click();
                }
            },

            previous: function () {
                if (plugin.locked) {
                    return false;
                }
                plugin.locked = true;
                if (plugin.getCurrentIndex() <= 0) {
                    $(plugin.items[plugin.items.length - 1]).click();
                } else {
                    $(plugin.items[plugin.getCurrentIndex() - 1]).click();
                }
            },

            bindEvents: function () {
                $(plugin.items).click(function (e) {
                    if(!$("#lightbox").is(":visible") && ($(window).width() < opts.minSize || $(window).height() < opts.minSize)) {
                        $(this).attr("target", "_blank");
                        return;
                    }
                    var self = $(this)[0];
                    e.preventDefault();
                    plugin.current = self;
                    plugin.loadImage();

                    // Bind Keyboard Shortcuts
                    $(document).on('keydown', function (e) {
                        // Close lightbox with ESC
                        if (e.keyCode === 27) {
                            plugin.close();
                        }
                        // Go to next image pressing the right key
                        if (e.keyCode === 39) {
                            plugin.next();
                        }
                        // Go to previous image pressing the left key
                        if (e.keyCode === 37) {
                            plugin.previous();
                        }
                    });
                });

                // Add click state on overlay background only
                plugin.lightbox.on('click', function (e) {
                    if (this === e.target) {
                        plugin.close();
                    }
                });

                // Previous click
                $(plugin.lightbox).on('click', '.lightbox-previous', function () {
                    plugin.previous();
                    return false;
                });

                // Next click
                $(plugin.lightbox).on('click', '.lightbox-next', function () {
                    plugin.next();
                    return false;
                });

                // Close click
                $(plugin.lightbox).on('click', '.lightbox-close', function () {
                    plugin.close();
                    return false;
                });

                $(window).resize(function () {
                    if (!plugin.image) {
                        return;
                    }
                    plugin.resizeImage();
                });
            },

            close: function () {
                $(document).off('keydown'); // Unbind all key events each time the lightbox is closed
                $(plugin.lightbox).fadeOut('fast');
                $('body').removeClass('blurred');
            }
        };

        $.extend(opts, options);
        plugin.init(this);
    };

})(jQuery);