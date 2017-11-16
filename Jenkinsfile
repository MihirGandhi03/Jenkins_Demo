node('master'){
  def app;
  stage 'Checkout'
	    checkout scm
  stage 'Test' 
    echo "${Environemnt}"
    def nodeHome = tool 'NodeJS1.2.4'
    bat "\"${nodeHome}\"\\node.exe -v"
    bat "\"${nodeHome}\"\\npm -v"
    //bat "\"${nodeHome}\"\\npm install --scripts-prepend-node-path"
  agent { dockerfile true }
  stage 'Build'
    //bat 'npm run clean'
    //bat 'npm run build'
    //def dockerTool = tool 'docker'
    //echo "${dockerTool}";
    //app =docker.build("Jenkins_Docker_Image");
  stage 'Deploy'
  
  stage 'Cleanup'
    //bat "rd node_modules /s /q"
    //mail (to: 'mihirgandhi03@yahoo.com',
      //          subject: 'Project Build Successful',
        //        body: 'project build successful');             
      emailext (attachLog: true, body: '''<html>
              <body>
              <p>Hi Mihir,</p>
              <p> This is sample application </p>
              </body>
              </html>
              ''', subject: '${PROJECT_NAME} - Build # ${BUILD_NUMBER} - ${BUILD_STATUS}!', to: 'mihirgandhi03@yahoo.com');
}
