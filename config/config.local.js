exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1:27017/product1',
        options: {}
    }
};

exports.baseUrl = 'http://127.0.0.1:7001';

exports.cors = {
    origin: '*', //域名+端口 或者  *(全匹配)
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};

exports.security = {
    csrf: {
        enable: false
        // headerName: 'x-csrf-token' // 自定义请求头
    }
};
