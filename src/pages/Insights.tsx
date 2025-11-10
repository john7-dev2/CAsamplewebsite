import { Calendar, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';

export default function Insights() {
  const [searchTerm, setSearchTerm] = useState('');

  const insights = [
    {
      title: '2024 Tax Planning Strategies: What You Need to Know',
      category: 'Tax Advisory',
      date: 'Nov 15, 2024',
      image: 'https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Explore the most effective tax planning strategies for 2024 and maximize your financial position.',
      delay: 'stagger-delay-1',
    },
    {
      title: 'Regulatory Compliance Updates 2024',
      category: 'Compliance',
      date: 'Nov 12, 2024',
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Stay informed about the latest regulatory changes that impact your business operations.',
      delay: 'stagger-delay-2',
    },
    {
      title: 'Scaling Your Business: Financial Best Practices',
      category: 'Business Growth',
      date: 'Nov 10, 2024',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Learn the financial strategies and best practices for successfully scaling your business.',
      delay: 'stagger-delay-3',
    },
    {
      title: 'Digital Transformation in Finance: A 2024 Guide',
      category: 'Technology',
      date: 'Nov 8, 2024',
      image: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Discover how digital transformation can streamline your financial operations.',
      delay: 'stagger-delay-4',
    },
    {
      title: 'M&A Strategy: Valuation and Due Diligence',
      category: 'Advisory',
      date: 'Nov 5, 2024',
      image: 'https://images.pexels.com/photos/3863793/pexels-photo-3863793.jpeg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Master the essential processes for successful mergers and acquisitions.',
      delay: 'stagger-delay-5',
    },
    {
      title: 'Financial Forecasting for Uncertain Times',
      category: 'Financial Planning',
      date: 'Nov 1, 2024',
      image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600',
      excerpt: 'Build resilient financial forecasts that account for market uncertainties.',
      delay: 'stagger-delay-1',
    },
  ];

  const filteredInsights = insights.filter(insight =>
    insight.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    insight.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = Array.from(new Set(insights.map(i => i.category)));

  return (
    <div className="page-enter">
      <section className="bg-gradient-to-br from-slate-900 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500 rounded-full filter blur-3xl animate-float"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 animate-fadeInDown">Insights & Blog</h1>
          <p className="text-xl text-gray-300 max-w-2xl animate-fadeInLeft">
            Stay updated with the latest trends, strategies, and insights in financial advisory
          </p>
        </div>
      </section>

      <section className="py-16 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 relative animate-fadeInUp">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search insights..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
            <div className="flex gap-2 flex-wrap animate-fadeInUp stagger-delay-1">
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 border-2 border-gray-200 rounded-full hover:border-amber-500 hover:text-amber-600 transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredInsights.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInsights.map((insight, idx) => (
                <article
                  key={idx}
                  className={`group cursor-pointer animate-fadeInUp ${insight.delay}`}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col hover:scale-105 hover:-translate-y-2">
                    <div className="relative overflow-hidden h-48">
                      <img
                        src={insight.image}
                        alt={insight.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {insight.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <Calendar size={16} className="mr-2" />
                        {insight.date}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                        {insight.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{insight.excerpt}</p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-700 group/link"
                      >
                        Read More
                        <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 animate-fadeInUp">
              <p className="text-2xl text-gray-600 font-semibold">No insights found matching your search.</p>
              <p className="text-gray-500 mt-2">Try different keywords or browse all articles.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-12 animate-slideInUp border-2 border-amber-200">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest financial insights and business tips delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border-2 border-amber-200 rounded-lg focus:outline-none focus:border-amber-500"
              />
              <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
