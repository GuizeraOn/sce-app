import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Lock, Check, BatteryCharging } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';
import { useToastStore } from '../store/useToastStore';
import { CHALLENGE_28_DAYS, type ChallengeDay } from '../data/challengeData';
import { COURSE_MODULES } from '../data/courseData';
import { cn } from '../lib/utils';

export const Challenge = () => {
    const navigate = useNavigate();
    const { challengeCurrentDay, challengeCompletedDays, completeChallengeDay } = useCourseStore();
    const { addToast } = useToastStore();
    const currentDayRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to current day
    useEffect(() => {
        if (currentDayRef.current) {
            currentDayRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [challengeCurrentDay]);

    const handleDayClick = (day: ChallengeDay) => {
        const isLocked = day.day > challengeCurrentDay;
        const isCurrent = day.day === challengeCurrentDay;

        if (isLocked) {
            addToast("Completa el día anterior para desbloquear", "error");
            return;
        }

        if (day.type === 'REST') {
            if (isCurrent) {
                completeChallengeDay(day.day);
                addToast("¡Día de descanso registrado! +5 XP", "success");
            }
            return;
        }

        if (day.videoId) {
            // Find the real lesson ID from course data
            let foundLessonId = '';
            for (const module of COURSE_MODULES) {
                const lesson = module.lessons.find(l => l.videoId === day.videoId);
                if (lesson) {
                    foundLessonId = lesson.id;
                    break;
                }
            }

            if (foundLessonId) {
                navigate(`/aula/${foundLessonId}?from=challenge&day=${day.day}`);
            } else {
                // Fallback if not found in standard curriculum
                console.warn("Lesson not found for videoId:", day.videoId);
                navigate(`/aula/challenge?videoId=${day.videoId}&day=${day.day}`);
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#050505] pb-24">
            {/* Header */}
            <div className="sticky top-0 z-30 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 p-4">
                <div className="max-w-md mx-auto">
                    <h1 className="text-xl font-black text-white text-center mb-2">RETO 28 DÍAS</h1>
                    <div className="flex items-center gap-2 text-xs font-medium text-text-secondary mb-1">
                        <span>Progreso Global</span>
                        <span className="ml-auto text-primary">{challengeCurrentDay} / 28</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-primary to-yellow-600 transition-all duration-500"
                            style={{ width: `${(challengeCompletedDays.length / 28) * 100}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-md mx-auto p-8 relative">
                {/* Connecting Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 -translate-x-1/2" />

                <div className="space-y-12 relative">
                    {CHALLENGE_28_DAYS.map((day, index) => {
                        const isCompleted = challengeCompletedDays.includes(day.day);
                        const isCurrent = day.day === challengeCurrentDay;
                        const isLocked = day.day > challengeCurrentDay;
                        const isRest = day.type === 'REST';

                        // Week Separators
                        const showWeek = (day.day - 1) % 7 === 0;
                        const weekNum = Math.floor((day.day - 1) / 7) + 1;

                        return (
                            <div key={day.day} ref={isCurrent ? currentDayRef : null}>
                                {showWeek && (
                                    <div className="text-center mb-12 relative z-10">
                                        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                                            Semana {weekNum}
                                        </span>
                                    </div>
                                )}

                                <div className={cn(
                                    "relative flex flex-col items-center group",
                                    index % 2 === 0 ? "md:items-end md:pr-12" : "md:items-start md:pl-12" // Zigzag on desktop
                                )}>
                                    {/* Node */}
                                    <motion.button
                                        whileHover={!isLocked ? { scale: 1.1 } : {}}
                                        whileTap={!isLocked ? { scale: 0.95 } : {}}
                                        onClick={() => handleDayClick(day)}
                                        className={cn(
                                            "w-20 h-20 rounded-full flex items-center justify-center border-4 relative z-20 transition-all duration-300 shadow-2xl",
                                            isCompleted ? "bg-success border-success text-black" :
                                                isCurrent ? "bg-black border-primary text-primary shadow-[0_0_30px_rgba(212,175,55,0.4)]" :
                                                    "bg-neutral-900 border-white/10 text-white/20"
                                        )}
                                    >
                                        {isCompleted ? <Check className="w-8 h-8" /> :
                                            isRest ? <BatteryCharging className="w-8 h-8" /> :
                                                isLocked ? <Lock className="w-6 h-6" /> :
                                                    <span className="text-2xl font-black">{day.day}</span>
                                        }

                                        {/* Pulse Effect for Current */}
                                        {isCurrent && (
                                            <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping opacity-50" />
                                        )}
                                    </motion.button>

                                    {/* Label */}
                                    <div className={cn(
                                        "mt-4 text-center bg-surface/80 backdrop-blur-sm p-3 rounded-xl border border-white/5 w-48 transition-opacity duration-300",
                                        isLocked ? "opacity-50" : "opacity-100",
                                        "md:absolute md:top-4",
                                        index % 2 === 0 ? "md:right-1/2 md:mr-12" : "md:left-1/2 md:ml-12"
                                    )}>
                                        <h3 className={cn("font-bold text-sm mb-1", isCurrent ? "text-primary" : "text-white")}>
                                            {day.title}
                                        </h3>
                                        <p className="text-xs text-text-secondary leading-tight">
                                            {day.description}
                                        </p>
                                        {isCurrent && !isRest && (
                                            <div
                                                onClick={() => handleDayClick(day)}
                                                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-black bg-primary px-3 py-1 rounded-full animate-pulse cursor-pointer hover:scale-105 transition-transform"
                                            >
                                                <Play className="w-3 h-3 fill-black" /> JUGAR
                                            </div>
                                        )}
                                        {isCurrent && isRest && (
                                            <div
                                                onClick={() => handleDayClick(day)}
                                                className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full cursor-pointer hover:bg-white/20 transition-colors"
                                            >
                                                MARCAR HECHO
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
