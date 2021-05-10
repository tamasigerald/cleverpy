import { loggedUser } from './../Helpers/globalTypes';
import axios from 'axios';

import { config } from 'config';

const methods = {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(endpoint: string) {
        const res = await axios.get(config.baseUrl + endpoint);
        return res.data;
    }
};

export default methods;
