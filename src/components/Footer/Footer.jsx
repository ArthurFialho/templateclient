import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary pt-12 pb-8 text-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* company details section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Officiis autem reiciendis facilis animi!
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +0 (000) 000-0000
                </p>
                <p className="flex items-center gap-2">
                  <FaMapLocation />
                  Belo Horizonte, Minas Gerais
                </p>
              </div>
            </motion.div>
            {/* foomotion.ter links section */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-3xl font-bold">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Contact us
                      </a>
                    </li>
                    <li>
                      <a
                        href=""
                        className="transition duration-300 hover:text-gray-300 hover:translate-x-1 inline-block"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* social links section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold">Follow us</h1>
              <div className="flex items-center gap-3">
                <FaInstagram className="text-3xl cursor-pointer hover:scale-105 hover:text-gray-300 duration-300" />
                <FaLinkedin className="text-3xl cursor-pointer hover:scale-105 hover:text-gray-300 duration-300" />
                <FaFacebook className="text-3xl cursor-pointer hover:scale-105 hover:text-gray-300 duration-300" />
                <FaGoogle className="text-3xl cursor-pointer hover:scale-105 hover:text-gray-300 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Metods</p>
                <img src={Cards} className="w-[80%]" />
              </div>
            </motion.div>
            {/* copyright section */}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-white text-center mt-8 border-t-2 pt-8 "
          >
            © 2025. All Rights Reserved - Arthur Fialho
          </motion.p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
