node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
    def nodeHome = tool 'NodeJS1.2.4'
    bat "\"${nodeHome}\"\\node.exe -v"
    bat "\"${nodeHome}\"\\npm -v"
    bat "\"${nodeHome}\"\\npm install"
  stage 'Cleanup'
    bat "\"${nodeHome}\"\\rm node_modules -rf"
    mail (to: 'mihir.gandhi@infostretch.com',
                subject: 'Project Build Successful',
                body: 'project build successful');             
}
