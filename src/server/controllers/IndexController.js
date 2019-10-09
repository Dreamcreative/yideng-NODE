import Controller from "./BaseController";
class IndexController extends Controller {
    constructor() {
        super();
    }
    async actionIndex(ctx, next) {
        // ctx.body = await ctx.render('Index/home')
        ctx.body = {
            home:"首页数据"
        }
    }
}
export default IndexController;