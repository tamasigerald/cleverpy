/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { config } from 'config';

const methods = {
    async get(endpoint: string) {
        const res = await axios.get(config.baseUrl + endpoint);
        return res.data;
    },
    // Delete method
    async delete(endpoint: string, id: string) {
        const res = await axios.delete(config.baseUrl + endpoint + id);
        return res.data;
    }
};

export default methods;
