module('Console.Swear', {
	setup: function () {
		this.log = sinon.spy(console, 'log');
		window.__SWEAR__.phrases = ['lorem ipsum'];
	},
	teardown: function() {
		console.log.restore();
	}
});

test('console.swear is defined', function () {
	equal(typeof console.swear, 'function');
});

test('it calls console.log', function () {
	console.swear();
	equal(this.log.calledOnce, true);
});

test('it inserts swear-phrase', function () {
	console.swear();
	equal(this.log.withArgs('lorem ipsum\n').calledOnce, true);
});

test('it inserts log-arguments', function () {
	var log1 = [1, 'foo'],
		log2 = {bar: 'lorem'};
	console.swear(log1, log2);
	equal(this.log.withArgs('lorem ipsum\n', log1, log2).calledOnce, true);
});

module('options', {
	setup: function () {
		this.log = sinon.spy(console, 'log');
		this.warn = sinon.spy(console, 'warn');
		window.__SWEAR__.phrases = [];
	},
	teardown: function() {
		console.log.restore();
		console.warn.restore();
		window.__SWEAR__.type = 'log';
	}
});

test('it has an add-method', function () {
	equal(typeof console.swear.add, 'function');
});

test('the add-method adds strings', function () {
	console.swear.add('lorem foobar');
	console.swear();
	equal(window.__SWEAR__.phrases.length, 1);
	equal(window.__SWEAR__.phrases[0], 'lorem foobar');
	equal(this.log.withArgs('lorem foobar\n').calledOnce, true);
});

test('the add-method adds arrays', function () {
	window.__SWEAR__.phrases = ['hodor'];
	console.swear.add(['lorem', 'ipsum']);
	equal(window.__SWEAR__.phrases.length, 3);
	equal(window.__SWEAR__.phrases[1], 'lorem');
	equal(window.__SWEAR__.phrases[2], 'ipsum');
});

test('it has a type-method', function () {
	equal(typeof console.swear.type, 'function');
});

test('it lets you set a console-type', function () {
	console.swear.type('warn');
	console.swear();
	equal(this.warn.calledOnce, true);
});

test('it only lets you set defined console-types', function () {
	console.swear.type('foobar');
	console.swear();
	equal(this.log.calledOnce, true);
});







