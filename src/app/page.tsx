'use client';

import { useState, useEffect } from 'react';
import Hero from '../components/hero';
import SectionExperience from '../components/experience';
import SkillsSection from '../components/habilidades';
import Projects from '../components/projects';
import Header from '../layout/Header';

export default function Page() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('light', savedTheme === 'light');
    document.body.classList.toggle('light', savedTheme === 'light');
  }, []);

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <SectionExperience />
      <SkillsSection />
      <Projects />
    </div>
  );
}
