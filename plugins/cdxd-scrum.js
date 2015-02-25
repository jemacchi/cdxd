/**
    @overview This plugin allows to add scrum-related annotations on code, using concept defined as part of {@link https://github.com/jemacchi/cdxd Code Driven Documentation}
    @module plugins/cdxd-scrum
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {
	// Project annotations
	// Tag for project definition
	dictionary.defineTag('cdxd.project', {
		onTagged: function(doclet, tag) {
			// fields: projectID, 'description'
		}
	});
	// Scrum annotations
	// Tag for user story definition
	dictionary.defineTag('cdxd.userstory', {
		onTagged: function(doclet, tag) {
			// fields: userstoryID, sprintID, 'title'
		}
	});
	// Tag for user story description (text). Requires cdxd.userstory existence
	dictionary.defineTag('cdxd.usdesc', {
		onTagged: function(doclet, tag) {
			// fields: userstoryID, 'description'
		}
	});
	// Tag for user stories dependences definition. Requires cdxd.userstory existence
	dictionary.defineTag('cdxd.usdep', {
		onTagged: function(doclet, tag) {			    
			// fields: userstoryID, 'list of parent userstoriesID separated by comma'
		}
	});
	// Tag for logging time/effort
	dictionary.defineTag('cdxd.log', {
		onTagged: function(doclet, tag) {
			// fields: taskID, effort (x.xw, x.xd, x.xh, x.xm)
		}
	});
	// Tag for tasks definitions
	dictionary.defineTag('cdxd.task', {
		onTagged: function(doclet, tag) {
			// fields: taskID, userstoryID, 'title'
		}
	});
	// Tag for tasks description. Requires cdxd.task existence.
	dictionary.defineTag('cdxd.taskdesc', {
		onTagged: function(doclet, tag) {
			// fields: taskID, 'description'
		}
	});
	// Tag for tasks dependencies. Requires cdxd.task existence.
	dictionary.defineTag('cdxd.taskdep', {
		onTagged: function(doclet, tag) {
			// fields: taskID, 'list of parent tasksID separated by comma'
		}
	});
	// Tag for testcases definition
	dictionary.defineTag('cdxd.testcase', {
		onTagged: function(doclet, tag) {
			// fields: testcaseID, userstoryID, 'title'
		}
	});
	// Tag for testcase steps definition. Requires cdxd.testcase existence.
	dictionary.defineTag('cdxd.testcase-step', {
		onTagged: function(doclet, tag) {
			// fields: testcaseID, 'steps'
		}
	});
	// Tag for test definition/linking. Requires testcase existence.
	dictionary.defineTag('cdxd.test', {
		onTagged: function(doclet, tag) {
			// fields: testID, testcaseID
		}
	});
	// Tag for test sprint definition
	dictionary.defineTag('cdxd.sprint', {
		onTagged: function(doclet, tag) {			    
			// fields: sprintID, projectID, 'description'
		}
	});
}