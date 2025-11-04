import { PrismaClient, UserRole, HackathonStatus } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  
  const adminPassword = await bcrypt.hash('admin123', 12)
  const admin = await prisma.user.upsert({
    where: { email: 'admin@innovortex.com' },
    update: {},
    create: {
      email: 'admin@innovortex.com',
      name: 'Admin User',
      password: adminPassword,
      role: UserRole.ADMIN,
      bio: 'Platform administrator',
    },
  })

  const organizerPassword = await bcrypt.hash('organizer123', 12)
  const organizer = await prisma.user.upsert({
    where: { email: 'organizer@innovortex.com' },
    update: {},
    create: {
      email: 'organizer@innovortex.com',
      name: 'Event Organizer',
      password: organizerPassword,
      role: UserRole.ORGANIZER,
      bio: 'Passionate about organizing amazing hackathons',
    },
  })

  // Create judge user
  const judgePassword = await bcrypt.hash('judge123', 12)
  const judge = await prisma.user.upsert({
    where: { email: 'judge@innovortex.com' },
    update: {},
    create: {
      email: 'judge@innovortex.com',
      name: 'Expert Judge',
      password: judgePassword,
      role: UserRole.JUDGE,
      bio: 'Senior developer with 10+ years experience',
    },
  })

  // Create participant users
  const participant1Password = await bcrypt.hash('participant123', 12)
  const participant1 = await prisma.user.upsert({
    where: { email: 'participant1@innovortex.com' },
    update: {},
    create: {
      email: 'participant1@innovortex.com',
      name: 'Alice Developer',
      password: participant1Password,
      role: UserRole.PARTICIPANT,
      bio: 'Full-stack developer passionate about innovation',
      linkedGithub: 'alice-dev',
    },
  })

  const participant2Password = await bcrypt.hash('participant123', 12)
  const participant2 = await prisma.user.upsert({
    where: { email: 'participant2@innovortex.com' },
    update: {},
    create: {
      email: 'participant2@innovortex.com',
      name: 'Bob Designer',
      password: participant2Password,
      role: UserRole.PARTICIPANT,
      bio: 'UI/UX designer with a love for clean interfaces',
      linkedGithub: 'bob-design',
    },
  })

  // Create sample hackathons
  const hackathon1 = await prisma.hackathon.upsert({
    where: { slug: 'ai-innovation-2024' },
    update: {},
    create: {
      title: 'AI Innovation Challenge 2024',
      slug: 'ai-innovation-2024',
      description: 'Build the next generation of AI-powered applications that solve real-world problems. This hackathon focuses on practical AI implementations that can make a difference in people\'s lives.',
      coverImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
      startDate: new Date('2024-03-15T09:00:00Z'),
      endDate: new Date('2024-03-17T18:00:00Z'),
      timezone: 'UTC',
      tags: JSON.stringify(['AI', 'Machine Learning', 'Innovation']),
      organizerId: organizer.id,
      capacity: 100,
      status: HackathonStatus.PUBLISHED,
    },
  })

  const hackathon2 = await prisma.hackathon.upsert({
    where: { slug: 'web3-future' },
    update: {},
    create: {
      title: 'Web3 Future Hackathon',
      slug: 'web3-future',
      description: 'Explore the decentralized web and build applications that leverage blockchain technology. From DeFi to NFTs, create the future of the internet.',
      coverImage: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800',
      startDate: new Date('2024-04-20T10:00:00Z'),
      endDate: new Date('2024-04-22T20:00:00Z'),
      timezone: 'UTC',
      tags: JSON.stringify(['Web3', 'Blockchain', 'DeFi', 'NFT']),
      organizerId: organizer.id,
      capacity: 50,
      status: HackathonStatus.PUBLISHED,
    },
  })
  const hackathon3 = await prisma.hackathon.upsert({
    where: { slug: 'NASA-space-2024' },
    update: {},
    create: {
      title: 'NASA Space x',
      slug: 'NASA creative ',
      description: 'Build the next generation of AI-powered applications that solve real-world problems. This hackathon focuses on practical AI implementations that can make a difference in people\'s lives.',
      coverImage: 'https://cdn.mos.cms.futurecdn.net/wqkwy8CNJGgWVp9nZBSqXk.jpg',
      startDate: new Date('2024-03-15T09:00:00Z'),
      endDate: new Date('2024-03-17T18:00:00Z'),
      timezone: 'UTC',
      tags: JSON.stringify(['AI', 'Machine Learning', 'Innovation']),
      organizerId: organizer.id,
      capacity: 100,
      status: HackathonStatus.PUBLISHED,
    },
  })
  // Create sample teams
  const team1 = await prisma.team.create({
    data: {
      name: 'AI Innovators',
      hackathonId: hackathon1.id,
      leaderId: participant1.id,
      members: {
        create: [
          {
            userId: participant1.id,
            role: 'LEADER',
          },
          {
            userId: participant2.id,
            role: 'MEMBER',
          },
        ],
      },
    },
  })

  // Create sample submission
  const submission1 = await prisma.submission.create({
    data: {
      title: 'Smart Health Assistant',
      description: 'An AI-powered health assistant that helps users track symptoms and get personalized health recommendations.',
      repositoryUrl: 'https://github.com/ai-innovators/smart-health-assistant',
      liveDemoUrl: 'https://smart-health-demo.vercel.app',
      teamId: team1.id,
      hackathonId: hackathon1.id,
      uploadedBy: participant1.id,
      status: 'PENDING',
    },
  })

  // Create judge assignment
  await prisma.judgeAssignment.create({
    data: {
      judgeId: judge.id,
      submissionId: submission1.id,
      hackathonId: hackathon1.id,
    },
  })

  // Create sample announcements
  await prisma.announcement.create({
    data: {
      title: 'Welcome to AI Innovation Challenge!',
      body: 'We\'re excited to have you participate in this year\'s AI Innovation Challenge. Check out the resources section for helpful links and documentation.',
      hackathonId: hackathon1.id,
      pinned: true,
    },
  })

  await prisma.announcement.create({
    data: {
      title: 'Submission Deadline Reminder',
      body: 'Don\'t forget that submissions are due by 6 PM UTC on March 17th. Make sure to test your demo links before submitting!',
      hackathonId: hackathon1.id,
      pinned: false,
    },
  })

  console.log('✅ Database seeded successfully!')
  console.log('\n📧 Test accounts created:')
  console.log('Admin: admin@innovortex.com / admin123')
  console.log('Organizer: organizer@innovortex.com / organizer123')
  console.log('Judge: judge@innovortex.com / judge123')
  console.log('Participant 1: participant1@innovortex.com / participant123')
  console.log('Participant 2: participant2@innovortex.com / participant123')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })