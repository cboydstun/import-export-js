//***import selectively and rename***

import { squared, name, tripled as utilsTripled } from './utils.js'

console.log(squared(5));

console.log(name)

console.log(utilsTripled(9));



//***import all and the select function***

import * as Utils from './utils.js'

console.log(Utils.tripled(10));



//***importing as default***

import {default as hello} from './greeting.js'
//import hello from './utils2.js' <- SAME THING
hello();




//***aggregated imports****
import { bye } from './helper.js'
bye();