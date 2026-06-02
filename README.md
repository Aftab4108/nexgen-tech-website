# 🚀 NexGen Tech – Enterprise Dockerized Company Website

![Docker](https://img.shields.io/badge/Docker-Containerized-2496ED?logo=docker\&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Web%20Server-009639?logo=nginx\&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-Frontend-E34F26?logo=html5\&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Interactive-F7DF1E?logo=javascript\&logoColor=black)
![GitHub](https://img.shields.io/badge/GitHub-Version%20Control-181717?logo=github\&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## 📌 Project Overview

**NexGen Tech** is a modern, responsive company website designed as a practical **DevOps portfolio project**.

The project demonstrates the complete software deployment workflow from development to containerized deployment using Docker and Nginx.

This project showcases:

* Frontend development using HTML, CSS, and JavaScript
* Version control using Git and GitHub
* Docker containerization
* Nginx web server deployment
* Public exposure using ngrok
* Foundation for CI/CD and Cloud deployment

---

## 🎯 Project Objectives

The primary goal of this project is to demonstrate essential DevOps concepts:

✔ Source Code Management (Git & GitHub)

✔ Infrastructure Packaging (Docker)

✔ Web Server Deployment (Nginx)

✔ Application Hosting

✔ Environment Portability

✔ Deployment Automation Readiness

✔ Cloud Migration Readiness

---

## 🏗 Architecture

```text
Developer
    │
    ▼
VS Code
    │
    ▼
Git Repository
    │
    ▼
GitHub Repository
    │
    ▼
Docker Build
    │
    ▼
Docker Container
    │
    ▼
Nginx Web Server
    │
    ▼
Website Access
    │
    ▼
ngrok Public URL
```

---

## ✨ Features

### User Interface

* Modern professional design
* Fully responsive layout
* Mobile-first approach
* Sticky navigation bar
* Smooth scrolling
* Hero section with CTA buttons
* Services showcase
* Company statistics section
* Testimonials section
* Contact form
* Footer with social links

### User Experience

* Fast loading pages
* Responsive navigation menu
* Scroll animations
* Hover effects
* Back-to-top button
* Interactive cards
* Form validation

### DevOps Features

* Dockerized application
* Nginx web server
* Portable deployment
* Easy environment replication
* Public sharing via ngrok
* CI/CD ready structure

---

## 🛠 Technology Stack

| Category           | Technology |
| ------------------ | ---------- |
| Frontend           | HTML5      |
| Styling            | CSS3       |
| Scripting          | JavaScript |
| Containerization   | Docker     |
| Web Server         | Nginx      |
| Version Control    | Git        |
| Repository Hosting | GitHub     |
| Public Exposure    | ngrok      |

---

## 📂 Project Structure

```text
nexgen-tech/
│
├── index.html
├── about.html
├── services.html
├── contact.html
│
├── css/
│   ├── style.css
│   └── responsive.css
│
├── js/
│   └── script.js
│
├── images/
│
├── Dockerfile
├── .dockerignore
├── .gitignore
├── README.md
└── deployment-guide.md
```

---

## ⚙ Prerequisites

Before running this project, install:

### Git

```bash
git --version
```

### Docker Desktop

```bash
docker --version
```

### Optional Tools

* Visual Studio Code
* GitHub Desktop
* ngrok

---

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/your-username/nexgen-tech.git
```

```bash
cd nexgen-tech
```

---

### Build Docker Image

```bash
docker build -t nexgen-tech .
```

---

### Run Container

```bash
docker run -d -p 8080:80 --name nexgen-container nexgen-tech
```

---

### Access Website

Open:

```text
http://localhost:8080
```

---

## 🐳 Docker Configuration

Dockerfile:

```dockerfile
FROM nginx:latest

COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

---

## 🔧 Useful Docker Commands

### View Running Containers

```bash
docker ps
```

### Stop Container

```bash
docker stop nexgen-container
```

### Start Container

```bash
docker start nexgen-container
```

### Remove Container

```bash
docker rm nexgen-container
```

### View Logs

```bash
docker logs nexgen-container
```

### Remove Image

```bash
docker rmi nexgen-tech
```

---

## 🌐 Expose Website Publicly Using ngrok

### Authenticate ngrok

```bash
ngrok config add-authtoken YOUR_AUTH_TOKEN
```

### Start Tunnel

```bash
ngrok http 8080
```

Example:

```text
Forwarding https://your-project.ngrok-free.app -> http://localhost:8080
```

Share the generated URL with anyone to access the website.

---

## 🔄 Future DevOps Enhancements

### Phase 1

* Dockerized Website ✅
* GitHub Repository ✅
* Nginx Deployment ✅

### Phase 2

* GitHub Actions CI/CD
* Automated Docker Builds
* Docker Hub Integration

### Phase 3

* Jenkins Pipeline
* Automated Deployment

### Phase 4

* AWS EC2 Deployment
* Azure Virtual Machine Deployment

### Phase 5

* Kubernetes Deployment
* Minikube Testing
* Helm Charts

### Phase 6

* Prometheus Monitoring
* Grafana Dashboards
* Alert Management

### Phase 7

* Production Ready Infrastructure
* Load Balancing
* Auto Scaling
* Security Hardening

---

## 📸 Screenshots

Add screenshots after deployment.

```text
screenshots/
├── home.png
├── about.png
├── services.png
└── contact.png
```

---

## 💼 DevOps Skills Demonstrated

* Docker Containerization
* Nginx Configuration
* Git Version Control
* GitHub Repository Management
* Linux-based Deployment Concepts
* Application Packaging
* Deployment Automation Readiness
* Infrastructure Portability

---

## 🎓 Learning Outcomes

Through this project, you will gain practical experience with:

* Building containerized applications
* Deploying websites using Docker
* Managing source code with Git
* Hosting projects on GitHub
* Exposing local applications publicly
* Preparing projects for cloud deployment
* Understanding CI/CD workflows

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Aftab**

DevOps & Cloud Engineering Enthusiast

GitHub: https://github.com/Aftab4108
LinkedIn: https://www.linkedin.com/in/aftab-patel-8b853539a

Email: [aftabaltafpatel@gmail.com](mailto:aftabaltafpatel@gmail.com)

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠 Contribute improvements

📢 Share with others

---

### "Building the future through Automation, Cloud, and DevOps."