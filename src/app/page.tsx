import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { GithubIcon, TwitterIcon, LinkedinIcon } from "lucide-react"
import Link from "next/link"

const fellows = [
  { name: "Alice Johnson", role: "AI Researcher", avatar: "AJ", github: "#", twitter: "#", linkedin: "#" },
  { name: "Bob Smith", role: "Policy Analyst", avatar: "BS", github: "#", twitter: "#", linkedin: "#" },
  { name: "Carol Williams", role: "Civic Technologist", avatar: "CW", github: "#", twitter: "#", linkedin: "#" },
  { name: "David Brown", role: "Data Scientist", avatar: "DB", github: "#", twitter: "#", linkedin: "#" },
]

const projects = [
  { title: "AI Ethics Framework", description: "Developing guidelines for ethical AI implementation in public services." },
  { title: "Open Data Initiative", description: "Creating a platform for sharing and analyzing public sector data." },
  { title: "Digital Democracy Toolkit", description: "Building tools to enhance citizen participation in democratic processes." },
]

export default function NewpeakHouseFellows() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Newspeak House</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Fellows
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Newspeak House Fellows
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Shaping the future of technology, policy, and civic engagement
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline" className="bg-white text-black hover:bg-gray-200">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Meet Our Fellows</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {fellows.map((fellow, index) => (
                <Card key={index}>
                  <CardHeader>
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={`/placeholder.svg?height=96&width=96`} />
                      <AvatarFallback>{fellow.avatar}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center mt-4">{fellow.name}</CardTitle>
                    <CardDescription className="text-center">{fellow.role}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-center space-x-4">
                    <Link href={fellow.github}><GithubIcon className="h-5 w-5" /></Link>
                    <Link href={fellow.twitter}><TwitterIcon className="h-5 w-5" /></Link>
                    <Link href={fellow.linkedin}><LinkedinIcon className="h-5 w-5" /></Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Groundbreaking Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Innovation</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Become part of our community and help shape the future of civic technology
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Apply Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 Newspeak House. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}