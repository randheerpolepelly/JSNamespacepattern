//This is toplevel js here we define common functionalities

var MYAPP = MYAPP || {};//one single global object
(function(){
	'use strict'
	//Automating nested namespacing

	MYAPP.namespace = function(name){
		var subParts = name.split('.');
		var parent = MYAPP;

		for(var i in subParts){
			if(!parent[subParts[i]]){
				parent[subParts[i]] = {};
			}
			parent = parent[subParts[i]];
		}

	}



	//creating util object for common functionalities
	MYAPP.namespace('util');

})();