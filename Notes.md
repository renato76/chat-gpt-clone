**Next JS 13 notes**

Go to next.config.js

in module.exports add:

```
module.exports = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
}
```
yarn dev

You should now see the Next JS Homepage on localhost.

Add an app directory (folder) in root.

Then in the app folder, add a page.tsx

This is the equivalent of "pages/index.tsx" in Version 12.

You can now delete the old index.tsx.

In the page.tsx, you can now have your main homepage, similar to what would have been in pages/index.tsx.

When you now do yarn dev, next will create a head.tsx and layout.tsx at the new app folder level.

So, in the new head.tsx you can add your meta stuff, title etc.

Then in layout.tsx, paste in the import for tailwind located in _app.tsx, looks like this:

```
import "@/styles/globals.css"
```
You should be able to delete "_app.tsx" file now.

In Layout.tsx, you could also have any styles or additionaly functionality which you want to wrap the app in. 

For example, I wanted to use Next Auth for Authenticating users, using Google and GitHub. 

So, this is perfect example for implementing this in the layout at root level. I imported the Session Provider from Next Auth, and wrapping the while app in this provider. This means that we can check if a user is logged in or not, from anywhere in the App, just by using the useSession hook!

![](https://i.imgur.com/P0Azho6.png)



