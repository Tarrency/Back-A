'use strict';

const { Controller } = require('egg');

class ListController extends Controller {
    async getList() {
        // console.log('inList')
        const { ctx } = this;
        const req = ctx.request.body
        let params = req?.product ? { name: req.product } : {}
        console.log('params', params)
        if (req.product) {
            const product = await ctx.model.Product.find({ name: req.product });
            ctx.body = {
                code: 200,
                message: product.length ? '商品已存在' : null,
                data: product
            };
        } else {
            ctx.body = {
                code: 200,
                message: '获取全部商品',
                data: null
            };
        }
        // const product = await ctx.model.Product.find(params);
        // // console.log('inList', req)
        //     ctx.body = {
        //         code: 200,
        //         message: product.length ? '商品已存在' : null,
        //         data: product
        //     };
    }
}
module.exports = ListController;
