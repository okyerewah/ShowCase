# ShowCase Portfolio  

 ShowCase is a Node.js and Express-powered web application that serves as both a portfolio and a digital art gallery. It showcases projects and artwork while allowing visitors to send messages via a contact form. The site dynamically loads text content from the server for easy updates and features a smooth, responsive design for an engaging user experience.  



## Installation  

### 1. Clone the repository  
First, download the project to your local machine by running:  

```sh
git clone https://github.com/okyerewah/ShowCase.git
cd ShowCase
```  

### 2. Install dependencies  
To install the necessary dependencies, run:  

```sh
npm install
```  

### 3. Set up environment variables  
This project requires an environment file (`.env`) to store sensitive credentials like email settings.  

#### Steps:  
i. Rename the `.env.example` file to `.env`:  

   ```sh
   mv .env.example .env
   ```

ii. Open the `.env` file and replace the placeholders with your own credentials:  

   ```ini
   EMAIL_USER=your-email@example.com
   EMAIL_PASS=your-app-password
   ```  
## Note:   
- You must **set up your own email credentials** to use the contact form.  
- There must not be **any** spaces or quotation marks after the equal sign.
- You can generate an app password by navingating to *'myaccount.google.com'* and searching **'App Password'** in the search bar.

### 4. Run the application  
To start the server, use:  

```sh
node server.js
```  

By default, the server will run on `http://localhost:3000`.  
