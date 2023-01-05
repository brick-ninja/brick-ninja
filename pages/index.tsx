import React, { useState } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Navigation } from '../components/Navigation/Navigation'
import useSwr from 'swr'
import ReactGa from 'react-ga'

interface indexProps {}

interface Ireply {
  id: number
  name: string
  userName: string
  reply: string
}

const locomotiveScroll =
  typeof window !== `undefined` ? require('locomotive-scroll').default : null

const hoverEffect =
  typeof window !== `undefined` ? require('hover-effect').default : null

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
}

const fetcher = (url: any) => fetch(url).then((res) => res.json())

const index: React.FC<indexProps> = ({}) => {
  const [speakerState, setSpeakerState] = useState('muted')
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false)
  const { data: reviews, error } = useSwr('/api/tweets', fetcher)

  if (error) console.log(error)

  const refScroll = React.useRef(null)
  let lscroll: any

  React.useEffect(() => {
    ReactGa.initialize('UA-177100391-3')
    ReactGa.pageview(window.location.pathname + window.location.search)

    if (!refScroll.current) return
    // @ts-ignore
    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    })

    // update locomotive scroll
    window.addEventListener('load', () => {
      let image = document.querySelector('img')
      // @ts-ignore
      const isLoaded = image!.complete && image!.naturalHeight !== 0
      lscroll.update()
    })

    // image hover effect
    Array.from(document.querySelectorAll('.project-card__middle')).forEach(
      (el: any) => {
        const imgs: any = Array.from(el.querySelectorAll('img'))
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute('src'),
          image2: imgs[1].getAttribute('src'),
          displacementImage: el.dataset.displacement,
        })
      },
    )

    // header cursor
    const cursor = document.querySelector('.cursor')
    window.onmousemove = (e: any) => {
      cursor!.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px;`)
    }

    console.clear()
    console.log.apply(console, [
      '%c Designed and Developed by Adeola Adeoti %c %c🚀 %c\n',
      'color: #fff; background: #8000ff; padding:5px 0;',
      'color: #fff; background: #242424; padding:5px 0 5px 5px;',
      'background: #242424; padding:5px 0',
      'background: #242424; padding:5px 5px 5px 0',
    ])
    console.log.apply(console, [
      '%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n',
      'color: #fff; background: #8000ff; padding:5px 0;',
    ])
  }, [])

  const handleSpeaker = () => {
    const audio = document.querySelector('#audioPlayer') as HTMLVideoElement

    if (speakerState === 'muted') {
      setSpeakerState('unmuted')
      audio.pause()
    } else {
      setSpeakerState('muted')
      audio.play()
    }
  }

  function toggleBodyScroll(isToggleOpen: boolean) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true)
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false)
    }
  }

  return (
    <>
      <div id="menu-target" data-scroll-container ref={refScroll}>
        <Head>
          <link rel="icon" href="svg/favicon.svg" />
          <link href="https://adeolaadeoti.xyz/" rel="canonical" />
          <meta name="theme-color" content="#10101A" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#10101A"
          />
          <title>David Liang 🚀 &mdash; Full Stack Developer</title>
          <meta
            name="description"
            content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="David Liang 🚀 &mdash; Full Stack Engineer"
          />
          <meta property="og:url" content="https://brick-ninja.netlify.app/" />
          <meta property="og:image" content="webp/preview-image.png" />
          <meta
            property="og:description"
            content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
          />
          <meta
            name="twitter:title"
            content="David Liang 🚀 &mdash; Full Stack Devloper"
          />
          <meta
            name="twitter:description"
            content="I'm a self-taught Front End Developer and turning ideas into real life products is my calling."
          />
          <meta name="twitter:image" content="webp/preview-image.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:url"
            content="https://twitter.com/davidliang0424"
          />
        </Head>
        <audio loop id="audioPlayer" autoPlay style={{ display: 'none' }}>
          <source src="sound/preloader.mp3" type="audio/mp3" />
        </audio>
        <motion.div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#menu-target"
          animate={{ top: '-100vh', transition: { ...transition, delay: 9 } }}
          className="preloader"
        >
          <div className="preloader__wrapper">
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__left"
            >
              <img src="svg/generated.svg" alt="David Liang" />
            </motion.div>
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              className="preloader__right"
            >
              <p className="preloader__text">JavaScript</p>
              <p className="preloader__text">TypeScript</p>
              <p className="preloader__text">React.js</p>
              <p className="preloader__text">Vue.js</p>
              <p className="preloader__text">Node.js</p>
              <p className="preloader__text">MongoDB</p>
              <p className="preloader__text">MySQL</p>
              <p className="preloader__text">Web3</p>
            </motion.div>
          </div>
        </motion.div>
        <div className="cursor"></div>
        <Navigation
          isOpen={isToggleOpen}
          toggleOpen={() => toggleBodyScroll(isToggleOpen)}
        />
        <div className="header-wrapper">
          <header className="header">
            <div className="header__hero">
              <div className="header__hero--heading">
                <span>turning ideas into </span> <br />
                <span>real life </span>
                <span className="header__hero--heading-gradient">
                  products{' '}
                </span>
                <br />
                <span>is my calling.</span>
              </div>
              <a
                data-scroll-to
                className="header__hero--cta"
                href="#sectionProjects"
              >
                VIEW PROJECTS
              </a>
            </div>
          </header>
          <div className="header__footer">
            <div className="header__footer--left">
              <div className="speaker">
                <div
                  onClick={handleSpeaker}
                  className={`${'speaker__toggle'} ${
                    speakerState === 'unmuted'
                      ? `${'speaker__toggle--anim'}`
                      : ``
                  }`}
                >
                  &nbsp;
                </div>
                <div className="speaker__muted">
                  <img src="svg/muted.svg" alt="muted icon" />
                </div>
                <div className="speaker__unmuted">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.599976"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect1-anim"
                    />
                    <rect
                      x="9"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect2-anim"
                    />
                    <rect
                      x="4.79999"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect3-anim"
                    />
                    {/* <rect
                      x="13.2"
                      y="1.06665"
                      width="1.4"
                      height="10"
                      fill="#F2F2F2"
                      className="rect4-anim"
                    /> */}
                  </svg>
                </div>
              </div>
            </div>
            <div className="header__footer--right">
              <a
                href="https://github.com/brick-ninja"
                rel="noopener"
                target="_blank"
              >
                👾 GH
              </a>
              <a
                href="https://twitter.com/davidliang0424"
                rel="noopener"
                target="_blank"
              >
                🐦 TW
              </a>
              <a
                href="https://www.linkedin.com/in/golden-ninja/"
                rel="noopener"
                target="_blank"
              >
                💼 LD
              </a>
            </div>
          </div>
        </div>
        <main className="container">
          <p className="about-text">
            Hello stranger! 👋, my name is David Liang and I am a Senior Full
            Stack Engineer, passionate <br /> about web and mobile products that
            help people experience everyday life, not endure it.
          </p>
          <section id="sectionProjects" className="section-projects">
            <h1 className="heading-1">
              <span>Yeah, I work hard </span> <small>💼</small>
            </h1>
            <p className="paragraph">
              Each project is unique. Here are some of my works.
            </p>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, REACT JS, NODE JS, Express JS
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/autoleaseninjas.png" alt="alexxandria model" />
                <img src="webp/autoleaseninjas01.png" alt="alexxandria logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="alexxandria-anim"
                  className="heading-2"
                >
                  AutoNinjas
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://autoninjas.com"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="https://autoninjas.com">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  React JS, Node JS, MongoDB, Express JS, Web3
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/spaceid.png" alt="safarika" />
                <img src="webp/spaceid02.png" alt="safarika logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="safarika-anim"
                  className="heading-2"
                >
                  Space ID
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://space.id"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a rel="noopener" target="_blank" href="https://space.id">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">
                  NEXT JS, LOCOMOTIVE SCROLL, FRAMER MOTION
                </h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/blocktr01.png" alt="heatrow" />
                <img src="webp/blocktr02.png" alt="heatrow logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="heatrow-anim"
                  className="heading-2"
                >
                  BlockTr
                </h2>
                <a
                  href="https://blocktr.ac/"
                  rel="noopener"
                  target="_blank"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a href="https://blocktr.ac/">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-card__left">
                <h4 className="heading-4">HTML, SCSS, JAVASCRIPT, GSAP</h4>
              </div>
              <div
                className="project-card__middle"
                data-displacement="webp/myDistorsionImage.webp"
              >
                <img src="webp/hi01.png" alt="adeola model" />
                <img src="webp/hi02.png" alt="adeola logo" />
              </div>
              <div className="project-card__right">
                <h2
                  data-scroll
                  data-scroll-offset="35%"
                  data-scroll-repeat={true}
                  data-scroll-class="adeola-anim"
                  className="heading-2"
                >
                  HI
                </h2>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://hi.com"
                  className="project-card__link"
                >
                  VISIT THE WEBSITE
                </a>
                <div className="project-card__socials">
                  <a rel="noopener" target="_blank" href="https://hi.com">
                    <img src="svg/dribble.svg" alt="dribble icon" />
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section
            data-scroll
            data-scroll-offset="35%"
            data-scroll-repeat={true}
            data-scroll-class="section-reviews__bg"
            className="section-reviews"
          >
            <div className="section-reviews__top">
              <h1 className="heading-1">
                <span>Mmmm, a little brag </span> <small>😊</small>
              </h1>
              <p className="paragraph paragraph__sub">
                What people are saying about my last portfolio
              </p>
            </div>
            <div className="section-reviews__bottom">
              <div className="section-reviews__bottom-wrapper review-card__anim1">
                {reviews?.data.map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
              <div className="section-reviews__bottom-wrapper review-card__anim2">
                {reviews?.data.sort().map((review: Ireply) => (
                  <div key={review.id} className="review-card">
                    <div className="review-card__top">
                      <div className="review-card__top--left">
                        <p className="review-card__p">{review.name}</p>
                        <h3 className="review-card__h3">{review.userName}</h3>
                      </div>
                      <div className="review-card__top--right">
                        <img src="svg/twitter.svg" alt="twitter icon" />
                      </div>
                    </div>
                    <div className="review-card__bottom">
                      <h2 className="review-card__h2">{review.reply}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="section-contact">
            <h1 className="heading-1">
              <span>Sold Yet? </span> <small>🤙</small>
            </h1>
            <h2 className="section-contact__h2">
              Thanks for stopping by, I’m currently looking to join a new team
              of creative designers and developers. If you think we might be a
              good fit for one another, give me a
              <a href="tel:+8615360189812"> call 🇨🇳 &nbsp;</a>
              or send me an
              <a
                href="mailto:davidliang0424@gmail.com"
                rel="noopener"
                target="_blank"
              >
                &nbsp; email 📧
              </a>
              .
            </h2>
          </section>
          <section className="section-socials">
            <h1 className="heading-1">
              <span>Dont be a stranger!</span> <small>👋</small>
            </h1>
            <p className="paragraph">Connect with me online</p>
            <div className="section-socials--links">
              <a
                href="https://github.com/matthew-zeng"
                rel="noopener"
                target="_blank"
              >
                👾 GitHub
              </a>
              <a
                href="https://twitter.com/davidliang0424"
                rel="noopener"
                target="_blank"
              >
                🐦 Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/golden-ninja/"
                rel="noopener"
                target="_blank"
              >
                💼 LinkedIn
              </a>
            </div>
          </section>
        </main>
        <footer className="footer">
          <img src="svg/david-liang.svg" alt="design and devloped by adeola" />
          <div className="footer__socials">
            <a
              href="https://github.com/matthew-zeng"
              target="_blank"
              rel="noopener"
            >
              <img src="svg/github.svg" alt="github logo" />
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

export default index
