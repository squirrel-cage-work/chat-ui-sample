// load custom layout
import Menu from './Menu'

export default function Layout({ children }) {
    return (
        <div className='flex h-screen w-full justify-between'>
            <Menu />
            <main>
                {children}
            </main>
        </div>
    );
}