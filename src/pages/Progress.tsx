import { Trophy, Clock, Flame, Medal } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { cn } from '../lib/utils';

export const Progress = () => {
    const { completedLessons, totalMinutes, streak } = useCourseStore();

    // Mock weekly data
    const weeklyData = [
        { day: 'L', minutes: 45 },
        { day: 'M', minutes: 30 },
        { day: 'X', minutes: 60 },
        { day: 'J', minutes: 0 },
        { day: 'V', minutes: 45 },
        { day: 'S', minutes: 90 },
        { day: 'D', minutes: 15 },
    ];

    const maxMinutes = Math.max(...weeklyData.map(d => d.minutes));

    const badges = [
        { id: 1, name: "Iniciado", description: "Completaste tu primera clase", icon: Medal, unlocked: completedLessons.length > 0 },
        { id: 2, name: "Constancia", description: "Racha de 3 días", icon: Flame, unlocked: streak >= 3 },
        { id: 3, name: "Bestia", description: "10 Clases completadas", icon: Trophy, unlocked: completedLessons.length >= 10 },
        { id: 4, name: "Elite", description: "Curso completado al 100%", icon: Medal, unlocked: false }, // Mock
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <h1 className="text-3xl font-black text-white">TU PROGRESO</h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 flex items-center gap-4">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                        <Clock className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-text-secondary text-sm uppercase tracking-wider">Tiempo Total</p>
                        <p className="text-3xl font-bold text-white">{totalMinutes} <span className="text-sm font-normal text-text-secondary">min</span></p>
                    </div>
                </Card>

                <Card className="p-6 flex items-center gap-4">
                    <div className="p-4 bg-green-500/10 rounded-full text-green-500">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-text-secondary text-sm uppercase tracking-wider">Clases</p>
                        <p className="text-3xl font-bold text-white">{completedLessons.length}</p>
                    </div>
                </Card>

                <Card className="p-6 flex items-center gap-4">
                    <div className="p-4 bg-orange-500/10 rounded-full text-orange-500">
                        <Flame className="w-8 h-8" />
                    </div>
                    <div>
                        <p className="text-text-secondary text-sm uppercase tracking-wider">Racha</p>
                        <p className="text-3xl font-bold text-white">{streak} <span className="text-sm font-normal text-text-secondary">días</span></p>
                    </div>
                </Card>
            </div>

            {/* Weekly Chart */}
            <Card className="p-8">
                <h3 className="text-lg font-bold text-white mb-6">Actividad Semanal</h3>
                <div className="flex items-end justify-between h-48 gap-2">
                    {weeklyData.map((data, index) => (
                        <div key={index} className="flex flex-col items-center gap-2 flex-1 group">
                            <div className="w-full relative flex items-end h-full bg-white/5 rounded-t-lg overflow-hidden">
                                <div
                                    className="w-full bg-primary/80 group-hover:bg-primary transition-all duration-500 rounded-t-lg relative"
                                    style={{ height: `${(data.minutes / maxMinutes) * 100}%` }}
                                >
                                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface border border-border px-2 py-1 rounded text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                                        {data.minutes} min
                                    </div>
                                </div>
                            </div>
                            <span className="text-text-secondary text-xs font-medium">{data.day}</span>
                        </div>
                    ))}
                </div>
            </Card>

            {/* Badges */}
            <div>
                <h3 className="text-xl font-bold text-white mb-6">Insignias</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {badges.map((badge) => (
                        <Card
                            key={badge.id}
                            className={cn(
                                "p-6 flex flex-col items-center text-center gap-3 transition-all",
                                badge.unlocked ? "border-primary/30 bg-primary/5" : "opacity-50 grayscale"
                            )}
                        >
                            <div className={cn(
                                "p-4 rounded-full mb-2",
                                badge.unlocked ? "bg-gradient-to-br from-primary to-yellow-600 text-black shadow-lg shadow-primary/20" : "bg-white/10 text-white/20"
                            )}>
                                <badge.icon className="w-8 h-8" />
                            </div>
                            <div>
                                <h4 className={cn("font-bold mb-1", badge.unlocked ? "text-white" : "text-text-secondary")}>{badge.name}</h4>
                                <p className="text-xs text-text-secondary">{badge.description}</p>
                            </div>
                            {badge.unlocked && <Badge variant="gold" className="mt-2">Desbloqueado</Badge>}
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
