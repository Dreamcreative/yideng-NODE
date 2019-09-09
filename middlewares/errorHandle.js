/***
 * 错误处理中心
 */
const errorHandle = {
  error(app) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (err) {
        console.log("ctx  " , ctx.logger)
        ctx.status = ctx.status || 500;
        ctx.body = "项目出错";
        ctx.logger.error(err);
      }
    });
    app.use(async (ctx, next) => {
      /**
       * 洋葱模型
       */
      await next();
      if (404 === ctx.status) {
        ctx.status = 200;
        ctx.body = `<script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="/" homePageName="回到我的主页"></script>`;
      }
    });
  }
};
module.exports = errorHandle;
