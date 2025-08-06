
import { useState, useEffect } from 'react';

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [clickedLink, setClickedLink] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20showing%20clean%20product%20listings%2C%20shopping%20cart%2C%20and%20checkout%20process%20with%20professional%20design%20elements%20and%20mobile%20responsive%20layout&width=600&height=400&seq=project-ecommerce&orientation=landscape',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: 'https://ecommerce-praveen.vercel.app',
      githubUrl: 'https://github.com/SRIKAR-G78/ecommerce-platform',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, team collaboration features, and advanced reporting capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Task%20management%20application%20interface%20with%20kanban%20boards%2C%20project%20timelines%2C%20team%20collaboration%20features%2C%20modern%20dashboard%20design%20with%20clean%20typography%20and%20intuitive%20navigation&width=600&height=400&seq=project-taskapp&orientation=landscape',
      technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
      liveUrl: 'https://taskmanager-praveen.netlify.app',
      githubUrl: 'https://github.com/SRIKAR-G78/task-management-app',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://readdy.ai/api/search-image?query=Weather%20dashboard%20application%20showing%20beautiful%20weather%20cards%2C%20interactive%20maps%2C%20temperature%20graphs%2C%20and%20forecast%20data%20with%20modern%20UI%20design%20and%20vibrant%20weather-themed%20colors&width=600&height=400&seq=project-weather&orientation=landscape',
      technologies: ['React', 'TypeScript', 'API Integration', 'Charts.js'],
      liveUrl: 'https://weather-praveen.vercel.app',
      githubUrl: 'https://github.com/SRIKAR-G78/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with data visualization, scheduling tools, and engagement metrics.',
      image: 'https://readdy.ai/api/search-image?query=Social%20media%20analytics%20dashboard%20with%20colorful%20charts%2C%20engagement%20metrics%2C%20post%20scheduling%20interface%2C%20and%20modern%20data%20visualization%20elements%20in%20professional%20business%20application%20design&width=600&height=400&seq=project-social&orientation=landscape',
      technologies: ['Next.js', 'Python', 'D3.js', 'Redis'],
      liveUrl: 'https://social-dashboard-praveen.vercel.app',
      githubUrl: 'https://github.com/SRIKAR-G78/social-media-dashboard',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'Responsive portfolio website built with modern web technologies, featuring smooth animations and optimized performance.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20portfolio%20website%20design%20showcasing%20creative%20layouts%2C%20professional%20typography%2C%20project%20galleries%2C%20and%20responsive%20design%20elements%20with%20clean%20minimalist%20aesthetic%20and%20stunning%20visual%20hierarchy&width=600&height=400&seq=project-portfolio&orientation=landscape',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      liveUrl: 'https://portfolio-praveen.vercel.app',
      githubUrl: 'https://github.com/SRIKAR-G78/portfolio-website',
      featured: false
    },
    {
      id: 6,
      title: 'Learning Management System',
      description: 'Complete LMS platform with course creation, student progress tracking, video streaming, and certification system.',
      image: 'https://readdy.ai/api/search-image?query=Learning%20management%20system%20interface%20showing%20course%20catalogs%2C%20student%20dashboard%2C%20video%20player%2C%20progress%20tracking%2C%20and%20educational%20content%20with%20modern%20e-learning%20platform%20design&width=600&height=400&seq=project-lms&orientation=landscape',
      technologies: ['React', 'Node.js', 'AWS', 'JWT'],
      liveUrl: 'https://lms-praveen.vercel.app',
      githubUrl: 'https://github.com/SRIKAR-G78/learning-management-system',
      featured: false
    }
  ];

  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'featured', label: 'Featured', count: projects.filter(p => p.featured).length },
    { id: 'web', label: 'Web Apps', count: projects.length },
    { id: 'mobile', label: 'Mobile', count: 2 }
  ];

  const handleLinkClick = (url: string, type: 'live' | 'github') => {
    setClickedLink(`${type}-${url}`);
    setTimeout(() => setClickedLink(null), 1000);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else if (activeFilter === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects);
    }
  }, [activeFilter]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 shadow-md'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                hoveredProject === project.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-4">
                    <button 
                      onClick={() => handleLinkClick(project.liveUrl, 'live')}
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:scale-110 ${
                        clickedLink === `live-${project.liveUrl}` ? 'animate-pulse' : ''
                      }`}
                      title="View Live Demo"
                    >
                      <i className="ri-external-link-line text-xl"></i>
                    </button>
                    <button 
                      onClick={() => handleLinkClick(project.githubUrl, 'github')}
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-100 transition-all duration-200 cursor-pointer transform hover:scale-110 ${
                        clickedLink === `github-${project.githubUrl}` ? 'animate-pulse' : ''
                      }`}
                      title="View Source Code"
                    >
                      <i className="ri-github-line text-xl"></i>
                    </button>
                  </div>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <button 
                    onClick={() => handleLinkClick(project.liveUrl, 'live')}
                    className={`flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                      clickedLink === `live-${project.liveUrl}` ? 'animate-pulse' : ''
                    }`}
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    Live Demo
                  </button>
                  <button 
                    onClick={() => handleLinkClick(project.githubUrl, 'github')}
                    className={`flex items-center text-gray-600 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-200 font-semibold transition-all duration-200 cursor-pointer transform hover:scale-105 ${
                      clickedLink === `github-${project.githubUrl}` ? 'animate-pulse' : ''
                    }`}
                  >
                    <i className="ri-github-line mr-2"></i>
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
