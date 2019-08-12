# Image Sender 
A simple Node.js app that uses the Twilio and Google Custom Search APIs to send images related to a given search term once per day. A Twilio Dev account and a Google custom search engine are necessary to run this project. MongoDB is used to store the queue of messages to be sent. 

## Installation 
* Clone using ``` $ git clone ```
* Create a .env file with the following: ``` TWILIO_ACCOUNT, TWILIO_AUTH_TOKEN, SEARCH_KEY, CX, MONGODB_URI ```
* ``` npm install ```
* ``` npm start ```
* App should be running at ``` localhost:3000 ```

Information about setting getting a Twilio account can be found [here](https://www.twilio.com/docs/usage/api). Note: For messages to be sent on a free Twilio account, the recepient must be authorized inside the Twilio portal. In order to get a search key and cx to use the custom search api, follow the docs [here](https://developers.google.com/custom-search/v1/overview#search_engine_id).

## Work In Progress
This app is still in development. Future work is necessary. Plans include building a polished front end, allowing for different sized queues to a given number, and handling of database records after messages are sent. 