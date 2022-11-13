'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;
    // router.get('/', controller.home.index);
    // console.log('controller', controller)
    router.post('/product/list', controller.list.getList);
    router.post('/comment/list', controller.comment.getCommentList);
    router.post('/user/login', controller.user.login);
    router.post('/product/crawler', controller.crawler.crawler);
    router.post('/product/crawlerWB', controller.crawlerWB.crawler);
    // router.post('/product/list', controller.list.getList);
    // console.log('router', router)
};
