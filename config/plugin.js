'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    // static: {
    //   enable: true,
    // }
    mongoose: {
        enable: true, // 开启插件
        package: 'egg-mongoose'
    },
    cors: {
        enable: true,
        package: 'egg-cors'
    }
};

// exports.mongoose = {
//     enable: true, // 开启插件
//     package: 'egg-mongoose'
// };
