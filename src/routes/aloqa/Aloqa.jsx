import "./Aloqa.css"
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaTelegram, FaInstagram, FaFacebookF, FaMapMarkerAlt } from "react-icons/fa";

const Aloqa = () => {
  return (
    <div className="container">
      <div className="aloqa_form_div">
        <h1 className="aloqa_h1">Aloqa</h1>
        <div className="aloqa_two">
          <div className="aloqa_form_bir">
            <p className="aloqa_p_one">Takliflar va murojaatlar uchun</p>
            <form action="">
              <input type="text" className="aloqa_input" required placeholder="Ism" /><br /><br />
              <input type="text" className="aloqa_input" required placeholder="Familiya" /><br /><br />
              <input type="text" className="aloqa_input" required placeholder="Telefon raqam" /><br /><br />
              <textarea name="" id="" required className="aloqa_katta_input" placeholder="Ma`lumot uchun" cols="30" rows="5"></textarea><br /><br />
              <button className="aloqa_btn">Yuborish</button>
            </form>
          </div>
          <div className="aloqa_form-ikki">

            <div className="aloqa_item">
              <a href="tel:+998946300618" className="aloqa_a">
                <div className="aloqa_dumaloq"><BsFillTelephoneFill className="aloqa_icon" /></div>
                <p className="aloqa_tel_p"> +998946300618</p>
              </a>
            </div>

            <div className="aloqa_item">
              <a href="tel:+998995270618" className="aloqa_a">

                <div className="aloqa_dumaloq"><BsFillTelephoneFill className="aloqa_icon" /></div>
                <p className="aloqa_tel_p"> +998995270618</p>
              </a>
            </div>

            <div className="aloqa_item">
              <a href="https://t.me/Narpayy_TTB" className="aloqa_a">
                <div className="aloqa_dumaloq"><FaTelegram className="aloqa_icon" /></div>
                <p className="aloqa_tel_p">narpay_ttb</p>
              </a>
            </div>

            <div className="aloqa_item">
              <a href="https://www.instagram.com/narpay_ttb/" className="aloqa_a">
                <div className="aloqa_dumaloq"><FaInstagram className="aloqa_icon" /></div>
                <p className="aloqa_tel_p">narpay_ttb</p>
              </a>
            </div>

            <div className="aloqa_item">
              <a href="https://www.facebook.com/people/Narpay-Ttb/pfbid02EUB4eF8hhEUqfd5D6JmDHgBFS8Jbaqu46jVwkgb8DtsMPTo9NmNpLEi5uJujUBdEl/" className="aloqa_a">
                <div className="aloqa_dumaloq"><FaFacebookF className="aloqa_icon" /></div>
                <p className="aloqa_tel_p"> narpay_ttb</p>
              </a>
            </div>

            <div className="aloqa_item">
              <a href="http://localhost:3000/aloqa#" className="aloqa_a">
                <div className="aloqa_dumaloq"><FaMapMarkerAlt className="aloqa_icon" /></div>
                <p className="aloqa_tel_p"> Samarqand viloyati Narpay tumani</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aloqa