<template>
  <main>
    <nav class="navbar">
      <div class="container-fluid">
        <a class="navbar-brand">Marko Benjak</a>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
      <div class="container-fluid containerImage">
        <div class="row justify-content-center headerRow">
          <div class="col-3">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img class="d-block w-100 h-100" src="./assets/images/event.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Second slide">
                </div>
                <div class="carousel-item">
                  <img class="d-block w-100" src="..." alt="Third slide">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>          
          </div>
          <div class="col-3 aboutMe">
            <div class="row">
              <div class="col-8">
                <h3>Marko Benjak</h3>
                <p>Software Developer</p>
              </div>
              <div class="col-8">
                <h6>Phone:</h6>
                <p>+385981787862</p>
              </div>
              <div class="col-8">
                <h6>Email:</h6>
                <p>marko.benjak@gmail.com</p>
              </div>
              <div class="col-8">
                <h6>Address:</h6>
                <p>Zagreb, Croatia</p>
              </div>
              <div class="col-8">
                <h6>Date of birth:</h6>
                <p>August 17th, 1996</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="container-fluid socialsContainer">
      <div class="row justify-content-center">
        <div class="col-6 socialsFavicons">
            <a class="btn btn-link btn-floating btn-lg favicons" href="#!" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-linkedin"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="#!" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-github"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="#!" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="#!" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-twitter"></i></a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 message text-center">
          <h3>Hello I am Marko!</h3>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
    setup () {
    },
    data() {
     
    },
    validations () {
     
    },
    methods: {
     
    },
    
}
</script>

<style scoped>
.test{
  border: 1px solid;
}
.col-8{
  margin-top: 2%;
  margin-left: 10%;
}

.socialsContainer {
  background-color: rgb(196, 195, 195);
  height: 300px;
}
.socialsContainer > div:nth-child(2){
  margin-top: 2%;
}
.favicons{
  color: black;
}
.socialsFavicons{
  background-color: rgb(245, 247, 248);
  text-align: center;

}

.navbar{
  height: 100px;
  background-color: rgb(245, 247, 248);
}

.containerImage{
  background-color: rgb(241, 241, 241);
}
.col-6{
  padding-right: 0;
  padding-left: 0;
}
.col-3{
  padding-right: 0;
  padding-left: 0;
}
.headerRow{

  padding-top: 3%;
  padding-bottom: 1%;

}
.aboutMe{
  background-color: white;
}

@media only screen and (min-width: 249px) and (max-width: 500px) {
  .aboutMe, .col-3, .col-6{
    width: 100vh;
  } 
}
@media only screen and (min-width: 501px) and (max-width: 1000px) {
  .aboutMe, .col-3, .col-6{
    width: 50vh;
  }
}
@media only screen and (min-width: 1001px) and (max-width: 1600px) {
  .aboutMe, .col-3, .col-6{
    min-width: 400px;
  }
}

</style>