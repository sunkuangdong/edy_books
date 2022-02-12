import Controller from './controllers'
import BooksModel from '../models/BooksModel'
const booksModel = new BooksModel()
// 继承 Controller 类
class ApiController extends Controller {
    constructor() {
        super()
    }
    async actionDateList(ctx) {
        // const booksList = await booksModel.getBooksList()
        // ctx.body = booksList.data
        ctx.body = "图书列表"
    }
}
export default ApiController