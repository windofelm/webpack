import _ from 'lodash';
import {sayHello, sayBay, _isSame} from './modules/module';

import isUndefined from './modules/isUndefined';
import isNull from './modules/isNull';
import isAlive from './modules/isAlive';

import materials from './modules/materials';
import './style.css';

function component() {
    let element = document.createElement('div');

       // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack..'], ' ');
        element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
console.log(sayHello("Namee"));
console.log(materials.sayHello());


module.exports = { // Public methods
    sayHello: sayHello,
    sayBay: sayBay,
    isSame: _isSame,
    isUndefined: isUndefined,
    isNull: isNull,
    isAlive: isAlive
};

//MyLibrary.sayHello();
