import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CourseState {
    completedLessons: string[];
    lastTrainedDate: string | null;
    streak: number;
    totalMinutes: number;
    challengeCurrentDay: number;
    challengeCompletedDays: number[];

    markLessonComplete: (lessonId: string, durationMinutes: number) => void;
    isLessonCompleted: (lessonId: string) => boolean;
    getProgress: () => number; // Percentage
    completeChallengeDay: (day: number) => void;
}

export const useCourseStore = create<CourseState>()(
    persist(
        (set, get) => ({
            completedLessons: [],
            lastTrainedDate: null,
            streak: 0,
            totalMinutes: 0,
            challengeCurrentDay: 1,
            challengeCompletedDays: [],

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
                return get().completedLessons.length;
            },

            completeChallengeDay: (day) => {
                const state = get();
                if (state.challengeCompletedDays.includes(day)) return;

                set((state) => ({
                    challengeCompletedDays: [...state.challengeCompletedDays, day],
                    challengeCurrentDay: day < 28 ? day + 1 : 28
                }));
            }
        }),
        {
            name: 'calistenia-elite-storage',
        }
    )
);
