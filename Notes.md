# **Next JS 13 notes**

Some notes on how to start using the new folder structure in Next.js v.13

When you create-next-app, it will still create the project with v.12 folder structure so there are some additional steps needed to migrate or start using v.13 

You will need to create an app folder at the root and start migrating some files over, but the pages folder still needs to be there in v.13, as things like the api routes are still routed via pages/api.

**Step 1**

Go to next.config.js

in next.config.js add:

```
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
}
```

</br>

**Step 2 - Create A Root Layout**

Then, create an app directory at the root of the project.

The app directory must include a root layout.

Therefore, in the app directory, add a layout.tsx file. 

The root layout must define HTML and body tags since Next JS does not automatically create them.

You can copy the contents from _document.tsx and in _app.tsx into root layout.tsx, including global styles.

So, in layout.tsx, paste in the import for tailwind located in _app.tsx, looks like this:

```
import "@/styles/globals.css"
```

In Layout.tsx, you could also have any additional functionality which you want to wrap the app in. 

For example, I wanted to use Next Auth for Authenticating users, using Google and GitHub. 

So, this is perfect example for implementing this in the layout at root level. I imported the Session Provider from Next Auth, and wrapped the whole app in this provider. This meant I could then check if a user is logged in or not, from anywhere in the App, just by using the useSession hook.

![](https://i.imgur.com/P0Azho6.png)


**Step 3 - Migrating hext/head**

You no longer need to import next/head. Simply add a head.tsx in the app directory and you can then add metatdata object there which contains info such as title and description.

Then add your title tag in the return jsx of the component.

Here is a screen shot from this project showing the new folder structure and the head component.

![](https://i.imgur.com/jNkQSD7.png)

**Step 4 - Migrating Pages**

Pages in the app directory are Server Components by default.

In the app directory, add a page.tsx

This is the equivalent of "pages/index.tsx" in Version 12.

You can now delete the old index.tsx.

In the page.tsx, you can now have your main homepage, similar to what would have been in pages/index.tsx.

**Next.Js 13 Dynamic Routes**

For dynamic routes, the new way to do this is for example let's say we have /chat/23 where 23 is an ID.

In the "app" folder, create a "chat" folder, then in the chat folder add an [id] folder, then in the [id] folder add a page.tsx. 

getStaticProps and getStaticPaths is not needed anymore. Any file created within app folder is server rendered by default, so all you need to do is make the api call as per usual and it will be server rendered. If any client side code is required, you can create a component for it in components forlder for example, and then at the top add "use client" and it will be client rendered. Then import that component into your server rendered component to have some client side code as needed.

An exmple I came across was where I needed some state management, like useState, useEffect etc, so the easiest way to do this was to create client side component and import it into the server component / page.



# **Firebase notes**

**Step 1 - Add a Firebase Web App**

The next step is to add a Web App to the Firebase project.
So, to do this, in your Firebase project, hit the cog near "Project Overview", and choose Project Settings.

Then at the bottom, there is a section called "Your Apps", click "Add App" and select "Web app" as the type.
This should open up an SDK setup and configuration with some instructionsto install firebase and create a firebase.ts file, and add the suggested code which looks like this:

![](https://i.imgur.com/QQhvCRG.png)

In my case, I made some edits to this boilerplate, analytics was not needed, and for the app variable, we first checking if we have already initialised an app ? if so then use that, if not then initialise it and pass in the firebaseConfig.

```
import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBho4RdAJVr5rL8cvkTX8OnAK6uTM6DE8M',
  authDomain: 'chatgpt-clone-ef90e.firebaseapp.com',
  projectId: 'chatgpt-clone-ef90e',
  storageBucket: 'chatgpt-clone-ef90e.appspot.com',
  messagingSenderId: '839169719636',
  appId: '1:839169719636:web:5238100dacb88ede7c1cc1',
  measurementId: 'G-FS01J6WF22'
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
```