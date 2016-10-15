# Tabbed

A JavaScript module for tabbing content. Built with accessibility in mind, works on screen readers and degrades gracefully if JavaScript is turned off.

## Instructions

### Browserify

	var Tabbed = require('tabbed')
	var tabs = new Tabbed('#tabs')

### Browser Usage

1. Link stylesheet

		<!-- Put these into the <head> -->
		<link rel="stylesheet" href="tabbed.css">

2. Add Markup

		<div id="tabs">
        <ul>
            <li><a href="#tab-1">1st Tab</a></li>
            <li><a href="#tab-2">2nd Tab</a></li>
            <li><a href="#tab-3">3rd Tab</a></li>
        </ul>
        <div id="tab-1">
        	<!-- Tabbed content -->
        </div>
        <div id="tab-2">
        	<!-- Tabbed content -->
        </div>
        <div id="tab-3">
        	<!-- Tabbed content -->
        </div>

3. Link JavaScript and trigger script 

		<!-- Put this right before the </body> closing tag -->
		<script src="tabbed.js"></script>
		<script>
			 var tabs = new Tabbed('#tabs')
		</script>		

## Licence

Licensed under the MIT Licence 