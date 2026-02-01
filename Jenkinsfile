def gv

pipeline {
    agent any
    stages {
        stage('Installing deps') {
            steps {
                script {
                    echo 'Installing dependencies...'
                    sh 'npm install'
                }
            }
        }
        stage('Build and push image') {
            steps {
                script {
                    echo "Building and pushing the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                        sh "docker build -t devopsfordevelopers/devops-for-devs:node-app-1.0 ."
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker push devopsfordevelopers/devops-for-devs:node-app-1.0"
                    }
                }
            }
        }
        stage('deploy') {
            steps {
                script {
                    echo 'deploying docker image...'
                    sh "kubectl apply -f deploy/deploy.yaml"
                    sh "kubectl apply -f deploy/service-cip.yaml"
                    sh "kubectl apply -f deploy/ingress.yaml"
                }
            }
        }
    }
}