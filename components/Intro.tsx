const Intro = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center px-8 pt-20 lg:pt-0 lg:pl-[340px]"
    >
      <div className="max-w-[1000px] w-full">
        <p className="text-[#64ffda] font-mono text-sm mb-4">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] mb-4 leading-tight">
          David Liang.
        </h1>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#8892b0] mb-6 leading-tight">
          I build scalable, human-centered full-stack applications.
        </h2>
        <p className="text-[#8892b0] text-lg mb-12 leading-relaxed max-w-2xl">
          I&apos;m a full-stack engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I&apos;m focused on
          building accessible, inclusive AI products for new opportunities.
        </p>
        <a
          href="#contact"
          className="text-[#64ffda] border border-[#64ffda] px-6 py-4 rounded font-mono text-sm hover:bg-[#64ffda]/10 transition-all inline-block"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Intro;
