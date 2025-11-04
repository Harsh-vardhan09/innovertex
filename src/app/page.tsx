import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"></div>
           <Link href="/"> <h1 className="text-2xl font-bold text-gray-900">Innovortex</h1></Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/hackathons" className="text-gray-600 hover:text-gray-900">
              Hackathons
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/auth/signin">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link href="/auth/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      
      <section className="py-20 px-4 bg-[url('/assets/img.png')] bg-cover bg-center h-screen">
        <div className="container mx-auto text-center  ">
          {/* <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Host Amazing <span className="text-blue-600">Hackathons</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The complete platform for organizing, participating in, and judging hackathons. 
            From registration to winner selection, we've got you covered.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center mt-125">
            <Link href="/auth/signup">
              <Button size="lg" className="w-full sm:w-auto">
                Start Your Hackathon
              </Button>
            </Link>
            <Link href="/hackathons">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Hackathons
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 grid grid-cols-1 bg-[url('/assets/scatter.png')] bg-cover bg-center h-full">
              <div className=" text-white text-center place-items-center">
                <h1 className="text-6xl  ">Winning Never <br />Looked So Good</h1>
                <h2 className="m-12 text-4xl font-bold text-purple-500">PRIZES</h2>
                <h3 className="text-4xl m-8 border-2 p-12 w-100 rounded-full ">&#x20B9;12,000 <br /><span className="text-sm">Prize pool of web3 track is 12K</span> </h3>
                <h3 className="text-4xl m-8 border-2 p-12 w-100 rounded-full">&#x20B9;4000 <br /><span className="text-sm"> INNOVORTEX 4.0 Track Winner</span></h3>
                <h3 className="text-4xl m-8 border-2 p-12 w-100 rounded-full">&#x20B9;4000<br /><span className="text-sm">Orkes Conductor AI Track Winner</span></h3>

              </div>
      </section>
     
      <section className="py-16 px-4 bg-[#514eef] h-400 ">
        <div className="container mx-auto">
          <h3 className="text-6xl font-bold text-center text-gray-900 mb-12">
            Our Sponsors
          </h3>
          <div className="grid md:grid-cols-3 gap-8  ">
            <Card className="rounded-4xl">
              <img src="https://hystax.com/wp-content/uploads/2024/01/Advantages-and-limitations-of-embracing-AWS-as-a-cloud-infrastructure-1200x675.webp" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">AWS</CardTitle>
                <CardDescription className="ml-6">
                  Proud cloud partner powering innovation at scale.
                </CardDescription>
                <CardContent className="">
                <p>AWS has been our trusted long-term partner, empowering our hackathons with reliable cloud solutions and innovation at scale.</p>
              </CardContent>
              </CardHeader>
            </Card>

           <Card className="rounded-4xl">
              <img src="https://media.licdn.com/dms/image/v2/C560BAQG4YkQpKzyWLQ/company-logo_200_200/company-logo_200_200/0/1677781971009/flowinc_logo?e=2147483647&v=beta&t=LBSqS5aBmS0oPLmfD2Fs2vOfSANWg0QL22fbjxkaj_0" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">FLOW</CardTitle>
                <CardDescription className="ml-6">
                  Leading blockchain platform enabling secure and scalable digital experiences.
                </CardDescription>
                <CardContent className="">
                <p>FLOW has been our long-term partner, supporting our hackathons with secure, scalable blockchain technology and a commitment to innovation.</p>
              </CardContent>
              </CardHeader>
            </Card>


            <Card className="rounded-4xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrYGomrNzF9pq3qzhnJQfjjj72wRj-sBtbA&s" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">VERSE</CardTitle>
                <CardDescription className="ml-6">
                  VERSE supports creative minds by providing innovative tools for hackathon success.
                </CardDescription>
                <CardContent className="">
                <p>VERSE has been a valued long-term sponsor, empowering our hackathons with innovative tools and unwavering support for creative minds.</p>
              </CardContent>
              </CardHeader>
            </Card>

            <Card className="rounded-4xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKmSY7vLH0NdnKdpEK-RaMqyg-Ri6EUzcLFA&s" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">QuickNode</CardTitle>
                <CardDescription className="ml-6">
                  QuickNode accelerates blockchain development with fast, reliable infrastructure for innovators.
                </CardDescription>
                <CardContent className="">
                <p>QuickNode has been a long-standing sponsor, accelerating our hackathons with fast, reliable blockchain infrastructure and ongoing support for innovation.</p>
              </CardContent>
              </CardHeader>
            </Card>

            <Card className="rounded-4xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNdKSmb4TvaTpyPELqP7Ei2eb3LnWFD_rbw&s" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">GitHub</CardTitle>
                <CardDescription className="ml-6">
                  As a sponsor, GitHub empowers developers to innovate and collaborate at scale.
                </CardDescription>
                <CardContent className="">
                <p>GitHub has been a long-term sponsor, empowering our hackathons by enabling seamless collaboration and innovation for developers worldwide.</p>
              </CardContent>
              </CardHeader>
            </Card>

            <Card className="rounded-4xl">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3fUYZToZjZ6b4tBJ9HsMT2DuHZqwvV0ISEw&s" alt="" className="w-full h-90 rounded-t-4xl"/>
              <CardHeader className="h-60" >
                <CardTitle className="font-bold ml-6">AZURE</CardTitle>
                <CardDescription className="ml-6">
                  Azure empowers our hackathons with scalable cloud solutions and robust developer tools.
                </CardDescription>
                <CardContent className="">
                <p>Azure has been a key sponsor, providing robust cloud infrastructure and developer tools to empower our hackathon participants.</p>
              </CardContent>
              </CardHeader>
            </Card>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-400 text-white h-screen leading-8">
        <div className="container mx-auto text-center mt-10">
          <h3 className="text-8xl font-bold mb-4">Hack Solo or as a team. Compete for amazing prizes </h3>
          <p className="text-3xl mb-8 opacity-90">
            Join thousands of developers and organizers using Innovortex. <br />Get connected learn,experience and be one of us.
          </p>
          <Link href="/auth/signup">
            <Button size="lg" variant="secondary">
              Create Your Account
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Innovortex 4.0
            </span>
          </div>
          <p className="text-gray-300 max-w-md mx-auto mb-8">
            Empowering innovation through hackathons. Build, compete, and showcase your skills.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
            About
          </a>
          <a href="/hackathons" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Hackathons
          </a>
          <a href="/community" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Community
          </a>
          <a href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Privacy
          </a>
          <a href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
            Terms
          </a>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Innovortex 4.0. All rights reserved. Made with innovation and passion.
          </p>
        </div>
      </div>
    </footer>
    </div>
  )
}
