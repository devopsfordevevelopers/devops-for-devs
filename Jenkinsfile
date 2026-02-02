pipeline {
    agent any

    tools {
        maven 'maven-3.9'
    }

    stages {
        
        stage('Build App') {
            steps {
                echo 'building the application...'
                sh 'mvn clean package'
            }
        }

        stage('Build and Push Image') {
            steps {
                script {
                    echo "Building and pushing the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                        sh "docker build -t devopsfordevelopers/devops-for-devs:java-app-1.0 ."
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker push devopsfordevelopers/devops-for-devs:java-app-1.0"
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'deploying docker image...'
                sh "kubectl apply -f deploy/deploy.yaml"
                sh "kubectl apply -f deploy/service-np.yaml"
            }
        }
    }
}
