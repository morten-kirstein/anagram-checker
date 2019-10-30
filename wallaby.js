module.exports = function () {
    return {
        files: [
            'src/**/*.ts'
        ],

        tests: [
            'test/**/*Spec.ts'
        ],
        testFramework: 'jasmine',
        env: {
            type: 'node'
        }
    };
};