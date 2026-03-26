const About = () => {
  const technologies = [
    'JavaScript (ES6+)',
    'React Native',
    'Node.js, Express.js',
    'PHP, Laravel',
    'DevOps, AWS, Firebase',
    'Web3, Ethers',
    'React, Next.js',
    'Vue, Vuex, Nuxt.js',
    'GraphQL, Apollo',
    'MySQL, PostgreSQL, MongoDB',
    'Git, Docker',
    'Smart Contract',
    'Machine Learning',
    'Deep Learning',
    'Python',
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-start px-8 lg:pl-[100px] pt-20 pb-20"
    >
      <div className="max-w-[700px] w-full pt-8">
        <div className="space-y-8 text-[#8892b0] text-[18px] leading-[2]">
          <p>
            Hello! My name is David and I enjoy creating things that live on
            the internet. My interest in web development started back in 2019
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML
            & CSS!
          </p>
          <p>
            Fast-forward to today, and I&apos;ve had the privilege of working at
            an AI agency, a start-up, a huge corporation. My main focus these
            days is building accessible, inclusive AI products for the new
            opportunity.
          </p>
          <p>Here are a few technologies I&apos;ve been working with recently:</p>
          <ul className="grid grid-cols-2 gap-1 mt-4 list-none pl-0">
            {technologies.map((tech, index) => (
              <li key={index} className="flex items-start relative pl-5">
                <span className="text-[#64ffda] absolute left-0">▹</span>
                <span>{tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
