'use strict';

async function git() {
  let response = await fetch('https://github.com/RakhmanHanna');
  let result = await response.json();
  console.log(result);
}
git();
