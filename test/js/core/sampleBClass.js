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
	* @cdxd.inherits ClassDiagram2 SampleCClass
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
	   * @cdxd.call SequenceDiagram1 2 Callback SampleAClass
	   * @cdxd.call SequenceDiagram1 4 Another SampleCClass
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
