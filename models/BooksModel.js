import axios from "axios"
import SafeRequest from "../utils/safeRequest"
const url = 'http://localhost'
class BooksModel {
    getBooksList() {
        return SafeRequest.fetch(`${url}/mvc/basic/web/index.php?r=books`)
    }
    findBook(id) {}
}

export default BooksModel