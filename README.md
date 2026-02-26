# OmniConvert - Universal File Conversion Platform

A powerful SaaS platform for converting documents, images, audio, and video files with automatic format detection and intelligent conversion.

## 🚀 Features

- **Universal Format Support**: Documents (PDF, DOCX, XLSX, PPTX, TXT, CSV, EPUB, MOBI), Images (JPG, PNG, WEBP, GIF, SVG, HEIC, TIFF), Audio (MP3, WAV, AAC, FLAC, OGG), Video (MP4, MOV, AVI, MKV, WEBM)
- **Intelligent Detection**: Automatic file type recognition via magic numbers/MIME types
- **Batch Processing**: Convert multiple files simultaneously
- **OCR Support**: Extract text from scanned PDFs and images (Pro feature)
- **Secure & Private**: Automatic 24-hour file deletion, end-to-end encryption
- **Freemium Model**: Free tier (50MB, 5 conversions/day) + Pro tier (2GB, unlimited)

## 📦 Monorepo Structure

```
omniconvert/
├── apps/
│   ├── web/          # Next.js 14 frontend (App Router)
│   ├── api/          # Express.js backend API
│   └── worker/       # Conversion job worker
├── packages/
│   ├── types/        # Shared TypeScript types
│   ├── api-client/   # Type-safe API client
│   ├── ui/           # React component library
│   └── utils/        # Shared utilities
└── turbo.json        # Turborepo configuration
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, TypeScript
- **Database**: PostgreSQL with Prisma ORM
- **Queue**: BullMQ + Redis
- **Storage**: AWS S3
- **Auth**: NextAuth.js (Email/Password, Google OAuth)
- **Payments**: Paddle
- **Conversions**: 
  - Self-hosted: Sharp (images), LibreOffice (documents)
  - API: CloudConvert (video/audio/OCR)
- **Deployment**: Vercel (web), Railway (API + worker)

## 🚦 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Docker & Docker Compose (for local development)

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/omniconvert.git
cd omniconvert

# Install dependencies
npm install

# Start local services (PostgreSQL, Redis, LocalStack S3)
docker-compose up -d

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
cd apps/api
npx prisma migrate dev
cd ../..

# Start all applications
npm run dev
```

The services will be available at:
- Web: http://localhost:3000
- API: http://localhost:4000
- Worker: running in background

## 📝 Development

```bash
# Run all apps in development mode
npm run dev

# Build all apps
npm run build

# Run tests
npm run test

# Run E2E tests
npm run test:e2e

# Lint code
npm run lint

# Format code
npm run format

# Clean build artifacts
npm run clean
```

## 🧪 Testing

### Unit Tests
```bash
npm run test
```

### E2E Tests
```bash
npm run test:e2e
```

### Load Tests
```bash
cd apps/api
npm run test:load
```

## 🚀 Deployment

### Web (Vercel)
- Push to `main` branch triggers automatic deployment
- Environment variables configured in Vercel dashboard

### API & Worker (Railway)
- Connected to GitHub repository
- Auto-deploy on push to `main`
- Database and Redis provisioned as Railway addons

### S3 Buckets
- Create `omniconvert-uploads` and `omniconvert-outputs` buckets
- Configure lifecycle policies for 24-hour auto-deletion
- Set CORS for direct browser uploads

## 📖 Documentation

- [API Documentation](./apps/api/README.md)
- [Frontend Guide](./apps/web/README.md)
- [Worker Architecture](./apps/worker/README.md)
- [Contributing Guide](./CONTRIBUTING.md)

## 📄 License

MIT License - see [LICENSE](./LICENSE) file for details

## 🤝 Support

For issues and questions, please open an issue on GitHub or contact support@omniconvert.com
