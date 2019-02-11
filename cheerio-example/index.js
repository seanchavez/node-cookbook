const cheerio = require('cheerio');
const axios = require('axios');

axios.get('https://buttercms.com/docs/api/').then(response => {
  console.log(response.data);
});

// const $ = cheerio.load(
//   '<p id="example">This is an <strong>example</strong> paragraph</p>',
// );

// const txt = $('#example').text();
// console.log(txt);
