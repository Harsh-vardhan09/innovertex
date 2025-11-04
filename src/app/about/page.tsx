'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

type Mentor = {
  id: string
  name: string
  expertise: string
  bio?: string
  imageUrl?: string
  linkedin?: string
}

export default function About() {
    const [mentors,setMentors]=useState<Mentor[]>([]);

    useEffect(()=>{
        fetch("api/mentors").then((res)=>res.json()).then(setMentors);
    },[])
    
    return (
    <div className="h-[100%] bg-gradient-to-br from-blue-50 to-indigo-100">
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

      <section className="flex p-4 mx-20 space-x-50">
        <div className="p-4 py-14 w-140 h-140 mt-20">
          <h1 className="text-3xl font-bold text-blue-500">
            <b className="text-6xl">About Innovortex </b>
            <br />
            empowering hackathon culture
          </h1>
          <p className="text-md">
            with innovation challenges becoming new face of talent discovery.Our mission is
            to collaborate with companies and institution through innovation challenge.We aim to
            remove the barrier of technology,creativit and lead a new generration.
          </p>
          <h3 className='text-2xl font-bold'>vision</h3>
          <p className="text-md">
            we envision the a world where Hackathon becomes a gateway for talent discovery and
            bringing a new platform for the students of differnt institution to connect to each
            other
          </p>
        </div>
        <span>
          <img src="/assets/img.png" alt="" className="object-cover h-140 w-200 rounded-lg mt-20 shadow-2xl" />
        </span>
      </section>

       {/* Mentor Section */}
      <section className='p-12 min-h-screen'>
        <h2 className="text-4xl font-semibold text-center ">
          Meet Our Mentors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-8xl h-48 m-12 ">
          {Array.isArray(mentors) && mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={mentor.imageUrl || "/default-avatar.png"}
                alt={mentor.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-2 border-indigo-500"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                {mentor.name}
              </h3>
              <p className="text-indigo-400 text-sm text-center">
                {mentor.expertise}
              </p>
              <p className="text-gray-300 text-sm mt-3 text-center line-clamp-3">
                {mentor.bio}
              </p>
              {mentor.linkedin && (
                <a
                  href={mentor.linkedin}
                  target="_blank"
                  className="block mt-4 text-center text-indigo-400 hover:underline"
                >
                  Connect on LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
