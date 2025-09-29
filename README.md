# Bykorp Backend API

A Node.js/Express API server for the Bykorp Digital Agency website.

## 🚀 Features

- **Express.js** server with TypeScript
- **MongoDB Atlas** integration  
- **CORS** enabled for frontend
- **RESTful API** endpoints
- **Professional** error handling

## 📋 API Endpoints

- `GET /health` - Health check
- `GET /api/services` - Get all services
- `GET /api/portfolio` - Get portfolio items
- `GET /api/portfolio/featured` - Get featured portfolio items
- `GET /api/reviews` - Get all reviews
- `GET /api/reviews/featured` - Get featured reviews
- `POST /api/reservations` - Create a new reservation
- `GET /api/reservations` - Get all reservations (admin)

## 🌐 Environment Variables

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bykorp_agency
PORT=3001
NODE_ENV=production
```

## 🛠️ Deployment

### Deploy to Render

1. **Fork this repository**
2. **Connect to Render**:
   - Go to [render.com](https://render.com)
   - Create new Web Service
   - Connect your GitHub repository
3. **Configure**:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node.js
4. **Set Environment Variables**:
   - `MONGODB_URI`: Your MongoDB Atlas connection string
   - `NODE_ENV`: production

### Deploy to Railway

1. **Install Railway CLI**: `npm install -g @railway/cli`
2. **Login**: `railway login --browserless`
3. **Deploy**: `railway up`

### Deploy to Vercel

1. **Install Vercel CLI**: `npm install -g vercel`
2. **Deploy**: `vercel --prod`

## 🏃‍♂️ Local Development

```bash
npm install
npm run dev
```

Server will run on http://localhost:3001

## 📦 Build

```bash
npm run build
npm start
```

---

**Live Frontend**: https://arif12islam.github.io/bykorp-digital-agency/