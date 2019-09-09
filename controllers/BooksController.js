const Books = require("@models/Books")
class BooksController {
  async actionIndex(ctx,next) {
    const $model = new Books()
    const result = $model.getList();

    ctx.body=await ctx.render("Books/list",{
      result
    })
  }
  async actionCreate() {}
}
module.exports = BooksController;
