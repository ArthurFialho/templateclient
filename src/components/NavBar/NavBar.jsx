import { MdOutlineMenuOpen } from "react-icons/md";
import { SlEarphones } from "react-icons/sl";
import { UpdateFollower } from "react-mouse-follower";
import { motion } from "framer-motion";

const NavBarMenu = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "Categories",
    link: "#",
  },
  {
    id: 3,
    title: "Blog",
    link: "#",
  },
  {
    id: 4,
    title: "About",
    link: "#",
  },
  {
    id: 5,
    title: "Contact",
    link: "#",
  },
];

const NavBar = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-brandDark text-white py-4 font-varela shadow-md">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="container flex justify-between items-center"
        >
          {/* logo */}
          <div>
            <a href="#" className="text-xl font-bold uppercase">
              Arthur /{" "}
              <span className="font-extralight text-white/70">Fialho</span>
            </a>
          </div>
          {/* menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-4">
              {NavBarMenu.map((item) => (
                <li key={item.id}>
                  <UpdateFollower
                    mouseOptions={{
                      backgroundColor: "#fff",
                      zIndex: 999,
                      followSpeed: 1.8,
                      scale: 3.8,
                      mixBlendMode: "difference",
                    }}
                    className="hover:text-primary"
                  >
                    <a
                      href={item.link}
                      className="inline-block text-sm py-2 px-3 uppercase"
                    >
                      {item.title}
                    </a>
                  </UpdateFollower>
                </li>
              ))}

              <UpdateFollower
                mouseOptions={{
                  backgroundColor: "#fff",
                  zIndex: 999,
                  followSpeed: 1.8,
                  scale: 3.8,
                  mixBlendMode: "difference",
                }}
              >
                <button className="text-xl ps-14 hover:text-primary">
                  <SlEarphones />
                </button>
              </UpdateFollower>
            </ul>
          </div>
          {/* mobile burguer section */}
          <div className="md:hidden">
            <MdOutlineMenuOpen className="text-4xl" />
          </div>
        </motion.nav>
      </div>
    </>
  );
};

export default NavBar;
