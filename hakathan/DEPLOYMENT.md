# CareerAI Deployment Guide

## Deployment Options

### Option 1: Vercel (Frontend) + Heroku/Railway (Backend)

#### Frontend Deployment on Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Set build command: `npm run build`
   - Set output directory: `dist`
   - Deploy!

3. **Environment Variables**
   - Add `VITE_API_URL` pointing to your backend

#### Backend Deployment on Railway

1. **Connect Repository**
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "GitHub repo"
   - Choose your repository

2. **Configure Environment**
   - Add environment variables in Railway dashboard
   - Set `NODE_ENV=production`
   - Set `PORT=3001`

3. **Deploy**
   - Railway will auto-deploy on push

### Option 2: Docker Deployment

#### Create Docker Images

**Frontend Dockerfile**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Backend Dockerfile**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY server ./server
EXPOSE 3001
CMD ["node", "server/index.js"]
```

**docker-compose.yml**
```yaml
version: '3.8'
services:
  frontend:
    build: .
    ports:
      - "3000:80"
    depends_on:
      - backend

  backend:
    build:
      context: .
      dockerfile: Dockerfile.backend
    ports:
      - "3001:3001"
    environment:
      NODE_ENV: production
      PORT: 3001
```

### Option 3: Traditional VPS (DigitalOcean, AWS EC2, Linode)

#### Setup Steps

1. **SSH into your server**
   ```bash
   ssh root@your_server_ip
   ```

2. **Install Node.js**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Install Nginx**
   ```bash
   sudo apt-get install nginx -y
   ```

4. **Clone your repository**
   ```bash
   git clone your_repo_url
   cd career-guidance-platform
   ```

5. **Install dependencies**
   ```bash
   npm install
   npm run build
   ```

6. **Setup PM2 (Process Manager)**
   ```bash
   npm install -g pm2
   pm2 start server/index.js --name "careerai-api"
   pm2 startup
   pm2 save
   ```

7. **Configure Nginx**
   ```nginx
   server {
     listen 80;
     server_name yourdomain.com;

     # Frontend
     location / {
       root /home/user/career-guidance-platform/dist;
       try_files $uri $uri/ /index.html;
     }

     # API proxy
     location /api {
       proxy_pass http://localhost:3001;
       proxy_http_version 1.1;
       proxy_set_header Upgrade $http_upgrade;
       proxy_set_header Connection 'upgrade';
       proxy_set_header Host $host;
       proxy_cache_bypass $http_upgrade;
     }
   }
   ```

8. **Enable SSL with Let's Encrypt**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx -y
   sudo certbot --nginx -d yourdomain.com
   ```

## Production Checklist

- [ ] Environment variables configured
- [ ] Database connected (if using)
- [ ] Error logging setup
- [ ] CORS configured properly
- [ ] HTTPS enabled
- [ ] API rate limiting
- [ ] User authentication implemented
- [ ] Database backups scheduled
- [ ] Monitoring/alerts setup
- [ ] CDN configured for static files

## Performance Optimization

1. **Enable GZIP compression** in Nginx
2. **Setup caching** for static assets
3. **Use a CDN** (Cloudflare, Netlify)
4. **Optimize images** with tools like Sharp
5. **Implement API caching** with Redis
6. **Setup database indexing**

## Security Best Practices

1. Keep dependencies updated: `npm audit fix`
2. Use environment variables for secrets
3. Implement rate limiting
4. Setup CORS properly
5. Use HTTPS everywhere
6. Validate and sanitize inputs
7. Keep logs and monitor for anomalies

## Monitoring & Logging

Recommended tools:
- **Logging**: Sentry, LogRocket, Datadog
- **Monitoring**: New Relic, DataDog, Prometheus
- **Performance**: Google PageSpeed Insights, WebPageTest
- **Uptime**: Uptime Robot, StatusPage.io

## Domain & SSL

1. Purchase domain from GoDaddy, Namecheap, or similar
2. Point DNS to your server IP
3. Setup SSL certificate (free with Let's Encrypt)
4. Configure automatic renewal

## Support

For deployment issues, refer to official documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Docker Docs](https://docs.docker.com)
