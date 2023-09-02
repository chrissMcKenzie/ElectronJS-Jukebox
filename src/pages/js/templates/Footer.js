export class Footer  {
    constructor(){
        let Année = new Date()
        var Footer = document.getElementById("templatemo_footer")
        Footer.innerHTML = `
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-12">
                    <span>Copyright &copy; 2023-${Année.getFullYear()} cMK°Musique by chrissMcKenzie</span>
                </div>
                <div class="col-md-3 col-sm-12 templatemo_rfooter">
                    <a href="#">
                        <div class="hex_footer">
                            <span class="fa fa-facebook"></span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="hex_footer">
                            <span class="fa fa-twitter"></span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="hex_footer">
                            <span class="fa fa-linkedin"></span>
                        </div>
                    </a>
                    <a href="#">
                        <div class="hex_footer">
                            <span class="fa fa-rss"></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        `
    }
}