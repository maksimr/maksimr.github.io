(ns client.core
  (:require
   [reagent.dom :as rdom]
   [markdown.core :refer [md->html]]))

(defn html-elm [html]
  [:div {:dangerouslySetInnerHTML {:__html html}}])

(defn app-elm []
  [:div [html-elm (md->html "Hello World!")]])

(defn -main []
  (let [app-node (js/document.getElementById "app")]
    (rdom/render [app-elm] app-node)))

(-main)