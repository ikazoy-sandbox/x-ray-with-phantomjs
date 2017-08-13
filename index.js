const phantom = require('x-ray-phantom');
const Xray = require('x-ray');

// "webSecurity" option for Phantom security error
const x = Xray()
  .driver(phantom({ webSecurity: false }));

x('https://blog.ycombinator.com/', '.post', [{
  title: 'h1 a',
  link: '.article-title@href',
}])
    .paginate('.nav-previous a@href')
    .limit(3)
    .write('results.json');
