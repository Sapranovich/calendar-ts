import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className='wrapper'>
      <div className='landing__wrapper'>
      <Link to="/calendar" className="button">
        Start
      </Link>
      <h1>САМЫЙ ЛУЧШИЙ ЛАНДИНГ!!!!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae recusandae beatae nam accusantium, iste dignissimos veritatis qui porro aspernatur laudantium illo pariatur quas ab quod, est in earum error soluta! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi cum fugit quod quaerat non nihil a minima repellat fugiat perspiciatis quis sint recusandae soluta, culpa, error aliquid optio sapiente architecto?.</p>
    </div>
    </div>
    </div>
  );
};

export default Landing;
