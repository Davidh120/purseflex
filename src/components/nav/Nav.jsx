import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { close, menu } from '../../assets'
import { navLinks } from '../../constants'

export const Nav = ({ timeline, ease, page }) => {
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
    if (timeline) {
      timeline.from(logo, 1, { opacity: 0, y: 100 })
      timeline.from(navItemsArray, 1, { opacity: 0, y: -200, stagger: { amount: .4 }, ease: ease }, .15)
    }
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
    <nav className={`fixed w-full z-50 top-0 left-0 sm:px-16 px-6 ${scrolled ? 'bg-nav' : 'bg-non-nav'}`}>
      <div className='w-full flex py-4 justify-between items-center navbar'>
        <a href="/"><h1 className='logo text-2xl' ref={el => logo = el}>PurseFlex</h1></a>

        <ul className='list-none sm:flex hidden justify-end items-center flex-1' ref={el => navItems = el}>
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0 border-2 border-white rounded-3xl px-4 py-1 sign-btn' : 'mr-10 hover:text-purple-500'} text-white`}>
              {nav.page ? <Link to={`${nav.id}`}>{nav.title}</Link> : <Link to={page ? `/purseflex/` : "#nav.id"} onClick={page ? '' : (event) => scrollToSection(event, nav.id)}>{nav.title}</Link>}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => settoggle((prev) => !prev)} />

          <div className={`flex p-6 bg-purple-500 absolute top-12 left-0 my-2 w-full rounded-b-xl ${toggle ? 'slide-in' : 'slide-out'}`}>
            <ul className='list-none flex flex-col justify-end items-center flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}>
                  {nav.page ? <Link to={`${nav.id}`}>{nav.title}</Link> : <Link to={page ? `/purseflex/` : "#nav.id"} onClick={page ? '' : (event) => scrollToSection(event, nav.id)}>{nav.title}</Link>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
