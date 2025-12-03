import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CourseState {
    completedLessons: string[];
    lastTrainedDate: string | null;
    streak: number;
    totalMinutes: number;

    markLessonComplete: (lessonId: string, durationMinutes: number) => void;
    isLessonCompleted: (lessonId: string) => boolean;
    getProgress: () => number; // Percentage
}

export const useCourseStore = create<CourseState>()(
    persist(
        (set, get) => ({
            completedLessons: [],
            lastTrainedDate: null,
            streak: 0,
            totalMinutes: 0,

            markLessonComplete: (lessonId, durationMinutes) => {
                const state = get();
                if (state.completedLessons.includes(lessonId)) return;

                const today = new Date().toISOString().split('T')[0];
                let newStreak = state.streak;

                if (state.lastTrainedDate !== today) {
                    // Check if consecutive day
                    if (state.lastTrainedDate) {
                        const lastDate = new Date(state.lastTrainedDate);
                        const currentDate = new Date(today);
                        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
                        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                        if (diffDays === 1) {
                            newStreak += 1;
                        } else if (diffDays > 1) {
                            newStreak = 1; // Reset streak if missed a day
                        } else {
                            // Same day, do nothing to streak
                        }
                    } else {
                        newStreak = 1; // First day
                    }
                }

                set((state) => ({
                    completedLessons: [...state.completedLessons, lessonId],
                    totalMinutes: state.totalMinutes + durationMinutes,
                    lastTrainedDate: today,
                    streak: newStreak
                }));
            },

            isLessonCompleted: (lessonId) => {
                return get().completedLessons.includes(lessonId);
            },

            getProgress: () => {
                // This would ideally be calculated based on total lessons in the course
                // For now, we can just return the count or a mock percentage if we don't import the full course data here to avoid circular deps
                // Let's just return completed count for now, or we can inject total lessons count
                return get().completedLessons.length;
            }
        }),
        {
            name: 'calistenia-elite-storage',
        }
    )
);
