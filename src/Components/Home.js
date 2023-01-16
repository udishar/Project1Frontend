import React from "react";
import img from "../Image/3.jpg";
import "../Styles/Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="tilte">Welcome To My Kitchen</h1>
      <div className="Wrapper">
        <span className="Img-Style">
          <img className="Img2" src={img} alt="image here" />
          <br />
        </span>
        <div className="div2">
          <h2 className="heading"> Master Chef - Shipra Khanna</h2>
          <p className="Para">
            Shipra Khanna is an Indian celebrity chef, restaurateur, author and
            television personality. She is best known for, at the age of 29,
            winning the second season of the Indian television show MasterChef
            India which aired on Star Plus. Confidently, the young woman
            presents her tandoori chicken, a classic in her native country. The
            powerful blend of chili, paprika and turmeric delights the 100
            discerning jurors – this is how Indian food is supposed to taste.
            After a short consultation session and an unbelievably long
            commercial break, the judgment falls: Masterchef India, a spin-off
            of the well-known American cooking show, has a new winner! Her
            competitor offers polite congratulations, though it’s clearly a
            painful defeat for her. The crowd goes wild; the moderators are
            practically ecstatic. Only the victor seems calm and collected.
            Which makes sense, because Masterchef India’s newest winner came to
            the show with one firm resolution in mind: no more crying. hipra
            Khanna beat out twelve other contestants to win the second season of
            Masterchef India in 2012. Today, she’s one of the most beloved
            public figures in the country, and certainly its most popular female
            TV chef, with numerous cookbooks to her name. Her Instagram account
            shows that she’s as good with fashion as she is with daal and rice.
            Hashtag blessed, right? Not always. Khanna’s past was filled with
            the same suffering that many Indian women experience: she was
            married at a very young age, and spent years with a husband who was
            both physically and psychologically abusive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
