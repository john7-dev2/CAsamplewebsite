import { Shield, Lightbulb, TrendingUp, Users, Calculator, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const mainServices = [
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit and assurance services to ensure financial accuracy and compliance.',
      image: 'https://images.pexels.com/photos/8369880/pexels-photo-8369880.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Annual statutory audits',
        'Internal audit services',
        'Compliance reviews',
        'Risk assessment',
      ],
    },
    {
      icon: Lightbulb,
      title: 'Tax & Regulatory Advisory',
      description: 'Expert tax planning and regulatory compliance strategies.',
      image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Tax planning strategies',
        'Corporate tax compliance',
        'Transfer pricing',
        'Indirect tax advisory',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Financial Advisory',
      description: 'Strategic financial planning and investment guidance.',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Financial planning',
        'Investment analysis',
        'Valuation services',
        'Merger & acquisition advisory',
      ],
    },
    {
      icon: Users,
      title: 'Business Consulting',
      description: 'Expert advice on business strategy and operational efficiency.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Business strategy',
        'Process optimization',
        'Change management',
        'Performance improvement',
      ],
    },
    {
      icon: Calculator,
      title: 'Accounting Services',
      description: 'Full-cycle accounting and financial reporting solutions.',
      image: 'https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Bookkeeping',
        'Financial statements',
        'Payroll processing',
        'Accounts management',
      ],
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth financial analysis for informed decision-making.',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Business analysis',
        'Financial forecasting',
        'Ratio analysis',
        'Trend analysis',
      ],
    },
  ];

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fadeInDown">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive financial and business solutions designed to accelerate your growth
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {mainServices.map((service, idx) => {
            const Icon = service.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="mb-20 animate-fadeInUp"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center ${isEven ? '' : 'md:grid-flow-dense'}`}>
                  <div className={isEven ? '' : 'md:order-2'}>
                    <div className="mb-4 inline-block p-4 bg-amber-100 rounded-lg">
                      <Icon className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center gap-3 animate-fadeInLeft" style={{ animationDelay: `${(idx * 0.1) + (fidx * 0.05)}s` }}>
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all transform hover:scale-105 group"
                    >
                      Learn More
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <div className={`relative group ${isEven ? '' : 'md:order-1'}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="relative rounded-xl w-full h-96 object-cover shadow-xl group-hover:shadow-2xl transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
            <p className="text-xl text-gray-600">Our proven methodology ensures success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We understand your unique business challenges and goals.' },
              { step: '02', title: 'Analysis', description: 'In-depth analysis to identify opportunities and risks.' },
              { step: '03', title: 'Strategy', description: 'Customized solutions aligned with your objectives.' },
              { step: '04', title: 'Implementation', description: 'Expert execution and continuous support.' },
            ].map((item, idx) => (
              <div key={idx} className={`relative animate-fadeInUp stagger-delay-${(idx % 5) + 1}`}>
                <div className="bg-white p-8 rounded-xl shadow-lg h-full hover:shadow-xl transition-shadow">
                  <div className="text-5xl font-bold text-amber-500 mb-4 opacity-20">{item.step}</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="text-amber-500" size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 animate-slideInUp border-2 border-amber-200">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Get Started?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our expert team help you achieve your financial goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-amber-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-all transform hover:scale-105"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
