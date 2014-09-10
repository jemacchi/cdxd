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
	* @class SampleBClass
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
    * @params Object options options:{ [ el: id/class ][, template: ] [, effects: {...}]  } -> effects: jQuery UI effects.
	* @cdxd.inherits ClassDiagram2 ExternalClass abstract
	* @cdxd.implements ClassDiagram2 ExternalInterface
	* @cdxd.composedBy ClassDiagram2 CompositionClass
    */
    var SampleBClass = Class.extend(
	/** @lends SampleBClass.prototype */
	{
      template: '',
      el: '',
      effects: {},
      uuid: null,
      state: null,

      /**
       * First call response.
	   * @cdxd.callback SequenceDiagram1 2 SampleAClass 'Message 2'
	   * @cdxd.call SequenceDiagram1 4 SampleCClass 'Message 4'
	   * @cdxd.call SequenceDiagram1 6 SampleDClass 'Message 6'
       */
      firstResponse: function(fx) {
        return null;
      },
      /**
       * Second call response.
       */
      secondResponse: function(fx) {
        return null;
      }

    });

    return SampleBClass;
  }
);
