/**
 * Uses country.js as a dependency
 */
define(["./country"], function(country) {
	return {
	    ZIP: "default zip",
	    city: "default city",
	    addressCountryName: "address " + country.name,
	    toString: function() {
	    	return this.ZIP + " " + this.city + " " + this.addressCountryName;
	    }
	}
});