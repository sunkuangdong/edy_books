import axios from "axios"
const url = 'http://localhost'
class BooksModel {
    getBooksList() {
        return axios.get(`${url}/mvc/basic/web/index.php?r=books`)
    }
    findBook(id) {}
}

export default BooksModel