const path = require('path');
const share = require('./share');
const _ = require('lodash');

const config = {
    devServer: {
        contentBase: path.resolve('example/build'),
        port: 9000
    },
    devtool: 'source-map'
};


module.exports = _.merge({}, share, config);
