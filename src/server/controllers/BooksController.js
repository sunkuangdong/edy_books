// 首页路由处理
import Controller from './controllers'
import BooksModel from "../models/BooksModel"
const booksModel = new BooksModel()

class BooksController extends Controller {
    constructor() {
        super()
    }
    async actionBooksListPage(ctx) {
        const result = await booksModel.getBooksList()
        ctx.body = await ctx.render("books/list", {
            data: result.data
        })
    }
}
export default BooksController