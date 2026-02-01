#!/bin/bash

# ============================================
# Sepia Air Instruments - Deployment Script
# ============================================

set -e

echo "🎵 Sepia Air Instruments - Deployment Script"
echo "============================================"

# Configuration
DOMAIN="sepia.website"
APP_DIR="/opt/sepia"
REPO_URL="https://github.com/MohsinCell/SEPIA-Air-Instruments.git"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[✓]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[!]${NC} $1"
}

print_error() {
    echo -e "${RED}[✗]${NC} $1"
}

# Step 1: Update system
echo ""
echo "Step 1: Updating system packages..."
apt update && apt upgrade -y
print_status "System updated"

# Step 2: Install Docker if not present
echo ""
echo "Step 2: Installing Docker..."
if ! command -v docker &> /dev/null; then
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    rm get-docker.sh
    systemctl enable docker
    systemctl start docker
    print_status "Docker installed"
else
    print_status "Docker already installed"
fi

# Step 3: Install Docker Compose if not present
echo ""
echo "Step 3: Installing Docker Compose..."
if ! command -v docker-compose &> /dev/null; then
    apt install -y docker-compose-plugin
    # Create symlink for docker-compose command
    ln -sf /usr/libexec/docker/cli-plugins/docker-compose /usr/local/bin/docker-compose 2>/dev/null || true
    print_status "Docker Compose installed"
else
    print_status "Docker Compose already installed"
fi

# Step 4: Install Nginx
echo ""
echo "Step 4: Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt install -y nginx
    systemctl enable nginx
    print_status "Nginx installed"
else
    print_status "Nginx already installed"
fi

# Step 5: Install Certbot
echo ""
echo "Step 5: Installing Certbot..."
if ! command -v certbot &> /dev/null; then
    apt install -y certbot python3-certbot-nginx
    print_status "Certbot installed"
else
    print_status "Certbot already installed"
fi

# Step 6: Clone or update repository
echo ""
echo "Step 6: Setting up application..."
if [ -d "$APP_DIR" ]; then
    print_warning "App directory exists, pulling latest changes..."
    cd $APP_DIR
    git pull origin main
else
    git clone $REPO_URL $APP_DIR
    cd $APP_DIR
fi
print_status "Repository ready"

# Step 7: Create Nginx configuration
echo ""
echo "Step 7: Configuring Nginx..."
cat > /etc/nginx/sites-available/sepia << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name sepia.website www.sepia.website;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Enable the site
ln -sf /etc/nginx/sites-available/sepia /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default 2>/dev/null || true

# Test Nginx configuration
nginx -t
systemctl reload nginx
print_status "Nginx configured"

# Step 8: Build and start Docker container
echo ""
echo "Step 8: Building and starting application..."
cd $APP_DIR
docker-compose down 2>/dev/null || true
docker-compose up -d --build
print_status "Application started"

# Step 9: Wait for container to be ready
echo ""
echo "Step 9: Waiting for application to be ready..."
sleep 5

# Check if container is running
if docker ps | grep -q sepia; then
    print_status "Container is running"
else
    print_error "Container failed to start. Check logs with: docker-compose logs"
    exit 1
fi

# Step 10: Obtain SSL certificate
echo ""
echo "Step 10: Obtaining SSL certificate..."
print_warning "Make sure your domain DNS points to this server (157.245.104.83)"
echo ""
read -p "Press Enter to continue with SSL setup (or Ctrl+C to skip)..."

certbot --nginx -d sepia.website -d www.sepia.website --non-interactive --agree-tos --email admin@sepia.website --redirect

print_status "SSL certificate obtained"

# Step 11: Setup auto-renewal
echo ""
echo "Step 11: Setting up SSL auto-renewal..."
(crontab -l 2>/dev/null | grep -v certbot; echo "0 12 * * * /usr/bin/certbot renew --quiet") | crontab -
print_status "Auto-renewal configured"

# Final status
echo ""
echo "============================================"
echo -e "${GREEN}🎉 Deployment Complete!${NC}"
echo "============================================"
echo ""
echo "Your application is now live at:"
echo "  https://sepia.website"
echo ""
echo "Useful commands:"
echo "  View logs:     cd $APP_DIR && docker-compose logs -f"
echo "  Restart app:   cd $APP_DIR && docker-compose restart"
echo "  Stop app:      cd $APP_DIR && docker-compose down"
echo "  Update app:    cd $APP_DIR && git pull && docker-compose up -d --build"
echo ""
