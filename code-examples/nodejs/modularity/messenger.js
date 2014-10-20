module.exports = function messenger(name) {
    return {
        sayHello: function () {
            console.log('Hello ' + name);
        },
        sayBye: function () {
            console.log('Goodbye ' + name);
        }
    }
};