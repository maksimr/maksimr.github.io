goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__10251){
var map__10252 = p__10251;
var map__10252__$1 = cljs.core.__destructure_map(map__10252);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10252__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10252__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10252__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__10253 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__10254 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__10254);

try{var vec__10255 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10258,transformer){
var vec__10259 = p__10258;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10259,(1),null);
var G__10262 = text;
var G__10263 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__10262,G__10263) : transformer.call(null,G__10262,G__10263));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10255,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10255,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__10253);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10306 = arguments.length;
var i__4865__auto___10307 = (0);
while(true){
if((i__4865__auto___10307 < len__4864__auto___10306)){
args__4870__auto__.push((arguments[i__4865__auto___10307]));

var G__10308 = (i__4865__auto___10307 + (1));
i__4865__auto___10307 = G__10308;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq10264){
var G__10265 = cljs.core.first(seq10264);
var seq10264__$1 = cljs.core.next(seq10264);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10265,seq10264__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__10266_10309 = cljs.core.seq(lines);
var chunk__10267_10310 = null;
var count__10268_10311 = (0);
var i__10269_10312 = (0);
while(true){
if((i__10269_10312 < count__10268_10311)){
var line_10313 = chunk__10267_10310.cljs$core$IIndexed$_nth$arity$2(null,i__10269_10312);
markdown.links.parse_reference_link(line_10313,references);


var G__10314 = seq__10266_10309;
var G__10315 = chunk__10267_10310;
var G__10316 = count__10268_10311;
var G__10317 = (i__10269_10312 + (1));
seq__10266_10309 = G__10314;
chunk__10267_10310 = G__10315;
count__10268_10311 = G__10316;
i__10269_10312 = G__10317;
continue;
} else {
var temp__5753__auto___10318 = cljs.core.seq(seq__10266_10309);
if(temp__5753__auto___10318){
var seq__10266_10319__$1 = temp__5753__auto___10318;
if(cljs.core.chunked_seq_QMARK_(seq__10266_10319__$1)){
var c__4679__auto___10320 = cljs.core.chunk_first(seq__10266_10319__$1);
var G__10321 = cljs.core.chunk_rest(seq__10266_10319__$1);
var G__10322 = c__4679__auto___10320;
var G__10323 = cljs.core.count(c__4679__auto___10320);
var G__10324 = (0);
seq__10266_10309 = G__10321;
chunk__10267_10310 = G__10322;
count__10268_10311 = G__10323;
i__10269_10312 = G__10324;
continue;
} else {
var line_10325 = cljs.core.first(seq__10266_10319__$1);
markdown.links.parse_reference_link(line_10325,references);


var G__10326 = cljs.core.next(seq__10266_10319__$1);
var G__10327 = null;
var G__10328 = (0);
var G__10329 = (0);
seq__10266_10309 = G__10326;
chunk__10267_10310 = G__10327;
count__10268_10311 = G__10328;
i__10269_10312 = G__10329;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__10270_10330 = cljs.core.seq(lines);
var chunk__10271_10331 = null;
var count__10272_10332 = (0);
var i__10273_10333 = (0);
while(true){
if((i__10273_10333 < count__10272_10332)){
var line_10334 = chunk__10271_10331.cljs$core$IIndexed$_nth$arity$2(null,i__10273_10333);
markdown.links.parse_footnote_link(line_10334,footnotes);


var G__10335 = seq__10270_10330;
var G__10336 = chunk__10271_10331;
var G__10337 = count__10272_10332;
var G__10338 = (i__10273_10333 + (1));
seq__10270_10330 = G__10335;
chunk__10271_10331 = G__10336;
count__10272_10332 = G__10337;
i__10273_10333 = G__10338;
continue;
} else {
var temp__5753__auto___10339 = cljs.core.seq(seq__10270_10330);
if(temp__5753__auto___10339){
var seq__10270_10340__$1 = temp__5753__auto___10339;
if(cljs.core.chunked_seq_QMARK_(seq__10270_10340__$1)){
var c__4679__auto___10341 = cljs.core.chunk_first(seq__10270_10340__$1);
var G__10342 = cljs.core.chunk_rest(seq__10270_10340__$1);
var G__10343 = c__4679__auto___10341;
var G__10344 = cljs.core.count(c__4679__auto___10341);
var G__10345 = (0);
seq__10270_10330 = G__10342;
chunk__10271_10331 = G__10343;
count__10272_10332 = G__10344;
i__10273_10333 = G__10345;
continue;
} else {
var line_10346 = cljs.core.first(seq__10270_10340__$1);
markdown.links.parse_footnote_link(line_10346,footnotes);


var G__10347 = cljs.core.next(seq__10270_10340__$1);
var G__10348 = null;
var G__10349 = (0);
var G__10350 = (0);
seq__10270_10330 = G__10347;
chunk__10271_10331 = G__10348;
count__10272_10332 = G__10349;
i__10273_10333 = G__10350;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__10274 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10274,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10274,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__10277 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__10278 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__10279 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__10280 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__10279);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__10280);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__10281 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10281,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10281,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__10287_10351 = lines__$1;
var vec__10288_10352 = G__10287_10351;
var seq__10289_10353 = cljs.core.seq(vec__10288_10352);
var first__10290_10354 = cljs.core.first(seq__10289_10353);
var seq__10289_10355__$1 = cljs.core.next(seq__10289_10353);
var line_10356 = first__10290_10354;
var more_10357 = seq__10289_10355__$1;
var state_10358 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__10287_10359__$1 = G__10287_10351;
var state_10360__$1 = state_10358;
while(true){
var vec__10294_10361 = G__10287_10359__$1;
var seq__10295_10362 = cljs.core.seq(vec__10294_10361);
var first__10296_10363 = cljs.core.first(seq__10295_10362);
var seq__10295_10364__$1 = cljs.core.next(seq__10295_10362);
var line_10365__$1 = first__10296_10363;
var more_10366__$1 = seq__10295_10364__$1;
var state_10367__$2 = state_10360__$1;
var line_10368__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_10367__$2))?"":line_10365__$1);
var state_10369__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10367__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10367__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_10367__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_10367__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_10367__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_10366__$1))){
var G__10370 = more_10366__$1;
var G__10371 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_10368__$2,cljs.core.first(more_10366__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_10369__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_10368__$2.trim()));
G__10287_10359__$1 = G__10370;
state_10360__$1 = G__10371;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_10369__$3))),line_10368__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_10369__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__10278);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__10277);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10372 = arguments.length;
var i__4865__auto___10373 = (0);
while(true){
if((i__4865__auto___10373 < len__4864__auto___10372)){
args__4870__auto__.push((arguments[i__4865__auto___10373]));

var G__10374 = (i__4865__auto___10373 + (1));
i__4865__auto___10373 = G__10374;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq10297){
var G__10298 = cljs.core.first(seq10297);
var seq10297__$1 = cljs.core.next(seq10297);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10298,seq10297__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10375 = arguments.length;
var i__4865__auto___10376 = (0);
while(true){
if((i__4865__auto___10376 < len__4864__auto___10375)){
args__4870__auto__.push((arguments[i__4865__auto___10376]));

var G__10377 = (i__4865__auto___10376 + (1));
i__4865__auto___10376 = G__10377;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq10302){
var G__10303 = cljs.core.first(seq10302);
var seq10302__$1 = cljs.core.next(seq10302);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10303,seq10302__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10378 = arguments.length;
var i__4865__auto___10379 = (0);
while(true){
if((i__4865__auto___10379 < len__4864__auto___10378)){
args__4870__auto__.push((arguments[i__4865__auto___10379]));

var G__10380 = (i__4865__auto___10379 + (1));
i__4865__auto___10379 = G__10380;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq10304){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10304));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10381 = arguments.length;
var i__4865__auto___10382 = (0);
while(true){
if((i__4865__auto___10382 < len__4864__auto___10381)){
args__4870__auto__.push((arguments[i__4865__auto___10382]));

var G__10383 = (i__4865__auto___10382 + (1));
i__4865__auto___10382 = G__10383;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq10305){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10305));
}));


//# sourceMappingURL=markdown.core.js.map
