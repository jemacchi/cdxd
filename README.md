cdxd
====

A JSDoc Template &amp; Plugin to implement "Code Driven <X> Documentation" concepts (review it [here] (http://josemacchi.wordpress.com) ). Sorry, spanish for now !

These plugin & template depends on:
* [JSDoc](https://github.com/jsdoc3/jsdoc)
* [js-sequence-diagrams] (http://bramp.github.io/js-sequence-diagrams/)

## About

These tools implements the concepts/ideas related to CDxD. Basically, CDxD was developed following ideas like TDD.

It implies something as simple as deliver documentation based on the code, specifically documented when coding stage and by coders/programmers.
 
All of us, as it professional knows that documentation is a task that usually it's avoided, since it's far away from real code implementation, so the idea is to keep documentation (at all stages) as closer to code as possible.

CDxD concept is about communicating what it's related to a project, as close to code as possible, using diagrams/texts/charts/etc. 

CDxD means Code Driven <x> Documentation, where <x> could be software design, architectural, test cases, user stories or anything that it's part of the project and requires to be properly registered/versioned/tracked/communicated/shared between members of the project.

CDxD implementation is based on JSDoc since it's the best structured/designed, flexible and powerful JS documentation tool (maybe it has not a nice look & feel, but you can find a pretty good comparation [here] (http://blog.fusioncharts.com/2013/12/jsdoc-vs-yuidoc-vs-doxx-vs-docco-choosing-a-javascript-documentation-generator/ ) )

Tools included on this repo are :
* A plugin that allows to add specific doclets ( @elements :P ) to your javadoc-like documentation on code,
* A template that allows to use those specific doclets to generate documentation (like charts/diagrams/other stuff)

## Demo

This is a demo of template & plugin use, to get defined a simple sequence chart (based on doclets)

* [Sequence Chart Demo] (http://cdxd.netne.net/sequence-SequenceDiagram1.html)

## Installation

Steps:

1. Install JSDoc3 
2. Include plugin/cdxd.js file inside JSDoc plugins folder
3. Add cdxd template folder inside of JSDoc templates folder
4. Edit your JSDoc conf.json file and enable the cdxd plugin and the template,   

```javascript
    ...
    "plugins": ["plugins/cdxd"],
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false,
        "cdxd": {
            "outputSourceFiles": true
        }
    },
	"opts": {
		"template": "templates/cdxd"
	}
	...
```

Once you have enabled the plugin, then you only need to call JSDoc as usual 
(a sample cmd-line is provided at run-test file with a reference to test folder, with a simple sequence diagram annotated)

## Basic Usage

Currently only Sequence Diagrams are fully implemented, that means that you can use doclet @cdxd.call, @cdxd.callback & @cdxd.note on your code as this 

```javascript

      /**
       * First call response.
	   * @cdxd.callback SequenceDiagram1 2 SampleAClass 'Message 2'
	   * @cdxd.call SequenceDiagram1 4 SampleCClass 'Message 4'
	   * @cdxd.note SequenceDiagram1 5 over 'This is a simple note'
       */
      firstResponse: function(fx) {
        return null;
      }
	  
```

Call's Implemented doclets:
* @cdxd.call --> Call
* @cdxd.callback --> Callback (dotted line)

where doclets arguments are :

* diagram code (ie. SequenceDiagram1)
* call order number  (ie. 3)
* entity/class destination  (ie. SampleBClass)
* message text (required to be enclosed in quotation marks) (ie. 'Message 2')

Or Notes implemented doclets:
* @cdxd.note --> Add notes to defined entity 

Params :
* diagram code (ie. SequenceDiagram1)
* call order number  (ie. 3)
* note location  (right|left|over)
* message text (required to be enclosed in quotation marks) (ie. 'Message 2')

Doclet assumes the entity source as the current memberof property of the doclet (that means that uses the class definition).
Using doclet in this way, you can distribute a sequence diagram documentation throw the code as it's really invoked.

## Author

[Jose Macchi](https://github.com/jemacchi)
