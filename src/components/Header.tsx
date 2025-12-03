import { useState } from 'react';
import { Bell, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { PWAInstallModal } from './PWAInstallModal';
import { useToastStore } from '../store/useToastStore';

export const Header = () => {
    const [showInstallModal, setShowInstallModal] = useState(false);
    const navigate = useNavigate();
    const { addToast } = useToastStore();

    return (
        <>
            <header className="sticky top-0 z-40 w-full h-16 bg-background/80 backdrop-blur-md border-b border-border flex items-center justify-between px-4 md:px-8">
                <div className="md:hidden">
                    <h1 className="text-lg font-black tracking-tighter text-white">
                        CALISTENIA <span className="text-primary">ELITE</span>
                    </h1>
                </div>

                <div className="flex-1 hidden md:block">
                    {/* Breadcrumbs or Page Title could go here */}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setShowInstallModal(true)}
                        className="p-2 text-text-secondary hover:text-primary transition-colors hidden md:block"
                        title="Instalar App"
                    >
                        <Download className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => addToast('No tienes notificaciones nuevas', 'info')}
                        className="relative p-2 text-text-secondary hover:text-white transition-colors"
                    >
                        <Bell className="w-6 h-6" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </button>

                    <div
                        onClick={() => navigate('/perfil')}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-yellow-600 p-[1px] cursor-pointer hover:scale-105 transition-transform"
                    >
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                            <span className="font-bold text-xs text-primary">CE</span>
                        </div>
                    </div>
                </div>
            </header>

            <PWAInstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
            />
        </>
    );
};
