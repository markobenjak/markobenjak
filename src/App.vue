<template>
  <main>
    <nav class="navbar p-3">
      <div class="container-fluid">
        <a class="navbar-brand">Marko Benjak</a>
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <a class="nav-link" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#expertise">Expertise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">Contact</a>
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
                <h3>Marko Benjak, M.Eng. IT</h3>
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
    <div class=" mb-4 container-fluid socialsContainer">
      <div class="row justify-content-center">
        <div class="col-6 socialsFavicons shadow-sm p-3 mb-4 rounded">
            <a class="btn btn-link btn-floating btn-lg favicons" href="https://www.linkedin.com/in/marko-benjak-677261185/" target="_blank" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-linkedin"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="https://github.com/markobenjak" target="_blank" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-github"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="https://www.instagram.com/marko.benjak/" target="_blank" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>
            <a class="btn btn-link btn-floating btn-lg favicons" href="https://twitter.com/MarkoBenjak" target="_blank" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-twitter"></i></a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-6 text-center">
          <h3>Hello I am Marko!</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
             It has survived not only five centuries, but also the leap into electronic typesetting, 
             remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
             containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center mb-4">
          <a id="education"><h3>Education</h3></a>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2015-2018</h5>
          <p>Bachelor's Degree(B. Eng. IT)</p>
        </div>
        <div class="col-6 text-start">
          <h5>Zagreb University of Applied Sciences</h5>
          <p>The program is designed to train you to become an important member of any engineering and other professional team in the field of organization, e-business and IT design. This program can also help you become involved in early stages of project development where critical decisions are taken and where your contribution will be appreciated.</p>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm  p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2019-2022</h5>
          <p>Master's Degree(M. Eng. IT)</p>
        </div>
        <div class="col-6 text-start">
          <h5>Zagreb University of Applied Sciences</h5>
          <p>As a Master of Engineering in Information Technology, you will have acquired the knowledge and skills necessary to develop and maintain complex information systems. By working on projects in the course of your studies, you will learn about many technologies, approaches and tools for solving practical problems and will as such be recognized as a valuable member of any team. In addition, the knowledge obtained will allow you to obtain further education and follow technological and professional trends.</p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center mb-4">
          <a id="experience"><h3 name="experience">Experience</h3></a>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2018-2021</h5>
          <p>Software Developer</p>
        </div>
        <div class="col-6 text-start">
          <h5>ZMS info</h5>
          <p>The program is designed to train you to become an important member of any engineering and other professional team in the field of organization, e-business and IT design. This program can also help you become involved in early stages of project development where critical decisions are taken and where your contribution will be appreciated.</p>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2022-2023</h5>
          <p>Data Analyst</p>
        </div>
        <div class="col-6 text-start">
          <h5>Telus International</h5>
          <p>As a Master of Engineering in Information Technology, you will have acquired the knowledge and skills necessary to develop and maintain complex information systems. By working on projects in the course of your studies, you will learn about many technologies, approaches and tools for solving practical problems and will as such be recognized as a valuable member of any team. In addition, the knowledge obtained will allow you to obtain further education and follow technological and professional trends.</p>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2022-</h5>
          <p>Content Writer</p>
        </div>
        <div class="col-6 text-start">
          <h5>Config Cat</h5>
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <a href="https://configcat.com/blog/2023/04/19/feature-flags-downfalls/" target="_blank" class="btn btnArticle">Feature Flag Downfalls - Top Common Mistakes to Avoid</a>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card h-100">
                <div class="card-body">
                  <a href="https://configcat.com/blog/2023/05/15/feature-flag-services-for-EU-startups/"  target="_blank" class="btn btnArticle h-100">Feature Flag services for EU startups</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2021-</h5>
          <p>Software Developer</p>
        </div>
        <div class="col-6 text-start">
          <h5>Dhimahi</h5>
          <p>As a Master of Engineering in Information Technology, you will have acquired the knowledge and skills necessary to develop and maintain complex information systems. By working on projects in the course of your studies, you will learn about many technologies, approaches and tools for solving practical problems and will as such be recognized as a valuable member of any team. In addition, the knowledge obtained will allow you to obtain further education and follow technological and professional trends.</p>
        </div>
      </div>
    </div>
    <div class=" mb-4 container-fluid skillsContainer">
      <div class="row justify-content-center">
        <div class="col-6 socialsFavicons shadow-sm p-3 mb-4 rounded">
          <a id="skills"><h3>Skills</h3></a>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-4 text-center">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 60%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Vue.js</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 75%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Git</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 95%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Maven</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 40%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Linux</div>
          </div>
        </div>
        <div class="col-4 text-center">
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Java</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 80%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Spring</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">SQL</div>
          </div>
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Docker</div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col text-center mb-4">
          <a id="expertise"><h3>Expertise</h3></a>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-3 text-center">
          <h5>Expertise 1</h5>
          <p>The program is designed to train you to become an important member of any engineering and other professional team in the field of organization, e-business and IT design. This program can also help you become involved in early stages of project development where critical decisions are taken and where your contribution will be appreciated.</p>
        </div>
        <div class="col-3 text-center">
          <h5>Expertise 1</h5>
          <p>The program is designed to train you to become an important member of any engineering and other professional team in the field of organization, e-business and IT design. This program can also help you become involved in early stages of project development where critical decisions are taken and where your contribution will be appreciated.</p>
        </div>
        <div class="col-3 text-center">
          <h5>Expertise 1</h5>
          <p>The program is designed to train you to become an important member of any engineering and other professional team in the field of organization, e-business and IT design. This program can also help you become involved in early stages of project development where critical decisions are taken and where your contribution will be appreciated.</p>
        </div>
      </div>
    </div>
    <div class="container-flex contactMe">
      <div class="row justify-content-center">
        <div class="col text-center p-3">
          <a id="contact"><h3>Contact Me</h3></a>
        </div>
      </div>
    </div>
    <div class="container-flex contactMe">
      <div class="row justify-content-center">
        <div class="col-3 text-center formContainer">
          <form ref="form" class="form p-3">
            <!-- Email input -->
            <div class="row">
              <div class="col">
                <input type="text" id="firstName" name="firstName" v-model="firstName" class="form-control" autocomplete="given-name" required />
                <label class="form-label" for="firstName">First Name</label>
              </div>
              <div class="col">
                <input type="text" id="lastName" name="lastName" v-model="lastName" autocomplete="family-name" class="form-control" required />
                <label class="form-label" for="lastName">Last Name</label>
              </div>
            </div>

            <div class="">
              <input type="email" id="email" name="email" v-model="email" class="form-control" autocomplete="off" required />
              <label class="form-label" for="email">E-mail</label>
            </div>

            <!-- Message input -->
            <div class="">
              <textarea class="form-control" id="message" v-model="message" name="message" autocomplete="off" rows="4" required></textarea>
              <label class="form-label" for="message">Message</label>
            </div>
            <!-- Submit button -->
            <button type="button" @click="sendEmail()" data-dismiss="alert" class="form-control btn btn-lg btn-block sendButton">Send</button>
          </form>
        </div>
        <div class="col-3 text-start p-5 contactInfo">
          <h3>Marko benjak</h3>
          <p>Software Developer</p>
          <h6>Phone</h6>
          <p>+385981787862</p>
          <h6>E-mail</h6>
          <p>marko.benjak@gmail.com</p>
          <hr class="featurette-divider">      
          <a class="btn btn-link btn-floating btn-lg favicons" href="https://www.linkedin.com/in/marko-benjak-677261185/" target="_blank" role="button"
              data-mdb-ripple-color="dark"><i class="bi bi-linkedin"></i></a>
          <a class="btn btn-link btn-floating btn-lg favicons" href="https://github.com/markobenjak" target="_blank" role="button"
            data-mdb-ripple-color="dark"><i class="bi bi-github"></i></a>
          <a class="btn btn-link btn-floating btn-lg favicons" href="https://www.instagram.com/marko.benjak/" target="_blank" role="button"
            data-mdb-ripple-color="dark"><i class="bi bi-instagram"></i></a>
          <a class="btn btn-link btn-floating btn-lg favicons" href="https://twitter.com/MarkoBenjak" target="_blank" role="button"
            data-mdb-ripple-color="dark"><i class="bi bi-twitter"></i></a>  
        </div>
      </div>
    </div>
    <div id="pagetop" style="position: fixed;" class="bottom-0 end-0" v-show="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
           stroke="#4a5568"
           stroke-width="1" stroke-linecap="square" stroke-linejoin="arcs">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </div>
  </main>
