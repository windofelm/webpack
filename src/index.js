import _ from 'lodash';
import myModule from './modules/module';
import './style.css';

    function component() {
        var element = document.createElement('div');

           // Lodash, now imported by this script
            element.innerHTML = _.join(['Hello', 'webpack'], ' ');
            element.classList.add('hello');

        return element;
    }

document.body.appendChild(component());
console.log(myModule.sayHello("Namee"));