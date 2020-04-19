pipeline {
    agent any

    tools {nodejs "node"}

    environment {
        CHROME_BIN = '/bin/google-chrome'
    }

    stages {
    stage('Prepare Workspace') {
        steps {
            git branch: 'master',
                credentialsId: 'madhan0809',
                url: 'https://github.com/Madhan0809/CypressAutomation.git'

            sh "ls -lat"
        }
    }
        stage('Functional Tests') {
            steps {
                sh 'npm install'
                sh 'npm run bddTests'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
    post {
         always {
                    publishHTML (target: [
                    allowMissing: true,
                    alwaysLinkToLastBuild: false,
                    keepAll: true,
                    reportDir: 'test/report',
                    reportFiles: 'cucumber_report.html',
                    reportName: "Automation Tests Report"
                    ])
                }
    }
}