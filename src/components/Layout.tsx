import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { BottomNav } from './BottomNav';
import { Header } from './Header';

export const Layout = () => {
    return (
        <div className="min-h-screen bg-background text-text-primary font-sans selection:bg-primary/30">
            <Sidebar />

            <div className="md:pl-64 flex flex-col min-h-screen">
                <Header />

                <main className="flex-1 p-4 md:p-8 pb-24 md:pb-8 max-w-7xl mx-auto w-full">
                    <Outlet />
                </main>
            </div>

            <BottomNav />
        </div>
    );
};
