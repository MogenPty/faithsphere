# FaithSphere

**Empowering Faith Communities Worldwide**

FaithSphere is a comprehensive multi-tenant SaaS platform designed for faith-based organizations of all traditions—churches, mosques, temples, spiritual centers, and African spiritual organizations. Built with modern web technologies, FaithSphere provides the tools needed to manage, connect, and grow faith communities from a single branch to global operations.

## 🌟 Features

### Core Functionality
- **Member Management**: Complete profiles, family relations, membership status, and attendance tracking
- **Multi-Tenant Architecture**: Hierarchical structure supporting 7 organizational levels (International → Continental → Country → State/Province → Municipality → Branch → Location)
- **Role-Based Access Control**: Customizable permissions at every level with secure data isolation
- **Unified Communication**: Messaging and notifications across all organizational levels
- **Event Management**: Schedule, track, and manage events, meetings, and activities
- **Insights & Reporting**: Customized dashboards and analytics for data-driven decisions

### Technical Features
- Mobile-first responsive design
- Real-time data synchronization
- Secure cloud-based infrastructure
- API-first architecture for seamless integrations
- Dark mode support
- Scalable from single branch to global operations

## 🏗️ Architecture

FaithSphere implements a sophisticated multi-tenant architecture with complete data isolation:

```
International
  └── Continental
      └── Country
          └── State/Province
              └── Municipality
                  └── Branch
                      └── Location
```

Each level has appropriate access controls and oversight capabilities while maintaining security and privacy.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun package manager
- PostgreSQL database (Neon recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/faithsphere.git
cd faithsphere
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your configuration:
- Database connection (Neon/PostgreSQL)
- Stack Auth credentials
- Other required API keys

4. Run database migrations:
```bash
npx prisma migrate dev
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: [Neon](https://neon.tech) (PostgreSQL)
- **ORM**: Prisma
- **Authentication**: [Stack Auth](https://stack-auth.com)
- **Icons**: Lucide React
- **Fonts**: Crimson Text (serif) & Lato (sans-serif)

## 📁 Project Structure

```
faithsphere/
├── app/
│   ├── (public)/          # Public landing pages
│   ├── (secured)/         # Protected dashboard pages
│   │   └── dashboard/     # Main dashboard
│   ├── handler/           # Auth handlers
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── prisma/
│   └── schema.prisma      # Database schema
├── stack/                 # Stack Auth configuration
├── docs/                  # Project documentation
└── public/                # Static assets
```

## 🌍 Multi-Tenant Support

FaithSphere is designed to support organizations of all sizes:

- **Single Branch**: Perfect for individual churches or spiritual centers
- **Regional**: Manage multiple locations within a city or state
- **National**: Coordinate activities across an entire country
- **International**: Global oversight with continental and country-level management

## 🔒 Security & Privacy

- Role-based access control (RBAC) at all levels
- Data isolation between tenants
- Secure authentication with Stack Auth
- GDPR and data privacy compliant
- Regular security audits and updates

## 📚 Documentation

For detailed documentation, see the [docs](./docs) directory:
- [System Architecture](./docs/plan.md)
- API Documentation (coming soon)
- Deployment Guide (coming soon)

## 🤝 Contributing

We welcome contributions! Please see our contributing guidelines (coming soon).

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Inclusive by Design

FaithSphere welcomes all faith traditions:
- Christianity (all denominations)
- Islam
- Hinduism
- Buddhism
- Judaism
- African spiritual traditions
- Indigenous faiths
- And more

Our platform adapts to your unique needs while respecting your sacred practices.

## 📞 Support

For support, email support@faithsphere.com or join our community Discord.

## 🚢 Deployment

The easiest way to deploy FaithSphere is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/faithsphere)

For detailed deployment instructions, see our [deployment documentation](./docs/deployment.md).

---

**Built with ❤️ for faith communities worldwide**
