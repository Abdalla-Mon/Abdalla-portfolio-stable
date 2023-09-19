import { Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { RouteProvider } from "../../App";

export default function Portfolio() {
  const { animation, state } = useContext(RouteProvider);

  const portArr = [
    {
      name: "Sandbox",
      url: "https://sandbox-abdalla-mon.vercel.app/",
      gitHub: "https://github.com/Abdalla-Mon/sandbox-port",
      text: "Sandbox is E-commerce website with a lot of features like filtering & custom pagination & form validation and more ,It can also be used as an introduction page for a company and to display its services.",
      skills: [
        "react",
        "react redux",
        "Tailwind CSS",
        "Commerce.js",
        "Swiper.js",
        "Scss",
      ],
      cat: "E Commerce",
    },
    {
      name: "Abdalla Market",
      url: "https://abdalla-market.vercel.app/",
      gitHub: "https://github.com/Abdalla-Mon/Abdalla-Market-port",
      text: "Abdalla Market is E-commerce website with a lot of features like filtering & custom pagination & change colos themes and more.",
      skills: [
        "react",
        "react redux",
        "Tailwind CSS",
        "Material UI",
        "Swiper.js",
        "Scss",
      ],
      cat: "E Commerce",
    },
    {
      name: "Commerece",
      url: "https://abdalla-mon.github.io/commerece/",
      gitHub: "https://github.com/Abdalla-Mon/commerece",
      text: "Commerece is a simple e commerce app.",
      skills: ["react", "Bootstrap", "Swiper.js", "Scss"],
      cat: "E Commerce",
    },
  ];
  return (
    <motion.section
      className="portfolio"
      initial={
        state === "left"
          ? { scale: 0.5, x: "100vw" }
          : { scale: 0.5, x: "-100vw" }
      }
      animate={
        animation
          ? state === "left"
            ? { scale: [1, 0.5], x: "-100vw" }
            : { scale: [1, 0.5], x: "100vw" }
          : state === "left"
          ? { x: "0vw", scale: 1 }
          : { x: "0vw", scale: 1 }
      }
      transition={
        animation
          ? {
              x: { duration: 0.5, delay: 0.5 },
              scale: { duration: 0.5, delay: 0 },
            }
          : {
              x: { duration: 0.5, delay: 0 },
              scale: { duration: 0.5, delay: 0.5 },
            }
      }
    >
      <div className="container mx-auto">
        <h4 className="text-center">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </h4>
        <h1 className="text-center">My Portfolio</h1>
        <div className="grid tab:grid-cols-2 lap:grid-cols-3 gap-8">
          {portArr.map((e, index) => {
            return <Card ele={e} />;
          })}
        </div>
      </div>
    </motion.section>
  );
}
function Card({ ele }) {
  const [popup, setPopup] = useState(false);
  return (
    <>
      {/* {popup ? ( */}
      <motion.div
        className="card-popup fixed"
        initial={{ scale: 0 }}
        animate={popup ? { scale: 1 } : { scale: [0.5, 0] }}
      >
        <div className="container mx-auto">
          <Popup setPopup={setPopup} ele={ele} />
        </div>
      </motion.div>
      {/* ) : null} */}
      <div className="card" onClick={() => setPopup(true)}>
        <div className="card-img">
          <img src={"./portfolio-imgs/" + ele.name + ".png"} alt={ele.name} />
        </div>
        <div className="card-content">
          <h5>{ele.cat}</h5>
          <h3>{ele.name}</h3>
          <p>Details</p>
        </div>
      </div>
    </>
  );
}
function Popup({ ele, setPopup }) {
  return (
    <>
      <div className="popup-content flex gap-10 tab:flex-row flex-col">
        <div className="popup-close" onClick={() => setPopup(false)}>
          <Close />
        </div>
        <div className="popup-left tab:w-3/6">
          <div className="popup-img ">
            <img src={"./portfolio-imgs/" + ele.name + ".png"} alt={ele.name} />
          </div>
        </div>
        <div className="popup-text tab:w-3/6">
          <h5>{ele.cat}</h5>
          <h3>{ele.name}</h3>
          <p>{ele.text}</p>
          <ul className="grid grid-cols-2 justify-between gap-2 ">
            {ele.skills.map((e) => {
              return <li key={e}>- {e}</li>;
            })}
          </ul>
          <div className="flex gap-8">
            <Button e={"Live Demo"} url={ele.url} />
            <Button e={"Source Code"} url={ele.gitHub} />
          </div>
        </div>
      </div>
    </>
  );
}
function Button({ e, url }) {
  return <a href={url}>{e}</a>;
}
