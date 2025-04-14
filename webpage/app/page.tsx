import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">Valdir Junior</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </Link>
            <Link
              href="#experience"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </Link>
            <Link
              href="#education"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Education
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="#contact">Hire Me</Link>
          </Button>
        </div>
      </header>

      <main className="container py-8 md:py-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16 lg:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Valdir Junior
                </h1>
                <h2 className="text-xl font-medium text-muted-foreground mt-2">
                  System Engineer
                </h2>
              </div>
              <p className="text-muted-foreground">
                Experienced system engineer with a passion for building scalable
                cloud enviroment and solving complex problems. Specialized in
                containers, linux, aws and IaC.
              </p>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Heidenheim, Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:valdirjunior011@gmail.com"
                    className="hover:text-primary"
                  >
                    valdirjunior011@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+5511999999999" className="hover:text-primary">
                    +55 11 99999-9999
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild size="icon" variant="outline">
                  <a
                    href="https://github.com/valdirjunior011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline">
                  <a
                    href="https://linkedin.com/in/valdirjunior011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
                <Button asChild>
                  <a href="/resume.pdf" download>
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-background bg-muted">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Valdir Junior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">About Me</h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div>
              <p className="text-muted-foreground mb-4">In Progress</p>
              <p className="text-muted-foreground">In Progress</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-4">In Progress</p>
              <p className="text-muted-foreground">In Progress</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Skills</h2>
          <Tabs defaultValue="technical">
            <TabsList className="mb-6">
              <TabsTrigger value="technical">DevOps & Tools</TabsTrigger>
              <TabsTrigger value="cloud">Cloud Platforms</TabsTrigger>
              <TabsTrigger value="systems">
                Systems & Infrastructure
              </TabsTrigger>
            </TabsList>
            <TabsContent value="technical">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Docker</span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Kubernetes</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        CI/CD Pipelines
                      </span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Terraform</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Ansible</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Git & GitHub</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Jenkins</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Prometheus/Grafana
                      </span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="cloud">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">AWS</span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Azure</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Google Cloud Platform
                      </span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">DigitalOcean</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">AWS ECS/EKS</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">AWS Lambda</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Azure DevOps</span>
                      <span className="text-sm text-muted-foreground">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Cloud Security
                      </span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="systems">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Linux Administration
                      </span>
                      <span className="text-sm text-muted-foreground">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Shell Scripting
                      </span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Networking</span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Security</span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Database Administration
                      </span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Load Balancing
                      </span>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Troubleshooting
                      </span>
                      <span className="text-sm text-muted-foreground">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">
                        Disaster Recovery
                      </span>
                      <span className="text-sm text-muted-foreground">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            Work Experience
          </h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Role1</h3>
                    <p className="text-sm text-muted-foreground">
                      Role1company
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Jan 2021 - Present</p>
                    <p>São Paulo, Brazil</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>In Progress</li>
                  {/* <li>Implemented CI/CD pipelines using GitHub Actions</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>
                    Optimized application performance, reducing load time by 40%
                  </li> */}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Role2</h3>
                    <p className="text-sm text-muted-foreground">
                      Role2company
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Mar 2018 - Dec 2020</p>
                    <p>São Paulo, Brazil</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>In Progress</li>
                  {/*<li>
                    Collaborated with designers to implement UI/UX improvements
                  </li>
                  <li>
                    Integrated RESTful APIs and implemented state management
                  </li>
                  <li>
                    Participated in agile development processes and sprint
                    planning
                  </li> */}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">Role3</h3>
                    <p className="text-sm text-muted-foreground">
                      Role3company
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Jun 2016 - Feb 2018</p>
                    <p>São Paulo, Brazil</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground list-disc pl-5">
                  <li>In Progress</li>
                  {/*<li>
                    Implemented responsive designs and ensured cross-browser
                    compatibility
                  </li>
                  <li>
                    Assisted in the development of WordPress themes and plugins
                  </li>
                  <li>
                    Collaborated with the design team to implement visual
                    elements
                  </li>*/}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Education</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      Bachelor of Science in Computer Science
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      University of São Paulo
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>2012 - 2016</p>
                    <p>São Paulo, Brazil</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Graduated with honors. Specialized in web development and
                  software engineering. Participated in various hackathons and
                  coding competitions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold">
                      Web Development Bootcamp
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Code Academy
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>2016</p>
                    <p>Online</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Intensive 12-week program focused on modern web development
                  technologies including JavaScript, React, Node.js, and
                  database management.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="E-commerce Platform"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">E-commerce Platform</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A full-featured e-commerce platform built with React, Node.js,
                  and MongoDB.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Node.js
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    MongoDB
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://github.com/valdirjunior011/ecommerce"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href="https://ecommerce-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Task Management App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Task Management App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A task management application with drag-and-drop functionality
                  built with React and Firebase.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    React
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Firebase
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    Redux
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://github.com/valdirjunior011/task-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href="https://task-app-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Weather App"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Weather App</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A weather application that displays current weather and
                  forecasts using the OpenWeather API.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    JavaScript
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    API
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium">
                    CSS
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <Button asChild size="sm" variant="outline">
                    <a
                      href="https://github.com/valdirjunior011/weather-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a
                      href="https://weather-app-demo.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 border-t">
          <h2 className="text-2xl font-bold tracking-tight mb-6">Contact Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm always open to new opportunities and collaborations. Feel
                free to reach out to me using the contact form or through my
                social media profiles.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a
                    href="mailto:valdirjunior011@gmail.com"
                    className="text-sm hover:text-primary"
                  >
                    valdirjunior011@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a
                    href="tel:+5511999999999"
                    className="text-sm hover:text-primary"
                  >
                    +55 11 99999-9999
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">São Paulo, Brazil</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button asChild size="icon" variant="outline">
                  <a
                    href="https://github.com/valdirjunior011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <Button asChild size="icon" variant="outline">
                  <a
                    href="https://linkedin.com/in/valdirjunior011"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </Button>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Your message here..."
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Valdir Junior. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/valdirjunior011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/valdirjunior011"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href="mailto:valdirjunior011@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
