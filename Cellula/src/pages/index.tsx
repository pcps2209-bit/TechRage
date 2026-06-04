import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { 
 
  UserPlus, 
  TestTube, 
  Search, 
  Sparkles,
  Users,
  Building2,
  Globe,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Award,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  QrCode,
  MapPin as MapPinIcon,
  Heart,
  Zap,
  DoorOpen
} from "lucide-react";

const Index = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Register",
      description: "Sign up as a donor with your basic details and health information",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
    },
    {
      icon: TestTube,
      title: "Submit Sample",
      description: "Provide a simple tissue sample via courier pickup or hospital visit",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-600",
    },
    {
      icon: Search,
      title: "Get Matched",
      description: "Our system matches you with patients who need your help",
      color: "from-amber-500/20 to-amber-600/20",
      iconColor: "text-amber-600",
    },
    {
      icon: Sparkles,
      title: "Save Lives",
      description: "Your donation gives someone a second chance at life",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-600",
    },
  ];

  const registrationPaths = [
    {
      icon: Zap,
      title: "Online Registration",
      description: "Register instantly from your home through our secure platform",
      color: "from-blue-500/20 to-blue-600/20",
      iconColor: "text-blue-600",
      time: "5 minutes"
    },
    {
      icon: Heart,
      title: "NRCS Village Campaign",
      description: "Meet our team during community campaigns in your area",
      color: "from-red-500/20 to-red-600/20",
      iconColor: "text-red-600",
      time: "Ongoing"
    },
  ];

  const stats = [
    { icon: Users, value: "12,500+", label: "Registered Donors", color: "text-blue-600" },
    { icon: Building2, value: "45", label: "Partner Hospitals", color: "text-purple-600" },
    { icon: (props: any) => <img src="/logo.png" alt="Lives Saved" className="h-12 w-12 mx-auto" />, value: "850+", label: "Lives Saved", color: "text-primary" },
    { icon: Globe, value: "7", label: "Provinces Covered", color: "text-green-600" },
  ];

  const qrCardFeatures = [
    {
      icon: QrCode,
      title: "Unique QR Code",
      description: "Personalized QR code ID for quick verification and records",
      color: "text-purple-600"
    },
    {
      icon: Shield,
      title: "Secure Verification",
      description: "Hospital staff can instantly verify your donor profile",
      color: "text-green-600"
    },
    {
      icon: Clock,
      title: "Lifetime Access",
      description: "Your ID card remains valid throughout your donor journey",
      color: "text-blue-600"
    },
    {
      icon: MapPinIcon,
      title: "Instant Lookup",
      description: "Quick access to your health information and donation history",
      color: "text-amber-600"
    }
  ];

  const nrcsBenefits = [
    "Easy access in your community",
    "Face-to-face guidance from trained staff",
    "Immediate sample collection",
    "Instant ID card generation",
    "Direct community support"
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Your data is protected with bank-level encryption and complete confidentiality",
    },
    {
      icon: Clock,
      title: "Quick Process",
      description: "Registration takes only 5 minutes and sample collection is hassle-free",
    },
    {
      icon: Award,
      title: "Expert Care",
      description: "Our medical team ensures the highest standards throughout the process",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Thapa",
      role: "Donor, Kathmandu",
      content: "Registering with Cellula was one of the best decisions of my life. Knowing that I could potentially save someone's life gives me immense joy.",
      avatar: "RT",
    },
    {
      name: "Sita Sharma",
      role: "Donor, Pokhara",
      content: "The entire process was smooth and professional. The team was very supportive and answered all my questions patiently.",
      avatar: "SS",
    },
    {
      name: "Dr. Ramesh KC",
      role: "Transplantation Doctor",
      content: "Cellula has revolutionized stem cell donation in Nepal. Their matching system is efficient and has helped many of our patients.",
      avatar: "RK",
    },
  ];

  const faqs = [
    {
      question: "What is stem cell donation?",
      answer: "Stem cell donation involves collecting blood-forming stem cells from a healthy donor to help patients with blood cancers and disorders. The process is safe, simple, and can save lives.",
    },
    {
      question: "Who can become a donor?",
      answer: "Anyone between 18-50 years old, in good health, and meeting basic medical criteria can register as a stem cell donor. We conduct thorough health screening to ensure donor safety.",
    },
    {
      question: "Can I register through NRCS campaigns?",
      answer: "Absolutely! Nepal Red Cross Society conducts regular village campaigns where you can register in person. Our team will collect your details, conduct a quick health screening, and provide you with your QR code ID card on the spot.",
    },
    {
      question: "What is the QR Code ID Card?",
      answer: "Your QR code ID card is a personalized identification that contains your donor profile and unique QR code. Hospital staff can scan it for instant access to your health information and donation history.",
    },
    {
      question: "Is the donation process painful?",
      answer: "No, modern stem cell donation methods are minimally invasive. Most donors report mild discomfort similar to giving blood. Our medical team ensures your comfort throughout.",
    },
    {
      question: "How long does online registration take?",
      answer: "Online registration takes just 5 minutes. After registering, we'll schedule a convenient time for a simple tissue sample collection at your home or a nearby hospital.",
    },
    {
      question: "Is my information kept confidential?",
      answer: "Absolutely. We maintain the highest standards of privacy and security. Your personal information is encrypted and only used for matching purposes with strict confidentiality protocols.",
    },
    {
      question: "What happens after I register?",
      answer: "After registration and tissue sample collection, your information is added to our database. If you're a match for a patient, we'll contact you with complete details and support throughout the donation process.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 lg:py-20">
          {/* Background Image Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/background.png" 
              alt="Cellula background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-background/60 z-10" />
          </div>
          <div className="container relative z-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-xs font-medium text-red-700 mb-6 border border-red-200/50">
                <Heart className="h-3 w-3" />
                In Collaboration with Nepal Red Cross Society
              </div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl" style={{ fontFamily: 'Georgia, serif' }}>
                "Give the Gift of{" "}
                <span className="text-gradient-cellula">Life</span>"
              </h1>
              <p className="mb-5 text-sm text-muted-foreground md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Join thousands of donors across Nepal who are giving hope to patients 
                battling blood cancers and disorders. Your stem cells could be someone's 
                second chance at life.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" className="gap-2 group shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link to="/register">
                    Become a Donor
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="shadow-md hover:shadow-lg transition-all" asChild>
                  <a href="#how-it-works">Learn How It Works</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/30 py-12">
          <div className="container">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="text-center group cursor-pointer"
                >
                  <stat.icon className={`mx-auto mb-2 h-8 w-8 ${stat.color} transition-transform group-hover:scale-110`} />
                  <div className="text-3xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NRCS Partnership Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-red-50/50 to-background">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-xs font-medium text-red-700 mb-4">
                  <Heart className="h-4 w-4" />
                  Official Partnership
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">In Collaboration with Nepal Red Cross Society</h2>
                <p className="mb-4 text-muted-foreground text-base leading-relaxed">
                  Cellula is proud to partner with Nepal Red Cross Society to expand stem cell donor registration across the nation. 
                  Together, we bring life-saving opportunities directly to communities through organized village campaigns.
                </p>
                <p className="mb-6 text-muted-foreground text-base leading-relaxed">
                  Our joint initiative ensures that every eligible person has the opportunity to become a donor, whether through 
                  convenient online registration or face-to-face registration during NRCS community campaigns in your area.
                </p>
                <div className="space-y-3 mb-6">
                  {nrcsBenefits.map((benefit, index) => (
                    <div 
                      key={benefit} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-5 w-5 text-red-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-full">
                <div className="rounded-3xl overflow-hidden shadow-2xl h-full border border-red-200/30 hover:shadow-3xl transition-shadow">
                  <div className="relative h-full flex flex-col">
                    <div className="relative h-48 bg-white overflow-hidden">
                      <img 
                        src="/campaign.jpg" 
                        alt="Campaign" 
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-white/40" />
                      <div className="relative h-full flex flex-col items-center justify-center text-black pt-8">
                        <h3 className="text-2xl font-bold text-black">Village Campaign Process</h3>
                        <p className="text-sm text-black mt-1">Step by step guide</p>
                      </div>
                    </div>
                    <div className="p-8 bg-white flex-1 flex flex-col justify-center space-y-5">
                      <div className="flex gap-4 pb-4 border-b border-red-100/50 last:border-b-0">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 font-bold text-lg text-white shadow-md">
                          1
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-base mb-1">NRCS Announces Campaign</div>
                          <div className="text-sm text-gray-600">Community campaign scheduled in your area</div>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b border-red-100/50 last:border-b-0">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 font-bold text-lg text-white shadow-md">
                          2
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-base mb-1">Visit the Campaign</div>
                          <div className="text-sm text-gray-600">Meet our team and complete registration on-site</div>
                        </div>
                      </div>
                      <div className="flex gap-4 pb-4 border-b border-red-100/50 last:border-b-0">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 font-bold text-lg text-white shadow-md">
                          3
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-base mb-1">Health Screening & Sample</div>
                          <div className="text-sm text-gray-600">Quick health check and tissue sample collection</div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-600 font-bold text-lg text-white shadow-md">
                          4
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 text-base mb-1">Receive ID Card</div>
                          <div className="text-sm text-gray-600">Get your personalized QR code ID card instantly</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Paths Section */}
        <section className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Choose Your Registration Path</h2>
              <p className="text-muted-foreground text-base">
                Whether you prefer the convenience of online registration or the personal touch of our NRCS community campaigns, 
                we make it easy to become a stem cell donor.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {registrationPaths.map((path, index) => (
                <Card 
                  key={path.title} 
                  className="relative border-border bg-card hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${path.color} ${path.iconColor}`}>
                        <path.icon className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{path.time}</span>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-foreground">{path.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{path.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* QR Code ID Card Section */}
        <section className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-xs font-medium text-purple-700 mb-4">
                  <QrCode className="h-4 w-4" />
                  Digital Identity
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Your QR Code Donor ID Card</h2>
                <p className="mb-4 text-muted-foreground text-base leading-relaxed">
                  Upon registration, you'll receive a personalized ID card featuring a unique QR code. This secure identification 
                  serves as your digital donor profile and makes verification quick and seamless.
                </p>
                <p className="mb-6 text-muted-foreground text-base leading-relaxed">
                  Hospital staff can instantly scan your QR code to access your donor profile, health information, and donation history. 
                  Your card remains valid throughout your donor journey with Cellula.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {qrCardFeatures.map((feature) => (
                    <div 
                      key={feature.title} 
                      className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/50 transition-all group"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <feature.icon className={`h-5 w-5 ${feature.color} group-hover:scale-110 transition-transform`} />
                        <span className="font-semibold text-sm">{feature.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl" />
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-sm mx-auto border border-gray-200/50 hover:shadow-3xl transition-shadow">
                  <div className="mb-6">
                    <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                      <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center">
                        <QrCode className="h-16 w-16 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 mb-6 pb-6 border-b">
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">Donor Name</div>
                      <div className="font-bold text-gray-900">Your Name Here</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Donor ID</div>
                        <div className="font-mono font-bold text-sm text-gray-900">NRCS-001234</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">Registration</div>
                        <div className="font-mono font-bold text-sm text-gray-900">2026-06-03</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <Heart className="h-3 w-3 text-red-600" />
                      <span>Stem Cell Donor</span>
                    </div>
                    <img src="/logo.png" alt="Cellula" className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* How It Works */}
              <div className="border-r-0 lg:border-r lg:border-border lg:pr-8">
                <div className="mx-auto mb-8 max-w-2xl text-center">
                  <h2 className="mb-2 text-xl font-bold text-foreground md:text-2xl lg:text-3xl">How It Works</h2>
                  <p className="text-muted-foreground text-sm">
                    Becoming a stem cell donor is simple. Register online or through NRCS campaigns, then follow these steps to save a life.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
              {steps.map((step, index) => (
                <Card 
                  key={step.title} 
                  className="relative border-border bg-card"
                >
                  <CardContent className="p-5">
                    <div className="mb-3 flex items-center justify-center">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${step.color} ${step.iconColor} font-bold text-base`}>
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="mb-2 text-base font-bold text-foreground text-center">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed text-center">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
                </div>
              </div>

              {/* Why Choose Cellula */}
              <div className="lg:pl-8">
                <div className="mx-auto mb-8 max-w-2xl text-center">
                  <h2 className="mb-2 text-xl font-bold text-foreground md:text-2xl lg:text-3xl">Why Choose Cellula?</h2>
                  <p className="text-muted-foreground text-sm">
                    We're committed to making stem cell donation safe, simple, and accessible for everyone.
                  </p>
                </div>
                <div className="grid gap-4">
                  {features.map((feature) => (
                    <Card 
                      key={feature.title}
                      className="relative border-border bg-card"
                    >
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="mb-1 text-base font-bold text-foreground">{feature.title}</h3>
                          <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-medium text-primary mb-4">
                  <img src="/logo.png" alt="Cellula" className="h-6 w-6" />
                  Why Us
                </div>
                <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl lg:text-4xl">Why Stem Cell Donation Matters</h2>
                <p className="mb-4 text-muted-foreground text-base leading-relaxed">
                  Every year, thousands of patients in Nepal are diagnosed with life-threatening blood cancers and disorders. 
                  For many, a stem cell transplant is their only hope for survival.
                </p>
                <p className="mb-6 text-muted-foreground text-base leading-relaxed">
                  Cellula bridges this gap by connecting registered donors with patients across the nation. Our advanced 
                  matching system ensures quick, accurate matches while maintaining complete privacy and security.
                </p>
                <div className="grid gap-3 sm:grid-cols-2 mb-6">
                  {[
                    "Simple, one-time registration",
                    "Home pickup available",
                    "Complete confidentiality",
                    "Life-saving community",
                    "Free health screening",
                    "24/7 medical support",
                    "NRCS partnership support",
                    "Personalized QR ID card"
                  ].map((benefit, index) => (
                    <div 
                      key={benefit} 
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-green-600 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button size="lg" className="gap-2 group" asChild>
                  <Link to="/register">
                    Join as a Donor
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-[500px]">
                <img 
                  src="/aboutus.jpg" 
                  alt="Stem Cell Donation"
                  className="w-full h-full rounded-3xl object-cover shadow-2xl"
                  style={{ objectPosition: '50% 35%' }}
                />
                <div className="absolute -bottom-6 -right-6 rounded-2xl border-2 border-border bg-card p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-4xl font-bold text-primary mb-1">70%</div>
                  <div className="text-sm text-muted-foreground font-medium">Patients need<br/>unrelated donors</div>
                </div>
                <div className="absolute -top-6 -left-6 rounded-2xl border-2 border-border bg-card p-6 shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                  <div className="text-4xl font-bold text-green-600 mb-1">90%</div>
                  <div className="text-sm text-muted-foreground font-medium">Success rate<br/>with matched donors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials and FAQ Section - Side by Side */}
        <section id="faq" className="py-12 lg:py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* Testimonials */}
              <div className="border-r-0 lg:border-r lg:border-border lg:pr-8">
                <div className="mb-6 text-center">
                  <h2 className="mb-2 text-lg font-bold text-foreground md:text-xl">What Our Community Says</h2>
                  <p className="text-muted-foreground text-xs">
                    Hear from donors and partners making a difference.
                  </p>
                </div>
                <div className="space-y-3">
                  {testimonials.map((testimonial) => (
                    <Card 
                      key={testimonial.name}
                      className="border-border bg-card"
                    >
                      <CardContent className="p-3">
                        <div className="mb-2 flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-primary/5 text-primary font-bold text-xs">
                            {testimonial.avatar}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-foreground">{testimonial.name}</div>
                            <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                          </div>
                        </div>
                        <p className="text-muted-foreground text-xs leading-relaxed italic">"{testimonial.content}"</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="lg:pl-8">
                <div className="mb-6 text-center">
                  <h2 className="mb-2 text-lg font-bold text-foreground md:text-xl">Frequently Asked Questions</h2>
                  <p className="text-muted-foreground text-xs">
                    Everything you need to know about stem cell donation.
                  </p>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="border border-border rounded-lg px-4 bg-card"
                    >
                      <AccordionTrigger className="text-left font-semibold text-sm text-foreground hover:text-primary py-3">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-xs leading-relaxed pb-3">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 lg:py-16 bg-muted/30">
          <div className="container">
            <div className="mx-auto mb-8 max-w-2xl text-center">
              <h2 className="mb-2 text-xl font-bold text-foreground md:text-2xl lg:text-3xl">Get in Touch</h2>
              <p className="text-muted-foreground text-sm">
                Have questions? We're here to help. Reach out to us anytime.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">Visit Us</h3>
                  <p className="text-sm text-muted-foreground">Kathmandu, Nepal<br/>Thamel, Ward No. 26</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10 text-green-600">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+977 1-4521XXX<br/>Mon-Fri, 9AM-5PM</p>
                </CardContent>
              </Card>
              <Card className="border-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10 text-purple-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-foreground">Email Us</h3>
                  <p className="text-sm text-muted-foreground">info@cellula.org.np<br/>support@cellula.org.np</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 p-8 text-center md:p-10 lg:p-12 relative overflow-hidden shadow-lg">
              <div className="relative z-10">
                <img src="/logo.png" alt="Cellula" className="mx-auto mb-2 h-24 w-24" />
                <h2 className="mb-3 text-xl font-bold text-gray-900 md:text-2xl lg:text-3xl">Ready to Save a Life?</h2>
                <p className="mx-auto mb-6 max-w-2xl text-gray-700 text-sm md:text-base leading-relaxed">
                  Join Nepal's growing community of stem cell donors. Registration takes just 5 minutes 
                  and could mean everything to someone in need.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <Button size="lg" className="gap-2 group px-6 py-5 text-base bg-red-600 hover:bg-red-700 text-white" asChild>
                    <Link to="/donor/login">
                      Get Started
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2 border-2 border-red-600 text-red-600 hover:bg-red-50 bg-white px-6 py-5 text-base" asChild>
                    <a href="#contact">
                      <MessageSquare className="h-4 w-4" />
                      Contact Us
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
