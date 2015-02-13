/**
    @overview This plugin allows to add scrum-related annotations on code, using concept defined as part of {@link https://github.com/jemacchi/cdxd Code Driven Documentation}
    @module plugins/cdxd-scrum
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {
	// Class diagrams
	dictionary.defineTag('cdxd.userstory', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.usdesc', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.log', {
		onTagged: function(doclet, tag) {
						
		}
	});
	dictionary.defineTag('cdxd.task', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.taskdesc', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.testcase', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.testcase-step', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.test', {
		onTagged: function(doclet, tag) {
			
		}
	});
	dictionary.defineTag('cdxd.sprint', {
		onTagged: function(doclet, tag) {			    
			
		}
	});
}