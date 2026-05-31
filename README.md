# NexGen Tech - Company Website Deployment with Docker & Git

## Project Overview
A fully responsive, modern company website for a DevOps/IT consulting firm, containerized using Docker and version-controlled with Git & GitHub.

## Features
- Professional UI/UX with Blue & White theme
- 4 Pages: Home, About, Services, Contact
- Interactive counter animations, testimonials, service cards
- Mobile-first responsive design
- Dockerized Nginx web server
- Contact form with JavaScript validation

## Technologies Used
- HTML5, CSS3, JavaScript
- Git & GitHub
- Docker Desktop (Windows)
- Nginx

## Installation Guide (Windows)
1. Install [VS Code](https://code.visualstudio.com/), [Git for Windows](https://git-scm.com/download/win), [Docker Desktop](https://www.docker.com/products/docker-desktop/).
2. Clone the repo: `git clone https://github.com/your-username/company-website.git`
3. Build Docker image: `docker build -t company-website .`
4. Run container: `docker run -d -p 8080:80 --name my-site company-website`
5. Open browser: `http://localhost:8080`

## Git Commands
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/your-username/company-website.git
git push -u origin main