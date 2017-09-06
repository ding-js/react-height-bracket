const path = require('path');
const share = require('./share');
const _ = require('lodash');

const config = {
    devServer: {
        contentBase: path.resolve('example'),
        port: 9000
    }
};


module.exports = _.merge({}, share, config);