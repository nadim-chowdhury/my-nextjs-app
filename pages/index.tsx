import Head from "next/head";
// import styles from '../styles/Home.module.css'

import BannerImg from "../public/banner-img.jpg";
// import ReactImg from "../public/react.png";
// import NodeImg from "../public/node.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MyPortfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="navbar">
          <div className="logo">
            <h1>
              My Portfo<span>lio</span>
            </h1>
          </div>

          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="btn">
            <button>Hire Me</button>
          </div>
        </section>

        <section className="banner">
          <div className="banner-left">
            <h1>Hello World!</h1>
            <h2>
              It&apos;s Me <span>Nadim Chowdhury</span>
            </h2>
            <h1>I&apos;m a Web Developer</h1>
            <h3>
              I can Build & Develop high quality <span>website/webapp</span> for
              anyone.
            </h3>
            <h3>Fell free to contact me anytime.</h3>
          </div>
          <Image className="banner-img" src={BannerImg} alt="Banner image" />
        </section>

        <section className="title">
          <h2>About Me</h2>
        </section>

        <section className="about-me">
          <h3>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
            consectetur mollitia cumque rerum reprehenderit. Asperiores
            reiciendis consequuntur aperiam? Distinctio nisi tempore voluptates
            repellat amet, numquam totam rem sed vero. Ea accusamus eos nesciunt
            saepe natus, cumque quam explicabo praesentium, fuga unde sequi
            officiis ratione quisquam commodi odio dolor quod earum. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Deleniti, nulla dolorum
            minus a, aspernatur debitis laudantium consectetur voluptatum
            officia eum ut. Facilis dicta autem labore commodi! Perspiciatis
            cupiditate molestiae sunt. Quos est fugit eligendi voluptate. Enim
            voluptates illum culpa, accusantium fugiat quae corrupti nobis
            ratione, officia corporis quibusdam temporibus esse?
          </h3>
        </section>

        <section className="title">
          <h2>My Skills</h2>
        </section>

        <section className="my-skills">
          <div className="full-stack">
            <div className="dflex">
              <h3>HTML</h3>
            </div>

            <div className="dflex">
              <h3>CSS</h3>
            </div>

            <div className="dflex">
              <h3>JAVASCRIPT</h3>
            </div>

            <div className="dflex">
              <h3>PHP</h3>
            </div>

            <div className="dflex">
              <h3>MYSQL</h3>
            </div>
          </div>

          <div className="mern-stack">
            <div className="dflex">
              {/* <Image className="swidth" src={ReactImg} alt="react" /> */}
              <h3>REACT JS</h3>
            </div>

            <div className="dflex">
              <h3>NEXT JS</h3>
            </div>

            <div className="dflex">
              {/* <Image className="swidth" src={NodeImg} alt="react" /> */}
              <h3>NODE JS</h3>
            </div>

            <div className="dflex">
              <h3>EXPRESS JS</h3>
            </div>

            <div className="dflex">
              <h3>MONGO DB</h3>
            </div>
          </div>

          <div className="additional">
            <div className="dflex">
              <h3>BOOTSTRAP</h3>
            </div>

            <div className="dflex">
              <h3>JQUERY</h3>
            </div>

            <div className="dflex">
              <h3>TAILWIND CSS</h3>
            </div>

            <div className="dflex">
              <h3>SASS</h3>
            </div>

            <div className="dflex">
              <h3>GIT & GITHUB</h3>
            </div>
          </div>
        </section>

        <section className="footer">
          <h3>&copy; 2023 All Rights Reserved by Nadim Chowdhury.</h3>
        </section>
      </main>
    </>
  );
}
