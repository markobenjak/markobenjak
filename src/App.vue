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
        <div class="col-3 text-center">
          <h3>Greetings!</h3>
          <p>I'm Marko, a dedicated and results-driven software developer with a passion for crafting robust solutions through the power of Java.
             With a strong foundation in software engineering,
              I bring multiple years of hands-on experience in developing scalable and efficient applications. 
            
              I am excited about the prospect of contributing my skills and experience to new and challenging projects.
               Feel free to explore my portfolio and resume for a more in-depth look at my professional journey.
                If you have any inquiries or opportunities for collaboration, don't hesitate to get in touch.
            
            </p>
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
          <p style="font-size: 15px;">This program has uniquely prepared me to be a key member of engineering and professional teams, specializing in organization, e-business, and IT design.
             Through comprehensive training, I've acquired the skills to contribute significantly in the early stages of project development,
              where critical decisions are made. This experience has not only enhanced my abilities but also positioned me as a valuable asset,
               ensuring that my contributions are appreciated in dynamic project environments.</p>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm  p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2019-2022</h5>
          <p>Master's Degree(M. Eng. IT)</p>
        </div>
        <div class="col-6 text-start">
          <h5>Zagreb University of Applied Sciences</h5>
          <p style="font-size: 15px;">With a Master's in Engineering in Information Technology, I've gained the expertise to develop and manage intricate information systems.
             Through hands-on projects, I've explored diverse technologies and problem-solving approaches, making me a valuable team member.
             This knowledge not only positions me as an asset within teams but also equips me to pursue continuous education and stay abreast of evolving technological trends.
          </p>
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
          <p style="font-size: 15px;">
            In my first IT role at ZMS, I worked as Software Developer, which was focused on payments, banks and overall finance industry.
            This position provided hands-on experience in <strong>Java, SQL, Vue.js, Linux, Bash and Perl</strong>,
            allowing me to develop strong skills in troubleshooting, system administration, day to day client activities and to get the sense of development environments.
            Notably, I was a part of a small team dedicated to one of the biggest payment provider in Greece, alongside moving deprecated desktop applications to Web and REST.
            This experience laid a solid foundation for my growth in IT,
            emphasizing proactive problem-solving and a commitment to staying current with emerging technologies.</p>
        </div>
      </div>
      <div class="row justify-content-center shadow-sm p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2022-2023</h5>
          <p>Data Analyst</p>
        </div>
        <div class="col-6 text-start">
          <h5>Telus International</h5>
          <p>At Telus I worked as Data Analyst on different Maps projects. I developed the sense of data validation and critical thinking.
          </p>
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
      <div class="row justify-content-center shadow p-3 mb-4 bg-body rounded">
        <div class="col-5 text-end">
          <h5>2021-</h5>
          <p>Software Developer</p>
        </div>
        <div class="col-6 text-start">
          <h5>Dhimahi</h5>
          <p>My current role is Java Developer at Dhimahi.
             I am a part of a team which handles ticketing for different European countries.
              This position is providing me with hands-on experience with <strong>Java and Spring, Microservices, Git, Vue.js, Docker, Kafka</strong> 
              and overall event driven software on a huge scale. On a daily basis I am developing and learning new skills, alongside critical thinking in agile environment. </p>
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
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 90%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Unit tests</div>
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
          <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: 100%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Microservices</div>
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
        <div class="col-5 text-center">
          <h5>Java and Microservices</h5>
          <p>I specialize in Java and Spring with a focus on Microservices architecture.
             I've gained hands-on experience with Git, Docker, Kafka, 
             and large-scale event-driven software. This dynamic system sharpens my technical proficiency and underscores my commitment
              to continuous development, learning new skills, and applying critical thinking in an agile environment..</p>
        </div>
        <div class="col-5 text-center">
          <h5>Frontend Development with Vue.js</h5>
          <p> I've adeptly utilized Vue.js to create dynamic and responsive web applications.
             Proficient in building seamless user experiences, I bring a keen eye for design and a commitment to staying current with frontend technologies.
              Whether enhancing user interactions or collaborating within agile environments, my dedication to frontend development,
             particularly with Vue.js, ensures the delivery of visually appealing and user-friendly solutions.</p>
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
                <label class="form-label" for="firstName">First Name<span v-if="v$.firstName.$error"> is required</span></label>
              </div>
              <div class="col">
                <input type="text" id="lastName" name="lastName" v-model="lastName" autocomplete="family-name" class="form-control" required />
                <label class="form-label" for="lastName">Last Name<span v-if="v$.lastName.$error"> is required</span></label>
              </div>
            </div>

            <div class="">
              <input type="email" id="email" name="email" v-model="email" class="form-control" autocomplete="off" required />
              <label class="form-label" for="email">E-mail<span v-if="v$.email.$error"> is required</span></label>
            </div>

            <!-- Message input -->
            <div class="">
              <textarea class="form-control" id="message" v-model="message" name="message" autocomplete="off" rows="4" required></textarea>
              <label class="form-label" for="message">Message<span v-if="v$.message.$error"> is required</span></label>
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
import emailjs from 'emailjs-com';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  setup () {
      return {
        v$: useVuelidate()
      }
    },
    data() {
      return{
        scTimer: 0,
        scY: 0,
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        showAlertSuccess: false,
        showAlertFail: false
      }
    },
    validations () {
      return {
        firstName: { required },
        lastName: { required },
        email: { required},
        message: {required}
      }
    },
    mounted(){
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      async sendEmail() {
        const isFormCorrect = await this.v$.$validate()

        if (isFormCorrect){
          emailjs.sendForm(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, this.$refs.form, import.meta.env.VITE_EMAIL_USER_ID,
          {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            message: this.message
          }).then((result) => {
            this.showAlertSuccess = true;
          }, (error) => {
            this.showAlertFail = true;
          });
            this.firstName = '';
            this.email = '';
            this.message = '';
            this.lastName = '';
          setTimeout(() => {
            this.showAlertSuccess = false;
            this.showAlertFail = false;
          }
          , 3000);
        }
      },
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
main, a, button{
  color: #38302f;
  font-family: andale mono, monospace;

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