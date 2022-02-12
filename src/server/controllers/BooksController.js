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
        ctx.body = await ctx.render("books/pages/list", {
            // data: result.data
            data: [
                {id: 1, name: "图书一"},
                {id: 2, name: "图书2"},
                {id: 3, name: "图书3"},
            ]
        })
    }

    async actionBooksCreatePage(ctx) {
        ctx.body = await ctx.render("books/pages/create");
    }
}

export default BooksController