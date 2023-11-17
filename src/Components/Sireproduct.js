import React from 'react'
import whyimg from '../images/why1.jpg';
import whyimg2 from '../images/why2.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BatterySaverIcon from '@mui/icons-material/BatterySaver';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import GrainIcon from '@mui/icons-material/Grain';

function Sireproduct() {
    return (
        <>
            <h1 className="display-5 fw-bold text-body-emphasis text-success text-center"> S.I.R.E Product</h1>
            <hr width='250' className='mx-auto  text-success' />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 '>
                        <img src={whyimg} alt="Logo" width="500" height="300" className="rounded align-text-top" />
                        <div className='contaienr'>
                            <h3 className='text-success'> S.I.R.E DIRECT  </h3>
                            <KeyboardArrowRightIcon color='success' /> Sistema Plugin
                            <br />
                            <KeyboardArrowRightIcon color='success' /> Struttura eccanizzata in poliuera e sensoristica
                            <br />
                            <KeyboardArrowRightIcon color='success' /> Pannelli alta efficieza da 1km
                            <br />
                            <KeyboardArrowRightIcon color='success' /> Inverter e conne ssione all'impianto domestico
                            <br />
                            <KeyboardArrowRightIcon color='success' /> App di controllo e gesti one
                            <h5> CONSIGLIATO PER</h5>
                            <div className='row '>
                                <div className='col-md-3 text-center '>
                                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                        <BatterySaverIcon color='warning' fontSize='large' />
                                    </div>
                                    <p >Devices</p>
                                </div>
                                <div className='col-md-2 text-center '>
                                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                        <FamilyRestroomIcon color='warning' fontSize='large' />
                                    </div>
                                    <p >Family</p>
                                </div>
                            </div>

                         <h5>Scopri le caratteristiche tecniche</h5>
                         <GrainIcon color='success'/> Tempo di ricarica medio in estate
                         <br/>
                         <GrainIcon color='success'/> TBD Tempo di scarica a 16A.
                         <br/>
                         <GrainIcon color='success'/> TBD Autonomia dalla rete elettrica
                         <br/>
                         <GrainIcon color='success'/> TBD Autonomia in casa di blackout
                         <br/>
                         <GrainIcon color='success'/> 2gg immissione di co2 da 1022 kg a soo kg annui
                         <br/>
                         <GrainIcon color='success'/> Te mpo di ricarica medio in estate
                         


                        </div>

                    </div>
                    <div className='col-md-6'>
                        <img src={whyimg2} alt="Logo" width="500" height="300" className="rounded align-text-top" />
                        <div className='contaienr'>
                            <h3 className='text-success'> S.I.R.E FULL </h3>
                            <KeyboardArrowRightIcon color='success' /> Struttura meccanizzata in poliuera e sensoristica intelligente
                            <br />
                            <KeyboardArrowRightIcon color='success' /> Pannelli alta efficienza da 1kw
                            <br />
                            <KeyboardArrowRightIcon color='success' /> Inverter e conne ssione all impianto domestico
                            <br />
                            
                            <KeyboardArrowRightIcon color='success' /> App di controllo e gesti one
                           
                            <h5 className='my-3'> CONSIGLIATO PER</h5>
                            <div className='row '>
                                <div className='col-md-3 text-center '>
                                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                        <BatterySaverIcon color='warning' fontSize='large' />
                                    </div>
                                    <p >Devices</p>
                                </div>
                                <div className='col-md-2 text-center '>
                                    <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                                        <FamilyRestroomIcon color='warning' fontSize='large' />
                                    </div>
                                    <p >Family</p>
                                </div>
                            </div>

                         <h5>  Title here if they gave othervise remove this</h5>
                         <GrainIcon color='success'/> Siste ma 2 kw con accumulo
                         <br/>
                         <GrainIcon color='success'/> Tempo di ricarica medio in estate is 5 ore e 30 minuti
                         <br/>
                         <GrainIcon color='success'/> Te mpo di scarica a 16A is 8 ore
                         <br/>
                         <GrainIcon color='success'/> Autonomia dalla rete elettrica 62Po
                         <br/>
                         <GrainIcon color='success'/> 2gg immissione di co2 da 1022 kg a soo kg annui
                         <br/>
                         <GrainIcon color='success'/> Te mpo di ricarica medio in estate
                         


                        </div>
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

export default Sireproduct
