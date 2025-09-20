// load custom layout
import Menu from './Menu'

export default function Layout({ children }) {
    return (
        <div className='flex h-full w-full justify-between'>
            <Menu/> 
            <main className='flex flex-1 justify-center items-center'>
                {children}
            </main>
        </div>
    );
}