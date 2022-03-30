# Setup shadow-cljs react project

## 🚀 Create project
The first step is create a project
```bash
npx create-cljs-project my-project
```
This command will create a project my-project with minimal required structure and install required dev dependencies for proper work of shadow-cljs
```
├── package-lock.json
├── package.json
├── shadow-cljs.edn
└── src
    ├── main
    └── test
```    
shadow-cljs.edn is a configuration file for ClojureScript project
```clojure
;; shadow-cljs configuration
{:source-paths
 ["src/dev"
  "src/main"
  "src/test"]
:dependencies
 []
:builds
 {}}
```
## ♺ Compile ClojureScript to JavaScript
Now, let's create an entry point ClojureScript file
```bash
touch ./src/main/core.cljs
```
and add minimal boilerplate code to it
```clojure
;; ./src/main/core.cljs
(ns core)
(defn main []
  (js/console.log "Hello World!"))
(main)
```
Now we should specify how to build the project. To do this, we should modify the :builds section in shadow-cljs.edn file
```clojure
...
:builds
 {:app {:target :browser
        :modules {:main {:entries [core]}}}}}
```        
- :app is a build id
- :browser is target's type for generated JavaScript files
- :main is a name of generated JavaScript file
core is a ClojureScript entry namespace

You can add :output-dir "public/js" to explicitly specify output directory for generated files by default shadow-cljs will use public/js
Now we can compile our ClojureScript to JavaScript files
```bash
npx shadow-cljs compile app
shadow-cljs - config: /private/tmp/my-project/shadow-cljs.edn
shadow-cljs - connected to server
[:app] Compiling ...
[:app] Build completed. (43 files, 0 compiled, 0 warnings, 0.33s)
```
## 👾 Start server
Now we are ready to setup the development server which will serve our static files. For this, we should return back to shadow-cljs.edn and add information about the dev server
```clojure
:dev-http {8000 "public"}
```
- 8000 is a port which will be used by http server
- public is a folder name for static files

Now we can start it by using watch command
```bash
npx shadow-cljs watch app
```
Beside the start http server watchcommand also automatically recompile JavaScript files when we change ClojureScript one

You can open http://localhost:8000 and see that the server is running
```
Not found. Missing index.html.
```
but complains on missing index.html. Let's add index.html to the public folder
```bash
touch ./public/index.html
```
and add some minimal markup with reference to our generated JavaScript file
```html
<!DOCTYPE html>
<html lang="">
  <head>
    <title>my-project</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <div id="app"></div>
    <script src="js/main.js" type="text/javascript"></script>
  </body>
</html>
```
If we open developer tools in the browser we should see "Hello World!" message in the browser's console. You can open core.cljs file and change the message. Browser automatically pickup the change via embedded to shadow-cljs live update functionality and display the new message

## 📦 Add React as dependency
shadow-cljs support npm dependencies, so here we can install react via npm
```bash
npm install react
```
Now we can use React in our ClojureScript application. Let's print React's version in the browser's console. To do this, let's modify core.cljs file
```clojure
;; ./src/main/core.cljs
(ns core (:require ["react" :as react]))
(defn main []
  (js/console.log (.-version react)))
(main)
```
We can look at the console without restarting the server and see that now it displays React version
```
[Log] shadow-cljs: load JS – "node_modules/react/index.js"
[Log] shadow-cljs: load JS – "core.cljs"
[Log] 17.0.2
```

By the same way, we can install react-dom and render "Hello World!"
```clojure
(ns core (:require 
           ["react" :as react]
           ["react-dom" :as react-dom]))
(defn main []
  (let [app-node (.getElementById js/document "app")]
    (.render react-dom "Hello World!" app-node)))
(main)
```

## 🎸 Reagent
We can use raw react and react-dom in our ClojureScript but it's much better and less verbose to use Reagent is a minimalistic ClojureScript interface for React.

Because Reagent is a ClojureScript module, we can't install it via npm. To install it, we should define required version in shadow-cljs.edn
```clojure
:dependencies
 [[reagent "1.1.1"]]
```
Reagent is dependent from React & React DOM packages, so you still should install them via NPM.
Let's update core.cljs code and replace React on Reagent
```clojure
;; ./src/main/core.cljs
(ns core (:require 
          [reagent.core :as r]
          [reagent.dom :as rdom]))
(defn app []
  [:b "Hello World!"])
(defn main []
  (let [app-node (.getElementById js/document "app")]
    (rdom/render [app] app-node)))
(main)
```
