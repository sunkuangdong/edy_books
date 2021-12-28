import Controller from './controllers'
import BooksModel from '../models/BooksModel'
const booksModel = new BooksModel()
// 继承 Controller 类
class ApiController extends Controller {
    constructor() {
        super()
        this.booksList = null
    }
    async actionDateList(ctx) {
        this.booksList = await booksModel.getBooksList()
        ctx.body = this.booksList.data
    }
}
export default ApiController