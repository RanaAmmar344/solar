import React from 'react'
import whyimg from '../images/invest.jpg'
import whyimg2 from '../images/compatibility.jpg'
import whyimg3 from '../images/instalation.jpg'
import whyimg4 from '../images/sun energy.jpg'
import logo from '../images/logo.png';

function Work() {
  return (
    <>
    <h1 className="display-5 fw-bold text-body-emphasis text-success text-center"> How it Works? </h1>
            <hr width='250' className='mx-auto  text-success' />
            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-3'>
                    <div className="card" style={{width: "18rem"}}>
  <img src={whyimg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-text text-center">Invest Money </h4>
  </div>
</div>

                    </div>
                    <div className='col-md-3'>
                    <div className="card" style={{width: "18rem"}}>
  <img src={whyimg2} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-text text-center">Compatability </h4>
  </div>
</div>

                    </div>
                    <div className='col-md-3'>
                    <div className="card" style={{width: "18rem"}}>
  <img src={whyimg3} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-text text-center">Installation</h4>
  </div>
</div>

                    </div>
                    <div className='col-md-3'>
                    <div className="card" style={{width: "18rem"}}>
  <img src={whyimg4} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-text text-center">Enjoy Sun Power</h4>
  </div>
</div>

                    </div>

                </div>

            </div>

            <div className="px-4 py-5 my-5 text-center">
            <img src={logo} alt="Logo" width="150" height="30" className="d-inline-block align-text-top"/>
    <h1 className="display-5 fw-bold text-body-emphasis text-warning">Solar Power</h1>
    <div className="col-lg-6 mx-auto">
      <p className="lead2 mb-4">Solar power is a clean energy source that produces no greenhouse gas emissions or air pollutants during operation. By using solar energy, we can reduce our carbon footprint, combat climate change, and protect the environment for future generations.</p>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary btn-lg px-4 gap-3 bg-success">GET STARTED</button>
        <button type="button" className="btn btn-outline-secondary btn-lg px-4">LEARN MORE</button>
      </div>
    </div>
  </div>
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
      <li className="nav-item"><a href="/chisiamo" className="nav-link px-2 text-muted">ChiSiamo</a></li>
      <li className="nav-item"><a href="/sire" className="nav-link px-2 text-muted">SIRE</a></li>
      <li className="nav-item"><a href="/sirefeatures" className="nav-link px-2 text-muted">SireFeatures</a></li>
      <li className="nav-item"><a href="/sireproduct" className="nav-link px-2 text-muted">SireProduct</a></li>
      <li className="nav-item"><a href="/works" className="nav-link px-2 text-muted">Works</a></li>
    </ul>
    <p className="text-center text-muted">© 2023 Company, Solar innovation</p>
  </footer>
      
    </>
  )
}

export default Work
