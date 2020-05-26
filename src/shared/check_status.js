import { getStorage } from "./storage"

const check_status = async props => {
    try {
        return await getStorage('URBAN24_TOKEN');
    } catch (err) {
        return err;
    }
}

export default check_status;