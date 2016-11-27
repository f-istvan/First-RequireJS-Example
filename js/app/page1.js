/**
 * JS for page1.html
 */
requirejs.config({
    baseUrl: '../js/'
});

requirejs(["lib/jquery", "utils/print"], function(print) {
	log("it works");
	/** Using jQuery **/
	var hOne = $("h1");
	log(hOne);
});