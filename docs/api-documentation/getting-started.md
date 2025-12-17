---
title: Getting Started with Chimoney
---

# Integrating Chimoney APIs into your Projects

Follow these steps to set up your environment and get the credentials needed to interact with Chimoney APIs.

## Prerequisites

Before you start coding, ensure you have the following set up:

- **A Chimoney developer account**: If you don't have one, you'll need to sign up at the [Chimoney sandbox environment](https://sandbox.chimoney.io/auth/signin?next=/).
- **A new application on Your Chimoney developer dashboard**: This is crucial for generating and accessing your unique API Key.  
- **An API Key**: This is for authenticating all your API requests.  
- **Node.js Installed**: We recommend the latest LTS version for running the JavaScript code samples. You can download it from [nodejs.org](https://nodejs.org).  
- An IDE preferably VSCode.

## Step 1: Get Your Chimoney API Key

Your API key authenticates your requests and links them to your Chimoney account. Go to the [Chimoney's sandbox environment](https://sandbox.chimoney.io/auth/signin?next=/), sign if you have an account or sign up to create a new account as a business. Once signed in, navigate to your developer dashboard, create a new app, and generate your API Key. 
:::note
For testing, you'll typically use a Sandbox API Key, which works with test currency and doesn't involve real money.
:::


## Set Up Your Development Environment

- **Install Axios**: Open your terminal or command prompt.  
- Navigate to your project directory.  
- Run the following command to install the axios library:  

  ```bash
  npm install axios
  ```

##  Configure Your Authentication

Your API Key needs to be included in the headers of your API requests for successful authentication.

**Place Your API Key**: In your JavaScript code, you'll include your API Key in the `X-API-KEY` header.

```javascript
const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'X-API-KEY': 'YOUR_API_KEY' // Replace 'YOUR_API_KEY' with your actual key
};
```


Once you have these steps completed, your environment will be ready to start making request with all the endpoints Chimoney provides.  