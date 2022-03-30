(ns client.docs
  (:require
   [clojure.java.io :refer [file]]))

(defn ^:private read-docs [dir]
  (seq (.list (file dir))))

(defmacro read-articles [dir]
  (let [links (vec (read-docs dir))]
    `~links))
