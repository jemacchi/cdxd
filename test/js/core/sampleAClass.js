define([
    'class',
    'knockout',
    'jquery'
  ],
  /**
   * This is a basic Sample Module exporting classes.
   * @exports SampleModule
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */
  function(Inheritance, ko, $) {
    'use strict';
    /**
    * This is a basic Sample Class.
	* @class SampleAClass
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
    * @params Object options options:{ [ el: id/class ][, template: ] [, effects: {...}]  } -> effects: jQuery UI effects.
	* @cdxd.inherits ClassDiagram1 SampleBClass
	* @cdxd.class ClassDiagram2
    * @cdxd.composedBy ClassDiagram1 CompositionSample abstract
	* @cdxd.aggregatedWith ClassDiagram1 AggregationSample	
	* @cdxd.associatedWith ClassDiagram1 AssociationSample	
    */
    var SampleAClass = Class.extend(
	/** @lends SampleAClass.prototype */
	{
      template: '',
      el: '',
      effects: {},
      uuid: null,
      state: null,

      /**
       * First call request.
	   * @cdxd.call SequenceDiagram1 0 SampleDClass 'Message 0'
	   * @cdxd.call SequenceDiagram2 0 AnotherClass 'Message 0'
	   * @cdxd.note SequenceDiagram1 5 over 'This is a simple note'
       */
      firstRequest: function(fx) {
        return null;
      },
      /**
       * Second call request.
	   * @cdxd.call SequenceDiagram1 1 SampleBClass 'Message 1'
       * @cdxd.call SequenceDiagram1 3 SampleBClass 'Message 3'
	   * @cdxd.call SequenceDiagram2 2 FactoryClass 'Message 1'
	   * @cdxd.note SequenceDiagram2 1 over 'Do what you want'
       */
      secondRequest: function(fx) {
        return null;
      }

    });

    return SampleAClass;
  }
);
