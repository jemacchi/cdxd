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
	   * @cdxd.call SequenceDiagram1 0 SampleDClass 'Message 0'
	   * @cdxd.note SequenceDiagram1 5 over 'This is a simple note'
       */
      firstRequest: function(fx) {
        return null;
      },
      /**
       * Second call request.
	   * @cdxd.call SequenceDiagram1 1 SampleBClass 'Message 1'
       * @cdxd.call SequenceDiagram1 3 SampleBClass 'Message 3'
       */
      secondRequest: function(fx) {
        return null;
      }

    });

    return SampleAClass;
  }
);
