import React from 'react'
import coverimg from '../images/cover.jpg'
import coverimg2 from '../images/cover2.jpg'
import coverimg3 from '../images/cover3.jpg'
import solarimg from '../images/solar1.jpg'
import windimg from '../images/wind.jpg'
export default function Home() {
  return (
    <>
   <div className='fluid-bg-dark'  >
    
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel"  >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={coverimg} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={coverimg2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={coverimg3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
    <div className='contianer my-5 mx-4'>


    <div className="row mb-2 ">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">Solar Energy</strong>
          <h3 className="mb-0">Solar Power</h3>
          <div className="mb-1 text-body-secondary">Nov 12</div>
          <p className="card-text mb-auto">Solar energy harnesses the power of sunlight to generate electricity or heat..</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img className="bd-placeholder-img" width="200" height="250" src={solarimg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div>
    </div>
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-success">Wind Energy</strong>
          <h3 className="mb-0">Wind Power</h3>
          <div className="mb-1 text-body-secondary">Nov 11</div>
          <p className="mb-auto">Wind energy converts the kinetic energy of wind into electricity through wind turbines..</p>
          <a href="#" className="stretched-link">Continue reading</a>
        </div>
        <div className="col-auto d-none d-lg-block">
        <img className="bd-placeholder-img" width="200" height="250" src={windimg } role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
        </div>
      </div>
    </div>
  </div>


    </div>
    <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Solar Power</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">
           Solar energy is a renewable source of power that utilizes sunlight to generate electricity or heat, reducing reliance on fossil fuels. It involves the use of photovoltaic (PV) cells to convert sunlight into electricity, or solar thermal systems to harness solar radiation for heating applications. Solar energy offers numerous environmental and economic benefits while contributing to a sustainable future..</p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"> GET STARTED</button>
          <button type="button" className="btn btn-outline-light btn-lg px-4">READ MORE</button>
        </div>
      </div>
    </div>
  </div>


    
    </>
  )
}
