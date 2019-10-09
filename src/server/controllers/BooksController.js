import Books from "@models/Books";
class BooksController {
    async actionIndex(ctx, next) {
        const $model = new Books();
        const result = await $model.getList();
        console.log("返回的值", result);
        // ctx.body = result;
        ctx.body = await ctx.render('books/pages/list', {
            result
        });
    }
    async actionCreate(ctx, next) {
        ctx.body = await ctx.render('books/pages/create');
    }
}
export default BooksController;