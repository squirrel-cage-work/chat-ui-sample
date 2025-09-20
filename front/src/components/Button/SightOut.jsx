import { signOut } from 'aws-amplify/auth';

export default function SignOut() {
    async function handleSignOut() {
        await signOut()
    }

    return(
        <button
            className='bg-blue-500 rounded py-2 px-4 text-white active:scale-95 hover:bg-blue-700'
            type="button" 
            onClick={handleSignOut}>
            SignOut
        </button>
    );
}
