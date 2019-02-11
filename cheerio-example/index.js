const cheerio = require('cheerio');

const $ = cheerio.load(
  '<p id="example">This is an <strong>example</strong> paragraph</p>',
);

const txt = $('#example').text();
console.log(txt);
