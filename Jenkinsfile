pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps { git 'https://github.com/your-username/company-website.git' }
        }
        stage('Build Docker Image') {
            steps { sh 'docker build -t company-website .' }
        }
        stage('Run Container') {
            steps { sh 'docker run -d -p 8080:80 --name my-site company-website' }
        }
    }
}