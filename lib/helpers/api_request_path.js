const path = require('path');
const basePath = path.join(__dirname, '../..');

const ApiRequestPath = (service, apiName) => {
    return require(basePath + `/services/${service}/${apiName}`)
}

module.exports = ApiRequestPath