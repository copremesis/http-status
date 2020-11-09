const fetch = require('node-fetch');

(async () => {
  const response = await fetch('https://dqi6pqaew4ir5.cloudfront.net');
  if(response.status == 403) {
    console.log('Turn on vpn & reload');
  } 
  else {
    const body = await response.text();
    console.log(body);
  }
})();
