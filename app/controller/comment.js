'use strict';

const { Controller } = require('egg');

class CommentController extends Controller {
    async getCommentList() {
        // console.log('inCommentList')
        const { ctx } = this;
        const req = ctx.request.body
        let params = req?.product ? { name: req.product } : {}
        // console.log('params', params)
        if (req.product) {
            const product = await ctx.model.Comment.find({ name: req.product });
            // console.log('product', product)
            ctx.body = {
                code: 200,
                message: product.length ? '商品已存在' : null,
                data: product
            };
        } else {
            ctx.body = {
                code: 200,
                message: '获取全部舆情',
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
module.exports = CommentController;
