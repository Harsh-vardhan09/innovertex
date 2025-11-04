'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { trpc } from '@/lib/trpc'
import { formatDate } from '@/lib/utils'

export default function HackathonsPage() {
  const [search, setSearch] = useState('')
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const { data, isLoading, error } = trpc.hackathons.list.useQuery({
    search: search || undefined,
    tags: selectedTags.length > 0 ? selectedTags : undefined,
    status: 'PUBLISHED',
    page: 1,
    perPage: 12,
  })

  const popularTags = ['AI', 'Web3', 'Mobile', 'IoT', 'Blockchain', 'Machine Learning']

  const toggleTag = (tag: string) => {
    setSelectedTags(prev =>
      prev.includes(tag)
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Hackathons</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join exciting hackathons, build amazing projects, and connect with fellow developers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search hackathons..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {popularTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedTags.includes(tag)
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Hackathons Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardHeader>
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : data?.hackathons.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No hackathons found</h3>
            <p className="text-gray-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.hackathons.map((hackathon) => (
              <Card key={hackathon.id} className="hover:shadow-lg transition-shadow ">
                {hackathon.coverImage && (
                  <div className="h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-t-lg">
                    <img src={hackathon.coverImage} alt="" />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2 mt-16 ">{hackathon.title}</CardTitle>
                  <CardDescription className="line-clamp-2 mt-8">
                    {hackathon.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600">
                      <div>📅 {formatDate(hackathon.startDate)} - {formatDate(hackathon.endDate)}</div>
                      <div>👥 {hackathon._count.teams} teams registered</div>
                      <div>📝 {hackathon._count.submissions} submissions</div>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {(() => {
                        try {
                          const tags = JSON.parse(hackathon.tags || '[]')
                          return (
                            <>
                              {tags.slice(0, 3).map((tag: string) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                                >
                                  {tag}
                                </span>
                              ))}
                              {tags.length > 3 && (
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                                  +{tags.length - 3} more
                                </span>
                              )}
                            </>
                          )
                        } catch {
                          return null
                        }
                      })()}
                    </div>

                    <Link href={`/hackathons/${hackathon.slug}`}>
                      <Button className="w-full">View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {data && data.pagination.totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="text-sm text-gray-600">
              Showing {data.hackathons.length} of {data.pagination.total} hackathons
            </div>
          </div>
        )}
      </div>
    </div>
  )
}