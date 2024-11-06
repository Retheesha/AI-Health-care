import { Link } from "react-router-dom"


export const Homepage = () => {



  return (
    <>
      <nav class="navbar navbar-expand-lg fixed-top nav-down navbar-transparent" color-on-scroll="500">
        <div class="container">
          <div class="navbar-translate">
            <img className="logo" style={{ width: "70%" }} src="../../assets/img/sections/admin/AIH_Logo_CP.png" />

            {/* <a class="navbar-brand" rel="tooltip" title="AI-Health Care" data-placement="bottom" target="_blank">
              AI-Health Care 
            </a> */}
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-bar bar1"></span>
              <span class="navbar-toggler-bar bar2"></span>
              <span class="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div class="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
          </div>
        </div>
      </nav>

      <div class="page-header" style={{ backgroundImage: "url('../../assets/img/sections/pexels-karolina-grabowska-7195122.jpg')" }}>
        <div class="filter"></div>
        <div class="content-center">
          <div class="motto">
            <h1 class="text-center">AI-Health Care</h1>
            <h3 class="text-center">Your health journey is important to us</h3><br></br>
            <strong class="text-center" >Whether you're looking to understand a medical condition, improve your wellness, or find reliable health services, our platform is here to support you every step of the way.</strong>
          </div>
        </div>
      </div>



      <div class="blog-2 section section">
      <div class="container">
        <div class="row">
          <div class="col-md-10 ml-auto mr-auto">
    
            <br />
            <div class="row">
              <div class="col-md-4">
                <div class="card card-blog">
                  <div class="card-image">
                  <br/>
                    <a href="javascript:;">
                      <img class="img img-raised" src="./assets/img/sections/istockphoto-1226390157-612x612.jpg"/>
                    </a>
                  </div>
                  <br/>
                  <br/>
                  <div class="card-body">
                    <h6 class="card-title text-info">
                    <i class="fa fa-medkit mr-1" aria-hidden="true"></i>
                    Prescriped Medicines</h6>
                    <p class="card-description">
                    Our doctors providing real-time consultations and personalized prescriptions during live sessions. <br />
                    </p>
                
            
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-blog">
                  <div class="card-image">
                    <a href="javascript:;">
                      <img class="img img-raised" src="./assets/img/sections/online-doctor-consultation-the-patient-is-at-a-remote-appointment-with-a-therapist-a-woman.jpg" />
                    </a>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title text-success">
                    <i class="fa fa-video-camera mr-1" aria-hidden="true"></i>
                      Instant video consultation
                    </h6>
                    <p class="card-description">
                      Connects you to a doctor,direct from your home.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card card-blog">
                  <div class="card-image">
                    <a href="javascript:;">
                      <img class="img img-raised" src="./assets/img/sections/istockphoto-1408909553-612x612.jpg" />
                    </a>
                  </div>
                  <div class="card-body">
                    <h6 class="card-title text-danger">
                    <i class="fa fa-user-md mr-1" aria-hidden="true"></i>
                    Finding a good doctor
                    </h6>
          
                    <p class="card-description">
                    we are proud to provide access to some of the best doctors in the field.Trust us to connect you with the right doctor for your specific condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


      <div class="pricing-5 section-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h2 class="title">Register & Login for getting connect with us</h2>
              <div class="choose-plan">
                <ul class="nav nav-pills nav-pills-success" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#personal" role="tab">Register</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#commercial" role="tab">Login</a>
                  </li>
                </ul>
              </div>
              <br />
              <p class="description text-gray">Welcome to <b>AI-Health Care</b>  We're committed to providing you with the latest health information, expert advice, and personalized resources to help you live a healthier life.</p>
            </div>
            <div class="col-md-7 ml-auto">
              <div class="tab-content text-center">
                <div class="tab-pane active" id="personal" role="tabpanel">
                  <div class="space-top"></div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="card card-pricing">
                        <div class="card-body">
                          {/* <h6 class="card-category text-success">Register</h6> */}
                          <h1 class="card-title">Welcome to our community!</h1>
                          <ul>
                            <strong> Please click out the button below to <b> create your account </b> and gain access to all our features. Your journey towards better health and wellness starts here.</strong>
                          </ul>
                          <Link to={"/user/register"} class="btn btn-success btn-round">Click to Register</Link>
                        </div>
                      </div>
                    </div>
                    {/* <div class="col-md-6">
                    <div class="card card-pricing" data-color="orange">
                      <div class="card-body">
                        <h6 class="card-category text-success">HTML Package</h6>
                        <h1 class="card-title">$59</h1>
                        <ul>
                          <li><b>5</b> Developer</li>
                          <li><b>129+</b> Components</li>
                          <li><b>HTML</b> Elements</li>
                          <li><b>24</b> Page Examples</li>
                        </ul>
                        <a href="javascript:;" class="btn btn-neutral btn-round">Free download</a>
                      </div>
                    </div>
                  </div> */}
                  </div>
                </div>
                <div class="tab-pane" id="commercial" role="tabpanel">
                  <div class="space-top"></div>
                  <div class="row">
                    {/* <div class="col-md-6">
                    <div class="card card-pricing">
                      <div class="card-body">
                        <h6 class="card-category text-warning">HTML Package</h6>
                        <h1 class="card-title">$159</h1>
                        <ul>
                          <li><b>5+</b> Developers</li>
                          <li><b>199+</b> Components</li>
                          <li><b>HTML</b> Elements</li>
                          <li><b>34</b> Page Examples</li>
                        </ul>
                        <a href="javascript:;" class="btn btn-warning btn-round">Buy Now !</a>
                      </div>
                    </div>
                  </div> */}
                    <div class="col-md-12">
                      <div class="card card-pricing" style={{ backgroundColor: "#6bd098" }}>
                        <div class="card-body">
                          {/* <h6 class="card-category text-dark">HTML Package</h6> */}
                          <h1 class="card-title">Already a member? </h1>
                          <ul>
                            <strong><b>Welcome back !!</b> We value your presence and look forward to continuing this journey with you. Please click below to enter your credentials to <b>access your account </b>, we're here to support you every step of the way.</strong>
                          </ul>
                          <Link to={"/user/login"} class="btn btn-neutral btn-round">Click to Login</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div class="project-4 section w-100 ml-0 section-dark " style={{ backgroundColor: "#17B169" }}>
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Some of the Features of our Website </h2>
              <h5 class="description">This is the space for more details about your website to Keep  user engaged by providing meaningful information.</h5>
            </div>
          </div>
          <div class="space-top"></div>
          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="card" data-background="image" style={{ backgroundImage: "url('../../assets/img/sections/pexels-tima-miroshnichenko-5452204.jpg')" }} >
                {/* <div class="card-icon">
                  <i class="nc-icon nc-mobile"></i>
                </div> */}
              </div>
            </div>
            <div class="col-md-5 mr-auto">
              <div class="card card-plain">
                <div class="card-body">
                  <h6 class="card-category">Doctors</h6>
                  <a href="javascript:;">
                    <h3 class="card-title">Qualified team of certified doctors</h3>
                  </a>
                  <br />
                  <b class="card-description">you're in expert hands. Our team of certified doctors is dedicated to providing you with the highest quality healthcare services. Each one of our doctors has undergone rigorous training and accreditation to ensure you receive the best care possible.</b>
                  {/* <div class="card-footer">
                    <a href="javascript:;" class="btn btn-link btn-neutral">
                      <i class="fa fa-book" aria-hidden="true"></i> Read More
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-windows" aria-hidden="true"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr /><br />
          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="card card-plain">
                <div class="card-body">
                  <h6 class="card-category">Doctors</h6>
                  <a href="javascript:;">
                    <h3 class="card-title"> Patients health and well-being</h3>
                  </a>
                  <br />
                  <b class="card-description">Our dedicated doctors are committed to providing comprehensive care, from accurate prescriptions to attentive patient management. Trust in our expertise to guide you through every step of your health journey. We ensure that each prescription is tailored to your needs, and we offer compassionate care and quality medications to support your well-being.</b>
                  {/* <div class="card-footer">
                    <a href="javascript:;" class="btn btn-link btn-neutral">
                      <i class="fa fa-book" aria-hidden="true"></i> Read More
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-windows" aria-hidden="true"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-md-5 mr-auto">
              <div class="card" data-background="image" style={{ backgroundImage: "url('../../assets/img/sections/pexels-karolina-grabowska-4021805.jpg')" }} >
              </div>
            </div>
          </div>

          <br />
          <hr /><br />
          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="card" data-background="image" style={{ backgroundImage: "url('../../assets/img/sections/pexels-sydney-troxell-223521-708488.jpg')" }} >
                {/* <div class="card-icon">
                  <i class="nc-icon nc-mobile"></i>
                </div> */}
              </div>
            </div>
            <div class="col-md-5 mr-auto">
              <div class="card card-plain">
                <div class="card-body">
                  <h6 class="card-category">AI Generated</h6>
                  <a href="javascript:;">
                    <h3 class="card-title">The need of a nutrition Foods </h3>
                  </a>
                  <br />
                  <b class="card-description">Experience the future of nutrition with our AI-generated meal plans. Tailored to your specific health needs and conditions, our advanced technology ensures that you get the optimal balance of nutrients to support your wellness journey. Whether you're managing an illness or looking to improve your overall health, our AI-driven solutions provide the perfect meals to help you thrive.</b>
                  {/* <div class="card-footer">
                    <a href="javascript:;" class="btn btn-link btn-neutral">
                      <i class="fa fa-book" aria-hidden="true"></i> Read More
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-windows" aria-hidden="true"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>


          <br />
          <hr /><br />

          <div class="row">
            <div class="col-md-5 ml-auto">
              <div class="card card-plain">
                <div class="card-body">
                  <h6 class="card-category">AI Generated</h6>
                  <a href="javascript:;">
                    <h3 class="card-title">Ayurvedic & Allopathic Medicines</h3>
                  </a>
                  <br />
                  <b class="card-description">Discover the perfect blend of ancient wisdom and modern science with our AI-generated Ayurvedic and allopathic medicine recommendations. Tailored to address your specific health concerns, our advanced technology ensures you receive the most effective and personalized treatment. Whether you're managing an illness or seeking to enhance your overall well-being,trust our AI-driven solutions to provide the right balance of traditional and contemporary medicine.</b>
                  {/* <div class="card-footer">
                    <a href="javascript:;" class="btn btn-link btn-neutral">
                      <i class="fa fa-book" aria-hidden="true"></i> Read More
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-apple" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-android" aria-hidden="true"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-just-icon btn-link btn-neutral">
                      <i class="fa fa-windows" aria-hidden="true"></i>
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-md-5 mr-auto">
              <div class="card" data-background="image" style={{ backgroundImage: "url('../../assets/img/sections/pexels-negativespace-48603.jpg')" }} >
              </div>
            </div>
          </div>
        </div>
      </div>



      <footer class="footer footer-big footer-black">
        <div class="container">
          <div class="row">
            <div class="col-md-9 ml-auto mr-auto col-sm-9 col-12">
              <div class="row">
                <div class="col-md-3 col-sm-3 col-6">
                  <div class="links">
                    <ul class="uppercase-links stacked-links">
                      <li>
                        <a href="#paper-kit">
                          Home
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          Discover
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 col-sm-3 col-6">
                  <div class="links">
                    <ul class="uppercase-links stacked-links">
                      <li>
                        <a href="#paper-kit">
                          Contact Us
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          We're Hiring
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 col-sm-3 col-6">
                  <div class="links">
                    <ul class="uppercase-links stacked-links">
                      <li>
                        <a href="#paper-kit">
                          Portfolio
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          How it works
                        </a>
                      </li>
                      <li>
                        <a href="#paper-kit">
                          Testimonials
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-3 col-8">
                  <div class="social-area">
                    <a class="btn btn-just-icon btn-round btn-facebook mx-1">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-just-icon btn-round btn-twitter mx-1">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a class="btn btn-just-icon btn-round btn-google mx-1">
                      <i class="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div class="copyright">
                <div class="pull-left">
                  © <script>
                    document.write(new Date().getFullYear())
                  </script> AI-Health Care
                </div>
                <div class="links pull-right">
                  <ul>
                    <li>
                      <a href="#paper-kit">
                        Company Policy
                      </a>
                    </li>
                    |
                    <li>
                      <a href="#paper-kit">
                        Terms
                      </a>
                    </li>
                    |
                    <li>
                      <a href="#paper-kit">
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  )


}