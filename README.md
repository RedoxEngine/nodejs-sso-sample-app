This is a very rough sample application that demostrates validating a JWT in nodejs

To get started:

`export SSO_SECRET="<generated in Redox Dashboard>"`

`cd app`

`npm install`

`npm start`

The application will be running on http://localhost:8080 by default. The port can be changed by using the `PORT` environment variable.

To get to the app from Redox we recommedn [NGrok](https://ngrok.com/) 

`ngrok http 8080` should give you a url you can plug into the Redox dashboard;

