"use client";
import { useState } from "react";
import Image from "next/image";
import { useFadeIn } from "@/functions/useFadeIn";
import { classNames } from "@/functions/classnames";
import { useIsMobile } from "@/functions/useIsMobile";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

export default function Services() {
  useFadeIn();
  const isMobile = useIsMobile();
  const [activeService, setActiveService] = useState("design");

  const services = [
    {
      id: "design",
      title: "Web Design",
      subtitle: "Custom websites that capture your brand essence",
      description:
        "We create visually stunning, user-friendly websites that reflect your unique brand identity and engage your target audience.",
      features: [
        "Custom website design tailored to your brand",
        "Mobile-responsive layouts for all devices",
        "User experience (UX) optimization",
        "Brand identity integration",
        "Wireframing and prototyping",
        "Design system creation",
      ],
      pricing: "Starting at $2,500",
      bgClass: "bg-idea-img",
      process: [
        "Discovery & Research",
        "Wireframing & Planning",
        "Visual Design",
        "Client Review & Refinement",
        "Final Design Delivery",
      ],
    },
    {
      id: "development",
      title: "Web Development",
      subtitle: "We help you connect with those who matter most",
      description:
        "From simple brochure sites to complex web applications, we build fast, secure, and scalable websites using modern technologies.",
      features: [
        "Custom website development",
        "Content Management Systems (CMS)",
        "E-commerce solutions",
        "Database integration",
        "API development and integration",
        "Performance optimization",
      ],
      pricing: "Starting at $3,500",
      bgClass: "bg-frame-img",
      process: [
        "Technical Planning",
        "Development Setup",
        "Core Development",
        "Testing & Quality Assurance",
        "Launch & Deployment",
      ],
    },
    {
      id: "optimization",
      title: "SEO & Optimization",
      subtitle: "Turn your site from a needle in a haystack into a beacon",
      description:
        "Improve your search rankings and website performance to ensure your ideal customers can find and engage with your business online.",
      features: [
        "Search Engine Optimization (SEO)",
        "Google Analytics setup and monitoring",
        "Website performance optimization",
        "Local SEO for service businesses",
        "Content strategy and optimization",
        "Technical SEO audits",
      ],
      pricing: "Starting at $1,200/month",
      bgClass: "bg-notebook-img",
      process: [
        "SEO Audit & Analysis",
        "Keyword Research",
        "On-Page Optimization",
        "Content Optimization",
        "Monitoring & Reporting",
      ],
    },
  ];

  return (
    <main className="mt-48">
      {/* Hero Section */}
      <div className="w-[100vw] h-full items-center lg:flex border-black border-b-[1px]">
        <div className="w-screen lg:min-w-[50vw] h-64 lg:h-screen bg-gradient-to-br from-blue-200 via-slate-300 to-slate-500 bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] fadeIn flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 element-to-fadeIn">
              Our Services
            </h1>
            <p className="text-xl lg:text-2xl italic element-to-fadeIn">
              Comprehensive digital solutions for your business
            </p>
          </div>
        </div>
        <div className="lg:-translate-x-32 px-10 py-10 lg:px-0 lg:py-0 bg-white flex flex-col justify-center">
          <div className="fadeIn max-w-2xl">
            <h2 className="text-2xl lg:text-4xl mb-6">How Can We Help You?</h2>
            <p className="leading-8 lg:text-lg mb-6">
              From concept to launch, we provide end-to-end digital solutions
              that help your business thrive online.
            </p>
            <p className="leading-8 lg:text-lg">
              Whether you need a brand new website, want to improve your search
              rankings, or require ongoing digital support, we have the
              expertise to help you succeed.
            </p>
          </div>
        </div>
      </div>

      {/* Service Selection Grid */}
      <div className="border-black border-b-[1px] grid grid-cols-1 sm:grid-cols-3 justify-center items-center element-to-fadeIn">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={classNames(
              `${service.bgClass} relative bg-faded bg-cover bg-center transition-all duration-300`,
              activeService === service.id
                ? "min-h-[400px] sm:min-h-[600px]"
                : "min-h-[120px] sm:min-h-[200px]"
            )}
          >
            <div
              className={classNames(
                "relative z-20 flex flex-col justify-center items-center text-white transition-all duration-300",
                activeService === service.id
                  ? "min-h-[400px] sm:min-h-[600px]"
                  : "min-h-[120px] sm:min-h-[200px]"
              )}
            >
              <div className="flex flex-col justify-center items-center">
                <h4 className="text-3xl sm:text-5xl mb-2 sm:mb-4 element-to-fadeIn text-center px-4">
                  {service.title}
                </h4>
              </div>
              <div
                className={classNames(
                  activeService === service.id ? "flex" : "hidden",
                  "flex-col justify-center items-center text-lg px-8 text-center element-to-fadeIn"
                )}
              >
                <p className="mb-4">{service.subtitle}</p>
                <p className="text-sm mb-4 max-w-md">{service.description}</p>
                <div className="text-xl font-bold bg-white text-black px-4 py-2 rounded">
                  {service.pricing}
                </div>
              </div>
              <div className="sm:py-6 py-4">
                <button
                  onClick={() =>
                    setActiveService(
                      activeService === service.id ? "" : service.id
                    )
                  }
                  className="hover:scale-110 transition-transform"
                >
                  {activeService !== service.id ? (
                    <IoIosArrowDropdown size={30} />
                  ) : (
                    <IoIosArrowDropup size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Service Information */}
      {activeService && (
        <div className="bg-white border-black border-b-[1px] element-to-fadeIn">
          <div className="max-w-6xl mx-auto px-10 py-16">
            {services
              .filter(s => s.id === activeService)
              .map(service => (
                <div
                  key={service.id}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  <div className="element-to-fadeIn">
                    <h3 className="text-3xl lg:text-4xl mb-6">
                      {service.title}
                    </h3>
                    <p className="text-lg leading-8 mb-8">
                      {service.description}
                    </p>

                    <h4 className="text-2xl mb-4">What&apos;s Included:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-blue-200 p-6 border-black border-[1px]">
                      <h5 className="text-xl font-semibold mb-2">Investment</h5>
                      <p className="text-lg">{service.pricing}</p>
                    </div>
                  </div>

                  <div className="element-to-fadeIn">
                    <h4 className="text-2xl mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                            <span className="text-sm font-semibold">
                              {index + 1}
                            </span>
                          </div>
                          <span className="text-lg">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-12 p-8 bg-gradient-to-r from-slate-600 to-slate-400 text-white border-black border-[1px]">
                      <h5 className="text-xl font-semibold mb-4">
                        Ready to Get Started?
                      </h5>
                      <p className="mb-6">
                        Let&apos;s discuss your project and see how we can help
                        bring your vision to life.
                      </p>
                      <button className="bg-white text-black px-6 py-3 font-semibold hover:bg-gray-100 transition-colors">
                        Contact Us Today
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}

      {/* Additional Services */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-400 border-black border-b-[1px]">
        <div className="max-w-6xl mx-auto px-10 py-16">
          <h3 className="text-3xl lg:text-4xl text-white mb-12 text-center element-to-fadeIn">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-black border-[1px] element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-4">
                Branding & Identity
              </h4>
              <p className="mb-4">
                Logo design, brand guidelines, and visual identity systems.
              </p>
              <p className="text-sm text-gray-600">Starting at $1,500</p>
            </div>
            <div className="bg-white p-8 border-black border-[1px] element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-4">
                Maintenance & Support
              </h4>
              <p className="mb-4">
                Ongoing website updates, security monitoring, and technical
                support.
              </p>
              <p className="text-sm text-gray-600">Starting at $200/month</p>
            </div>
            <div className="bg-white p-8 border-black border-[1px] element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-4">Digital Consulting</h4>
              <p className="mb-4">
                Strategic guidance for your digital presence and online
                marketing.
              </p>
              <p className="text-sm text-gray-600">$150/hour</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white border-black border-b-[1px]">
        <div className="max-w-4xl mx-auto px-10 py-16">
          <h3 className="text-3xl lg:text-4xl mb-12 text-center element-to-fadeIn">
            Frequently Asked Questions
          </h3>
          <div className="space-y-8">
            <div className="element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-3">
                How long does a typical website project take?
              </h4>
              <p className="leading-7">
                Most website projects take 4-8 weeks from start to finish,
                depending on complexity. We&apos;ll provide a detailed timeline
                during our initial consultation.
              </p>
            </div>
            <div className="element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-3">
                Do you work with businesses outside of Utah?
              </h4>
              <p className="leading-7">
                Absolutely! While we&apos;re based in the Salt Lake Valley, we
                work with clients across the United States and internationally.
              </p>
            </div>
            <div className="element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-3">
                What makes Third Andrew Creative different?
              </h4>
              <p className="leading-7">
                We focus on building long-term partnerships with our clients.
                Every project gets personal attention, and we&apos;re committed
                to your success beyond just delivering a website.
              </p>
            </div>
            <div className="element-to-fadeIn">
              <h4 className="text-xl font-semibold mb-3">
                Do you provide ongoing support after launch?
              </h4>
              <p className="leading-7">
                Yes! We offer maintenance packages and are always available for
                updates, improvements, or technical support as your business
                grows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
