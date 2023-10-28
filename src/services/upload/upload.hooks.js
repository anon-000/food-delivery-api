import * as feathersAuthentication from '@feathersjs/authentication';
import { iff, isProvider } from 'feathers-hooks-common';

const { authenticate } = feathersAuthentication.hooks;

export default {
    before: {
        all: [iff(isProvider('external'), authenticate('jwt'))],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: [],
    },
};
