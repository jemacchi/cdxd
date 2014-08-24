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
	   * @cdxd.call SequenceDiagram1 0 InitialCall SampleAClass
       */
      firstRequest: function(fx) {
        return null;
      },
      /**
       * Second call request.
	   * @cdxd.call SequenceDiagram1 1 EndCall SampleBClass
       * @cdxd.call SequenceDiagram1 3 FinalCall SampleBClass	   
       */
      secondRequest: function(fx) {
        return null;
      }

    });

    return SampleAClass;
  }
);
