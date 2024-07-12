# FireGallery - demo

![image of firegallery-demo](./firegallery-demo.png)

An image gallery web application to manage images (like postimages). We can upload local image into cloud, delete it, copy it, see live gallery etc. 

**Tech**: react 18, tailwindcss, firebase (storage, realtime-db), bootstrap-icons

This project is developed and designed by *Rahat Faruk* (me). I wanted to explore more about react and firebase through this project.  

*Note: This GitHub repository contains demo app code of my full project*

## how can you use:
  - clone this repo. 
  - setup firebase project. Initialize these services: Storage, Realtime database. 
  - in local project's root directory, create a file named `.env.local`. Set these variables with your firebase project's config (don't use comma at the end of each line):
    ```js
      VITE_apiKey: 
      VITE_authDomain: 
      VITE_databaseURL: 
      VITE_projectId: 
      VITE_storageBucket: 
      VITE_messagingSenderId: 
      VITE_appId: 
    ``` 
  - run `npm install` command to install the modules. run `npm run dev` to run your project.

### Related article:
Read my article: [how to upload an image into firebase programatically](https://dev.to/rahatfaruk/how-to-upload-an-image-into-firebase-storage-58cl) 