import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Landing = () => {
  return (
    <div>
        <NavBar/>
      <div className="flex flex-row justify-evenly items-center pb-6 relative">
        <div>
            <img src="/assets/landingImage.png" alt=" landing image " className=" bg-cover h-[871px]" />
        </div>
        <div className="flex flex-col gap-20">
          <div className=" font-extrabold text-3xl   tracking-wide z-10">
            <p>"Unleash the Symphony of Your Soul:</p>
            <p>Where Every Note Finds its Home."</p>
          </div>
          <Link to="/sign-up" className="bg-[#442A6640]  self-center px-12 py-3 rounded-lg font-extrabold">Let’s Go</Link>
        </div>
        
      </div>
      <div>
        <img src="/assets/Ellipse2.png" alt=" ellipse" className="absolute bg-cover top-96 z-0 right-60" />
      </div>
      <div>
            <img src="/assets/Ellipse3.png" alt=" ellipse" className="absolute bottom-4  right-0 bg-cover" />
        </div>
    </div>
  );
};

export default Landing;
