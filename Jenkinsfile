node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
      sh 'node -v'
      sh 'npm install' 
      sh 'npm test'
  stage 'Cleanup'
      sh 'rm node_modules -rf'
      mail body: 'project build successful'
                subject: 'Project Build Successful',
                to: 'mihir.gandhi@infostretch.com'
}
