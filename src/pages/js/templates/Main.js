export class Main  {
    constructor(){
      var Main = document.getElementById("menu-container")
      Main.innerHTML = `
        <!-- Onglet Album -->
        <section id="OngletAlbum"></section>
        <!-- Onglet Team -->
        <section id="OngletTeam"></section>
        <!-- Onglet Admin -->
        <section id="OngletAdmin"></section>
        <!-- Onglet Contact -->
        <section id="OngletContact"></section>
      `
    }
}
