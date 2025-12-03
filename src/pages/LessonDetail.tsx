import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle, ChevronRight, FileText, Lock, Send } from 'lucide-react';
import { COURSE_MODULES, type Lesson } from '../data/courseData';
import { useCourseStore } from '../store/useCourseStore';
import { useToastStore } from '../store/useToastStore';
import { PremiumPlayer } from '../components/PremiumPlayer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { cn } from '../lib/utils';

export const LessonDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { markLessonComplete, isLessonCompleted, completeChallengeDay } = useCourseStore();
    const { addToast } = useToastStore();
    const [activeTab, setActiveTab] = useState<'resources' | 'comments'>('resources');
    const [comment, setComment] = useState('');

    const fromChallenge = searchParams.get('from') === 'challenge';
    const challengeDay = parseInt(searchParams.get('day') || '0');

    // Find lesson and next lesson
    let currentLesson: Lesson | undefined;
    let nextLesson: Lesson | undefined;
    let found = false;

    for (const module of COURSE_MODULES) {
        for (let i = 0; i < module.lessons.length; i++) {
            if (module.lessons[i].id === id) {
                currentLesson = module.lessons[i];
                found = true;
                // Check next in same module
                if (i + 1 < module.lessons.length) {
                    nextLesson = module.lessons[i + 1];
                }
            } else if (found && !nextLesson) {
                // Check first of next module if needed (simplified here)
                nextLesson = module.lessons[0];
                break;
            }
        }
        if (found && nextLesson) break;
    }

    if (!currentLesson) {
        return <div className="text-center py-20">Aula no encontrada</div>;
    }

    const isCompleted = isLessonCompleted(currentLesson.id);

    const handleComplete = () => {
        if (currentLesson) {
            // Always mark lesson as complete for stats
            if (!isCompleted) {
                const duration = parseInt(currentLesson.duration) || 10;
                markLessonComplete(currentLesson.id, duration);
            }

            // If from challenge, mark challenge day complete
            if (fromChallenge && challengeDay > 0) {
                completeChallengeDay(challengeDay);
                addToast(`¡Día ${challengeDay} del Reto completado! +20 XP`, "success");
                setTimeout(() => navigate('/reto'), 1500); // Return to challenge map
            } else if (!isCompleted) {
                addToast("¡Clase completada! +10 XP", "success");
            }
        }
    };

    const handleVideoEnd = () => {
        handleComplete();
        // Optional: Auto-navigate after delay
    };

    const handleCommentSubmit = () => {
        if (!comment.trim()) return;
        setComment('');
        addToast("Comentario enviado", "success");
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500 pb-20">
            {/* Video Section */}
            <div className="space-y-4">
                <PremiumPlayer
                    videoId={currentLesson.videoId}
                    onEnded={handleVideoEnd}
                    autoPlay={true}
                />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{currentLesson.title}</h1>
                        <p className="text-text-secondary">{currentLesson.duration} • Calistenia Elite</p>
                    </div>

                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <Button
                            variant={isCompleted ? "secondary" : "primary"}
                            onClick={handleComplete}
                            className={cn("flex-1 md:flex-none", isCompleted && "text-success border-success/20 bg-success/10")}
                        >
                            {isCompleted ? (
                                <>
                                    <CheckCircle className="w-5 h-5 mr-2" />
                                    Completada
                                </>
                            ) : (
                                "Marcar como Visto"
                            )}
                        </Button>

                        {nextLesson && (
                            <Button
                                variant="ghost"
                                className="hidden md:flex"
                                onClick={() => navigate(`/aula/${nextLesson?.id}`)}
                            >
                                Siguiente <ChevronRight className="w-5 h-5 ml-1" />
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Content Tabs */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex border-b border-border">
                        <button
                            onClick={() => setActiveTab('resources')}
                            className={cn(
                                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'resources'
                                    ? "border-primary text-primary"
                                    : "border-transparent text-text-secondary hover:text-white"
                            )}
                        >
                            Recursos
                        </button>
                        <button
                            onClick={() => setActiveTab('comments')}
                            className={cn(
                                "px-6 py-3 text-sm font-medium border-b-2 transition-colors",
                                activeTab === 'comments'
                                    ? "border-primary text-primary"
                                    : "border-transparent text-text-secondary hover:text-white"
                            )}
                        >
                            Comentarios
                        </button>
                    </div>

                    <div className="min-h-[200px]">
                        {activeTab === 'resources' ? (
                            <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-300">
                                <Card className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors cursor-pointer">
                                    <div className="p-3 bg-red-500/10 rounded-lg text-red-500">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium">Guía de Nutrición.pdf</h4>
                                        <p className="text-text-secondary text-xs">PDF • 2.4 MB</p>
                                    </div>
                                </Card>
                                <Card className="p-4 flex items-center gap-4 opacity-75 cursor-not-allowed border-dashed border-white/10">
                                    <div className="p-3 bg-white/5 rounded-lg text-text-secondary">
                                        <Lock className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-text-secondary font-medium">Guía de Hipertrofia.pdf</h4>
                                        <p className="text-text-secondary text-xs">Bloqueado • Próximamente</p>
                                    </div>
                                </Card>
                                <div className="p-4 rounded-lg bg-surface border border-border">
                                    <h4 className="text-white font-bold mb-2">Descripción de la Clase</h4>
                                    <p className="text-text-secondary text-sm leading-relaxed">
                                        {currentLesson.description} En esta sesión nos enfocaremos en la técnica correcta y la intensidad necesaria para estimular la hipertrofia muscular utilizando solo tu peso corporal. Asegúrate de calentar bien antes de comenzar.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary">
                                        U
                                    </div>
                                    <div className="flex-1">
                                        <textarea
                                            value={comment}
                                            onChange={(e) => setComment(e.target.value)}
                                            placeholder="Deja tu comentario o duda..."
                                            className="w-full bg-neutral-800 border border-gray-700 rounded-lg p-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-colors resize-none h-24"
                                        />
                                        <div className="flex justify-end mt-2">
                                            <Button size="sm" onClick={handleCommentSubmit} disabled={!comment.trim()}>
                                                Comentar <Send className="w-4 h-4 ml-2" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                {/* Mock Comments */}
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-xs font-bold text-white">
                                            {i === 1 ? 'JP' : i === 2 ? 'MC' : 'DR'}
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-white font-medium text-sm">
                                                    {i === 1 ? 'Juan Pérez' : i === 2 ? 'Maria Calistenia' : 'David Rojas'}
                                                </span>
                                                <span className="text-text-secondary text-xs">hace {i} días</span>
                                            </div>
                                            <p className="text-text-secondary text-sm">
                                                {i === 1 ? '¡Excelente rutina! Me destruyó los hombros 🔥' : i === 2 ? '¿Alguna regresión para las flexiones diamante?' : 'La calidad de video es increíble, gracias sensei.'}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Sidebar / Up Next */}
                <div className="space-y-6">
                    <h3 className="text-lg font-bold text-white">Siguiente en este Módulo</h3>
                    <div className="space-y-3">
                        {COURSE_MODULES.find(m => m.lessons.some(l => l.id === currentLesson?.id))?.lessons.map((lesson) => (
                            <div
                                key={lesson.id}
                                onClick={() => navigate(`/aula/${lesson.id}`)}
                                className={cn(
                                    "flex gap-3 p-2 rounded-lg cursor-pointer transition-colors group",
                                    lesson.id === currentLesson?.id ? "bg-white/5 border border-primary/20" : "hover:bg-white/5"
                                )}
                            >
                                <div className="relative w-24 aspect-video rounded-md overflow-hidden flex-shrink-0">
                                    <img
                                        src={`https://img.youtube.com/vi/${lesson.videoId}/mqdefault.jpg`}
                                        alt={lesson.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {isLessonCompleted(lesson.id) && (
                                        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-success" />
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className={cn("text-sm font-medium truncate group-hover:text-primary transition-colors", lesson.id === currentLesson?.id ? "text-primary" : "text-white")}>
                                        {lesson.title}
                                    </h4>
                                    <p className="text-xs text-text-secondary mt-1">{lesson.duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
