'use client'
import { useState, useEffect, useRef } from 'react';
import Image from '../../node_modules/next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { gsap } from 'gsap';
import logo from '../../public/images/logo.png'

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [socialMenuVisible, setSocialMenuVisible] = useState(false);
  const [themeMenuVisible, setThemeMenuVisible] = useState(false);
  const navMenuTimeoutRef = useRef(null);
  const socialMenuTimeoutRef = useRef(null);
  const themeMenuTimeoutRef = useRef(null);

  const headerRef = useRef(null);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
    document.body.classList.toggle('light', theme === 'light');
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, [theme]);

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.body.classList.toggle('light', newTheme === 'light');
  };

  const showMenu = (setVisible, timeoutRef) => {
    clearTimeout(timeoutRef.current);
    setVisible(true);
  };

  const hideMenu = (setVisible, timeoutRef) => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <header ref={headerRef} className={`fixed top-0 w-full z-50 py-4 px-8 ${theme === 'light' ? 'bg-white text-black border border-gray-300' : 'bg-black text-white'}`}>
      <div className="container mx-auto flex justify-center">
        <div className="flex items-center justify-center space-x-4 rounded-full border p-4" style={{ width: '80%' }}>
          <Image src={logo} height={75} width={75} alt='' />
          <div
            onMouseEnter={() => showMenu(setNavMenuVisible, navMenuTimeoutRef)}
            onMouseLeave={() => hideMenu(setNavMenuVisible, navMenuTimeoutRef)}
            className="relative inline-block text-left"
          >
            <button className="btn btn-ghost px-2">Navegação</button>
            {navMenuVisible && (
              <div
                onMouseEnter={() => showMenu(setNavMenuVisible, navMenuTimeoutRef)}
                onMouseLeave={() => hideMenu(setNavMenuVisible, navMenuTimeoutRef)}
                className={`absolute mt-2 w-56 origin-top-left border border-gray-700 rounded-md shadow-lg focus:outline-none transition-transform transform ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Tela Inicial</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Experiencias</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Habilidades</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Projetos</a>
                  <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-700">Contato</a>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => showMenu(setSocialMenuVisible, socialMenuTimeoutRef)}
            onMouseLeave={() => hideMenu(setSocialMenuVisible, socialMenuTimeoutRef)}
            className="relative inline-block text-left"
          >
            <button className="btn btn-ghost px-2">Social</button>
            {socialMenuVisible && (
              <div
                onMouseEnter={() => showMenu(setSocialMenuVisible, socialMenuTimeoutRef)}
                onMouseLeave={() => hideMenu(setSocialMenuVisible, socialMenuTimeoutRef)}
                className={`absolute mt-2 w-56 origin-top-left border border-gray-700 rounded-md shadow-lg focus:outline-none transition-transform transform ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                <div className="py-1">
                  <a
                    href="https://www.linkedin.com/in/joaovitormiotti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm flex items-center hover:bg-gray-700"
                  >
                    <i className="fab fa-linkedin mr-2"></i> LinkedIn
                  </a>
                  <a
                    href="https://github.com/JoaoMiottiTec"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm flex items-center hover:bg-gray-700"
                  >
                    <i className="fab fa-github mr-2"></i> GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
          <div
            onMouseEnter={() => showMenu(setThemeMenuVisible, themeMenuTimeoutRef)}
            onMouseLeave={() => hideMenu(setThemeMenuVisible, themeMenuTimeoutRef)}
            className="relative inline-block text-left"
          >
            <button className="btn btn-ghost px-2">
              {theme === 'light' ? <SunIcon className="w-5 h-5 text-black" /> : <MoonIcon className="w-5 h-5 text-white" />}
            </button>
            {themeMenuVisible && (
              <div
                onMouseEnter={() => showMenu(setThemeMenuVisible, themeMenuTimeoutRef)}
                onMouseLeave={() => hideMenu(setThemeMenuVisible, themeMenuTimeoutRef)}
                className={`absolute mt-2 w-28 origin-top-left border border-gray-700 rounded-md shadow-lg focus:outline-none transition-transform transform ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}
              >
                <div className="py-1">
                  <button
                    onClick={() => toggleTheme('light')}
                    className="block w-full px-4 py-2 text-sm flex items-center hover:bg-gray-700"
                  >
                    <SunIcon className="w-5 h-5 mr-2 text-black" />Claro
                  </button>
                  <button
                    onClick={() => toggleTheme('dark')}
                    className="block w-full px-4 py-2 text-sm flex items-center hover:bg-gray-700"
                  >
                    <MoonIcon className="w-5 h-5 mr-2 text-white" />Escuro
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
