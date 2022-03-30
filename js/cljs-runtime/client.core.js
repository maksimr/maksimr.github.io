goog.provide('client.core');
client.core.articles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10400_SHARP_){
return ["/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10400_SHARP_)].join('');
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello-world.md"], null));
client.core.fetch_article = (function client$core$fetch_article(uri){
return fetch(uri).then((function (p1__10401_SHARP_){
return p1__10401_SHARP_.text();
}));
});
client.core.html_elm = (function client$core$html_elm(html){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null);
});
client.core.article_elm = (function client$core$article_elm(path){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var title = cljs.core.last(path.split("/"));
var open_article = (function (event){
event.preventDefault();

return client.core.fetch_article(path).then((function (text){
return cljs.core.reset_BANG_(state,text);
}));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),path,new cljs.core.Keyword(null,"on-click","on-click",1632826543),open_article], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.html_elm,markdown.core.md__GT_html(cljs.core.deref(state))], null)], null);
});
});
client.core.app_elm = (function client$core$app_elm(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.article_elm,it], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),it], null));
}),client.core.articles)], null);
});
client.core._main = (function client$core$_main(){
var app_node = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.app_elm], null),app_node);
});
client.core._main();

//# sourceMappingURL=client.core.js.map
