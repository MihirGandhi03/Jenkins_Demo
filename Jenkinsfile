node('master'){
   stage 'Checkout'
	    checkout scm
  stage 'Test'
    def nodeHome = tool 'NodeJS1.2.4'
    bat "\"${nodeHome}\"\\node.exe -v"
    bat "\"${nodeHome}\"\\npm -v"
    bat "\"${nodeHome}\"\\npm install --scripts-prepend-node-path"
  stage 'Cleanup'
    bat "rmdir node_modules"
    mail (to: 'mihirgandhi03@yahoo.com',
                subject: 'Project Build Successful',
                body: 'project build successful');             
}
