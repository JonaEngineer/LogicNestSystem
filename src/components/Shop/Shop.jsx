import React from 'react'
import './Shop.css'
import { UilCheckCircle } from '@iconscout/react-unicons'

function Shop() {
  return (
    <div>
      <section className='body-3frame'>
        <div className='container-top-shop-principal'>
          <p className='p-shop'>
            <span className='title1-p-shop-principal'>Powering</span> <span className='title2-p-shop-principal'>the</span> <span className='title3-p-shop-principal'>Best in</span>
          </p>
          <p className='p-shop'>
            <span className='title4-p-shop-principal'>Both Work</span> <span className='title5-p-shop-principal'>and</span> <span className='title6-p-shop-principal'>Play</span>
          </p>

          <div className='btns-container-shop-principal'>
            <button className='btn-shop-principal'>PC Gaming</button>
            <button className='btn-shop-principal'>Monitors</button>
            <button className='btn-shop-principal'>Gaming Chairs</button>
          </div>
        </div>

        <article className='products-container-shop-principal'>
          <div className='feature-products-container-shop-principal'>
            <p className='pt-shop'>
              <span className='title1-feature-container-shop-principal'>BOLD</span>
            </p>
            <p className='pt2-shop'>
              <span className='title2-feature-container-shop-principal'>GATE</span>
            </p>

            <p className='performance-shop-principal'>OPTIMAL PERFORMANCE</p>
            <ul className='ul-container-shop-principal'>
              <li className='offer-ul-container-shop-principal'>
                <UilCheckCircle className='icon' />
                <span className='span-li-shop-principal'>Ultimate Value</span>
              </li>
              <li className='offer-ul-container-shop-principal'>
                <UilCheckCircle className="icon"/>
                <span className='span-li-shop-principal'>Ready for Sports Gaming</span>
              </li>
              <li className='offer-ul-container-shop-principal'>
                <UilCheckCircle className="icon"/>
                <span className='span-li-shop-principal'>Low noise</span>
              </li>
            </ul>

            <h3 className='from'>from</h3>
            <p className='p-shop'>
              <span className='cost-shop-principal'>$33,999</span> <span className='stock-shop-principal'>In stock</span>
            </p>

            <div className='buy-btns-container-shop-principal'>
              <button className='add-btn-container-shop-principal'>Add to Cart</button>
              <button className='buy-btn-container-shop-principal'>Buy it</button>
            </div>
          </div>

          <div className='margin-container-shop-principal'>
            <div className='img-container-shop-principal'>
              <img className='pc1-shop-principal' src="/principalWebsite/3frame/pc1-shop.png" alt="" />
            </div>

            <div className='characteristics-container-shop-principal'>
              <ul className='characteristics-shop-principal'>
                <li className='li-characteristics-shop-principal'>
                  <img className='featureIcn' src="/principalWebsite/3frame/icn-processor-shop.png" alt='Processor Icon' />
                  <span className='span-li-characteristic-shop-principal'>PROCESSOR</span>
                </li>
                <p className='namesProduct-shop'>AMD Ryzen 9 5900X 12-core, 24-Thread</p>

                <li className='li-characteristics-shop-principal'>
                  <img className='featureIcn' src="/principalWebsite/3frame/icn-graphicsCard-shop.png" alt='Processor Icon' />
                  <span className='span-li-characteristic-shop-principal'>GRAPHICS CARD</span>
                </li>
                <p className='namesProduct-shop'>Asus ROG STRIX WHITE OC GeForce RTX 3080 10GB 10 GB Video Card</p>

                <li className='li-characteristics-shop-principal'>
                  <img className='featureIcn' src="/principalWebsite/3frame/icn-ram-shop.png" alt='Processor Icon' />
                  <span className='span-li-characteristic-shop-principal'>RAM MEMORY</span>
                </li>
                <p className='namesProduct-shop'>TEAMGROUP T-Force Xtreem ARGB 16 GB (2 x 8 GB) DDR4-3600 CL18 Memory</p>
                
                <li className='li-characteristics-shop-principal'>
                  <img className='featureIcn' src="/principalWebsite/3frame/icn-mothrboard-shop.png" alt='Processor Icon' />
                  <span className='span-li-characteristic-shop-principal'>MOTHERBOARD</span>
                </li>
                <p className='namesProduct-shop'>Asus ROG STRIX B550-A GAMING ATX AM4 Motherboard</p>
              </ul>
            </div>
          </div>
        </article>

        <article className='products-container-shop-principal'>
            <div className='feature-products-container-shop-principal'>
              <p className='pt-shop'>
                <span className='secondPc-feature-container-shop-principal'>BOLD</span>
              </p>
              <p className='pt2-shop'>
                <span className='title2-feature-container-shop-principal'>GATE</span>
              </p>

              <p className='secondPc-performance-shop-principal'>OPTIMAL PERFORMANCE</p>
              <ul className='ul-container-shop-principal'>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className='icon' />
                  <span className='span-li-shop-principal'>Premium Custom PC</span>
                </li>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className="icon"/>
                  <span className='span-li-shop-principal'>Ready for High - Performance</span>
                </li>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className="icon"/>
                  <span className='span-li-shop-principal'>Premium Full Steel Chassis</span>
                </li>
              </ul>

              <h3 className='from'>from</h3>
              <p className='p-shop'>
                <span className='cost-shop-principal'>$36,999</span> <span className='stock-shop-principal'>In stock</span>
              </p>

              <div className='buy-btns-container-shop-principal'>
                <button className='secondPc-add-btn-container-shop-principal'>Add to Cart</button>
                <button className='secondPc-buy-btn-container-shop-principal'>Buy it</button>
              </div>
            </div>

            <div className='margin-container-shop-principal'>
              <div className='img-container-shop-principal'>
                <img className='pc1-shop-principal' src="/principalWebsite/3frame/pc2-shop.png" alt="" />
              </div>

              <div className='characteristics-container-shop-principal'>
                <ul className='characteristics-shop-principal'>
                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-processor-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>PROCESSOR</span>
                  </li>
                  <p className='namesProduct-shop'>Intel Core i9-13900K Desktop Processor 24 (8 P-cores + 16 E-cores) with Integrated Graphics</p>

                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-graphicsCard-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>GRAPHICS CARD</span>
                  </li>
                  <p className='namesProduct-shop'>Asus ROG STRIX WHITE OC GeForce RTX 3080 10GB 10 GB Video Card</p>

                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-ram-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>RAM MEMORY</span>
                  </li>
                  <p className='namesProduct-shop'>G.SKILL Trident Z5 RGB Series (Intel XMP 3.0) DDR5 RAM de 32 GB (2 x 16 GB) 6000MT/s CL36-36-36-96 1.35Vg</p>
                  
                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-mothrboard-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>MOTHERBOARD</span>
                  </li>
                  <p className='namesProduct-shop'>Asus ROG Maximus Z790 Dark Hero</p>
                </ul>
              </div>
            </div>
        </article>

        <article className='products-container-shop-principal'>
            <div className='feature-products-container-shop-principal'>
              <p className='pt-shop'>
                <span className='thirdPc-feature-container-shop-principal'>HYPER</span>
              </p>
              <p className='pt2-shop'>
                <span className='title2-feature-container-shop-principal'>GATE</span>
              </p>

              <p className='thirdPc-performance-shop-principal'>ADVANCE PERFORMANCE</p>
              <ul className='ul-container-shop-principal'>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className='icon' />
                  <span className='span-li-shop-principal'>NZXT Extreme PC</span>
                </li>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className="icon"/>
                  <span className='span-li-shop-principal'>Ready for Extreme - Performance</span>
                </li>
                <li className='offer-ul-container-shop-principal'>
                  <UilCheckCircle className="icon"/>
                  <span className='span-li-shop-principal'>Premium Full Steel Chassis</span>
                </li>
              </ul>

              <h3 className='from'>from</h3>
              <p className='p-shop'>
                <span className='cost-shop-principal'>$39,999</span> <span className='stock-shop-principal'>In stock</span>
              </p>

              <div className='buy-btns-container-shop-principal'>
                <button className='thirdPc-add-btn-container-shop-principal'>Add to Cart</button>
                <button className='thirdPc-buy-btn-container-shop-principal'>Buy it</button>
              </div>
            </div>

            <div className='margin-container-shop-principal'>
              <div className='img-container-shop-principal'>
                <img className='pc1-shop-principal' src="/principalWebsite/3frame/pc3-shop.png" alt="" />
              </div>

              <div className='characteristics-container-shop-principal'>
                <ul className='characteristics-shop-principal'>
                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-processor-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>PROCESSOR</span>
                  </li>
                  <p className='namesProduct-shop'>Intel Core i9-13900K Desktop Processor 24 (8 P-cores + 16 E-cores) with Integrated Graphics</p>

                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-graphicsCard-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>GRAPHICS CARD</span>
                  </li>
                  <p className='namesProduct-shop'>Asus ROG STRIX WHITE OC GeForce RTX 3080 10GB 10 GB Video Card</p>

                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-ram-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>RAM MEMORY</span>
                  </li>
                  <p className='namesProduct-shop'>TEAMGROUP T-Force Xtreme ARGB 16GB (2 x 8GB) DDR4-3600 CL18 Memory</p>
                  
                  <li className='li-characteristics-shop-principal'>
                    <img className='featureIcn' src="/principalWebsite/3frame/icn-mothrboard-shop.png" alt='Processor Icon' />
                    <span className='span-li-characteristic-shop-principal'>MOTHERBOARD</span>
                  </li>
                  <p className='namesProduct-shop'>Asus ROG Maximus Z790 Dark Hero</p>
                </ul>
              </div>
            </div>
        </article>
      </section>
    </div>
  )
}

export default Shop