import React from 'react'
import imgsire from '../images/sire1.jpg';
import imgsire2 from '../images/sire2.png';
import imgsire3 from '../images/sire3.png'
function Sire() {
  return (
    <>
      <h1 className="display-5 fw-bold text-body-success text-center text-success ">S.I.R.E</h1>
                <hr width='250' className='mx-auto  text-success' />
<div className='container my-5'>

                <div className="row featurette ">
      <div className="col-md-6">
        <h2 className="featurette-heading comontext fw-normal lh-1 my-5">Smart Integrated Renewable Energy <span className="text-body-secondary">It’ll blow your mind.</span></h2>
        <p className="lead2">Smart integrated renewable energy systems combine advanced technologies, such as IoT and AI, to optimize the generation, storage, and distribution of renewable energy, maximizing efficiency and reliability while reducing carbon footprint.
These systems enable seamless integration of various renewable sources, like solar and wind, with energy storage solutions and smart grid infrastructure, revolutionizing the way energy is generated, consumed, and managed.</p>
      </div>
      <div className="col-md-5">
        <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1000" height="1000" Src={imgsire} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
      </div>
    </div>
    <div class="row featurette my-5">
    <hr />
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading comontext fw-normal lh-1 my-5">Oh yeah, it’s that good. <span class="text-body-secondary">See for yourself.</span></h2>
        <p class="lead2">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-5 order-md-1">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1000" height="1000" Src={imgsire2} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
      </div>
    </div>
    <div class="row featurette my-5">
        <hr/>
      <div class="col-md-7">
        <h2 class="featurette-heading comontext  fw-normal lh-1">And lastly, this one. <span class="text-body-secondary">Checkmate.</span></h2>
        <p class="lead2">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
      </div>
      <div class="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="1000" height="1000" Src={imgsire3} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
      </div>
    </div>
</div>
{/* <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/chisiamo" className="nav-link px-2 text-muted">ChiSiamo</a></li>
      <li className="nav-item"><a href="/sire" className="nav-link px-2 text-muted">SIRE</a></li>
      <li className="nav-item"><a href="/sirefeatures" className="nav-link px-2 text-muted">SireFeatures</a></li>
      <li className="nav-item"><a href="/sireproduct" className="nav-link px-2 text-muted">SireProduct</a></li>
      <li className="nav-item"><a href="/works" className="nav-link px-2 text-muted">Works</a></li>
    </ul>
    <p className="text-center text-muted">© 2023 Company, Solar innovation</p>
  </footer> */}
    </>
  )
}

export default Sire

