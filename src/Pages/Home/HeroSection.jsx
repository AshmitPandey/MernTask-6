export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        {/* <div className="hero--section--content--box"> */}
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Ashmit </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Full Stack</span>{" "}
              <br />
              Developer
            </h1>
            <p className="hero--section-description">
              Passionate about building functional and elegant digital experiences.
              I solve problems and live free , efficient code for stuff that lives on the internet.
            </p>
          </div>
          
        {/* </div> */}
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  
