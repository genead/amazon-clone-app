import React from "react";
import "./home.css";
import { headerItems } from './ProductsData'
import ImageSlider from "./ImageSlider";
import Product from "./Product";
import { SliderData } from "./SliderData";  

function Home() {
  return (
    <div>
      <div className='item__container'>
        {headerItems && headerItems.map((items, index) => <p>{items}</p>)}
      </div>

      <div className="home">  
        <div className="home__container">
          {/* <img  
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
          /> */}

            <ImageSlider className="home__image" images={SliderData} />
          <div className="home__row">
            <Product
              id="12321341"
              title="Out of all the children's books published in 2021, Looking for more? Browse all of the best books of 2021"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/G/01/Books/Kids/BOTM/2021/BOTY_KIDS_2021_xcm_wanna_be_tile_440x334.jpg"
            />
            <Product
              id="12321341"
              title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13”  8GB RAM, 256GB Space Gray"
              price={999}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1370307_1919394_4153831_US_us_gw_pc_quad_image_card_2x_us_en_372x232_2X_en_US._SY232_CB639263687_.jpg"
            />
            <Product
              id="49538094"
              title="Amazon Basics Dog and Puppy Pads, Leak-proof 5-Layer Pee Pads with Quick-dry Surface for Potty Training"
              price={23.99}
              rating={6}
              image="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/5/AmazonStores/ATVPDKIKX0DER/633b63696ed7e0f1328951c6d8ecb75c.w750.h750._CR0%2C0%2C750%2C750_SX375_SY375_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="12321341"
              title="The Lean Startup: How Constant Innovation k"
              price={11.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
              id="12321341"
              title="Amazon Basics Rubber Encased Hex Dumbbell Hand Weight"
              price={20.99}
              rating={5}
              image="https://m.media-amazon.com/images/S/stores-image-uploads-na-prod/7/AmazonStores/ATVPDKIKX0DER/635a2d5de6c81539dcc3619fdb2a04b4.w750.h750._CR0%2C0%2C750%2C750_SX375_SY375_.jpg"
            />
            <Product
              id="12321341"
              title="polyester windproof and warm-keeping capability;  "
              price={129.96}
              rating={5}
              image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/SITE_FLIPS/HOL_1/BROWSE/CAROUSELS/Subhero_New/Stocking_Stuffers._CB640058522_.jpg"
            />
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking,l"
              price={239.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={199.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) Silver "
              price={598.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product
              id="3254354345"
              title="Orolay Women's Winter Puffer Down Jacket  "
              price={98.99}
              rating={5}
              image="https://m.media-amazon.com/images/I/81Iv0oejRSL._AC_SX240_SY280_.jpg"
            />
            <Product
              id="3254354345"
              title="Office Desk Chair with Flip-up Arms and Adjustable "
              price={139.99}
              rating={7}
              image="https://m.media-amazon.com/images/I/61o2dXPWi3L._AC_UL320_.jpg"
            />
          </div>
          <div className="home__row">
            <Product
              id="90829332"
              title="Samsung LC49XEN 49 curved led'"
              price={1094.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            <Product
              id="90829332"
              title="Mrs. Meyer's Clean Day Liquid "
              price={8.15}
              rating={4}
              image="https://m.media-amazon.com/images/G/01/US-hq/2021/img/Health_x26_Personal_Care/XCM_CUTTLE_1370955_1925562_US_500x500_en_US._AC_SY460_.jpg"
            />
            <Product
              id="90829332"
              title="National Tree Artificial Christmas "
              price={43.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/61aISsXvaiL._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
            />
            <Product
              id="90829332"
              title="Kids' Home Store
              Kitchen & Dining"
              price={8}
              rating={4}
              image="https://m.media-amazon.com/images/S/al-na-9d5791cf-3faf/edc3f16f-577d-41fe-8dba-511ee54b6dbb._CR572,0,628,628_BO2,255,255,255_PT0_BL0_.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
