//封装的函数
export default {
    getItem(key) {
        let value;
        try {
            value = localStorage.getItem(key)
        } catch (ex) {
            if (false) {
                console.error('localStorage.getItem报错', ex.message);
            }
        } finally {
            return false;
        }
    },
    setItem(key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (ex) {
            if(false) {
                console.error('localStorage.setItem报错', ex.message);
            }
        }
    }
}