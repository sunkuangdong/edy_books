import axios from "axios";

class SafeRequest {
    static fetch(url) {
        return new Promise(resolve => {
            axios(url)
                .then(res => {
                    resolve(res)
                })
                .catch(err => {
                    resolve(err)
                })
        })
    }
}

export default SafeRequest