</template>

<script>
export default {
    setup () {
    },
    data() {
      return{
        scTimer: 0,
        scY: 0,
        firstName: '',
        lastName: '',
        email: '',
        message: ''

      }
    },
    validations () {
     
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    },
    
}
</script>

<style scoped>
.test{
  border: 1px solid;
}
.formContainer{
  border-right: 1px solid white;
}
main, a{
  color: #38302f;

}
.contactMe > .row {
  margin-right: 0;
}
.contactMe{
  border: 1px solid white;
}
.progress-bar, .btnArticle, .sendButton{
  background-color: #38302f;
  color: white;
}
.progress{
  margin-bottom: 15px;
  height: 20px;
  font-size: 15px;
}

.col-8{
  margin-top: 2%;
  margin-left: 10%;
}

.socialsContainer, .contactMe, .navbar {
  background-color: rgb(241, 241, 241);

}
.socialsContainer > div:nth-child(2){
  margin-top: 2%;
}
.favicons{
  color: #38302f;
}
.socialsFavicons{
  background-color: rgb(245, 247, 248);
  text-align: center;

}
.containerImage, .skillsContainer{
  /* background: url('./assets/images/background-image2.jpg') no-repeat center; */
  background-color: #ffffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='100%25' gradientTransform='rotate(187,1280,635)'%3E%3Cstop offset='0' stop-color='%23ffffff'/%3E%3Cstop offset='1' stop-color='%2338302F'/%3E%3C/linearGradient%3E%3Cpattern patternUnits='userSpaceOnUse' id='b' width='548' height='456.7' x='0' y='0' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='0.04'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect x='0' y='0' fill='url(%23b)' width='100%25' height='100%25'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
}
.nav-link{
padding-left: 0;
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
    width: 50vh;
  } 
}
@media only screen and (min-width: 501px) and (max-width: 1000px) {
  .aboutMe, .col-3, .col-6{
    width: 40vh;
  }
}
@media only screen and (min-width: 1001px) and (max-width: 1600px) {
  .aboutMe, .col-3, .col-6{
    min-width: 430px;
  }
}
@media only screen and (min-width: 1601px) and (max-width: 1718px) {
  .aboutMe, .col-3, .col-6{
    min-width: 450px;
  }
}
@media only screen and (max-width: 1000px) {
  .text-end {
    text-align: left !important;
  }
  .col-5, .col-6{
    width: 100%;
    padding: 1%;
  }
}

</style>