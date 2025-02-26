import { Link } from "react-router-dom";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import About from "../components/About/About.jsx";
import DoctorList from "../components/Doctors/DoctorList.jsx";
import Testimonial from "../components/Testimonial/Testimonial.jsx";
import FaqList from "../components/Faq/FaqList.jsx";
import { BsArrowRight } from "react-icons/bs";

import ServicesList from "../components/Services/ServicesList";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
const Home = () => {
  return (
    <>
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ====== hero content ========== */}
            <div>
              <div className=" lg:w-[570px]">
                <h1 className="text-headingColor text-[36px] leading-[46px] md:text-[60px] md:leading-[70px] font-[800] ">
                 One stop for all things health.
                </h1>
                <p className="text__para">
                QuickCare revolutionizes healthcare by providing instant, AI-driven symptom analysis, seamless doctor recommendations, and flexible telemedicine consultations—ensuring fast, accessible, and reliable medical care anytime, anywhere.
                </p>
                <button className="btn">Request an Appointment </button>
              </div>

              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-yellowColor block mt-[-14px]"></span>
                  <p className="text__para">Doctors</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    20+
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-purpleColor block mt-[-14px]"></span>
                  <p className="text__para">Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 rounded-full bg-irisBlueColor block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>

            {/* =========== hero img ============ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg01} alt="hero_img" />
              </div>
              <div className="mt-[30px]">
                <img
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="hero_img"
                />
                <img className="w-full" src={heroImg03} alt="hero_img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing efficient medical services
            </h2>
            <p className="text__para text-center">
            Exceptional healthcare for all. Our system delivers unparalleled expertise and compassionate medical care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Find the right doctor for your needs with ease. Browse expert healthcare professionals, view their specialties and choose your doctor.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-red-900 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Quickly find the nearest doctor based on your location, ensuring convenient access to expert medical care whenever you need it.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-red-900 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Choose your preferred doctor, select a convenient time, and receive expert medical care—online or in person.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#1bcc20 ] mt-[30px] mx-auto flex items-center justify-center group hover:bg-red-900 hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
            Providing expert, compassionate, and cutting-edge healthcare across various specialties.
            </p>
          </div>

          <ServicesList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* =========== feature content ============ */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para ">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para ">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* feature img */}
            <div className="relative z-10  xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="about_img" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0  md:bottom-[100px]  md:left-[20px] z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[600] text-headingColor">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 font-[400] text-textColor">
                      10:00AM
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00 AM
                    </p>
                  </div>

                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="video" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rouned-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature end */}

      {/* doctors */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Dedicated to Your Well-Being</h2>
            <p className="text__para text-center">
            At QuickCare, our team of highly skilled and compassionate doctors is committed to delivering exceptional healthcare. With expertise across various specialties, they provide personalized consultations, accurate diagnoses, and tailored treatment plans. Whether through virtual appointments or in-person visits, our doctors ensure quality care, guiding you toward better health with professionalism and empathy.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>
      {/* doctors end */}

      {/* faq section */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>

              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* faq section end */}

      {/* testimonial */}

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* testimonial end */}
    </>
  );
};

export default Home;
