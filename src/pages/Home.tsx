import { useNavigate } from 'react-router-dom';
import { Play, Flame, Trophy, ArrowRight } from 'lucide-react';
import { useCourseStore } from '../store/useCourseStore';
import { COURSE_MODULES } from '../data/courseData';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { ProgressBar } from '../components/ui/ProgressBar';
import { motion } from 'framer-motion';

export const Home = () => {
    const navigate = useNavigate();
    const { completedLessons, streak } = useCourseStore();

    // Find first incomplete lesson
    let nextLesson = null;
    let nextModule = null;

    for (const module of COURSE_MODULES) {
        for (const lesson of module.lessons) {
            if (!completedLessons.includes(lesson.id)) {
                nextLesson = lesson;
                nextModule = module;
                break;
            }
        }
        if (nextLesson) break;
    }

    // Fallback if course completed
    if (!nextLesson) {
        nextLesson = COURSE_MODULES[0].lessons[0];
        nextModule = COURSE_MODULES[0];
    }

    const progress = (completedLessons.length / (COURSE_MODULES.reduce((acc, m) => acc + m.lessons.length, 0))) * 100;

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Hero Section */}
            <section className="relative rounded-3xl overflow-hidden min-h-[400px] flex items-end p-6 md:p-12">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop"
                        alt="Hero Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                </div>

                <div className="relative z-10 w-full max-w-2xl space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">
                                Siguiente Nivel
                            </span>
                            <span className="text-text-secondary text-sm font-medium uppercase tracking-widest">
                                {nextModule?.title}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-2">
                            {nextLesson.title}
                        </h1>
                        <p className="text-text-secondary text-lg line-clamp-2 mb-6">
                            {nextLesson.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                onClick={() => navigate(`/aula/${nextLesson?.id}`)}
                                className="group"
                            >
                                <Play className="w-5 h-5 mr-2 fill-black group-hover:scale-110 transition-transform" />
                                Continuar Entrenando
                            </Button>
                            <Button variant="ghost" size="lg">
                                Más Información
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats & Progress */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">Progreso General</h3>
                            <p className="text-3xl font-bold text-white mt-1">{Math.round(progress)}%</p>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                            <Trophy className="w-6 h-6" />
                        </div>
                    </div>
                    <ProgressBar progress={progress} />
                </Card>

                <Card className="p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-text-secondary text-sm font-medium uppercase tracking-wider">Racha Actual</h3>
                            <p className="text-3xl font-bold text-white mt-1">{streak} Días</p>
                        </div>
                        <div className="p-3 rounded-xl bg-orange-500/10 text-orange-500">
                            <Flame className="w-6 h-6" />
                        </div>
                    </div>
                    <p className="text-sm text-text-secondary mt-4">¡Mantén el fuego encendido!</p>
                </Card>

                <Card
                    className="p-6 bg-gradient-to-br from-surface to-surface border-primary/20 relative overflow-hidden group cursor-pointer hover:border-primary/40 transition-colors"
                    onClick={() => navigate('/reto')}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-primary font-bold tracking-wider text-xs uppercase">Nuevo</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">Reto 28 Días</h3>
                        <p className="text-text-secondary text-sm mb-4">Tu camino guiado hacia la transformación total.</p>
                        <div className="flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                            Comenzar Ahora <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                    </div>
                </Card>
            </section>

            {/* Modules Preview */}
            <section>
                <div className="flex justify-between items-end mb-6">
                    <h2 className="text-2xl font-bold text-white">Módulos de Entrenamiento</h2>
                    <Button variant="ghost" size="sm" onClick={() => navigate('/entrenar')}>Ver Todo</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSE_MODULES.slice(0, 3).map((module) => (
                        <Card
                            key={module.id}
                            hoverEffect
                            className="group cursor-pointer"
                            onClick={() => navigate('/entrenar')}
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${module.lessons[0].videoId}/hqdefault.jpg`}
                                    alt={module.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-2 py-1 rounded bg-primary text-black text-xs font-bold mb-2 inline-block">
                                        {module.lessons.length} Aulas
                                    </span>
                                    <h3 className="text-lg font-bold text-white">{module.title}</h3>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-text-secondary text-sm line-clamp-2">{module.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </section>
        </div>
    );
};
