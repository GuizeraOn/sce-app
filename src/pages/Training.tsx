import { useNavigate } from 'react-router-dom';
import { Play, CheckCircle } from 'lucide-react';
import { COURSE_MODULES } from '../data/courseData';
import { useCourseStore } from '../store/useCourseStore';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { cn } from '../lib/utils';

export const Training = () => {
    const navigate = useNavigate();
    const { isLessonCompleted } = useCourseStore();

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                <div>
                    <h1 className="text-3xl font-black text-white mb-2">ENTRENAMIENTO</h1>
                    <p className="text-text-secondary">Domina tu cuerpo, domina tu mente.</p>
                </div>
            </div>

            <div className="space-y-12">
                {COURSE_MODULES.map((module, moduleIndex) => {
                    const completedCount = module.lessons.filter(l => isLessonCompleted(l.id)).length;
                    const progress = (completedCount / module.lessons.length) * 100;

                    return (
                        <div key={module.id} className="space-y-6">
                            <div className="flex items-end justify-between border-b border-border pb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-1 flex items-center gap-3">
                                        <span className="text-primary text-3xl opacity-50 font-black">0{moduleIndex + 1}</span>
                                        {module.title}
                                    </h2>
                                    <p className="text-text-secondary text-sm">{module.description}</p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="text-sm text-text-secondary font-medium">{completedCount}/{module.lessons.length} Completado</span>
                                    <div className="w-32 mt-2">
                                        <ProgressBar progress={progress} className="h-1" />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {module.lessons.map((lesson) => {
                                    const isCompleted = isLessonCompleted(lesson.id);
                                    const isLocked = false; // Implement lock logic if needed (e.g., sequential unlock)

                                    return (
                                        <Card
                                            key={lesson.id}
                                            hoverEffect={!isLocked}
                                            className={cn(
                                                "group cursor-pointer flex flex-col h-full",
                                                isLocked && "opacity-50 cursor-not-allowed grayscale"
                                            )}
                                            onClick={() => !isLocked && navigate(`/aula/${lesson.id}`)}
                                        >
                                            <div className="relative aspect-video overflow-hidden border-b border-white/5">
                                                <img
                                                    src={`https://img.youtube.com/vi/${lesson.videoId}/mqdefault.jpg`}
                                                    alt={lesson.title}
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                                                {isCompleted && (
                                                    <div className="absolute top-2 right-2 bg-success text-black text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                                                        <CheckCircle className="w-3 h-3" /> Visto
                                                    </div>
                                                )}

                                                {!isCompleted && !isLocked && (
                                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                        <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                                                            <Play className="w-5 h-5 text-black fill-black ml-1" />
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                                                    {lesson.duration}
                                                </div>
                                            </div>

                                            <div className="p-5 flex-1 flex flex-col">
                                                <h3 className={cn("text-lg font-bold mb-2 group-hover:text-primary transition-colors", isCompleted ? "text-text-secondary" : "text-white")}>
                                                    {lesson.title}
                                                </h3>
                                                <p className="text-text-secondary text-sm line-clamp-2 flex-1">
                                                    {lesson.description}
                                                </p>
                                            </div>
                                        </Card>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
