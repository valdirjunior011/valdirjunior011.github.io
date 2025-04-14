import Image from "next/image"
import Link from "next/link"

export default function About() {
  const skills = [
    "AWS",
    "Azure",
    "Ansible",
    "Chef",
    "Terraform",
    "GrayLog",
    "SPlunk",
    "PRTG",
    "Zabbix",
    "Prometheus",
    "Citrix Studio",
    "Citrix Hypervision",
    "Windows Servers",
    "Hyper-V",
    "Active Directory",
    "DNS",
    "DHCP",
    "Federation",
    "GPO",
    "File Server",
    "IIS",
    "Fortigate",
    "Cisco ASA",
    "Vmware",
    "Vcenter",
    "Vpshere",
    "Cisco Switches",
    "VLANs",
    "Spanning Tree",
    "Port Security",
    "OSPF",
    "EIGRP",
    "RIPv2",
    "Powershell",
    "Shell Script",
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              I'm a multi-disciplinary IT engineer with experience in implementation and configuration of servers and
              their services.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">My Skills:</h3>
              <div className="flex flex-wrap">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              I've led infrastructure teams in internal projects to implement or improve services at multiple companies.
              I'm passionate about technology and continuously learning new techniques and acquiring new knowledge. It's
              been 12 years of career growth and development.
            </p>

            <Link
              href="/curriculum/Valdir_Junior.docx"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Download my updated CV
            </Link>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-600">
              <Image src="/placeholder.svg?height=256&width=256" alt="Valdir Junior" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
