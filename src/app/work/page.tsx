"use client";
import { useState } from "react";
import Image from "next/image";
import { useFadeIn } from "@/functions/useFadeIn";
import { classNames } from "@/functions/classnames";
import { useIsMobile } from "@/functions/useIsMobile";

export default function Work() {
  useFadeIn();
  const isMobile = useIsMobile();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  type Project = {
    id: number;
    title: string;
    category: string;
    type: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    results: string[];
    testimonial: {
      text: string;
      author: string;
    };
    link: string;
    color: string;
  };

  const projects = [
    {
      id: 1,
      title: "Hank's Garage",
      category: "automotive",
      type: "Website Redesign",
      description:
        "Complete website redesign for a local automotive repair shop, focusing on trust-building and appointment booking.",
      longDescription:
        "Hank's Garage needed a modern, professional website that would build trust with potential customers and streamline their appointment booking process. We created a clean, automotive-themed design that showcases their services and expertise while making it easy for customers to schedule appointments online.",
      image: "/images/hanks.png",
      technologies: ["Next.js", "Tailwind CSS", "Booking System"],
      results: [
        "150% increase in online appointment bookings",
        "40% increase in website traffic",
        "25% improvement in mobile user engagement",
      ],
      testimonial: {
        text: "Third Andrew Creative transformed our online presence. We're getting more customers than ever before.",
        author: "Hank Peterson, Owner",
      },
      link: "#",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      title: "Accelerated Learning Center",
      category: "education",
      type: "Brand Identity & Website",
      description:
        "Complete brand identity and website development for an educational tutoring center.",
      longDescription:
        "Accelerated Learning Center needed a cohesive brand identity and website that would appeal to both parents and students. We developed a modern, approachable brand and created a website that clearly communicates their educational philosophy and services.",
      image: "/images/accelerated.png",
      technologies: ["React", "Content Management", "SEO Optimization"],
      results: [
        "200% increase in enrollment inquiries",
        "60% improvement in brand recognition",
        "Top 3 Google ranking for local tutoring services",
      ],
      testimonial: {
        text: "The new brand and website perfectly capture what we're about. Parents immediately understand our value.",
        author: "Sarah Johnson, Director",
      },
      link: "#",
      color: "from-green-500 to-green-700",
    },
    {
      id: 3,
      title: "Mountain Nutrition",
      category: "health",
      type: "E-commerce Website",
      description:
        "Custom e-commerce solution for a local nutrition and supplement store.",
      longDescription:
        "Mountain Nutrition wanted to expand their local supplement store online. We built a comprehensive e-commerce platform that showcases their products, provides detailed nutritional information, and offers a seamless shopping experience.",
      image: "/images/nutrition.png",
      technologies: ["Shopify", "Custom Theme", "Inventory Management"],
      results: [
        "300% increase in online sales",
        "80% of customers now shop online",
        "45% improvement in customer retention",
      ],
      testimonial: {
        text: "Our online store has become our biggest revenue driver. The design is clean and customers love shopping with us.",
        author: "Mike Torres, Owner",
      },
      link: "#",
      color: "from-purple-500 to-purple-700",
    },
    {
      id: 4,
      title: "Salt Lake Photography",
      category: "creative",
      type: "Portfolio Website",
      description:
        "Stunning portfolio website for a wedding and portrait photographer.",
      longDescription:
        "A talented photographer needed a website that would showcase their work beautifully while making it easy for potential clients to book sessions. We created a gallery-focused design that lets their photography speak for itself.",
      image: "/images/hanks.png", // Placeholder - replace with actual image
      technologies: ["Next.js", "Image Optimization", "Contact Forms"],
      results: [
        "180% increase in booking inquiries",
        "50% more wedding bookings",
        "Featured in local wedding publications",
      ],
      testimonial: {
        text: "My new website is exactly what I envisioned. It showcases my work beautifully and brings in new clients regularly.",
        author: "Emma Rodriguez, Photographer",
      },
      link: "#",
      color: "from-pink-500 to-pink-700",
    },
    {
      id: 5,
      title: "Tech Startup Dashboard",
      category: "technology",
      type: "Web Application",
      description: "Custom dashboard application for a growing SaaS startup.",
      longDescription:
        "A fast-growing SaaS company needed a comprehensive dashboard that would help their customers manage their accounts and view analytics. We built a responsive, feature-rich application that scales with their business.",
      image: "/images/accelerated.png", // Placeholder - replace with actual image
      technologies: ["React", "Node.js", "Database Integration", "Analytics"],
      results: [
        "400% improvement in user engagement",
        "60% reduction in support tickets",
        "90% customer satisfaction rate",
      ],
      testimonial: {
        text: "The dashboard has revolutionized how our customers interact with our service. It's intuitive and powerful.",
        author: "David Chen, CTO",
      },
      link: "#",
      color: "from-indigo-500 to-indigo-700",
    },
    {
      id: 6,
      title: "Local Restaurant Chain",
      category: "restaurant",
      type: "Multi-location Website",
      description:
        "Unified website solution for a growing restaurant chain with multiple locations.",
      longDescription:
        "A popular local restaurant expanding to multiple locations needed a website that could handle different menus, locations, and online ordering. We created a scalable solution that maintains brand consistency across all locations.",
      image: "/images/nutrition.png", // Placeholder - replace with actual image
      technologies: [
        "Multi-site Management",
        "Online Ordering",
        "Location Finder",
      ],
      results: [
        "250% increase in online orders",
        "35% improvement in brand consistency",
        "Successful expansion to 5 locations",
      ],
      testimonial: {
        text: "Our new website system made expanding our restaurant so much easier. Each location feels connected yet unique.",
        author: "Maria Santos, Owner",
      },
      link: "#",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "automotive", name: "Automotive" },
    { id: "education", name: "Education" },
    { id: "health", name: "Health & Wellness" },
    { id: "creative", name: "Creative" },
    { id: "technology", name: "Technology" },
    { id: "restaurant", name: "Restaurant" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(project => project.category === activeFilter);

  return (
    <main className="mt-48">
      {/* Hero Section */}
      <div className="w-[100vw] h-full items-center lg:flex border-black border-b-[1px]">
        <div className="w-screen lg:min-w-[50vw] h-64 lg:h-screen bg-gradient-to-br from-purple-500 via-blue-500 to-slate-600 bg-cover bg-center bg-no-repeat border-black border-r-[1px] border-t-[1px] fadeIn flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 element-to-fadeIn">
              Our Work
            </h1>
            <p className="text-xl lg:text-2xl italic element-to-fadeIn">
              Real projects, real results
            </p>
          </div>
        </div>
        <div className="lg:-translate-x-32 px-10 py-10 lg:px-0 lg:py-0 bg-white flex flex-col justify-center">
          <div className="fadeIn max-w-2xl">
            <h2 className="text-2xl lg:text-4xl mb-6">
              Projects That Make a Difference
            </h2>
            <p className="leading-8 lg:text-lg mb-6">
              Every project tells a story of collaboration, creativity, and
              measurable success.
            </p>
            <p className="leading-8 lg:text-lg">
              From local businesses to growing startups, we've helped companies
              across various industries achieve their digital goals.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Navigation */}
      <div className="bg-white border-black border-b-[1px] px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={classNames(
                  "px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base tracking-wider transition-all duration-300 border-black border-[1px]",
                  activeFilter === category.id
                    ? "bg-blue-200 text-black"
                    : "bg-white text-black hover:bg-gray-50"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="bg-white border-black border-b-[1px]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="group cursor-pointer element-to-fadeIn"
                onClick={() => setSelectedProject(project)}
              >
                <div className="border-black border-[1px] bg-white hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                    >
                      <span className="text-white font-semibold text-lg">
                        View Project
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-600 mb-2">
                      {project.type}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-700 leading-6 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 2).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white border-black border-[1px] max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-600">{selectedProject.type}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl hover:text-gray-600"
                >
                  ×
                </button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    width={500}
                    height={400}
                    className="w-full border-black border-[1px]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Project Overview
                  </h3>
                  <p className="leading-7 mb-6">
                    {selectedProject.longDescription}
                  </p>

                  <h4 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-200 px-3 py-1 text-sm rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h4 className="text-lg font-semibold mb-3">Results</h4>
                  <ul className="space-y-2 mb-6">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedProject.testimonial && (
                    <div className="bg-gray-50 p-6 border-l-4 border-blue-500">
                      <p className="italic mb-3">
                        "{selectedProject.testimonial.text}"
                      </p>
                      <p className="font-semibold">
                        — {selectedProject.testimonial.author}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-400 border-black border-b-[1px]">
        <div className="max-w-6xl mx-auto px-10 py-16">
          <h3 className="text-3xl lg:text-4xl text-white mb-12 text-center element-to-fadeIn">
            By the Numbers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white element-to-fadeIn">
              <div className="text-4xl lg:text-5xl font-bold mb-2">50+</div>
              <p className="text-lg">Projects Completed</p>
            </div>
            <div className="text-white element-to-fadeIn">
              <div className="text-4xl lg:text-5xl font-bold mb-2">98%</div>
              <p className="text-lg">Client Satisfaction</p>
            </div>
            <div className="text-white element-to-fadeIn">
              <div className="text-4xl lg:text-5xl font-bold mb-2">200%</div>
              <p className="text-lg">Average Traffic Increase</p>
            </div>
            <div className="text-white element-to-fadeIn">
              <div className="text-4xl lg:text-5xl font-bold mb-2">24/7</div>
              <p className="text-lg">Support Available</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white border-black border-b-[1px]">
        <div className="max-w-4xl mx-auto px-10 py-16 text-center">
          <h3 className="text-3xl lg:text-4xl mb-6 element-to-fadeIn">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg leading-8 mb-8 element-to-fadeIn">
            Let's discuss how we can help bring your vision to life and achieve
            similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center element-to-fadeIn">
            <button className="bg-blue-200 text-black px-8 py-4 text-lg font-semibold border-black border-[1px] hover:bg-blue-300 transition-colors">
              Start a Project
            </button>
            <button className="bg-white text-black px-8 py-4 text-lg font-semibold border-black border-[1px] hover:bg-gray-50 transition-colors">
              View More Work
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
