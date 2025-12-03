import { useState } from 'react';
import { Bell, Wifi, PlayCircle, LogOut, ChevronRight } from 'lucide-react';
import { Card } from '../components/ui/Card';
import { useAuthStore } from '../store/useAuthStore';
import { useToastStore } from '../store/useToastStore';
import { cn } from '../lib/utils';

export const Settings = () => {
    const { logout } = useAuthStore();
    const { addToast } = useToastStore();

    const [preferences, setPreferences] = useState({
        notifications: true,
        autoDownload: false,
        autoPlay: true
    });

    const togglePreference = (key: keyof typeof preferences) => {
        setPreferences(prev => {
            const newState = { ...prev, [key]: !prev[key] };
            addToast("Preferencias actualizadas", "success");
            return newState;
        });
    };

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold text-white">Ajustes del Sistema</h1>
                <p className="text-text-secondary">Personaliza tu experiencia de entrenamiento</p>
            </div>

            <div className="space-y-6">
                <section>
                    <h2 className="text-lg font-bold text-primary mb-4 uppercase tracking-wider text-sm">Preferencias</h2>
                    <Card className="divide-y divide-white/5">
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 text-white">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Notificaciones Push</p>
                                    <p className="text-xs text-text-secondary">Recibe recordatorios de entrenamiento</p>
                                </div>
                            </div>
                            <button
                                onClick={() => togglePreference('notifications')}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative",
                                    preferences.notifications ? "bg-primary" : "bg-white/10"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm",
                                    preferences.notifications ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 text-white">
                                    <Wifi className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Descargas Automáticas</p>
                                    <p className="text-xs text-text-secondary">Solo con conexión WiFi</p>
                                </div>
                            </div>
                            <button
                                onClick={() => togglePreference('autoDownload')}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative",
                                    preferences.autoDownload ? "bg-primary" : "bg-white/10"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm",
                                    preferences.autoDownload ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>

                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-white/5 text-white">
                                    <PlayCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Reproducción Automática</p>
                                    <p className="text-xs text-text-secondary">Iniciar siguiente video automáticamente</p>
                                </div>
                            </div>
                            <button
                                onClick={() => togglePreference('autoPlay')}
                                className={cn(
                                    "w-12 h-6 rounded-full transition-colors relative",
                                    preferences.autoPlay ? "bg-primary" : "bg-white/10"
                                )}
                            >
                                <div className={cn(
                                    "absolute top-1 w-4 h-4 rounded-full bg-white transition-transform shadow-sm",
                                    preferences.autoPlay ? "left-7" : "left-1"
                                )} />
                            </button>
                        </div>
                    </Card>
                </section>

                <section>
                    <h2 className="text-lg font-bold text-red-500 mb-4 uppercase tracking-wider text-sm">Zona de Peligro</h2>
                    <Card className="border-red-500/20 bg-red-500/5">
                        <div className="p-4 flex items-center justify-between cursor-pointer hover:bg-red-500/10 transition-colors rounded-xl" onClick={logout}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                    <LogOut className="w-5 h-5" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Cerrar Sesión</p>
                                    <p className="text-xs text-text-secondary">Se requerirá iniciar sesión nuevamente</p>
                                </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-red-500" />
                        </div>
                    </Card>
                </section>

                <div className="text-center pt-8">
                    <p className="text-text-secondary text-xs">Calistenia Elite App v1.2.0</p>
                    <p className="text-white/20 text-[10px] mt-1">Build 2024.12.02</p>
                </div>
            </div>
        </div>
    );
};
