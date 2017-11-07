node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
    def nodeHome = tool 'NodeJS1.2.4'
    env.PATH="${env.PATH}:${nodeHome}/bin"
    sh 'npm install'
  stage 'Cleanup'
      sh 'rm node_modules -rf'
      mail (to: 'mihir.gandhi@infostretch.com',
                subject: 'Project Build Successful',
                body: 'project build successful');             
}
