def gv

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    echo 'Building the application...'
                    sh 'npm install'
                    sh 'npm run  build'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    echo 'Testing the application...'
                    sh 'npm run  test'
                }
            }
        }
        stage('Build and push image') {
            steps {
                script {
                    echo "Building and pushing the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                        sh "docker build -t ddevopsfordevelopers/devops-for-devs:react-app-1.0 ."
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker push ddevopsfordevelopers/devops-for-devs:react-app-1.0"
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