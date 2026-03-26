import LeftSidebar from '@/components/LeftSidebar';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <LeftSidebar />
      <div className="lg:ml-[300px]">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
