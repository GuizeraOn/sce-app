import { useState } from 'react';
import { User, Settings as SettingsIcon, Download, LogOut, Medal, Clock, Flame, ChevronRight, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { useAuthStore } from '../store/useAuthStore';
import { useCourseStore } from '../store/useCourseStore';
import { PWAInstallModal } from '../components/PWAInstallModal';
import { COURSE_MODULES } from '../data/courseData';

export const Profile = () => {
    const [showInstallModal, setShowInstallModal] = useState(false);
    const { userEmail, logout } = useAuthStore();
    const { completedLessons, totalMinutes, streak } = useCourseStore();
    const navigate = useNavigate();

    // Calculate stats
    const completedCount = completedLessons.length;

    // Get last 3 completed lessons
    const recentActivity = completedLessons.slice(-3).map(id => {
        const lesson = COURSE_MODULES.flatMap(m => m.lessons).find(l => l.id === id);
        return lesson;
    }).filter(Boolean);

    return (
        <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Header Profile */}
            <div className="flex items-center gap-6">
                <div className="relative">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-yellow-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-surface flex items-center justify-center overflow-hidden">
                            <span className="font-bold text-3xl text-primary">CE</span>
                        </div>
                    </div>
                    <button
                        onClick={() => navigate('/editar-perfil')}
                        className="absolute bottom-0 right-0 p-2 bg-neutral-800 rounded-full border border-white/10 text-white hover:text-primary transition-colors shadow-lg"
                    >
                        <Edit2 className="w-4 h-4" />
                    </button>
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-white">Usuario Elite</h1>
                    <p className="text-text-secondary mb-2">{userEmail || 'Miembro desde 2024'}</p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                        Nivel: Iniciado
                    </div>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 flex flex-col items-center justify-center text-center bg-neutral-900/50">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500 mb-2">
                        <Medal className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">{completedCount}</span>
                    <span className="text-xs text-text-secondary uppercase tracking-wider">Clases</span>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center text-center bg-neutral-900/50">
                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 mb-2">
                        <Flame className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">{streak}</span>
                    <span className="text-xs text-text-secondary uppercase tracking-wider">Racha</span>
                </Card>
                <Card className="p-4 flex flex-col items-center justify-center text-center bg-neutral-900/50">
                    <div className="p-2 bg-purple-500/10 rounded-lg text-purple-500 mb-2">
                        <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-white">{Math.round(totalMinutes / 60)}h</span>
                    <span className="text-xs text-text-secondary uppercase tracking-wider">Tiempo</span>
                </Card>
            </div>

            {/* Recent Activity */}
            {recentActivity.length > 0 && (
                <section>
                    <h2 className="text-lg font-bold text-white mb-4">Actividad Reciente</h2>
                    <div className="space-y-3">
                        {recentActivity.map((lesson, idx) => (
                            <div
                                key={lesson!.id + idx}
                                className="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/5"
                            >
                                <div className="w-16 aspect-video rounded bg-black/50 overflow-hidden">
                                    <img src={`https://img.youtube.com/vi/${lesson!.videoId}/default.jpg`} className="w-full h-full object-cover opacity-80" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-medium text-sm">{lesson!.title}</h4>
                                    <p className="text-text-secondary text-xs">Completada</p>
                                </div>
                                <Button size="sm" variant="ghost" onClick={() => navigate(`/aula/${lesson!.id}`)}>
                                    Ver
                                </Button>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Menu */}
            <div className="space-y-4">
                <h2 className="text-lg font-bold text-white mb-2">Menú</h2>
                <Card className="p-0 overflow-hidden">
                    <div
                        onClick={() => navigate('/editar-perfil')}
                        className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-4"
                    >
                        <User className="w-5 h-5 text-text-secondary" />
                        <span className="text-white flex-1">Editar Perfil</span>
                        <ChevronRight className="w-5 h-5 text-white/20" />
                    </div>
                    <div
                        onClick={() => navigate('/configuracion')}
                        className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-4"
                    >
                        <SettingsIcon className="w-5 h-5 text-text-secondary" />
                        <span className="text-white flex-1">Configuración</span>
                        <ChevronRight className="w-5 h-5 text-white/20" />
                    </div>
                    <div
                        onClick={() => setShowInstallModal(true)}
                        className="p-4 border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer flex items-center gap-4"
                    >
                        <Download className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium flex-1">Instalar App</span>
                        <ChevronRight className="w-5 h-5 text-primary/50" />
                    </div>
                </Card>

                <Button
                    variant="ghost"
                    className="w-full text-red-500 hover:text-red-400 hover:bg-red-500/10 justify-start px-4"
                    onClick={logout}
                >
                    <LogOut className="w-5 h-5 mr-4" />
                    Cerrar Sesión
                </Button>
            </div>

            <PWAInstallModal
                isOpen={showInstallModal}
                onClose={() => setShowInstallModal(false)}
            />
        </div>
    );
};
