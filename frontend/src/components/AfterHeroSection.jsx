import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Brain, Camera, Cpu, Database, Code, Zap, Upload, Image, BarChart3, CheckCircle } from 'lucide-react';

const AfterHeroSection = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    { name: 'React.js', icon: Code, color: 'bg-blue-500' },
    { name: 'Tailwind CSS', icon: Zap, color: 'bg-cyan-500' },
    { name: 'TensorFlow', icon: Brain, color: 'bg-orange-500' },
    { name: 'Python', icon: Code, color: 'bg-green-500' },
    { name: 'MongoDB', icon: Database, color: 'bg-green-600' },
    { name: 'Node.js', icon: Cpu, color: 'bg-lime-500' }
  ];

  const steps = [
    {
      icon: Upload,
      title: "Image Upload",
      description: "User uploads a skin lesion image through the web interface"
    },
    {
      icon: Image,
      title: "Preprocessing",
      description: "Image is preprocessed, resized, and normalized for optimal analysis"
    },
    {
      icon: Brain,
      title: "GAN Augmentation",
      description: "Generative Adversarial Networks create synthetic data to improve model training"
    },
    {
      icon: BarChart3,
      title: "CNN Classification",
      description: "Convolutional Neural Network analyzes and classifies the skin lesion"
    },
    {
      icon: CheckCircle,
      title: "Result Display",
      description: "Final diagnosis with confidence score is presented to the user"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`transition-all duration-1000 ${isVisible.home ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Skin Cancer Detection using
                <span className="text-blue-600"> AI & Deep Learning</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                AI-Powered Skin Cancer Detection for Early Diagnosis
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Learn More
              </button>
            </div>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="h-8 w-8 text-blue-600 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Our Project</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Early Detection Saves Lives</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our BTech final year project leverages cutting-edge artificial intelligence to detect skin cancer at its earliest stages. 
                  By combining Generative Adversarial Networks (GANs) and Convolutional Neural Networks (CNNs), we've created a 
                  powerful diagnostic tool that can analyze skin lesions with remarkable accuracy.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  GANs help us generate synthetic training data to improve model robustness, while CNNs excel at image classification 
                  and pattern recognition. This combination enables our system to identify potential malignancies that might be missed 
                  by the human eye.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Key Benefits:</h4>
                  <ul className="text-blue-800 space-y-2">
                    <li>• Early detection capabilities</li>
                    <li>• Non-invasive screening process</li>
                    <li>• Accessible healthcare solution</li>
                    <li>• AI-powered accuracy</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl">
                  <div className="text-white text-center">
                    <Brain className="h-16 w-16 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-4">AI Pipeline</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Camera className="h-6 w-6" />
                        <span>Image Capture</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Cpu className="h-6 w-6" />
                        <span>GAN Processing</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="h-6 w-6" />
                        <span>CNN Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="tech" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Technology Stack</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Built with modern technologies to ensure scalability, performance, and reliability
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="text-center">
                    <div className={`${tech.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                      <tech.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible['how-it-works'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our AI-powered system follows a sophisticated pipeline to analyze and classify skin lesions
              </p>
            </div>
            
            <div className="relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-0.5 h-96 bg-gradient-to-b from-blue-200 to-purple-200"></div>
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:space-x-8`}>
                    <div className="flex-1 bg-gray-50 p-8 rounded-xl shadow-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className="relative z-10 bg-blue-600 p-6 rounded-full shadow-xl my-4 md:my-0">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Footer */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Project Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-400">College:</h4>
                    <p className="text-gray-300">Your College Name</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Project Type:</h4>
                    <p className="text-gray-300">BTech Final Year Project</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-400">Domain:</h4>
                    <p className="text-gray-300">Machine Learning & Healthcare</p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gray-800 p-8 rounded-xl">
                  <Brain className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-4">Open Source</h4>
                  <p className="text-gray-300 mb-6">
                    This project is open source and available on GitHub. Feel free to explore, contribute, or learn from our implementation.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                © 2024 Skin Cancer Detection Project. Built with React.js and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AfterHeroSection;