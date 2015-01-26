/**
    @overview This plugin allows to add charts/diagrams on code side, using concept defined as {@link https://github.com/jemacchi/cdxd Code Driven Documentation}
    @module plugins/cdxd
    @author Jose Macchi <jemacchi@yahoo.com.ar>
 */
exports.defineTags = function(dictionary) {

	var ChartUtils = {
		getCharts: function(doclet) {
			if (!doclet._charts) 
				doclet._charts = {};
			return doclet._charts;
		},
		getRelations: function(doclet, ctype, name) {
			if (!doclet._charts[ctype+'-'+name]._relations) 
				doclet._charts[ctype+'-'+name]._relations = {};
			return doclet._charts[ctype+'-'+name]._relations;
		},
		setEntityTypeOnChart: function(charts, ctype, name, etype) {
			if (!charts[ctype+'-'+name]) {
				charts[ctype+'-'+name] = {
					'_chartId': name,
					'_chartName': name,
					'_chartType': ctype,
					'_entityType': etype
				};
			};
		},
		setChartTypeOnChart: function(charts, ctype, name) {
			if (!charts[ctype+'-'+name]) {
				charts[ctype+'-'+name] = {
					'_chartId': name,
					'_chartName': name,
					'_chartType': ctype
				};
			};
		},
		addRelation: function(chartRelations, rtype, target, ttype) {
			var info = {
			        '_relationType': rtype,
					'_target': target,
					'_targetType': ttype
			};
			var size = Object.keys(chartRelations).length; 
			chartRelations[size] = info;
		}
	};
	// Class diagrams
	dictionary.defineTag('cdxd.class', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setEntityTypeOnChart(charts,"class",params[0],"class");
		}
	});
	dictionary.defineTag('cdxd.interface', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setEntityTypeOnChart(charts,"class",params[0],"interface");
		}
	});
	dictionary.defineTag('cdxd.abstract', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setEntityTypeOnChart(charts,"class",params[0],"abstract");
		}
	});
	dictionary.defineTag('cdxd.implements', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'interface';
			var charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(charts,"class",params[0]);
			var chartRelations = ChartUtils.getRelations(doclet,"class",params[0]);		
			ChartUtils.addRelation(chartRelations,'implementation',params[1], type);			
		}
	});
	dictionary.defineTag('cdxd.inherits', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			var charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"class",params[0]);
			var chartRelations = ChartUtils.getRelations(doclet,"class",params[0]);		
			ChartUtils.addRelation(chartRelations,'generalization',params[1], type);
		}
	});
	dictionary.defineTag('cdxd.associatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"class",params[0]);
			var chartRelations = ChartUtils.getRelations(doclet,"class",params[0]);
			ChartUtils.addRelation(chartRelations,'association',params[1], type);
		}
	});
	dictionary.defineTag('cdxd.composedBy', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"class",params[0]);
			var chartRelations = ChartUtils.getRelations(doclet,"class",params[0]);
			ChartUtils.addRelation(chartRelations,'composition',params[1], type);
		}
	});
	dictionary.defineTag('cdxd.aggregatedWith', {
		onTagged: function(doclet, tag) {
			var params = tag.value.split(" ");
			var type = 'class';
			if (params[2]) 
				type = params[2];
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"class",params[0]);
			var chartRelations = ChartUtils.getRelations(doclet,"class",params[0]);
			ChartUtils.addRelation(chartRelations,'aggregation',params[1], type);
		}
	});
	dictionary.defineTag('cdxd.classdesc', {
		onTagged: function(doclet, tag) {			    
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"class",params[0]);
			doclet._charts["class-"+params[0]]._chartDesc = message ;
		}
	});
	// Sequence diagrams
	dictionary.defineTag('cdxd.call', {
		onTagged: function(doclet, tag) {	
			var params = tag.value.split(" ");
			var message = tag.value.substring(tag.value.indexOf("'"));
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"sequence",params[0]);
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
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"sequence",params[0]);
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
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"sequence",params[0]);
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
			doclet._charts = ChartUtils.getCharts(doclet);
			doclet._chartRelated = true;
			ChartUtils.setChartTypeOnChart(doclet._charts,"sequence",params[0]);
			doclet._charts["sequence-"+params[0]]._chartDesc = message ;
		}
	});

}