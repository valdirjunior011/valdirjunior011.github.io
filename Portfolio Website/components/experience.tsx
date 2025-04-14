import { Briefcase, Calendar } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Senior IT Engineer",
      company: "Tech Solutions Inc.",
      period: "2019 - Present",
      description:
        "Led infrastructure team in implementing cloud solutions using AWS and Azure. Automated deployment processes with Terraform and Ansible.",
    },
    {
      title: "IT Infrastructure Specialist",
      company: "Global Systems Ltd.",
      period: "2015 - 2019",
      description:
        "Managed Windows Server environments, Active Directory, and network infrastructure. Implemented monitoring solutions with Zabbix and PRTG.",
    },
    {
      title: "Network Administrator",
      company: "Network Solutions",
      period: "2011 - 2015",
      description:
        "Configured and maintained Cisco network equipment. Implemented VLANs, routing protocols, and security measures.",
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Professional Experience</h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 relative pl-8 border-l-2 border-blue-600">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-600 rounded-full"></div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Briefcase className="h-4 w-4 mr-2" />
                  <span>{exp.company}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
