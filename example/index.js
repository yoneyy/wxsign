const strdm = require('strdm');

console.log(strdm());          // dZUYsl
console.log(strdm(32));        // ilq4i3rXe70rz3j4hrpjMKI3jqCDpr0q
console.log(strdm(32, true));  // 8AMl$2+8jC25u}>DXjjo9p]n.,vWhzVU
console.log(strdm(32, { numbers: false }));       // iwhfOOHlEFNIbuTGHseCyCYnppCXoraZ
console.log(strdm(32, { strings: false }));       // 56124247096321521961829045800161
console.log(strdm(32, { strings: 'ABCDEFG' }));   // 8EE9B8GFF79CF28AADA9A2G439242211
console.log(strdm(32, { symbols: true }));        // HccU8vM)1,TVHi$=J,::V^wiMxY(tG-j
console.log(strdm(32, { symbols: true, numbers: false, strings: false }));    // ,|+;%]@;,_+#(%.~;[@!{}-<~?@=;;??
console.log(strdm(32, { symbols: ':;', numbers: false, strings: false }));    // :;;;::;;:::::;::::;:;::;:;::;;;: