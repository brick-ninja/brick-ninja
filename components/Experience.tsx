'use client';

const Experience = () => {
  const experiences = [
    {
      company: 'Hyly.AI',
      position: 'Full Stack AI Developer',
      period: '09/2023 - Present',
      location: 'Ashburn, Virginia, United States',
      responsibilities: [
        'Developed a drag-and-drop customer email marketing playground using Vue.js and Material UI, significantly streamlining the campaign creation process. This intuitive interface allowed users to easily design and launch email campaigns, reducing the time needed for setup and improving the overall user experience (UX).',
        'Implemented AI-powered assistance for email content generation and optimization using Python and machine learning algorithms. This feature enhanced campaign performance by automating content personalization based on customer data, allowing for more tailored, relevant, and effective email campaigns.',
        'Debugged and enhanced core platform services to improve system reliability, performance, and flexibility. Leveraged React and Next.js to improve the frontend interface for faster page loads and smoother interactions. On the backend, utilized Python for enhancing data processing, API responses, and overall platform efficiency, ensuring a seamless experience for both end users and administrators.',
        'Expanded my expertise in AI and Python by integrating advanced algorithms to define user interactions and content targeting, helping the company improve personalized marketing strategies and campaign results.',
        'Applied React and Next.js best practices to build responsive, high-performance web applications, ensuring consistency across devices and improving frontend architecture for scalability and maintainability.',
      ],
      technologies: ['Vue.js', 'Material UI', 'Python', 'Machine Learning', 'React', 'Next.js'],
      url: 'https://www.hyly.ai'
    },
    {
      company: 'Space ID',
      position: 'Full Stack Engineer',
      period: '03/2019 - 08/2023',
      location: 'Menlo Park, United States',
      responsibilities: [
        'Developed and maintained Web3 applications using Vue.js, Nuxt.js, PHP, and Laravel, building scalable frontend interfaces and backend services.',
        'Integrated smart contracts with Web3.js to support wallet connection, domain registration, ownership validation, and transaction handling on BNB Smart Chain.',
        'Collaborated with cross-functional teams to enhance performance, usability, and the reliability of blockchain-powered user experiences.',
      ],
      technologies: ['Vue.js', 'Nuxt.js', 'PHP', 'Laravel', 'Web3.js', 'BNB Smart Chain'],
      url: 'https://www.space.id/'
    },
  ];

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 px-8 lg:pl-[100px] pt-1 pb-20"
    >
      <div className="max-w-[700px] w-full">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
                <header className="z-10 mb-2 font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  <span className="text-sm text-[#8892b0] font-mono uppercase">
                    {exp.period}
                  </span>
                  <p className="mt-2 text-xs normal-case text-[#8892b0]">
                    {exp.location}
                  </p>
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-xl" href={`${exp.url}`} target="_blank" rel="noreferrer noopener" aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)">
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>{exp.position} · <span className="inline-block">{exp.company}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                          <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd">
                          </path>
                        </svg>
                      </span>
                      </span>
                      </a>
                    </div>
                  </h3>
                  <ul className="mt-3 mb-4 space-y-2 list-none">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-[#8892b0] text-[17px] leading-[1.7]">
                        {resp}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
