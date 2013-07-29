# Console.Swear
You're in a bad mood? Debugging the shit out of some JS-mess a colleague left for you before going on holidays?? Try `console.swear`.

![image](http://i.imgur.com/4uoKkj5.jpg)

## Usage

First of all include the script:

	…
	<script src="path/to/console-swear-0.0.1.min.js"></script>
	…

After that use it just like all the other `console`-methods. It prints the passed arguments decorated with a randomly picked swear-phrase.

	console.swear(document, 'who cares anyway?');
	=> 'Some nasty swear-phrase'
	   document, 'who cares anyway?'

## Methods

There are two methods for adding more swear-phrases and to set the console-type.

### console.swear.add

`console.swear.add` lets you add new, hot and fully custom swear-phrases. Make it yours! \m/

The method accepts strings and arrays.

	console.swear.add('a new severe swear-phrase');

	console.swear.add([
		'a new phrase',
		'another evil phrase'
	]);

### console.swear.type

Lets you define which console-method is actually used. Possible types are:

`debug`, `log`, `info`, `warn`, `error` and `dir`.

	console.swear.type('warn');

## New phrases

I wrote this little script after a long workday. Additionally I'm not a native english speaker. That's why the standard-phrases are rather crappy. If you have a really good one that you don't want add yourself everytime you use `console.swear`, make a PR or contact me on twitter. ([@Herschel_R](http://twitter.com/Herschel_R)).

----
© 2013 [Emanuel Kluge](http://www.emanuel-kluge.de/)
