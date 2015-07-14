/**
 * JS for page2.html
 */
requirejs.config({
    baseUrl: 'js/'
});

requirejs(["utils/print", "modules/address"], function(print, address) {
	prettyLog(address.addressCountryName);
	prettyLog(address.toString());
	prettyLog(" ~~ ");
	address.city = "Budapest";
	address.ZIP = 1082;
	address.addressCountryName = "Hungary";
	prettyLog(address.addressCountryName);
	prettyLog(address.toString());
});