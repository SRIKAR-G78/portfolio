
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="./public/srinu.jpg"
              alt="Srikar"
              className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a passionate full stack developer with over one years of experience building web applications 
              that make a difference. I love turning complex problems into simple, beautiful designs.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey in web development started with curiosity about how websites work, and it has evolved 
              into a career focused on creating exceptional user experiences with clean, efficient code.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Praveen_Resume.pdf';
                  link.click();
                }}
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-download-line mr-2"></i>
                Download Resume
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer"
              >
                <i className="ri-mail-line mr-2"></i>
                Contact Me
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
                <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
              </div>
              
              <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 dark:text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}