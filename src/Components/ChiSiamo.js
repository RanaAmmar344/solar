import React from 'react'
import ceoimg from '../images/ceo.jpg'
import gmimg from '../images/gm.jpg'
import cfoimg from '../images/cfo.jpg'
function ChiSiamo() {
    return (
        <>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold text-body-emphasis text-success">CHI SIAMO</h1>
                <hr width='250' className='mx-auto  text-success' />
                <div className="col-md-6 mx-auto">
                    <p className="lead mb-4">Solar energy is a renewable source of power that utilizes sunlight to generate electricity or heat, reducing reliance on fossil fuels. It involves the use of photovoltaic  cells to convert sunlight into electricity, or solar thermal systems to harness solar radiation for heating applications. Solar energy offers numerous environmental and economic benefits while contributing to a sustainable future.</p>

                </div>
            </div>
            <div className='container text-center'>

                <div className="row">
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="150" height="150" src={ceoimg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <h2 className="fw-normal">CEO</h2>
                        <p> Mr Ahmed As CEO They typically have a broad range of responsibilities, including managing operations,</p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="150" height="150" src={gmimg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <h2 className="fw-normal">GM</h2>
                        <p>Mr Tanveer as GM They are responsible for strategic planning, resource allocation, team management.</p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                    <div className="col-lg-4">
                        <img className="bd-placeholder-img rounded-circle" width="150" height="150" src={cfoimg} role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
                        <h2 className="fw-normal">CFO</h2>
                        <p>Mis Alina as CFO They are responsible for financial planning, budgeting, financial analysis, risk management, </p>
                        <p><a className="btn btn-secondary" href="#">View details »</a></p>
                    </div>
                </div>

            </div>
            <div className="px-4 py-5 my-5 text-center">
            <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

                <hr width='250' className='mx-auto  text-success' />
                <div className="col-md-6 mx-auto">
                    <p className="lead mb-4 text-bold">A management team is a group of individuals within an organization who are responsible for making strategic decisions and overseeing day-to-day operations.
                        They bring diverse expertise and skills to the table, collaborating to set goals, allocate resources, and drive the organization towards success.
                        Effective management teams foster communication, innovation, and alignment to ensure efficient execution of business strategies and deliver desired outcomes.</p>

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

export default ChiSiamo
