import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Code, FileText, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import avatar from '../assets/img/avatar.png'
import { contact, description } from '@/assets/constants/contact'
import { experiences } from '@/assets/constants/experience'
import task from '../assets/img/projects/task.png'
import { projects } from '@/assets/constants/projects'


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Banner */}
      <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <Code className="w-64 h-64 text-white" />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-5">
        <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
          <div className="flex">
            <Image
              className="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32 z-50"
              src={avatar}
              alt="Profile picture"
              width={128}
              height={128}
            />
          </div>
          <div className="mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
            <div className="sm:hidden 2xl:block mt-6 min-w-0 flex-1">
              <h1 className="text-2xl font-bold text-gray-900 truncate">Yesid Rincon</h1>
              <p className="text-gray-500">Software Engineer</p>
            </div>
            <div className="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button><FileText className="mr-2 h-4 w-4" /> Descargar CV</Button>
            </div>
          </div>
        </div>
        <div className="hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1">
          <h1 className="text-2xl font-bold text-gray-900 truncate">Yesid Rincon</h1>
          <p className="text-gray-500">Software Engineer</p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6">
            {/* About */}
            <Card>
              <CardHeader>
                <CardTitle>Acerca de</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  {description}
                </p>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Habilidades</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Node.js</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>Java</Badge>
                  <Badge>Python</Badge>
                  <Badge>AWS</Badge>
                  <Badge>Docker</Badge>
                  <Badge>Git</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">{contact.location}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">{contact.email}</span>
                </div>
                <div className="flex items-center">
                  <Linkedin className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">{contact.linkedin}</span>
                </div>
                <div className="flex items-center">
                  <Github className="mr-2 h-4 w-4 text-gray-500" />
                  <span className="text-sm">{contact.github}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experiencia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold">{experience.role}</h3>
                    <p className="text-sm text-gray-600">{experience.company}</p>
                    <p className="text-sm text-gray-600">{experience.date}</p>
                    <p className="mt-2 text-sm">{experience.description}</p>
                    <ul className="mt-2 text-sm list-disc list-inside text-gray-600">
                      {experience.technologies.map((tech, idx) => (
                        <Badge className='mr-1 mb-1' variant='outline' key={idx}>{tech}</Badge>
                      ))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card>
              <CardHeader>
                <CardTitle>Proyectos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-4 border-b border-gray-200 pb-6"
                  >
                    {/* Imagen del proyecto */}
                    <div className="relative w-full h-56 rounded-lg overflow-hidden shadow-md">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Detalles del proyecto */}
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="mt-2 text-sm text-gray-600">{project.description}</p>

                      {/* Link a GitHub */}
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Ver código en GitHub
                      </a>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>
        </div>
      </main>
    </div>
  )
}

