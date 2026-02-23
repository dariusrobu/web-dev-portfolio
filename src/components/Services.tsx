import { Code, Globe, Zap, Database } from 'lucide-react';

const services = [
  {
    title: 'Custom Website Development',
    description: 'Tailored websites built from scratch using React and Next.js, ensuring a unique brand identity and optimal performance.',
    icon: Globe,
  },
  {
    title: 'E-commerce Solutions',
    description: 'Secure and scalable online stores that drive sales, integrated with payment gateways and inventory management.',
    icon: Database, // Represents complex data handling often found in e-commerce
  },
  {
    title: 'Web Application Development',
    description: 'Interactive and dynamic web applications that solve complex business problems and enhance user engagement.',
    icon: Code,
  },
  {
    title: 'Performance Optimization',
    description: 'Speeding up existing websites to improve SEO rankings, reduce bounce rates, and provide a better user experience.',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I offer a range of web development services designed to help your business thrive in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-background p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-6">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
