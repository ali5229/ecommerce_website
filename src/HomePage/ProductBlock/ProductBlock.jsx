import React from 'react'
import './ProductBlock.css'
import sofa from '../../assets/productblock/sofa.png'
import appliance from '../../assets/productblock/appliance.png'
import blender from '../../assets/productblock/blender.png'
import cutlery from '../../assets/productblock/cutlery.png'
import lamp from '../../assets/productblock/lamp.png'
import mattress from '../../assets/productblock/mattress.png'
import mixer from '../../assets/productblock/mixer.png'
import plant from '../../assets/productblock/plant.png'
import smartphone from '../../assets/productblock/phone.png'
import camera from '../../assets/productblock/camera.png'
import watch from '../../assets/productblock/watch.png'
import headphones from '../../assets/productblock/headphones.png'
import gamingsets from '../../assets/productblock/gaming-set.png'
import electrickettle from '../../assets/productblock/thermos.png'
import laptop from '../../assets/productblock/laptop.png'
import uniquephone from '../../assets/productblock/phones2.png'



function ProductBlock() {
  return (
    <div className="blocks">
        <div className="block-1">
            <div className="head">
              <h2>Home and </h2><h2>Outdoor</h2>
              <button>Source now</button>
            </div>
            <div className="products">
                <div className="individual">
                    <div>
                        <h3>Soft Chairs</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={sofa} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Lamps</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={lamp} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Mattresses</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={mattress} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Cutlery</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={cutlery} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Kitchen mixer</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={mixer} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Blenders</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={blender} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Home Appliance</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={appliance} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Plants</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={plant} alt="" />
                </div>
                
            </div>
        </div>
        <div className="block-2">
            <div className="head" id='head-2'>
              <h2>Consumer </h2><h2>electronics and</h2><h2>gadgets</h2>
              <button>Source now</button>
            </div>
            <div className="products">
                <div className="individual">
                    <div>
                        <h3>Smart Watches</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={watch} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Cameras</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={camera} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Headphones</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={headphones} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Electric kattle</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={cutlery} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Gaming sets</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={gamingsets} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Laptops & PC</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={laptop} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Smartphones</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={smartphone} alt="" />
                </div>
                <div className="individual">
                    <div>
                        <h3>Unique Phones</h3>
                        <p>From</p>
                        <p>USD 19</p>
                    </div>
                    <img src={uniquephone} alt="" />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default ProductBlock