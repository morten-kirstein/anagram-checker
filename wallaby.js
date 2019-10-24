module.exports = function () {
    return {
        files: [
            'src/**/*.js'
        ],

        tests: [
            'test/**/*Spec.js'
        ],
        testFramework: 'mocha',

        env: {
            type: 'node'
        }
    };
};