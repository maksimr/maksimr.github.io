(ns client.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [markdown.core :refer [md->html]]
   [client.docs :as docs]))

(def articles
  (map #(str "/docs/" %)
    (docs/read-articles "./public/docs")))

(defn fetch-article [uri]
  (-> (js/fetch uri)
    (.then #(.text %))))

(defn html-elm [html]
  [:div {:dangerouslySetInnerHTML {:__html html}}])

(defn article-elm [path]
  (let [state (r/atom nil)]
    (fn []
      (let [title (last (.split path "/"))
            open-article (fn [event]
                           (.preventDefault event)
                           (->
                             (fetch-article path)
                             (.then (fn [text]
                                      (reset! state text)))))]
        [:div
         [:h1 [:a {:href path
                   :on-click open-article} title]]
         [html-elm (md->html @state)]]))))

(defn app-elm []
  [:div (map
          (fn [it]
            ^{:key it} [article-elm it]) articles)])

(defn -main []
  (let [app-node (js/document.getElementById "app")]
    (rdom/render [app-elm] app-node)))

(-main)