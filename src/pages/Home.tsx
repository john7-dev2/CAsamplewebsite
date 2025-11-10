import { ArrowRight, Shield, Lightbulb, TrendingUp, Users, Calculator, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const services = [
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit solutions ensuring compliance and building trust.',
      delay: 'stagger-delay-1',
    },
    {
      icon: Lightbulb,
      title: 'Tax Advisory',
      description: 'Expert guidance on tax planning and regulatory compliance.',
      delay: 'stagger-delay-2',
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial planning for sustainable growth.',
      delay: 'stagger-delay-3',
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Accurate bookkeeping and financial reporting solutions.',
      delay: 'stagger-delay-4',
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert advice on restructuring and efficiency.',
      delay: 'stagger-delay-5',
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth analysis for informed decision making.',
      delay: 'stagger-delay-1',
    },
  ];

  const stats = [
    { number: '500+', label: 'Clients Served', delay: 'stagger-delay-1' },
    { number: '25+', label: 'Years Experience', delay: 'stagger-delay-2' },
    { number: '98%', label: 'Client Satisfaction', delay: 'stagger-delay-3' },
    { number: '$10B+', label: 'Assets Managed', delay: 'stagger-delay-4' },
  ];

  return (
    <div className="page-enter">
      <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-slate-800 rounded-full filter blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInLeft">
                Financial Clarity.
                <span className="text-amber-600"> Powerful Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fadeInLeft stagger-delay-1">
                Your strategic partner in navigating complex financial landscapes and achieving sustainable business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInLeft stagger-delay-2">
                <Link
                  to="/services"
                  className="bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Explore Services
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-800 hover:text-white transition-all"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500 opacity-5 rounded-full filter blur-2xl group-hover:opacity-10 transition-opacity"></div>
                <img
                  src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Professional team"
                  className="rounded-lg w-full h-auto relative z-10 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, idx) => (
              <div key={idx} className={`text-center animate-scaleIn ${stat.delay}`}>
                <div className="text-4xl font-bold text-amber-600 mb-2">{stat.number}</div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${service.delay} group cursor-pointer`}
                >
                  <div className="mb-4 inline-block p-4 bg-amber-100 rounded-lg group-hover:bg-amber-500 transition-colors">
                    <Icon className="w-8 h-8 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
                  <a href="#" className="text-amber-600 font-semibold hover:text-amber-700 flex items-center gap-2 group/link">
                    Learn More
                    <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-6">Why Choose Nexus?</h2>
              <ul className="space-y-4">
                {[
                  'Expert team with 25+ years of combined experience',
                  'Personalized solutions tailored to your needs',
                  '98% client satisfaction rate',
                  'Cutting-edge technology and compliance',
                  'Proactive financial guidance',
                  '24/7 dedicated support',
                ].map((item, idx) => (
                  <li key={idx} className={`flex items-center gap-3 animate-fadeInLeft ${`stagger-delay-${(idx % 5) + 1}`}`}>
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fadeInRight">
              <img
                src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
                alt="Why choose us"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-12 text-white text-center animate-slideInUp">
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Financial Future?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let's discuss how we can help your business achieve its financial goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
