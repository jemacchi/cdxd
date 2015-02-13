/**
    @overview This plugin allows to add scrum-related annotations on code, using concept defined as part of {@link https://github.com/jemacchi/cdxd Code Driven Documentation}
    @module plugins/cdxd-scrum
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {
	// Class diagrams
	dictionary.defineTag('cdxd.class', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class",
					'_entityType': "class"
				};
			};
		}
	});
	dictionary.defineTag('cdxd.interface', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class",
					'_entityType': "interface"
				};
			};
		}
	});
	dictionary.defineTag('cdxd.abstract', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class",
				'_entityType': "abstract"				
			};
		}
	});
	dictionary.defineTag('cdxd.implements', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'interface';
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			};
			if (!doclet._charts["class-"+params[0]]._relations) 
				doclet._charts["class-"+params[0]]._relations = {};
			var info = {
			        '_relationType': 'implementation',
					'_target': params[1],
					'_targetType': type
			};
			var size = Object.keys(doclet._charts["class-"+params[0]]._relations).length; 
			doclet._charts["class-"+params[0]]._relations[size] = info;
		}
	});
	dictionary.defineTag('cdxd.inherits', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			};
			if (!doclet._charts["class-"+params[0]]._relations) 
				doclet._charts["class-"+params[0]]._relations = {};
			var info = {
			        '_relationType': 'generalization',
					'_target': params[1],
					'_targetType': type
			};
			var size = Object.keys(doclet._charts["class-"+params[0]]._relations).length; 
			doclet._charts["class-"+params[0]]._relations[size] = info;
		}
	});
	dictionary.defineTag('cdxd.associatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			};
			if (!doclet._charts["class-"+params[0]]._relations) 
				doclet._charts["class-"+params[0]]._relations = {};
			var info = {
			        '_relationType': 'association',
					'_target': params[1],
					'_targetType': type
			};
			var size = Object.keys(doclet._charts["class-"+params[0]]._relations).length; 
			doclet._charts["class-"+params[0]]._relations[size] = info;
		}
	});
	dictionary.defineTag('cdxd.composedBy', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			};
			if (!doclet._charts["class-"+params[0]]._relations) 
				doclet._charts["class-"+params[0]]._relations = {};
			var info = {
			        '_relationType': 'composition',
					'_target': params[1],
					'_targetType': type
			};
			var size = Object.keys(doclet._charts["class-"+params[0]]._relations).length; 
			doclet._charts["class-"+params[0]]._relations[size] = info;
		}
	});
	dictionary.defineTag('cdxd.aggregatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			};
			if (!doclet._charts["class-"+params[0]]._relations) 
				doclet._charts["class-"+params[0]]._relations = {};
			var info = {
			        '_relationType': 'aggregation',
					'_target': params[1],
					'_targetType': type
			};
			var size = Object.keys(doclet._charts["class-"+params[0]]._relations).length; 
			doclet._charts["class-"+params[0]]._relations[size] = info;
		}
	});
	dictionary.defineTag('cdxd.classdesc', {
		onTagged: function(doclet, tag) {			    
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["class-"+params[0]]) {
				doclet._charts["class-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "class"
				};
			}
			doclet._charts["class-"+params[0]]._chartDesc = message ;
		}
	});
	// Sequence diagrams
	dictionary.defineTag('cdxd.call', {
		onTagged: function(doclet, tag) {	
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["sequence-"+params[0]]) {
				doclet._charts["sequence-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "sequence"
				};
			}
			if (!doclet._charts["sequence-"+params[0]]._data) 
				doclet._charts["sequence-"+params[0]]._data = {};
			var msg = {
					'_order': params[1],
					'_message': message,
					'_destination': params[2],
					'_type': 'call'
			};
			doclet._charts["sequence-"+params[0]]._data[params[1]] = msg;
		}
	});
	dictionary.defineTag('cdxd.callback', {
		onTagged: function(doclet, tag) {	
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["sequence-"+params[0]]) {
				doclet._charts["sequence-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "sequence"
				};
			}
			if (!doclet._charts["sequence-"+params[0]]._data) 
				doclet._charts["sequence-"+params[0]]._data = {};
			var msg = {
					'_order': params[1],
					'_message': message,
					'_destination': params[2],
					'_type': 'callback'
			};
			doclet._charts["sequence-"+params[0]]._data[params[1]] = msg;
		}
	});
	dictionary.defineTag('cdxd.seqnote', {
		onTagged: function(doclet, tag) {	
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["sequence-"+params[0]]) {
				doclet._charts["sequence-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "sequence"
				};
			}
			if (!doclet._charts["sequence-"+params[0]]._data) 
				doclet._charts["sequence-"+params[0]]._data = {};
			var msg = {
					'_order': params[1],
					'_message': message,
					'_location': params[2],
					'_type': 'note'
			};
			doclet._charts["sequence-"+params[0]]._data[params[1]] = msg;
		}
	});
	dictionary.defineTag('cdxd.seqdesc', {
		onTagged: function(doclet, tag) {	
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			if (!doclet._charts["sequence-"+params[0]]) {
				doclet._charts["sequence-"+params[0]] = {
					'_chartId': params[0],
					'_chartName': params[0],
					'_chartType': "sequence",
				};
			}
			doclet._charts["sequence-"+params[0]]._chartDesc = message ;
		}
	});

}