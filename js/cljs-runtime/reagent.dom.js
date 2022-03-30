goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__8693 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8694 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8694);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__8695 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__8696 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__8696);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8695);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__8693);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__8702 = arguments.length;
switch (G__8702) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__8703 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__8736_8769 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__8737_8770 = null;
var count__8738_8771 = (0);
var i__8739_8772 = (0);
while(true){
if((i__8739_8772 < count__8738_8771)){
var vec__8746_8773 = chunk__8737_8770.cljs$core$IIndexed$_nth$arity$2(null,i__8739_8772);
var container_8774 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746_8773,(0),null);
var comp_8775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8746_8773,(1),null);
reagent.dom.re_render_component(comp_8775,container_8774);


var G__8776 = seq__8736_8769;
var G__8777 = chunk__8737_8770;
var G__8778 = count__8738_8771;
var G__8779 = (i__8739_8772 + (1));
seq__8736_8769 = G__8776;
chunk__8737_8770 = G__8777;
count__8738_8771 = G__8778;
i__8739_8772 = G__8779;
continue;
} else {
var temp__5753__auto___8780 = cljs.core.seq(seq__8736_8769);
if(temp__5753__auto___8780){
var seq__8736_8781__$1 = temp__5753__auto___8780;
if(cljs.core.chunked_seq_QMARK_(seq__8736_8781__$1)){
var c__4679__auto___8782 = cljs.core.chunk_first(seq__8736_8781__$1);
var G__8783 = cljs.core.chunk_rest(seq__8736_8781__$1);
var G__8784 = c__4679__auto___8782;
var G__8785 = cljs.core.count(c__4679__auto___8782);
var G__8786 = (0);
seq__8736_8769 = G__8783;
chunk__8737_8770 = G__8784;
count__8738_8771 = G__8785;
i__8739_8772 = G__8786;
continue;
} else {
var vec__8752_8787 = cljs.core.first(seq__8736_8781__$1);
var container_8788 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752_8787,(0),null);
var comp_8789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752_8787,(1),null);
reagent.dom.re_render_component(comp_8789,container_8788);


var G__8791 = cljs.core.next(seq__8736_8781__$1);
var G__8792 = null;
var G__8793 = (0);
var G__8794 = (0);
seq__8736_8769 = G__8791;
chunk__8737_8770 = G__8792;
count__8738_8771 = G__8793;
i__8739_8772 = G__8794;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
