pipeline {

    agent any

    tools {
        nodejs "Nodejs"
    }

    environment {
        DOCKER_REGISTRY = "docker.io"
        DOCKERHUB_CREDENTIALS = credentials('DOCKER_HUB_CREDENTIAL')
        VERSION = "${env.BUILD_ID}"
        IMAGE_NAME = "namrata11111/food-delivery-app-fe"
    }


    stages {


        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }


        stage('Build Angular Project') {
            steps {
                sh 'npm run build'
            }
        }


        stage('Docker Build and Push') {
            steps {

                sh '''
                echo $DOCKERHUB_CREDENTIALS_PSW | docker login \
                -u $DOCKERHUB_CREDENTIALS_USR \
                --password-stdin
                '''

                sh '''
                docker build \
                -t ${IMAGE_NAME}:${VERSION} .
                '''

                sh '''
                docker push ${IMAGE_NAME}:${VERSION}
                '''

                sh 'docker logout'
            }
        }


        stage('Update Image Tag in GitOps') {

            steps {

                checkout scmGit(
                    branches: [[name: '*/master']],
                    extensions: [],
                    userRemoteConfigs: [[
                        credentialsId: 'git-ssh-keys',
                        url: 'git@github.com:deveshraut2372/deployement-files.git'
                    ]]
                )


                script {

                    sh '''
                    echo "Updating image tag..."

                    sed -i "s|image:.*|image: ${IMAGE_NAME}:${VERSION}|g" aws/angular-manifest.yml
                    '''


                    sh '''
                    git config user.email "jenkins@example.com"
                    git config user.name "Jenkins"

                    git add .

                    git diff --cached --quiet || \
                    git commit -m "Update image tag ${VERSION}"
                    '''


                    sshagent(['git-ssh-keys']) {

                        sh '''
                        git push origin master
                        '''

                    }

                }
            }
        }


        stage('Cleanup Workspace') {

            steps {

                deleteDir()

            }
        }


        stage('Docker Cleanup') {

            steps {

                sh '''
                docker image prune -f
                '''

            }
        }

    }


    post {

        success {

            echo "Pipeline completed successfully"

        }


        failure {

            echo "Pipeline failed"

        }


        always {

            echo "Cleaning workspace"

        }

    }

}