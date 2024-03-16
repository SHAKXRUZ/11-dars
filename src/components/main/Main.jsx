import "./Main.css";
import img1 from '../../assets/main_img/icon-1.png';
import img2 from '../../assets/main_img/icon-2.png';
import img3 from '../../assets/main_img/icon-3 (1).png';
import img4 from '../../assets/main_img/icon-3.png';
import img5 from '../../assets/main_img/icon-5.png';
import img6 from '../../assets/main_img/icon-6.png';

import rasne from '../../assets/main_img/baby-and-doctor.jpg';


//iconlar
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import rasmbosh from '../../assets/main_img/home-photo-one.png';


const Main = () => {
  return <div className="container">
    <main>
      <div className="box_el">

        <div className="hello">
          <h2>NARPAY TUMAN TIBBIYOT</h2>
          <h1>BIRLASHMASI</h1>
          <p>Samarqand viloyati Narpay Tuman Tibbiyot Birlashmasi: Biz bilan sog'lig'ingizni kafolatlang!</p>
          <div className="div"></div>
        </div>

        <div className="back_imgs">
          <img className="img1" src={img1} alt="img" />
          <img className="img2" src={img2} alt="img" />
          <img className="img3" src={img3} alt="img" />
          <img className="img4" src={img4} alt="img" />
          <img className="img4" src={img5} alt="img" />
          <img className="imga8" src={img6} alt="img" />
          <img className="imga9" src={img6} alt="img" />
          <img className="imga0" src={img6} alt="img" />
        </div>

        <div className="word_img">

          <img className="img_le" src={rasmbosh} alt="img" />

        </div>


        <div className="icon_div">
          <div className="icons">  <FaAngleLeft className="icon_one" /></div>
          <img  className="baby_img" src={rasne} alt="" />
          <div className="icons">  <FaAngleRight className="icon_two" /></div>
        </div>


      </div>
    </main>
  </div>;
};

export default Main;

