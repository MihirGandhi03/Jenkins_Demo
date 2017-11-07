node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
  def nodeHome = tool name: 'node-5.10.1'
  sh "${nodeHome}/bin/node -v"
  stage 'Cleanup'
      sh 'rm node_modules -rf'
      mail (to: 'mihir.gandhi@infostretch.com',
                subject: 'Project Build Successful',
                body: 'project build successful');             
}
