node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
      node -v
      npm install
  stage 'Cleanup'
      sh 'rm node_modules -rf'
      mail (to: 'mihir.gandhi@infostretch.com',
                subject: 'Project Build Successful',
                body: 'project build successful');             
}
