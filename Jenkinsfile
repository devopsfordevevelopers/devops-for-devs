pipeline {
    agent any
    stages {
        
        stage('Build App') {
            steps {
                echo 'building the application...'
                sh 'npm install'
                sh 'npm run build'
                sh 'npm run test'
            }
        }

        stage('Build and Push Image') {
            steps {
                script {
                    echo "Building and pushing the docker image..."
                    withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                        sh "docker build -t devopsfordevelopers/devops-for-devs:react-app-1.0 ."
                        sh 'echo $PASS | docker login -u $USER --password-stdin'
                        sh "docker push devopsfordevelopers/devops-for-devs:react-app-1.0"
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
