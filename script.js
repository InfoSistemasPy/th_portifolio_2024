@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");

html,
body {
  font-family: Ubuntu, Arial;
  width: 100%;
  height: 100%;
}

#header {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: #021124;
  overflow-y: auto;
  width: 300px;
  transition: all ease-in-out 0.5s;
  padding: 0 15px;
  z-index: 9997;
}

#header .profile img {
  margin: 15px auto;
  display: block;
  height: 200px;
  width: 180px;
  align-items: center;
  border: 5px solid #2c2f3f;
  border-radius: 50%;
}

#header .profile h1 {
  font-size: 24px;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-align: center;
  color: #fff;
}

#header .profile .social-links a {
  font-size: 1.5rem;
  background: #212431;
  color: #fff;
  padding: 0.6rem;
  margin-right: 0rem;
  border-radius: 40%;
  transition: 0.3s;
  text-decoration: none;
}

#header .profile .social-links a:hover {
  background: #149ddd;
}

.nav-menu {
  padding: 1.5rem;
}

.nav-menu a,
.nav-menu a:focus {
  display: flex;
  align-items: center;
  color: #a8a9b4;
  transition: 0.3s;
  font-size: 15px;
}

.nav-menu a i,
.nav-menu a:focus i {
  font-size: 24px;
  padding-right: 0.8rem;
  color: #6f7180;
}

.nav-menu a:hover,
.nav-menu .active,
.nav-menu .active:focus,
.nav-menu li:hover > a {
  text-decoration: none;
  color: #fff;
}

.nav-menu a:hover i,
.nav-menu .active i,
.nav-menu .active:focus i,
.nav-menu li:hover > a i {
  color: #149ddd;
}

#main {
  margin-left: 300px;
}

section#inicio {
  background-image: url("./img/setup1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;

  width: 100%;
  height: 100vh;
}

section#inicio h2 {
  font-size: 6rem;
}

section#inicio span#subtitle {
  margin-right: 8rem;
  font-size: 1.5rem;
}

.text-shadow {
  text-shadow: 4px 4px 10px #000000;
}

section#inicio div#arraste {
  width: 9rem;
}

section#inicio div#arraste a {
  text-decoration: none;
  color: #fff;
}

i.menu-mobile {
  position: fixed;
  color: #fff;
  background-color: #252c90;
  right: 1rem;
  top: 1rem;
  font-size: 1.5rem;
  border-radius: 4rem;
  cursor: pointer;
  z-index: 10;
  width: 45px;
  height: 45px;
  display: none;
  justify-content: center;
  align-items: center;
}

.menu-nav-active {
    overflow: hidden;
}

.menu-nav-active #header {
    left: 0;
}

@media (max-width: 1024px) {
  #header {
    left: -300px;
  }
  i.menu-mobile{
    display: flex;
  }
  section#inicio h2{
    font-size: 3.5rem ;
  }
  section#inicio span#subtitle{
    margin-right: 0;
    font-size: 1rem;
  }
  #main{
      margin-left: 0;
  }
}

*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  width: 12px;
  box-shadow: inset 0 0 .3rem #00000050;
  background-color: #fff ;
}

*::-webkit-scrollbar-thumb {
  background-color: #252c90;
}

.section-bg{
  background-color: #eff5ff;
}

.cv .cv-title{
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #050d18;
}

.cv .cv-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #1f5297;
  position: relative;
}

.cv .cv-item h4 {
  line-height: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #050d18;
  margin-bottom: 10px;
}

.cv .cv-item h5 {
  background: #e4edf9;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.cv .cv-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: -9px;
  width: 16px;
  height: 16px;
  border: 2px solid #1f5297;
  background: #fff;
  border-radius: 50%;
}

.carousel-control-prev{
  margin-left: -8rem;
}

.carousel-control-next{
  margin-right: -8rem;
}

.carousel-indicators{
  margin-bottom: -35px;
}

/* Animação */

[data-anime] {
  opacity: 0;
  transition: 1s;
}

[data-anime="down"] {
  transform: translate3d(0, -100%, 0);
}

[data-anime="up"] {
  transform: translate3d(0, 100%, 0);
}

[data-anime="left"] {
  transform: translate3d(-100%, 0, 0);
}

[data-anime="right"] {
  transform: translate3d(50px ,0 ,0);
}

[data-anime].animate {
  opacity: 1;
  transform: translate3d(0 ,0 ,0);
}

@media (max-width: 1860px){
  .carousel-control-prev{
    margin-left: 0;
  }
  
  .carousel-control-next{
    margin-right: 0;
  }

  [data-anime="right"] {
    transform: translate3d(0, 100%, 0);
  }
}

#btn-enviar-loader{
  display: none;
}

#alerta {
  position: fixed;
  z-index: 10;
  top: 30px;
  right: 30px;
}

#footer{
  padding: 15px;
  color: #fff;
  font-size: 14px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 300px;
  z-index: 9999;
  background-color: #021124;
  transition: .3s;
}

@media (max-width: 1012px) {
  #footer{
    position: static;
    width: auto;
    padding: 20px 15px;
  }
}
