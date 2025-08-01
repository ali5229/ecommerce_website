import React from 'react'
import './Services.css'
import Search from '../../assets/lowerhome/search.png'
import Arabflag from '../../assets/lowerhome/arabic.png'


function Services() {
  return (
    <div className="services-suppliers">
        <div className="services">
          <h2>Our extra services</h2>
          <div className="service-items">
            <div className="service-item">
                <div className='image-bg'><div className='ellipse'> <img src={Search} alt="" /></div></div>
                <p>Source from Industry hubs</p>
            </div>
            <div className="service-item">
                <div className='image-bg'><div className='ellipse'> <img src={Search} alt="" /></div></div>
                <p>Source from Industry hubs</p>
            </div>
            <div className="service-item">
                <div className='image-bg'><div className='ellipse'> <img src={Search} alt="" /></div></div>
                <p>Source from Industry hubs</p>
            </div>
            <div className="service-item">
                <div className='image-bg'><div className='ellipse'> <img src={Search} alt="" /></div></div>
                <p>Source from Industry hubs</p>
            </div>
          </div>
        </div>
        <div className="suppliers">
          <h2>Suppliers by region</h2>
          <div className="country-supplier">
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            <div className="supplier-name">
              <img src={Arabflag} alt="" />
              <div>
                <h2>Arabic Emirates</h2>
                <p>shopname.ae</p>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Services