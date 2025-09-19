"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import logo from "@/app/assets/images/Navkraftaa.png";

// Mock icons - replace with your actual icon components
const SearchIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);
const StarIcon = () => (
  <svg className="w-5 h-5 fill-yellow-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const CheckIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

interface ServiceCategory {
  name: string;
  icon: string;
  count: string;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

const KraftaaLandingPage = () => {
  const router = useRouter();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content:
        "Kraftaa helped me find the perfect web developer for my business. The process was smooth and professional!",
      rating: 5,
      avatar:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_11_tybcfu.jpg",
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content:
        "As a creative professional, Kraftaa has been my go-to platform for finding quality projects and clients.",
      rating: 5,
      avatar:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_11_tybcfu.jpg",
    },
    {
      name: "Amina Hassan",
      role: "Hair Stylist",
      content:
        "I've built my entire client base through Kraftaa. The platform truly connects skilled artisans with people who need our services.",
      rating: 5,
      avatar:
        "https://res.cloudinary.com/dhliy2g1g/image/upload/v1749279019/Ellipse_11_tybcfu.jpg",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const serviceCategories: ServiceCategory[] = [
    { name: "Beauty & Wellness", icon: "💄", count: "2,500+" },
    { name: "Home Services", icon: "🏠", count: "1,800+" },
    { name: "Tech & Digital", icon: "💻", count: "3,200+" },
    { name: "Creative Services", icon: "🎨", count: "1,600+" },
    { name: "Business Services", icon: "📊", count: "2,100+" },
    { name: "Health & Fitness", icon: "🏋️", count: "900+" },
  ];

  const stats = [
    { number: "50,000+", label: "Active Professionals" },
    { number: "200,000+", label: "Jobs Completed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "100+", label: "Service Categories" },
  ];

  const handleGetStarted = () => {
    router.push("/signup");
  };

  const handleSignIn = () => {
    router.push("/login");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-500 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-xl font-bold">
                <Image src={logo} alt="logo" width={100} height={50} />
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#services"
                className="text-gray-600 hover:text-eaa-purple-300 transition-colors"
              >
                Services
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-eaa-purple-300 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-eaa-purple-300 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-eaa-purple-300 transition-colors"
              >
                About
              </a>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={handleSignIn}
                className="text-eaa-purple-300 hover:text-purple-800 font-medium transition-colors"
              >
                Sign In
              </button>
              <button
                onClick={handleSignUp}
                className="bg-eaa-purple-300 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition-colors font-medium"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Find the Perfect
                <span className="block bg-gradient-to-r from-eaa-purple-300 to-eaa-green-300 bg-clip-text text-transparent">
                  Professional
                </span>
                for Every Need
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with skilled artisans, tech professionals, and service
                providers for one-on-one services. From hair stylists to
                developers, find trusted professionals in your area.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="What service do you need?"
                    className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-eaa-purple-300 focus:border-transparent"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <SearchIcon />
                  </div>
                </div>
                <button
                  onClick={handleGetStarted}
                  className="bg-eaa-purple-300 text-white px-8 py-4 rounded-full hover:bg-purple-800 transition-colors font-semibold whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Verified Professionals</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>Secure Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckIcon />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Video Placeholder */}
            <div
              className={`relative transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/celina/image/upload/v1755610597/WhatsApp_Image_2025-07-30_at_16.15.43_9b8d72b5_t0cgyh.jpg"
                  alt="Someone on system"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    ✓
                  </div>
                  <span className="font-semibold">Job Completed!</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 bg-eaa-purple-300 rounded-full border-2 border-white"
                      ></div>
                    ))}
                  </div>
                  <span className="font-semibold">+50k Professionals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-eaa-purple-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 delay-${
                  index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traditional crafts to modern tech services, find skilled
              professionals across all industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-eaa-purple-300 font-semibold">
                  {category.count} professionals
                </p>
                <div className="mt-4 text-gray-600 group-hover:text-eaa-purple-300 transition-colors">
                  Explore category →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Kraftaa Works
            </h2>
            <p className="text-xl text-gray-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Post Your Job",
                description:
                  "Describe what you need and set your budget. Our platform will match you with qualified professionals.",
                icon: "📝",
              },
              {
                step: "2",
                title: "Choose Your Professional",
                description:
                  "Review profiles, portfolios, and ratings. Connect with professionals who fit your requirements.",
                icon: "👥",
              },
              {
                step: "3",
                title: "Get It Done",
                description:
                  "Work directly with your chosen professional. Pay securely through our platform when satisfied.",
                icon: "✅",
              },
            ].map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-eaa-purple-300 to-eaa-green-300 rounded-full flex items-center justify-center text-2xl text-white font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connecting line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-purple-50 to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by thousands of professionals and clients
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-900 font-medium mb-8 leading-relaxed">
                  &quot;{testimonials[currentTestimonial].content}&quot;
                </blockquote>

                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-eaa-purple-300"
                      : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-eaa-purple-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals and clients who trust Kraftaa for
            quality services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleGetStarted}
              className="bg-white text-eaa-purple-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Now
            </button>
            <button
              onClick={handleSignIn}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-eaa-purple-300 transition-colors"
            >
              Sign In
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-xl font-bold">
                <Image src={logo} alt="logo" width={100} height={50} />
              </div>
              <p className="text-gray-400 mb-4">
                Connecting skilled professionals with clients for quality
                one-on-one services.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
                <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Clients</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Browse Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Stories
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">For Professionals</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Join as Professional
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Find Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Success Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Kraftaa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KraftaaLandingPage;
