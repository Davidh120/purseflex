import { useState, useEffect, useRef } from 'react'

import { close, menu } from '../../assets'
import { navLinks } from '../../constants'

export const Nav = ({ timeline, ease }) => {
  const [toggle, settoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  let logo = useRef(null)
  let navItems = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  useEffect(() => {
    const navItemsArray = [];

    for (let i = 0; i < navLinks.length; i++) {
      const navItem = navItems.children[i];
      navItemsArray.push(navItem);
    }

    timeline.from(logo, 1, { opacity: 0, y: 100 })
    timeline.from(navItemsArray, 1, {opacity: 0, y: -200, stagger: {amount: .4}, ease: ease}, .15)
  }, [])

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className={`fixed w-full z-20 top-0 left-0 sm:px-16 px-6 ${scrolled ? 'bg-nav' : 'bg-non-nav'}`}>
      <div className='w-full flex py-4 justify-between items-center navbar'>
        <a href="/"><h1 className='logo text-2xl' ref={el => logo = el}>PurseFlex</h1></a>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1' ref={el => navItems = el}>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0 border-2 border-white rounded-3xl px-4 py-1 sign-btn' : 'mr-10'} text-white`}>
              {nav.page ? <a href={`${nav.id}`}>{nav.title}</a> : <a href={`#${nav.id}`} onClick={(event) => scrollToSection(event, nav.id)}>{nav.title}</a>}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => settoggle((prev) => !prev)} />

          <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
