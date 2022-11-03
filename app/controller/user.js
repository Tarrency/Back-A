'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
    async login() {
        const { ctx } = this; // 从this获取service
        const users = await ctx.model.User.find({
            username: 'u',
            password: 'uu'
        });
        if (users) {
            console.log('找到了');
        } else {
            console.log('找不到');
        }

        ctx.body = {
            code: 0,
            message: 'success',
            data: 'lalalal'
        };
    }
}

module.exports = UserController;
