export class OngletAlbum{
    constructor(){
    var Section = document.getElementById("OngletAlbum")
    Section.innerHTML = `
        <div class="content homepage" id="menu-1">
            <div class="container">
                <div id="Albums" class="row templatemorow"></div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="templatemo_loadmore">
                        <button class="gallery_more" id="button" onClick="showhide()">Load More</button>
                    </div>
                </div>
                <div className="row">
                    <div id="GeneralPlayer" class=""></div>
                </div>
            </div>
        </div>
      `
    }
}