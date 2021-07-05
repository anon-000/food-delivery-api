import * as feathersAuthentication from '@feathersjs/authentication';
import setCreatedBy from '../../hooks/setCreatedBy';

const { authenticate } = feathersAuthentication.hooks;

export default {
    before: {
        all: [ authenticate('jwt') ],
        find: [],
        get: [],
        create: [
            setCreatedBy('user'),
        ],
        update: [],
        patch: [],
        remove: []
    },

    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },

    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
};
