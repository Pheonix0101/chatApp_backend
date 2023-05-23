# Instruction for running the Application

step 1>
   Install docker desktop
step 2>
   run command "docker build . -t myapp"
step 3>
    docker run -p 49160:9000 -d myapp
step 4>
    docker images
step 5>
    Copy the IMAGE ID
step 6>
    docker run <IMAGE ID>
