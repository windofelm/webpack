import _ from 'lodash';
import myModule from './modules/module';
import materials from './modules/materials';
import './style.css';

function component() {
    let element = document.createElement('div');

       // Lodash, now imported by this script
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        element.classList.add('hello');

    return element;
}

document.body.appendChild(component());
console.log(myModule.sayHello("Namee"));
console.log(materials.sayHello());


module.exports = { // Public methods
    sayHello: myModule.sayHello
};

//MyLibrary.sayHello()
