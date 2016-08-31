This is the bread and butter of the app and aligns with our goal to Maximize Code Reuse and write Cross Platform. Typically an app is made up of a variety of routes (or screens/scenes, depending on your preference). The app/routes/ directory is setup very similarly to the app/components/ directory with one difference and that’s the Container components. This is a component that fetches and manages data for that route/screen/scene. We can also keep any route specific components in this file. I like to colocate code as much as it makes sense to in order to keep it easy to know where to look and understand the ramifications of changing a component.
Here’s the tree from my routes directory:

![alt tag](https://cdn-images-1.medium.com/max/1600/1*PuNRaS-_cexKfnw_2PBVGg.png)
