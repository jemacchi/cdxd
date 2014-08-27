/**
    @overview This is just an example.
    @module plugins/cdxd
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {
	// Class diagrams
	dictionary.defineTag('cdxd.interface', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class" 
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
				'_chartType': "class" 
			};
		}
	});
	dictionary.defineTag('cdxd.class', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class" 
			};
		}
	});
	dictionary.defineTag('cdxd.inherits', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
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
			if (!doclet._charts["class-"+params[0]]._inherits) 
				doclet._charts["class-"+params[0]]._inherits = {};
			var info = {
					'_parent': params[1]
			};
			doclet._charts["class-"+params[0]]._inherits['info'] = info;
		}
	});
	dictionary.defineTag('cdxd.associatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class" 
			};
		}
	});
	dictionary.defineTag('cdxd.composedBy', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class" 
			};
		}
	});
	dictionary.defineTag('cdxd.aggregatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			if (!doclet._charts) 
				doclet._charts = {};
			doclet._chartRelated = true;
			doclet._charts["class-"+params[0]] = {
				'_chartId': params[0],
				'_chartName': params[0],
				'_chartType': "class" 
			};
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
	dictionary.defineTag('cdxd.note', {
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
}