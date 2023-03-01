**Next JS 13 notes**

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

The root layout must define htmL and body tags since Next Js does not automatically create them.

You can copy the contents from _document.tsx and in _app.tsx into root layout.tsx, including global styles.

So, in layout.tsx, paste in the import for tailwind located in _app.tsx, looks like this:

```
import "@/styles/globals.css"
```

In Layout.tsx, you could also have any additional functionality which you want to wrap the app in. 

For example, I wanted to use Next Auth for Authenticating users, using Google and GitHub. 

So, this is perfect example for implementing this in the layout at root level. I imported the Session Provider from Next Auth, and wrapping the while app in this provider. This means that we can check if a user is logged in or not, from anywhere in the App, just by using the useSession hook!

![](https://i.imgur.com/P0Azho6.png)


**Step 3 - Migrating hext/head**

You no longer need to import next/head. Simply add a head.tsx in the app directory and you can then add metatdata object there which contains info such as title and description.

Then asdd your actual Title in te return jsx of the component.

Here is a screen shot from this project showing the new folder structure and the head component.

![](https://i.imgur.com/jNkQSD7.png)

**Step 3 - Migrating Pages**

Pages in the app directory are Server Components by default.

In the app directory, add a page.tsx

This is the equivalent of "pages/index.tsx" in Version 12.

You can now delete the old index.tsx.

In the page.tsx, you can now have your main homepage, similar to what would have been in pages/index.tsx.