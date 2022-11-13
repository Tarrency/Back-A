'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
    async login() {
        const { ctx } = this;
        const req = ctx.request.body
        const users = await ctx.model.User.find({
            username: req.username,
            password: req.password
        });
        if (users.length) {
            ctx.body = {
                code: 200,
                message: 'success',
                data: null
            };
        } else {
            ctx.body = {
                code: 100,
                message: '用户不存在',
                data: null
            }
        }
    }
}
module.exports = UserController;
