
import { 
  User, 
  Trophy, 
  Calendar, 
  Code, 
  Star, 
  Users, 
  Award, 
  Zap, 
  GitBranch, 
  ExternalLink,
  Bell,
  Settings,
  ChevronRight,
  Activity,
  Target,
  Sparkles
} from 'lucide-react'


import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'


export default function dashboard() {
  
  
  const user = {
    name: "Dev Mishra",
    email: "DevMishra@student.edu",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQGKWSiOUiAdMQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1716051519703?e=2147483647&v=beta&t=LPX23NkEt2ve04uyO-yz-bOWibcYE2bzjDpOph2R-Z4",
    rank: "Innovator",
    level: 7,
    xp: 2840,
    nextLevelXp: 3000,
    joinDate: "Jan 2024",
    bio: "Full-stack developer passionate about AI and sustainable tech solutions",
    skills: ["React", "Python", "Machine Learning", "UI/UX"],
    github: "dev-m03",
    linkedin: "DevMishra"
  }

  const stats = {
    totalHackathons: 12,
    wins: 3,
    submissions: 8,
    teamCollabs: 15,
    streakDays: 45
  }

  const recentHackathons = [
    {
      id: 1,
      title: "AI Innovation Challenge 2024",
      status: "completed",
      rank: 2,
      team: "AI Innovators",
      date: "Mar 2024",
      prize: "2nd Place",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400"
    },
    {
      id: 2,
      title: "Climate Tech Solutions",
      status: "completed",
      rank: 1,
      team: "EcoBuilders",
      date: "Feb 2024",
      prize: "Winner",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400"
    },
    {
      id: 3,
      title: "FinTech Innovation Summit",
      status: "ongoing",
      team: "MoneyFlow",
      date: "Apr 2024",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400"
    }
  ]

  const achievements = [
    { name: "First Win", icon: Trophy, earned: true, date: "Feb 2024" },
    { name: "Team Player", icon: Users, earned: true, date: "Jan 2024" },
    { name: "Code Warrior", icon: Code, earned: true, date: "Mar 2024" },
    { name: "Innovation Star", icon: Star, earned: false },
    { name: "Streak Master", icon: Zap, earned: true, date: "Apr 2024" },
    { name: "Mentor", icon: Award, earned: false }
  ]

  const upcomingEvents = [
    { name: "Web3 Future Hackathon", date: "Apr 25", spots: 15 },
    { name: "Mobile App Marathon", date: "May 10", spots: 8 },
    { name: "Healthcare AI Challenge", date: "Jun 1", spots: 22 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

     
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
          
          

      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">
      
          <div className="lg:col-span-4">
          
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  <img src={user.avatar} alt="" />
                </div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-400">{user.email}</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    {user.rank}
                  </div>
                  <span className="text-sm text-gray-400">Level {user.level}</span>
                </div>
              </div>

             
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span>Experience</span>
                  <span>{user.xp}/{user.nextLevelXp} XP</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{width: `${(user.xp / user.nextLevelXp) * 100}%`}}
                  ></div>
                </div>
              </div>

              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-cyan-400">{stats.totalHackathons}</div>
                  <div className="text-sm text-gray-400">Hackathons</div>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{stats.wins}</div>
                  <div className="text-sm text-gray-400">Wins</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              
              <div className="flex space-x-3">
                <button className="flex-1 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <GitBranch className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </button>
                <button className="flex-1 bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm">LinkedIn</span>
                </button>
              </div>
            </div>

          
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-yellow-400" />
                Achievements
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className={`text-center p-3 rounded-lg transition-colors ${
                      achievement.earned ? 'bg-yellow-500/20 text-yellow-300' : 'bg-white/5 text-gray-500'
                    }`}>
                      <Icon className="w-6 h-6 mx-auto mb-1" />
                      <div className="text-xs">{achievement.name}</div>
                      {achievement.earned && achievement.date && (
                        <div className="text-xs opacity-75">{achievement.date}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          
          <div className="lg:col-span-8">
            
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Submissions</p>
                    <p className="text-2xl font-bold text-cyan-400">{stats.submissions}</p>
                  </div>
                  <Code className="w-8 h-8 text-cyan-400/60" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Team Collabs</p>
                    <p className="text-2xl font-bold text-purple-400">{stats.teamCollabs}</p>
                  </div>
                  <Users className="w-8 h-8 text-purple-400/60" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Current Streak</p>
                    <p className="text-2xl font-bold text-orange-400">{stats.streakDays}</p>
                  </div>
                  <Zap className="w-8 h-8 text-orange-400/60" />
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Win Rate</p>
                    <p className="text-2xl font-bold text-green-400">{Math.round((stats.wins/stats.totalHackathons)*100)}%</p>
                  </div>
                  <Target className="w-8 h-8 text-green-400/60" />
                </div>
              </div>
            </div>

           
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-blue-400" />
                  Recent Hackathons
                </h3>
                <button className="text-sm text-blue-400 hover:text-blue-300 flex items-center">
                  View All <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>

              <div className="space-y-4">
                {recentHackathons.map((hackathon) => (
                  <div key={hackathon.id} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{hackathon.title}</h4>
                        <p className="text-sm text-gray-400">Team: {hackathon.team} • {hackathon.date}</p>
                        <div className="flex items-center space-x-2 mt-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            hackathon.status === 'completed' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                          }`}>
                            {hackathon.status === 'completed' ? 'Completed' : 'Ongoing'}
                          </span>
                          {hackathon.prize && (
                            <span className="bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full text-xs font-medium">
                              {hackathon.prize}
                            </span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-6 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-green-400" />
                Upcoming Hackathons
              </h3>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div>
                      <h4 className="font-medium">{event.name}</h4>
                      <p className="text-sm text-gray-400">{event.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-400">{event.spots} spots left</p>
                      <button className="text-sm text-blue-400 hover:text-blue-300">Register</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}