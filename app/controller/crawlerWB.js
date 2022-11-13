'use strict';

const { Controller } = require('egg');
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
const axios = require("axios");
const request = require("request");
class CrawlerController extends Controller {
    async crawler() {
        const { ctx } = this;
        const req = ctx.request.body

        let keyword = req.product
        let cookies = 'SUB=_2AkMULBOHf8NxqwFRmPgRym_qao12ygjEieKicOJcJRMxHRl-yT9kqhRbtRB6P6w9aKVYEtQZeRh4XAjda6U5XhZJX1G3; SUBP=0033WrSXqPxfM72-Ws9jqgMF55529P9D9WW_DEmOuibRA_V2rKdWIP.5'

        let ret = [];
        async function Main(keyword) {
            // console.log("正在查询关键字: %s ", keyword);
            const maxPage = 5;
            for (let page = 1; page <= maxPage; page++) {
                var Url =
                    "http://s.weibo.com/weibo/" +
                    encodeURIComponent(keyword) +
                    "&page=" +
                    page;
                // console.log("Url", Url);
                let html = await fetchHtml(Url);
                // console.log('html', html)
                const $ = cheerio.load(html, { decodeEntities: false });
                $(".card-wrap .content").each((idx, element) => {
                    // const $$ =  $(element);
                    const name = $(element).children(".txt").attr("nick-name");

                    let comment = $(element).children(".txt").text();
                    // 去掉空格
                    comment = comment.replace(/\ +/g, "");
                    // 去掉回车
                    comment = comment.replace(/[\r\n]/g, "");

                    let timeStr = $(element).children(".from").children("a").first().text();

                    // 去掉空格
                    timeStr = timeStr.replace(/\ +/g, "");
                    // 去掉回车
                    timeStr = timeStr.replace(/[\r\n]/g, "");

                    // console.log("name, comment, timeStr", name, comment, timeStr);
                    ret.push({
                        name,
                        comment,
                        timeStr,
                    });
                });
            }
            await writeData()
            // fs.writeFileSync("./ret.txt", JSON.stringify(ret));
            // console.log("done!", ret);
            // console.log('keyword', keyword)
        }

        async function writeData() {
            let mongo = []
            ret.forEach((item, index) => {
                mongo.push({
                    name: keyword,
                    wbname: item.name,
                    wb: item.comment,
                    wbtime: item.timeStr,
                    // score: null,
                })
            });
            await ctx.model.Comment.insertMany(mongo);
            // const products = await ctx.model.Product.find({
            //     name: keywords
            // });
            // console.log(products, products.length)
        }

        function fetchHtml(url) {
            // let cookies = fs.readFileSync("./cookies.txt");
            let headers = {
                "User-Agent":
                    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.162 Safari/537.36",
                "Accept-Language": "en-US,en;q=0.5",
                "WeiboData-Type": "application/x-www-form-urlencoded",
                Connection: "Keep-Alive",
                cookie: cookies.toString(),
            };
            let options = {
                method: "GET",
                url: url,
                headers: headers,
                gzip: true,
            };
            return new Promise((resolve, reject) => {
                request(options, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        response.setEncoding("utf-8");
                        resolve(response.body);
                    } else {
                        console.log("error");
                    }
                });
            });
        }



        await Main(keyword);


        ctx.body = {
            code: 200,
            message: '爬取完毕',
            data: null
        }
    }
}
module.exports = CrawlerController;
