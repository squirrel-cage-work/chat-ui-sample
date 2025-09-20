import SignOut from './../Button/SightOut';

export default function Menu() {
    return (
        <div className="flex flex-col justify-between text-center w-48 bg-gray-600 ">
            <div className='py-4'>
                <nav>
                    <a>Home</a>
                </nav>
            </div>
            <div className='py-4'>
                <SignOut />
            </div>
        </div>
    );
}