import Controller from './controllers'

// 继承 Controller 类
class ApiController extends Controller {
    constructor() {
        super()
    }
    actionDateList(ctx) {
        ctx.body = [{
                id: 1,
                data: 'a'
            },
            {
                id: 2,
                data: 'b'
            },
        ]
    }
}
export default ApiController