import React from "react";
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";
import { Link } from "react-router-dom";
import {Menu} from "../components/Menu"

export const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>Jemini</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Exploring the Depths of Human Curiosity</h1>
        <p>
          In the vast expanse of human experience, curiosity stands as a beacon,
          guiding us through the labyrinth of knowledge and discovery. It is the
          insatiable hunger for understanding, the relentless pursuit of answers
          to questions we may not yet fully comprehend. From the depths of
          ancient civilizations to the frontiers of modern science, curiosity
          has been the driving force behind our greatest achievements. It
          compels us to explore uncharted territories, to unravel the mysteries
          of the universe, and to delve into the inner workings of our own
          minds. With each new revelation, curiosity only grows stronger,
          igniting the flames of innovation and pushing the boundaries of what
          is known. It is a force that transcends boundaries, bridging cultures,
          disciplines, and generations in a collective quest for knowledge. In
          the end, it is curiosity that fuels our endless journey of discovery,
          shaping the course of human history and inspiring future generations
          to reach ever higher.
          <br />
            Human curiosity is an intricate tapestry woven into the fabric of
            our existence, propelling us forward on an eternal quest for
            understanding. From the earliest moments of childhood wonder to the
            profound inquiries of adulthood, curiosity serves as both guide and
            catalyst, urging us to peer beyond the veil of the unknown. It is a
            force that drives us to explore the farthest reaches of the cosmos,
            to plumb the depths of our own consciousness, and to uncover the
            mysteries of the natural world. In our pursuit of knowledge, we are
            compelled to ask questions that challenge the very foundations of
            our understanding, leading to groundbreaking discoveries and
            paradigm-shifting revelations. Yet, with each answer unearthed, new
            questions emerge, fueling an insatiable thirst for deeper insight
            and broader horizons. The journey of curiosity is one of perpetual
            growth and transformation, shaping not only our understanding of the
            world but also our place within it. As we continue to unravel the
            secrets of curiosity, we unlock the boundless potential of the human
            spirit and embark on a voyage of discovery that knows no bounds
          
        </p>
      </div>
      <Menu />
    </div>
  );
};
