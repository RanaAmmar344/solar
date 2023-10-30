import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
function Contact() {
    return (
        <>
  <div className='container'>
  <h1 className="display-5 fw-bold text-body-emphasis text-primary text-center"> frequently asked questions</h1>
            <hr width='250' className='mx-auto  text-success' />
            
    <div className="accordion" id="faqAccordion">

     
      <div className="card">
        <div className="card-header" id="faqHeading1">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#faqCollapse1"
              aria-expanded="true" aria-controls="faqCollapse1">
              < ControlPointIcon/> Chi monta i impianto S.I.R.E?
            </button>
          </h5>
        </div>

        <div id="faqCollapse1" className="collapse show" aria-labelledby="faqHeading1" data-parent="#faqAccordion">
          <div className="card-body">
          Renewable and Sustainable: Solar power harnesses energy from the sun, which is a virtually limitless and renewable resource. As long as the sun continues to shine, solar energy can be generated consistently without depleting natural resources.
          </div>
        </div>
      </div>

      
      <div className="card">
        <div className="card-header" id="faqHeading2">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#faqCollapse2"
              aria-expanded="false" aria-controls="faqCollapse2">
                 < ControlPointIcon/> Quanto tempo impiega installazione?
            </button>
          </h5>
        </div>

        <div id="faqCollapse2" className="collapse" aria-labelledby="faqHeading2" data-parent="#faqAccordion">
          <div className="card-body">
          Solar power allows individuals, businesses, and communities to become energy self-sufficient. By generating their own electricity, they can reduce reliance on traditional energy sources, increase energy independence, and have a more reliable and resilient energy supply.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="faqHeading3">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#faqCollapse3"
              aria-expanded="false" aria-controls="faqCollapse3">
                 < ControlPointIcon/> E' necessarip richiedere qutorizzazioni al condominio?
            </button>
          </h5>
        </div>

        <div id="faqCollapse3" className="collapse" aria-labelledby="faqHeading2" data-parent="#faqAccordion">
          <div className="card-body">
          As long as the sun continues to shine, solar energy can be generated consistently without depleting natural resources.
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="faqHeading4">
          <h5 className="mb-0">
            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#faqCollapse4"
              aria-expanded="false" aria-controls="faqCollapse4">
                 < ControlPointIcon/> L' impinto e grantio?
            </button>
          </h5>
        </div>

        <div id="faqCollapse4" className="collapse" aria-labelledby="faqHeading2" data-parent="#faqAccordion">
          <div className="card-body">
          It's important to consider factors such as location, available sunlight, and individual circumstances when assessing the suitability and effectiveness of solar power for specific situations. However, overall, solar power is considered a sustainable and advantageous energy solution with numerous benefits.
          </div>
        </div>
      </div>


    </div>
    
  </div>
            
  
          
          
            <section className=" container  mb-4">
            
<section className="mb-4">

    
<h1 className="display-5 fw-bold text-body-emphasis text-success text-center"> Contact Us</h1>
            <hr width='250' className='mx-auto  text-success' />
    
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div className="row">

                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" placeholder=" Your Name" />
                            <br/>
                        </div>
                    </div>
               
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" placeholder=" Your Email"/>
                            
                        </div>
                    </div>
                   

                </div>
                

                
                <div className="row">
                    <div className="col-md-4">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control" placeholder=" your Subject" />
                           <br/>
                        </div>
                    </div>
                </div>
                

                
                <div className="row">

                   
                    <div className="col-md-8">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea" placeholder=" Your Message"  ></textarea>
                           
                        </div>

                    </div>
                </div>
             

            </form>

            <div className="text-center text-md-left float-start my-3">
                <a className="btn btn-success" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>
        
        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><FmdGoodIcon color='success' fontSize='large'/>
                    <p>San Francisco, CA 94126, USA</p>
                </li>

                <li><PhoneEnabledIcon color='success' fontSize='large'/>
                    <p>+ 01 234 567 89</p>
                </li>

                <li><EmailIcon color='success' fontSize='large'/>
                    <p>contact@mdsolarinnovation.com</p>
                </li>
            </ul>
        </div>
       

    </div>

</section>



               
                <hr />
                <footer className="py-5  ">
                    <div className="row ">
                        <div className="col-6 col-md-3 mb-3">
                            <h5 className='text-danger'>Solar Innovation</h5>

                            <p> A108 Adam Street
                                New York, NY 535022
                                United States</p>


                            <p> <b>Phone:</b>+92-3460544380</p>
                            <p> <b>Email:</b>ranammar344@gmail.com</p>



                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5 className='text-success'>Useful Links</h5>
                            <ul className="nav flex-column text-dark">
                                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-dark">Home</a></li>
                                <li className="nav-item mb-2"><a href="/chisiamo" className="nav-link p-0 text-dark">Chi Siamo</a></li>
                                <li className="nav-item mb-2"><a href="/sire" className="nav-link p-0 text-dark">SIRE</a></li>
                                <li className="nav-item mb-2"><a href="/sirefeatures" className="nav-link p-0 text-dark">Sire Features</a></li>
                                <li className="nav-item mb-2"><a href="/sireproduct" className="nav-link p-0 text-dark">Sire Product</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5 className='text-success'>Our Services</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Electricity Generation</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Renewable Energy</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">
                                Grid Stabilization</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">
                                Job Creation and Economic</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-dark">Environmental Benefits</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 offset-md-1 mb-3">
                            <form>
                                <h5 className='text-success'>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label for="newsletter1" className="visually-hidden">Email address</label>
                                    <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                    <button className="btn btn-success" type="button">Subscribe</button>
                                </div>
                                <div className='my-3'>

                                    <FacebookIcon color='success' /> <InstagramIcon color='success' /> <GoogleIcon color='success' /> <TwitterIcon  color='success'/> <LinkedInIcon color='success' />
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                        <p>© 2023 SolarInnovation, Inc. All rights reserved.</p>
                        <p className='float-right '> <b>Designed</b> by Rana Ammar</p>

                    </div>
                </footer>

            </section>

        </>
    )
}

export default Contact
