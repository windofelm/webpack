
let materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

module.exports = {
    sayHello: function () {
        return materials.map((material) => {
            return material.length;
        });
    }
};