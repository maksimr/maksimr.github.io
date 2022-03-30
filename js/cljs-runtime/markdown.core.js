goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__10247){
var map__10248 = p__10247;
var map__10248__$1 = cljs.core.__destructure_map(map__10248);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10248__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10248__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10248__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__10249 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__10250 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__10250);

try{var vec__10251 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10254,transformer){
var vec__10255 = p__10254;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10255,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10255,(1),null);
var G__10258 = text;
var G__10259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__10258,G__10259) : transformer.call(null,G__10258,G__10259));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10251,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10251,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__10249);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10303 = arguments.length;
var i__4865__auto___10304 = (0);
while(true){
if((i__4865__auto___10304 < len__4864__auto___10303)){
args__4870__auto__.push((arguments[i__4865__auto___10304]));

var G__10305 = (i__4865__auto___10304 + (1));
i__4865__auto___10304 = G__10305;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq10260){
var G__10261 = cljs.core.first(seq10260);
var seq10260__$1 = cljs.core.next(seq10260);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10261,seq10260__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__10266_10306 = cljs.core.seq(lines);
var chunk__10267_10307 = null;
var count__10268_10308 = (0);
var i__10269_10309 = (0);
while(true){
if((i__10269_10309 < count__10268_10308)){
var line_10310 = chunk__10267_10307.cljs$core$IIndexed$_nth$arity$2(null,i__10269_10309);
markdown.links.parse_reference_link(line_10310,references);


var G__10311 = seq__10266_10306;
var G__10312 = chunk__10267_10307;
var G__10313 = count__10268_10308;
var G__10314 = (i__10269_10309 + (1));
seq__10266_10306 = G__10311;
chunk__10267_10307 = G__10312;
count__10268_10308 = G__10313;
i__10269_10309 = G__10314;
continue;
} else {
var temp__5753__auto___10315 = cljs.core.seq(seq__10266_10306);
if(temp__5753__auto___10315){
var seq__10266_10316__$1 = temp__5753__auto___10315;
if(cljs.core.chunked_seq_QMARK_(seq__10266_10316__$1)){
var c__4679__auto___10317 = cljs.core.chunk_first(seq__10266_10316__$1);
var G__10318 = cljs.core.chunk_rest(seq__10266_10316__$1);
var G__10319 = c__4679__auto___10317;
var G__10320 = cljs.core.count(c__4679__auto___10317);
var G__10321 = (0);
seq__10266_10306 = G__10318;
chunk__10267_10307 = G__10319;
count__10268_10308 = G__10320;
i__10269_10309 = G__10321;
continue;
} else {
var line_10322 = cljs.core.first(seq__10266_10316__$1);
markdown.links.parse_reference_link(line_10322,references);


var G__10323 = cljs.core.next(seq__10266_10316__$1);
var G__10324 = null;
var G__10325 = (0);
var G__10326 = (0);
seq__10266_10306 = G__10323;
chunk__10267_10307 = G__10324;
count__10268_10308 = G__10325;
i__10269_10309 = G__10326;
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
var seq__10270_10327 = cljs.core.seq(lines);
var chunk__10271_10328 = null;
var count__10272_10329 = (0);
var i__10273_10330 = (0);
while(true){
if((i__10273_10330 < count__10272_10329)){
var line_10331 = chunk__10271_10328.cljs$core$IIndexed$_nth$arity$2(null,i__10273_10330);
markdown.links.parse_footnote_link(line_10331,footnotes);


var G__10332 = seq__10270_10327;
var G__10333 = chunk__10271_10328;
var G__10334 = count__10272_10329;
var G__10335 = (i__10273_10330 + (1));
seq__10270_10327 = G__10332;
chunk__10271_10328 = G__10333;
count__10272_10329 = G__10334;
i__10273_10330 = G__10335;
continue;
} else {
var temp__5753__auto___10336 = cljs.core.seq(seq__10270_10327);
if(temp__5753__auto___10336){
var seq__10270_10337__$1 = temp__5753__auto___10336;
if(cljs.core.chunked_seq_QMARK_(seq__10270_10337__$1)){
var c__4679__auto___10338 = cljs.core.chunk_first(seq__10270_10337__$1);
var G__10339 = cljs.core.chunk_rest(seq__10270_10337__$1);
var G__10340 = c__4679__auto___10338;
var G__10341 = cljs.core.count(c__4679__auto___10338);
var G__10342 = (0);
seq__10270_10327 = G__10339;
chunk__10271_10328 = G__10340;
count__10272_10329 = G__10341;
i__10273_10330 = G__10342;
continue;
} else {
var line_10343 = cljs.core.first(seq__10270_10337__$1);
markdown.links.parse_footnote_link(line_10343,footnotes);


var G__10344 = cljs.core.next(seq__10270_10337__$1);
var G__10345 = null;
var G__10346 = (0);
var G__10347 = (0);
seq__10270_10327 = G__10344;
chunk__10271_10328 = G__10345;
count__10272_10329 = G__10346;
i__10273_10330 = G__10347;
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
var G__10287_10348 = lines__$1;
var vec__10288_10349 = G__10287_10348;
var seq__10289_10350 = cljs.core.seq(vec__10288_10349);
var first__10290_10351 = cljs.core.first(seq__10289_10350);
var seq__10289_10352__$1 = cljs.core.next(seq__10289_10350);
var line_10353 = first__10290_10351;
var more_10354 = seq__10289_10352__$1;
var state_10355 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__10287_10359__$1 = G__10287_10348;
var state_10360__$1 = state_10355;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq10299){
var G__10300 = cljs.core.first(seq10299);
var seq10299__$1 = cljs.core.next(seq10299);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10300,seq10299__$1);
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq10301){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10301));
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq10302){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10302));
}));


//# sourceMappingURL=markdown.core.js.map
