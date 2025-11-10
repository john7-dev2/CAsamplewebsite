import { Briefcase, MapPin, Users, ArrowRight } from 'lucide-react';

export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Audit Manager',
      location: 'New York, NY',
      type: 'Full-time',
      department: 'Audit',
      description: 'Lead audit engagements and manage team of auditors',
      delay: 'stagger-delay-1',
    },
    {
      title: 'Tax Consultant',
      location: 'Los Angeles, CA',
      type: 'Full-time',
      department: 'Tax',
      description: 'Provide comprehensive tax advisory services to clients',
      delay: 'stagger-delay-2',
    },
    {
      title: 'Financial Analyst',
      location: 'Chicago, IL',
      type: 'Full-time',
      department: 'Analysis',
      description: 'Conduct financial analysis and create reports',
      delay: 'stagger-delay-3',
    },
    {
      title: 'Business Development Manager',
      location: 'Boston, MA',
      type: 'Full-time',
      department: 'Sales',
      description: 'Develop business relationships and drive growth',
      delay: 'stagger-delay-4',
    },
    {
      title: 'Junior Accountant',
      location: 'Remote',
      type: 'Full-time',
      department: 'Accounting',
      description: 'Assist in accounting and bookkeeping operations',
      delay: 'stagger-delay-5',
    },
    {
      title: 'Compliance Officer',
      location: 'Houston, TX',
      type: 'Full-time',
      department: 'Compliance',
      description: 'Ensure regulatory compliance and audit readiness',
      delay: 'stagger-delay-1',
    },
  ];

  const benefits = [
    { title: 'Competitive Salary', icon: '💰' },
    { title: 'Health Insurance', icon: '🏥' },
    { title: 'Professional Development', icon: '📚' },
    { title: 'Flexible Working', icon: '⏰' },
    { title: 'Career Growth', icon: '📈' },
    { title: 'Team Building', icon: '🤝' },
  ];

  const culture = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and modern solutions',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-1',
    },
    {
      title: 'Collaboration',
      description: 'Teamwork and mutual support define our workplace',
      image: 'https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-2',
    },
    {
      title: 'Growth',
      description: 'We invest in your professional development',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-3',
    },
  ];

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">Careers</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fadeInLeft">
            Join our team and build a rewarding career in finance
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Join Nexus?</h2>
            <p className="text-xl text-gray-600">Build your career with industry leaders</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {culture.map((item, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer animate-fadeInUp ${item.delay}`}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-12 mb-20 animate-slideInUp">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Benefits</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`text-center animate-fadeInUp stagger-delay-${(idx % 5) + 1}`}
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">{benefit.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600">{openPositions.length} exciting opportunities</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((job, idx) => (
              <div
                key={idx}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-102 hover:-translate-y-1 group cursor-pointer animate-fadeInUp ${job.delay}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} className="text-amber-500" />
                        {job.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase size={16} className="text-amber-500" />
                        {job.department}
                      </div>
                      <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <button className="bg-amber-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-600 transition-all whitespace-nowrap flex items-center gap-2 group-hover:gap-3">
                    Apply Now
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Employee Stories</h2>
            <p className="text-xl text-gray-600">Hear from our team members</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Senior Auditor',
                quote: 'Nexus has provided me with incredible growth opportunities and a supportive team environment.',
                image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600',
                delay: 'stagger-delay-1',
              },
              {
                name: 'Michael Chen',
                role: 'Tax Consultant',
                quote: 'The work-life balance and professional development opportunities here are exceptional.',
                image: 'https://images.pexels.com/photos/3777572/pexels-photo-3777572.jpeg?auto=compress&cs=tinysrgb&w=600',
                delay: 'stagger-delay-2',
              },
              {
                name: 'Emily Rodriguez',
                role: 'Financial Analyst',
                quote: 'I love being part of a team that values innovation and collaboration every day.',
                image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
                delay: 'stagger-delay-3',
              },
            ].map((employee, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-slate-50 to-gray-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all animate-fadeInUp ${employee.delay}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{employee.name}</h4>
                    <p className="text-sm text-amber-600">{employee.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{employee.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-slideInUp">
          <h2 className="text-4xl font-bold mb-6">Don't See Your Position?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
          </p>
          <button className="bg-amber-500 text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-all transform hover:scale-105">
            Send Your Resume
          </button>
        </div>
      </section>
    </div>
  );
}
