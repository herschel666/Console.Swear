/*
 * Console.Swear
**/

(function (window) {

	/*
	 * No console, no swearing!
	**/
	if ( !window.console ) {
		return;
	}

	/*
	 * Possible console-methods.
	**/
	var consoleTypes = 'debug log info warn error dir';

	/*
	 * Object for storing the swear-phrases.
	**/
	var __SWEAR__ = window.__SWEAR__ = {
		phrases: [
			'Holy mother of fuck, look at this!',
			'What a crappy mess is this?',
			'What the fuck am I seeing here?',
			'What the F is that?',
			'Yep, it\'s totally fucked up.',
			'Damn, what happened here?',
			'Shit, I\'m out!!'
		],
		type: 'log'
	};

	/*
	 * Checks if the passed argument is of type 'array'.
	**/
	function isArray(arr) {
		return Object.prototype.toString.call(arr) === '[object Array]';
	}

	/*
	 * Checks, if the console-methods exists.
	**/
	function methodExists(_consoleType_) {

		var consoleType;

		if ( !_consoleType_ || typeof _consoleType_ !== 'string' ) {
			return false;
		}

		consoleType = _consoleType_.replace(/\s+/g, '');

		return consoleTypes.indexOf(consoleType) > -1;

	}

	/*
	 * Returns a random swear-phrase.
	**/
	function getRandom() {
		var rand = Math.floor(Math.random() * __SWEAR__.phrases.length);
		return __SWEAR__.phrases[rand] || '';
	}

	/*
	 * The console.swear-magic! \m/
	**/
	console.swear = function () {
		var args = Array.prototype.slice.call(arguments);
		args.unshift(getRandom() + '\n');
		return console[__SWEAR__.type].apply(console, args);
	};

	/*
	 * Method for adding new swear-phrases.
	**/
	console.swear.add = function (newPhrases) {

		if ( !newPhrases ) {
			return;
		}

		if ( typeof newPhrases === 'string' ) {
			__SWEAR__.phrases.push(newPhrases);
			return;
		}

		if ( isArray(newPhrases) ) {
			__SWEAR__.phrases = __SWEAR__.phrases.concat(newPhrases);
		}

	};

	/*
	 * Method for setting the type.
	**/
	console.swear.type = function (_consoleType_) {
		var consoleType = methodExists(_consoleType_)
			? _consoleType_
			: 'log';
		__SWEAR__.type = consoleType;
	};

})(window);