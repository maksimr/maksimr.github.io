.PHONY: clj cljs cljs-repl

clj:
		clj -M -m hello-world.core

cljs:
		clj -M -m cljs.main --compile hello-world.core

cljs-repl:
		clj -M -m cljs.main --repl-opts "{:launch-browser false}" --compile hello-world.core --repl
