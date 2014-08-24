/**
    @overview This is just an example.
    @module plugins/cdxd
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {
	// Class diagrams
	dictionary.defineTag('cdxd.inherits', {
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
					'_message': params[2],
					'_destination': params[3]
			};
			doclet._charts["sequence-"+params[0]]._data[params[1]] = msg;
		}
	});	
}