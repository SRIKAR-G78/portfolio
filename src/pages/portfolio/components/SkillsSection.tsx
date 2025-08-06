
export default function SkillsSection() {
  const frontendSkills = [
    { name: 'HTML5', level: 98, icon: 'ri-html5-line' },
    { name: 'CSS', level: 92, icon: 'ri-code-line' },
    { name: 'Bootstrap', level: 90, icon: 'ri-code-line' },
    { name: 'Tailwind CSS', level: 92, icon: 'ri-css3-line' },
    { name: 'JavaScript', level: 95, icon: 'ri-code-line' },
    { name: 'React', level: 95, icon: 'ri-reactjs-line' },
    { name: 'TypeScript', level: 90, icon: 'ri-code-s-slash-line' },
    {name:'vite', level: 85, icon: 'ri-code-line'},
    { name:'Angular', level: 85, icon: 'ri-code-line' },
  ];

  const backendSkills = [
    { name: 'Node.js', level: 90, icon: 'ri-nodejs-line' },
    { name: 'Express', level: 80, icon: 'ri-code-line' },
    { name: 'Python', level: 88, icon: 'ri-code-line' },
    { name: 'MongoDB', level: 85, icon: 'ri-database-2-line' },
    {name:'MySQL', level: 80, icon: 'ri-code-line'},
    {name:'postman', level: 80, icon: 'ri-code-line'},
    { name: 'Django', level: 75, icon: 'ri-code-line' },
  ];

  const tools = [
    { name: 'Git', icon: 'ri-git-branch-line' },
    { name: 'VS Code', icon: 'ri-code-box-line' },
    // { name: 'Figma', icon: 'ri-pencil-ruler-2-line' },
    { name: 'AWS', icon: 'ri-cloud-line' },
    // { name: 'Webpack', icon: 'ri-settings-3-line' },
    // { name: 'Jest', icon: 'ri-test-tube-line' }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I work with modern technologies and tools to deliver high-quality solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Frontend Skills */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-palette-line text-2xl text-blue-600"></i>
              </div>
              Frontend Development
            </h3>
            
            <div className="space-y-6">
              {frontendSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className={`${skill.icon} text-blue-600`}></i>
                      </div>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Backend Skills */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <div className="w-8 h-8 flex items-center justify-center mr-3">
                <i className="ri-server-line text-2xl text-blue-600"></i>
              </div>
              Backend Development
            </h3>
            
            <div className="space-y-6">
              {backendSkills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-6 h-6 flex items-center justify-center mr-3">
                        <i className={`${skill.icon} text-blue-600`}></i>
                      </div>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="text-blue-600 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Tools & Technologies */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="group p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg cursor-pointer">
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <i className={`${tool.icon} text-3xl text-gray-600 group-hover:text-blue-600 transition-colors duration-300`}></i>
                </div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {tool.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}