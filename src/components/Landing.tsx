import React from 'react'

import Resume from '../Assets/pdf/Resume.pdf'
import Profile from '../Assets/images/Profile.JPG'
const Landing = () => {
  return (
    <div>
      <div className="scroll-up-btn">
        <i className="fas fa-angle-up"></i>
      </div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <a href="#">
              Portfo<span>lio.</span>
            </a>
          </div>
          <ul className="menu">
            <li>
              <a href="#home" className="menu-btn">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="menu-btn">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-btn">
                Skills
              </a>
            </li>
            <li>
              <a href="#teams" className="menu-btn">
                Works
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-btn">
                Contact
              </a>
            </li>
          </ul>
          <div className="menu-btn">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>

      {/* <!-- home section start --> */}
      <section className="home" id="home">
        <div className="max-width">
          <div className="home-content">
            <div className="text-1">Hello, my name is</div>
            <div className="text-2">John Thomas</div>
            <div className="text-3">
              And I&apos;m a <span className="typing"></span>
            </div>
            <a href="#">Hire me</a>
          </div>
        </div>
      </section>

      {/* <!-- about section start --> */}
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">About me</h2>
          <div className="about-content">
            <div className="column left">
              <img src={Profile} alt="Profile" />
            </div>
            <div className="column right">
              <div className="text">
                I&apos;m John and I&apos;m a <span className="typing-2"></span>
              </div>
              <p>
                I&apos;m an Enthusiastic software designer and developer with
                awesome skills. I always coming up with innovative ideas.I use a
                creative approach to problem solve.I’m a nice fun and friendly
                person.I am willing to learn new skills and have many existing
                ones to offer.I am a quick to learn and willing to adapt to any
                job.
              </p>
              <a href={Resume} download="jobApplication">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- skills section start --> */}
      <section className="skills" id="skills">
        <div className="max-width">
          <h2 className="title">My skills</h2>
          <div className="skills-content">
            <div className="column left">
              <div className="text">My creative skills & experiences.</div>
              <p>
                Iam a I am a dedicated, organized and methodical individual. I
                have good interpersonal skills, am an excellent team worker and
                am keen and very willing to learn and develop new skills. I am
                reliable and dependable and often seek new responsibilities
                within a wide range of employment areas. I have an active and
                dynamic approach to work and getting things done. I am
                determined and decisive. I identify and develop opportunities.
              </p>
              <a href="https://github.com/johnthomasgithub">Read more</a>
            </div>
            <div className="column right">
              <div className="info">
                <span>HTML</span>
              </div>
              {/* <!-- <div className="line html"></div> --> */}
              <div className="info">
                <span>CSS</span>
              </div>
              {/* <!-- <div className="line css"></div> --> */}
              <div className="info">
                <span>Bootstrap</span>
              </div>
              {/* <!-- <div className="line js"></div> --> */}
              <div className="info">
                <span>JavaScript</span>
              </div>
              {/* <!-- <div className="line php"></div> --> */}
              <div className="info">
                <span>Flutter</span>
              </div>
              {/* <!-- <div className="line mysql"></div> --> */}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- my works --> */}
      <section className="teams" id="teams">
        <div className="max-width">
          <h2 className="title">My works</h2>
          <div className="carousel owl-carousel">
            <div className="card">
              <div className="box">
                <a href="https://johnthomasgithub.github.io/Task-1/">
                  {' '}
                  <img src="images/t1.PNG" alt="" />{' '}
                </a>
                <div className="text">Zeplin-Task1</div>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> --> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <a href="https://johnthomasgithub.github.io/Task-2/">
                  <img src="images/t2.PNG" alt="" />
                </a>
                <div className="text">Zeplin-Task2</div>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> --> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <a href="https://johnthomasgithub.github.io/SmartFarms/">
                  <img src="images/t3.PNG" alt="" />
                </a>
                <div className="text">SmartFarms</div>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> --> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <a href="https://johnthomasgithub.github.io/Music/">
                  <img src="images/t4.PNG" alt="" />
                </a>
                <div className="text">Music</div>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> --> */}
              </div>
            </div>
            <div className="card">
              <div className="box">
                <a href="https://johnthomasgithub.github.io/TalentTN/">
                  <img src="images/t5.PNG" alt="" />
                </a>
                <div className="text">TalentTn</div>
                {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p> --> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- contact section start --> */}
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              {/* <!-- <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p> --> */}
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">John Thomas</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">Tirunelveli</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">johnthomas222000@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form action="#">
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Email" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="field textarea">
                  <textarea
                    cols={30}
                    rows={10}
                    placeholder="Message.."
                    required
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- footer section start --> */}
      <footer>
        <span>
          Created By <a href="#">John</a>
        </span>
      </footer>

      <script src="script.js"></script>
    </div>
  )
}

export default Landing
