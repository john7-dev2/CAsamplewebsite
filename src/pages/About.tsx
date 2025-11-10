import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering superior quality in every engagement',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building strong partnerships with our clients',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Dedicated to your financial success',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Leveraging cutting-edge solutions',
    },
  ];

  const team = [
    {
      name: 'Rajesh Sharma',
      role: 'Founder & Managing Director',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-1',
    },
    {
      name: 'Priya Patel',
      role: 'Senior Audit Partner',
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-2',
    },
    {
      name: 'Amit Verma',
      role: 'Tax & Advisory Head',
      image: 'https://images.pexels.com/photos/3777572/pexels-photo-3777572.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-3',
    },
    {
      name: 'Lisa Chen',
      role: 'Consulting Director',
      image: 'https://images.pexels.com/photos/3775191/pexels-photo-3775191.jpeg?auto=compress&cs=tinysrgb&w=600',
      delay: 'stagger-delay-4',
    },
  ];

  const milestones = [
    { year: '1998', event: 'Company Founded', delay: 'stagger-delay-1' },
    { year: '2005', event: '100+ Clients Milestone', delay: 'stagger-delay-2' },
    { year: '2012', event: 'Expanded to 5 Cities', delay: 'stagger-delay-3' },
    { year: '2020', event: '500+ Happy Clients', delay: 'stagger-delay-4' },
  ];

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">About Nexus</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fadeInLeft">
            Your trusted partner in financial excellence since 1998
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 1998, Nexus Chartered Accountants has grown from a small practice to a leading financial advisory firm. Our journey reflects our commitment to delivering exceptional value to our clients.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With over 25 years of experience, we have built a reputation for expertise, integrity, and innovation in the financial services industry.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve over 500 clients across various industries, from startups to Fortune 500 companies, helping them navigate complex financial challenges and achieve their goals.
              </p>
            </div>
            <div className="relative group animate-fadeInRight">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our office"
                className="relative rounded-xl w-full h-96 object-cover shadow-xl group-hover:shadow-2xl transition-all"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What drives everything we do</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-fadeInUp ${value.description === 'Delivering superior quality in every engagement' ? 'stagger-delay-1' : value.description === 'Building strong partnerships with our clients' ? 'stagger-delay-2' : value.description === 'Dedicated to your financial success' ? 'stagger-delay-3' : 'stagger-delay-4'} text-center`}
                >
                  <div className="mb-4 inline-block p-4 bg-amber-100 rounded-lg">
                    <Icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Milestones that define our success</p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-500 to-orange-500"></div>

            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  className={`flex gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} animate-fadeInUp ${milestone.delay}`}
                >
                  <div className="flex-1 md:text-right">
                    <h3 className="text-2xl font-bold text-gray-900">{milestone.year}</h3>
                    <p className="text-lg text-gray-600">{milestone.event}</p>
                  </div>
                  <div className="hidden md:flex w-8 h-8 bg-white border-4 border-amber-500 rounded-full relative z-10 items-center justify-center">
                    <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className={`group cursor-pointer animate-fadeInUp ${member.delay}`}
              >
                <div className="relative overflow-hidden rounded-xl mb-4 h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="text-white">
                      <p className="font-semibold">{member.name}</p>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
