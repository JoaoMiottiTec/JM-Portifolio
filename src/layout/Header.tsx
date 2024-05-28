'use client'
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { gsap } from 'gsap';
import logo from '../../public/images/logo.png';

interface HeaderProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, setTheme }) => {
  const [navMenuVisible, setNavMenuVisible] = useState(false);
  const [socialMenuVisible, setSocialMenuVisible] = useState(false);
  const [themeMenuVisible, setThemeMenuVisible] = useState(false);
  const navMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const socialMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const themeMenuTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headerRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
  }, []);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.body.classList.toggle('light', newTheme === 'light');
  };

  const showMenu = (setVisible: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setVisible(true);
  };

  const hideMenu = (setVisible: React.Dispatch<React.SetStateAction<boolean>>, timeoutRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>) => {
    timeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 300);
  };

  return (
    <header ref={headerRef} className={`fixed top-0 w-full z-50 py-4 px-8`}>
      <div className="container mx-auto flex justify-center relative bg-transparent">
        <div className={`absolute inset-0 rounded-full z-[-1] ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`} style={{ width: '80%', margin: 'auto' }}></div>
        <div className="flex items-center justify-center space-x-4 rounded-full w-full lg:w-5/6 border p-4">
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
                  <a href="#hero" className="block px-4 py-2 text-sm hover:bg-gray-700">Tela Inicial</a>
                  <a href="#experience" className="block px-4 py-2 text-sm hover:bg-gray-700">Experiências</a>
                  <a href="#skills" className="block px-4 py-2 text-sm hover:bg-gray-700">Habilidades</a>
                  <a href="#projects" className="block px-4 py-2 text-sm hover:bg-gray-700">Projetos</a>
                  <a href="#contact" className="block px-4 py-2 text-sm hover:bg-gray-700">Contato</a>
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
