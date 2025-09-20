import { USER_POOL_ID, USER_POOL_CLIENT_ID} from './config.js';
import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: USER_POOL_ID,
            userPoolClientId: USER_POOL_CLIENT_ID,
        }
    }
});