# MERN full stack example
This is an example of a full stack application using React, Node.js, Express, MongoDB and Webpack.

You can [Click Here](https://ancient-sierra-80316.herokuapp.com/#/)
 to see the running example. 
 
##  To use this template follow these commands (execute them one at a time)
###### 1. Set up project
```linux
# clone this repository 
git clone https://github.com/georgeBl/mern_full_stack_template

# go inside the root folder
cd mern-full-stack

# install dependencies if they aren't there
npm install

# run your development server
npm run dev
```
 
##  :clap:To deploy your app on Heroku
Heroku is one of the popular hosting platforms to deploy your application. It's free, quick and supports several programming languages.

##### To deploy your application

###### Make sure you prepare your poroject for production
```linux
# build for production
npm run build

# start production server
npm start
```
---

Detailed instructions can be found [HERE](https://devcenter.heroku.com/articles/heroku-cli).

1. Create an account at [Heroku](http://heroku.com/) and login
2. Then do the following inside your Gitpod terminal...

###### 1. Install Heroku CLl
```linux
npm install -g heroku
```

###### 2. Verify CLI installation
```linux
heroku --version
```

Once CLl is installed you should be able to run ```heroku```commands.

###### 3. Login to your Heroku account in the terminal
```linux
heroku login
```
NOTE: make sure you are in the root folder eg. my-react-app in this example its mern-full-stack

###### 4. Create a new Heroku app
```linux
heroku create
```
This command will create your Heroku app and it should appear in your dashboard.

![alt text](https://i.ibb.co/6yhGHJw/1506430728-Screen-Shot-2017-09-18-at-12-00-52-1.png "Heroku apps")

###### 5. Initiliase Git repository
```linux
git init
```
###### 6. Add your project (run these commands line by line
```linux
git add .
git commit -am 'commit'
```

###### 7. Get the Heroku app's repository 
```linux
heroku git:remote -a young-everglades-29265
```
NOTE: You can get this link by clicking on the app in your Heroku dashboard and selecting it. Then select "Deploy" and go down to find
this line of code. replace ```clone```to ```remote```. It should look like this:

![alt text](https://i.ibb.co/GnZZHPL/Capture.png "Heroku repository")

###### 8. Push your project and run post build script
```linux
git push heroku master
```
---

####  If nothing goes wrong, congradulations! You've just deployed your application onto Heroku :raised_hands: :star2:
