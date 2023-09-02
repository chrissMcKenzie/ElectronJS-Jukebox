export class Header  {
    constructor(){
      // confirm(`Vous comformez bien être ${Email.replace(".com", "")}`)
      // this.Connexion = ()=> Connexion()
      var Header = document.getElementById("site-header")
      Header.innerHTML = `
        <div class="main-navigation">
          <div class="responsive_menu">
            <ul>
              <li><a class="show-1 templatemo_home" href="#">Gallery</a></li>
              <li><a class="show-2 templatemo_page2" href="#">cMK Team</a></li>
              <li><a class="show-3 templatemo_page3" href="#">Admin</a></li>
              <li><a class="show-5 templatemo_page5" href="#">Contact</a></li>
            </ul>
          </div>
          <div class="container">
            <div class="row templatemo_gallerygap">
              <div class="col-md-12 responsive-menu">
                <a href="#" class="menu-toggle-btn"><i class="fa fa-bars"></i></a>
              </div>
              <div class="col-md-3 col-sm-12">
                <a href="#"><img src="./../src/media/images/chrissMcKenzie - Logo.png" width="400px" height="auto" alt="chrissMcKenzie - Logo.png"></a>
              </div>
              <div class="col-md-9 main_menu">
                <ul>
                    <li><a class="show-1 templatemo_home" href="#"><span class="fa fa-camera"></span>Albums</a></li>
                    <li><a class="show-2 templatemo_page2" href="#"><span class="fa fa-users"></span>cMK Team</a></li>
                    <li><a class="show-3 templatemo_page3" href="#Admin" onclick="${Connexion()}"><span class="fa fa-cogs"></span>Admin</a></li>
                    <li><a class="show-5 templatemo_page5" href="#"><span class="fa fa-envelope"></span>Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    }

    // Connexion(){
    //   console.log("Event #=> Connexion");
      // let Email = prompt("Email ?")
      // let MotDePasse = prompt("MotDePasse ?")
      // Email === "Admin@chrissMcKenzie.com" && MotDePasse === "@1234567@123" ? true : null
      // confirm(`Vous comformez bien être ${Email.replace(".com", "")}`)
    // }

  }

  function Connexion(){
    console.log("Event #=> function Connexion");
    // let Email = prompt("Email ?")
    // let MotDePasse = prompt("MotDePasse ?")
    // Email === "Admin@chrissMcKenzie.com" && MotDePasse === "@1234567@123" ? true : null
    // confirm(`Vous comformez bien être ${Email.replace(".com", "")}`)
  }