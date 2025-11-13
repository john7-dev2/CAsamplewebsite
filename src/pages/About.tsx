import { Award, Users, Target, Zap } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Finance',
      description: 'Comprehensive financial planning and advisory services',
    },
    {
      icon: Users,
      title: 'Taxation',
      description: 'Expert guidance on tax planning and compliance',
    },
    {
      icon: Target,
      title: 'Investing',
      description: 'Strategic investment advice for wealth building',
    },
    {
      icon: Zap,
      title: 'Education',
      description: 'Making complex financial concepts simple and actionable',
    },
  ];


  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">About CA Mukander Beniwal</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fadeInLeft">
            Your trusted expert in Finance, Taxation, and Investing
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About CA Mukander Beniwal</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Hello Everyone! My name is CA Mukander Beniwal, and I'm passionate about helping individuals and businesses navigate the complex world of finance, taxation, and investing.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                My content focuses on three core areas: <strong>Finance</strong>, <strong>Taxation</strong>, and <strong>Investing</strong>. I believe in making financial concepts accessible and actionable for everyone, regardless of their background or experience level.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Whether you're looking to understand tax implications, make smart investment decisions, or improve your financial planning, I'm here to guide you through every step of the journey.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="text-lg text-gray-700 font-medium">
                  Have questions about my content? Feel free to DM me on Instagram - I'd love to help answer your queries!
                </p>
              </div>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">My Expertise</h2>
            <p className="text-xl text-gray-600">Areas where I can help you succeed</p>
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


      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInDown">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Connect With Me</h2>
            <p className="text-xl text-gray-600">Let's discuss your financial goals and questions</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fadeInUp">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">CA Mukander Beniwal</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Chartered Accountant specializing in Finance, Taxation, and Investing. I'm passionate about helping people make informed financial decisions and build wealth through smart strategies.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Finance & Financial Planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Taxation & Tax Planning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-gray-700">Investment Advisory</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h4>
                    <p className="text-gray-600 mb-6">
                      If you have any queries regarding my content on finance, taxation, or investing, feel free to reach out!
                    </p>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <p className="text-sm text-gray-500 mb-2">Connect with me on</p>
                      <p className="text-xl font-bold text-pink-600">Instagram</p>
                      <p className="text-sm text-gray-600 mt-2">Send me a DM - I'd love to help!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
