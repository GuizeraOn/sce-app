import { NavLink } from 'react-router-dom';
import { Home, Dumbbell, Trophy, User, Swords } from 'lucide-react';
import { cn } from '../lib/utils';

export const BottomNav = () => {
    const navItems = [
        { icon: Home, label: "Inicio", path: "/" },
        { icon: Swords, label: "Reto", path: "/reto" },
        { icon: Dumbbell, label: "Entrenar", path: "/entrenar" },
        { icon: Trophy, label: "Progreso", path: "/progreso" },
        { icon: User, label: "Perfil", path: "/perfil" },
    ];

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-surface/90 backdrop-blur-lg border-t border-border z-50 pb-safe">
            <div className="flex justify-around items-center h-16">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            cn(
                                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                                isActive ? "text-primary" : "text-text-secondary hover:text-white"
                            )
                        }
                    >
                        <item.icon className="w-6 h-6" />
                        <span className="text-[10px] font-medium">{item.label}</span>
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};
