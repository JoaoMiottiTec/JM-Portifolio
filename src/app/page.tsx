import ContactForm from "@/components/contatoForm";
import SectionExperience from "@/components/experience";
import SkillsSection from "@/components/habilidades";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
        <Hero/>
        <SectionExperience/>
        <SkillsSection/>
        <Projects/>
       {/*  <ContactForm/> */}
    </div>
  )
}