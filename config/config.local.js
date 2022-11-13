exports.mongoose = {
    client: {
        url: 'mongodb://127.0.0.1:27017/product1',
        options: {},
        // mongoose global plugins, expected a function or an array of function and options
        // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],    
    }
};

exports.baseUrl = 'http://127.0.0.1:7001';

exports.cors = {
    origin: 'http://localhost:8080', //域名+端口 或者  *(全匹配)
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true

};

exports.security = {
    domainWhiteList: [ 'http://localhost:8080' ],
    csrf: {
        enable: false
        // headerName: 'x-csrf-token' // 自定义请求头
    }
};

// const conn = mongoose.connection
// conn.on('connected', function(){
//     console.log('mongodb启动成功')
//     })