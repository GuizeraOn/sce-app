import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, Trophy, User, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';

export const Sidebar = () => {
    const navItems = [
        { icon: Home, label: "Inicio", path: "/" },
        { icon: Dumbbell, label: "Entrenar", path: "/entrenar" },
        { icon: Trophy, label: "Progreso", path: "/progreso" },
        { icon: User, label: "Perfil", path: "/perfil" },
    ];

    return (
        <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-surface border-r border-border z-50">
            <div className="p-8 flex flex-col items-center justify-center gap-4">
                <img
                    src="https://i.postimg.cc/xCSpT3NH/sce5.png"
                    alt="Logo"
                    className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                />
                <h1 className="text-2xl font-black tracking-tighter text-white text-center leading-none">
                    CALISTENIA <span className="text-primary block">ELITE</span>
                </h1>
            </div>

            <nav className="flex-1 px-4 space-y-2 mt-8">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                "flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group",
                                isActive
                                    ? "bg-primary/10 text-primary"
                                    : "text-text-secondary hover:bg-white/5 hover:text-white"
                            )
                        }
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium tracking-wide">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className="p-4 border-t border-border">
                <button className="flex items-center gap-4 px-4 py-3 w-full rounded-xl text-text-secondary hover:bg-red-500/10 hover:text-red-500 transition-all">
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Descansar por ahora</span>
                </button>
            </div>
        </aside>
    );
};
