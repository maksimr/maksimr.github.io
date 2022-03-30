(ns client.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [markdown.core :refer [md->html]]
   [client.docs :as docs]))

(def articles
  (map (fn [id]
         {:id id
          :title id
          :uri (str "/docs/" id)})
    (docs/read-articles "./public/docs")))

(defn fetch-article [uri]
  (-> (js/fetch uri)
    (.then #(.text %))))

(defn build-article-url [id]
  (str js/location.origin "?" id))

(defn html-elm [html]
  [:div {:dangerouslySetInnerHTML {:__html html}}])

(defn article-item-elm [article]
  (let [state (r/atom nil)]
    (fn []
      (let [title (:title article)
            uri (build-article-url (:id article))]
        [:div
         [:h1 [:a {:href uri} title]]
         [html-elm (md->html @state)]]))))

(defn articles-elm []
  [:div (map
          (fn [it]
            ^{:key it} [article-item-elm it]) articles)])

(defn article-elm [article]
  (let [state (r/atom {})]
    (-> (fetch-article (:uri article))
      (.then #(reset! state {:text (md->html %)})))
    (fn []
      (when (:text @state)
        [:div [html-elm (:text @state)]]))))

(defn app-elm []
  (let [id (.slice js/location.search 1)
        article (when id (first (filter #(= id (:id %)) articles)))]
    (if article
      [article-elm article]
      [articles-elm])))

(defn -main []
  (let [app-node (js/document.getElementById "app")]
    (rdom/render [app-elm] app-node)))

(-main)