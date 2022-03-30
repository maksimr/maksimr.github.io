goog.provide('client.core');
client.core.articles = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),id,new cljs.core.Keyword(null,"uri","uri",-774711847),["/docs/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null);
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hello-world.md"], null));
client.core.fetch_article = (function client$core$fetch_article(uri){
return fetch(uri).then((function (p1__10400_SHARP_){
return p1__10400_SHARP_.text();
}));
});
client.core.build_article_url = (function client$core$build_article_url(id){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('');
});
client.core.html_elm = (function client$core$html_elm(html){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null);
});
client.core.article_item_elm = (function client$core$article_item_elm(article){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var title = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(article);
var uri = client.core.build_article_url(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(article));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),uri], null),title], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.html_elm,markdown.core.md__GT_html(cljs.core.deref(state))], null)], null);
});
});
client.core.articles_elm = (function client$core$articles_elm(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.article_item_elm,it], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),it], null));
}),client.core.articles)], null);
});
client.core.article_elm = (function client$core$article_elm(article){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
client.core.fetch_article(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(article)).then((function (p1__10401_SHARP_){
return cljs.core.reset_BANG_(state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),markdown.core.md__GT_html(p1__10401_SHARP_)], null));
}));

return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.html_elm,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))], null)], null);
} else {
return null;
}
});
});
client.core.app_elm = (function client$core$app_elm(){
var id = location.search.slice((1));
var article = (cljs.core.truth_(id)?cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10402_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__10402_SHARP_));
}),client.core.articles)):null);
if(cljs.core.truth_(article)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.article_elm,article], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.articles_elm], null);
}
});
client.core._main = (function client$core$_main(){
var app_node = document.getElementById("app");
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.core.app_elm], null),app_node);
});
client.core._main();

//# sourceMappingURL=client.core.js.map
