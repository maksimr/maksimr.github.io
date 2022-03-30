goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__7694__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7695__i = 0, G__7695__a = new Array(arguments.length -  0);
while (G__7695__i < G__7695__a.length) {G__7695__a[G__7695__i] = arguments[G__7695__i + 0]; ++G__7695__i;}
  args = new cljs.core.IndexedSeq(G__7695__a,0,null);
} 
return G__7694__delegate.call(this,args);};
G__7694.cljs$lang$maxFixedArity = 0;
G__7694.cljs$lang$applyTo = (function (arglist__7696){
var args = cljs.core.seq(arglist__7696);
return G__7694__delegate(args);
});
G__7694.cljs$core$IFn$_invoke$arity$variadic = G__7694__delegate;
return G__7694;
})()
);

(o.error = (function() { 
var G__7697__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__7697 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__7698__i = 0, G__7698__a = new Array(arguments.length -  0);
while (G__7698__i < G__7698__a.length) {G__7698__a[G__7698__i] = arguments[G__7698__i + 0]; ++G__7698__i;}
  args = new cljs.core.IndexedSeq(G__7698__a,0,null);
} 
return G__7697__delegate.call(this,args);};
G__7697.cljs$lang$maxFixedArity = 0;
G__7697.cljs$lang$applyTo = (function (arglist__7699){
var args = cljs.core.seq(arglist__7699);
return G__7697__delegate(args);
});
G__7697.cljs$core$IFn$_invoke$arity$variadic = G__7697__delegate;
return G__7697;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
