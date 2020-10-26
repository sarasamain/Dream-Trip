# What is DreamTrip
This is a web app built for planning holidays and building iteneraries.

This Project was originally forked from [Dream Trip](https://github.com/ParisQZhang/Dream-Trip) by Paris Zhang ([Github](https://github.com/ParisQZhang) - [LinkedIn](https://www.linkedin.com/in/paris-qing-zhang/))

The working repository for this project is [amantoniazzi/Dream-Trip](https://github.com/amantoniazzi/Dream-Trip) from where this particular repository has been forked.

# Getting Started
The app runs on a React front end using Google Maps Javascript API and the Google Places API to render maps and coordinates. The backend runs on express. The first thing you'll need to get started is a Google API Key.

## Google API Key
The App uses Google's places API. You'll need to get a key to have the app running.
1. Go to [Google Cloud Platform](https://console.cloud.google.com/home) and set up a new project by clicking on **Select a project** *(Right next where it says Google Cloud Platform )*.
2. Navigate to the project itself (you should be able to do this from the projects dashboard), and then hover over **APIs & Services** and click on **Credentials**
3. Now use the **Create Credentials** button to create an **API Key**.
4. Set up your environment variables in both the **client** and **server**. In the client, create a `.env` file and copy in the information in `.env.example`. Set `REACT_APP_API_KEY` to the API key you just got from Google. In the server file create a `.env file`, copy in the details from `.env.example` and set the `SECRET_API_KEY` as the API key you just got from Google.

## Start the backend
1. Install the dependencies by running the following while in the **server** folder
<pre><code>npm install</code></pre>
2. Start the server with 
<pre><code>node index.js</code></pre>
You should see the following in the terminal to show that the **server** is up and running
<pre><code>Server is listening at http://localhost:3079 🚀🚀🚀
🦆 Database (JWT) connected @ port 27017!</code></pre>

## Start the front end
1. Install the dependencies by running the following while in the **client** folder
<pre><code>npm install</code></pre>
2. Start the front end with 
<pre><code>npm start</code></pre>
The app should open in your browser at localhost:3000 (The default React PORT)

# Added functionality from original project
## Features
#### 1. SignIn and Authentication
![Sign In](/screenshots/Sign_In.png)

#### 2. Drag and Drop
This was a tweak on the original UI allowing for the itenerary to be reshuffled by drag and drop


#### 3. Email
Allowing for emailing of the itenerary via a personal account

## Testing
Functional testing was added to the project to help with development of new features

# Developer Team
* Amina Antoniazzi - [Github](https://github.com/amantoniazzi) - [LinkedIn](https://www.linkedin.com/in/amina-antoniazzi-b05266118/)
* Rushabh Mehta - [Github](https://github.com/RushabhM2) - [LinkedIn](www.linkedin.com/in/RushabhM2)
* Sara Samain - [Github](https://github.com/sarasamain) - [LinkedIn](https://www.linkedin.com/in/sara-samain-27721244/)
