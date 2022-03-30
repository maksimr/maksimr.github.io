goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__10148){
var map__10149 = p__10148;
var map__10149__$1 = cljs.core.__destructure_map(map__10149);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10149__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10149__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10149__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__10150 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__10151 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__10151);

try{var vec__10152 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__10155,transformer){
var vec__10156 = p__10155;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10156,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10156,(1),null);
var G__10159 = text;
var G__10160 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__10159,G__10160) : transformer.call(null,G__10159,G__10160));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10152,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__10150);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10203 = arguments.length;
var i__4865__auto___10204 = (0);
while(true){
if((i__4865__auto___10204 < len__4864__auto___10203)){
args__4870__auto__.push((arguments[i__4865__auto___10204]));

var G__10205 = (i__4865__auto___10204 + (1));
i__4865__auto___10204 = G__10205;
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
(markdown.core.format.cljs$lang$applyTo = (function (seq10161){
var G__10162 = cljs.core.first(seq10161);
var seq10161__$1 = cljs.core.next(seq10161);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10162,seq10161__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__10163_10206 = cljs.core.seq(lines);
var chunk__10164_10207 = null;
var count__10165_10208 = (0);
var i__10166_10209 = (0);
while(true){
if((i__10166_10209 < count__10165_10208)){
var line_10210 = chunk__10164_10207.cljs$core$IIndexed$_nth$arity$2(null,i__10166_10209);
markdown.links.parse_reference_link(line_10210,references);


var G__10211 = seq__10163_10206;
var G__10212 = chunk__10164_10207;
var G__10213 = count__10165_10208;
var G__10214 = (i__10166_10209 + (1));
seq__10163_10206 = G__10211;
chunk__10164_10207 = G__10212;
count__10165_10208 = G__10213;
i__10166_10209 = G__10214;
continue;
} else {
var temp__5753__auto___10215 = cljs.core.seq(seq__10163_10206);
if(temp__5753__auto___10215){
var seq__10163_10216__$1 = temp__5753__auto___10215;
if(cljs.core.chunked_seq_QMARK_(seq__10163_10216__$1)){
var c__4679__auto___10217 = cljs.core.chunk_first(seq__10163_10216__$1);
var G__10218 = cljs.core.chunk_rest(seq__10163_10216__$1);
var G__10219 = c__4679__auto___10217;
var G__10220 = cljs.core.count(c__4679__auto___10217);
var G__10221 = (0);
seq__10163_10206 = G__10218;
chunk__10164_10207 = G__10219;
count__10165_10208 = G__10220;
i__10166_10209 = G__10221;
continue;
} else {
var line_10222 = cljs.core.first(seq__10163_10216__$1);
markdown.links.parse_reference_link(line_10222,references);


var G__10223 = cljs.core.next(seq__10163_10216__$1);
var G__10224 = null;
var G__10225 = (0);
var G__10226 = (0);
seq__10163_10206 = G__10223;
chunk__10164_10207 = G__10224;
count__10165_10208 = G__10225;
i__10166_10209 = G__10226;
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
var seq__10167_10227 = cljs.core.seq(lines);
var chunk__10168_10228 = null;
var count__10169_10229 = (0);
var i__10170_10230 = (0);
while(true){
if((i__10170_10230 < count__10169_10229)){
var line_10231 = chunk__10168_10228.cljs$core$IIndexed$_nth$arity$2(null,i__10170_10230);
markdown.links.parse_footnote_link(line_10231,footnotes);


var G__10232 = seq__10167_10227;
var G__10233 = chunk__10168_10228;
var G__10234 = count__10169_10229;
var G__10235 = (i__10170_10230 + (1));
seq__10167_10227 = G__10232;
chunk__10168_10228 = G__10233;
count__10169_10229 = G__10234;
i__10170_10230 = G__10235;
continue;
} else {
var temp__5753__auto___10236 = cljs.core.seq(seq__10167_10227);
if(temp__5753__auto___10236){
var seq__10167_10237__$1 = temp__5753__auto___10236;
if(cljs.core.chunked_seq_QMARK_(seq__10167_10237__$1)){
var c__4679__auto___10238 = cljs.core.chunk_first(seq__10167_10237__$1);
var G__10239 = cljs.core.chunk_rest(seq__10167_10237__$1);
var G__10240 = c__4679__auto___10238;
var G__10241 = cljs.core.count(c__4679__auto___10238);
var G__10242 = (0);
seq__10167_10227 = G__10239;
chunk__10168_10228 = G__10240;
count__10169_10229 = G__10241;
i__10170_10230 = G__10242;
continue;
} else {
var line_10243 = cljs.core.first(seq__10167_10237__$1);
markdown.links.parse_footnote_link(line_10243,footnotes);


var G__10244 = cljs.core.next(seq__10167_10237__$1);
var G__10245 = null;
var G__10246 = (0);
var G__10247 = (0);
seq__10167_10227 = G__10244;
chunk__10168_10228 = G__10245;
count__10169_10229 = G__10246;
i__10170_10230 = G__10247;
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
var vec__10171 = markdown.transformers.parse_metadata_headers(lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(0),null);
var num_lines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10171,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [metadata,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(num_lines,lines)], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__10174 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__10175 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__10176 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__10177 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__10176);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__10177);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__10178 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10178,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__10184_10248 = lines__$1;
var vec__10185_10249 = G__10184_10248;
var seq__10186_10250 = cljs.core.seq(vec__10185_10249);
var first__10187_10251 = cljs.core.first(seq__10186_10250);
var seq__10186_10252__$1 = cljs.core.next(seq__10186_10250);
var line_10253 = first__10187_10251;
var more_10254 = seq__10186_10252__$1;
var state_10255 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__10184_10256__$1 = G__10184_10248;
var state_10257__$1 = state_10255;
while(true){
var vec__10191_10258 = G__10184_10256__$1;
var seq__10192_10259 = cljs.core.seq(vec__10191_10258);
var first__10193_10260 = cljs.core.first(seq__10192_10259);
var seq__10192_10261__$1 = cljs.core.next(seq__10192_10259);
var line_10262__$1 = first__10193_10260;
var more_10263__$1 = seq__10192_10261__$1;
var state_10264__$2 = state_10257__$1;
var line_10265__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_10264__$2))?"":line_10262__$1);
var state_10266__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10264__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_10264__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_10264__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_10264__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_10264__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_10263__$1))){
var G__10267 = more_10263__$1;
var G__10268 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_10265__$2,cljs.core.first(more_10263__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_10266__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_10265__$2.trim()));
G__10184_10256__$1 = G__10267;
state_10257__$1 = G__10268;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_10266__$3))),line_10265__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_10266__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__10175);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__10174);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10269 = arguments.length;
var i__4865__auto___10270 = (0);
while(true){
if((i__4865__auto___10270 < len__4864__auto___10269)){
args__4870__auto__.push((arguments[i__4865__auto___10270]));

var G__10271 = (i__4865__auto___10270 + (1));
i__4865__auto___10270 = G__10271;
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
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq10194){
var G__10195 = cljs.core.first(seq10194);
var seq10194__$1 = cljs.core.next(seq10194);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10195,seq10194__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10272 = arguments.length;
var i__4865__auto___10273 = (0);
while(true){
if((i__4865__auto___10273 < len__4864__auto___10272)){
args__4870__auto__.push((arguments[i__4865__auto___10273]));

var G__10274 = (i__4865__auto___10273 + (1));
i__4865__auto___10273 = G__10274;
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
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq10196){
var G__10197 = cljs.core.first(seq10196);
var seq10196__$1 = cljs.core.next(seq10196);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__10197,seq10196__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10275 = arguments.length;
var i__4865__auto___10276 = (0);
while(true){
if((i__4865__auto___10276 < len__4864__auto___10275)){
args__4870__auto__.push((arguments[i__4865__auto___10276]));

var G__10277 = (i__4865__auto___10276 + (1));
i__4865__auto___10276 = G__10277;
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
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq10201){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10201));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___10278 = arguments.length;
var i__4865__auto___10279 = (0);
while(true){
if((i__4865__auto___10279 < len__4864__auto___10278)){
args__4870__auto__.push((arguments[i__4865__auto___10279]));

var G__10280 = (i__4865__auto___10279 + (1));
i__4865__auto___10279 = G__10280;
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
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq10202){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10202));
}));


//# sourceMappingURL=markdown.core.js.map
