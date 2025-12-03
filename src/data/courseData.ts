import { YOUTUBE_IDS } from './videoRegistry';

export interface Lesson {
    id: string;
    title: string;
    description: string;
    duration: string;
    videoId: string;
    thumbnail?: string; // Optional, can be derived from videoId
}

export interface Module {
    id: string;
    title: string;
    description: string;
    lessons: Lesson[];
}

export const COURSE_MODULES: Module[] = [
    {
        id: "fundamentos",
        title: "FUNDAMENTOS",
        description: "La base para construir un cuerpo de élite.",
        lessons: [
            {
                id: "f-01",
                title: "Rutina Full Body (Cuerpo Completo)",
                description: "Entrenamiento completo para iniciar y acondicionar todo el cuerpo.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.FULL_BODY_15MIN
            },
            {
                id: "f-02",
                title: "Pectorales y Hombros Básicos",
                description: "Fortalece tu tren superior con ejercicios fundamentales.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_13MIN
            },
            {
                id: "f-03",
                title: "Piernas en Casa",
                description: "Desarrolla fuerza en el tren inferior sin equipamiento.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PIERNAS_14MIN
            },
            {
                id: "f-04",
                title: "Full Body con Banda Elástica",
                description: "Rutina de cuerpo completo utilizando banda elástica para resistencia extra.",
                duration: "23 min",
                videoId: YOUTUBE_IDS.FULLBODY_BANDA_23MIN
            },
            {
                id: "f-05",
                title: "Tren Inferior Completo",
                description: "Trabajo integral de piernas y glúteos.",
                duration: "24 min",
                videoId: YOUTUBE_IDS.TREN_INFERIOR_24MIN
            },
            {
                id: "f-06",
                title: "Full Body Express",
                description: "Rutina rápida de cuerpo completo.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.FULL_BODY_11MIN
            },
            {
                id: "f-07",
                title: "Full Body Calistenia",
                description: "Entrenamiento de calistenia para todo el cuerpo.",
                duration: "17 min",
                videoId: YOUTUBE_IDS.FULLBODY_CALISTENIA_17MIN
            }
        ]
    },
    {
        id: "hipertrofia",
        title: "HIPERTROFIA",
        description: "Maximiza tu ganancia muscular con peso corporal.",
        lessons: [
            {
                id: "h-01",
                title: "Pectorales, Tríceps y Hombros",
                description: "Rutina intensa para empuje.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.PECTORALES_TRICEPS_HOMBROS_13MIN
            },
            {
                id: "h-02",
                title: "Espalda y Brazos (con Banda)",
                description: "Trabajo de tracción para una espalda amplia.",
                duration: "18 min",
                videoId: YOUTUBE_IDS.ESPALDA_BRAZOS_BANDA_18MIN
            },
            {
                id: "h-03",
                title: "Piernas de Acero",
                description: "Rutina desafiante para piernas grandes y fuertes.",
                duration: "22 min",
                videoId: YOUTUBE_IDS.PIERNAS_22MIN
            },
            {
                id: "h-04",
                title: "Explosive Chest Workout",
                description: "Potencia y fuerza explosiva para pectorales.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.EXPLOSIVE_CHEST_14MIN
            },
            {
                id: "h-05",
                title: "Pectorales y Hombros Avanzado",
                description: "Rutina extendida para mayor volumen.",
                duration: "22 min",
                videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_22MIN
            },
            {
                id: "h-06",
                title: "Rutina de Piernas 13 Min",
                description: "Entrenamiento enfocado en piernas.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.LEG_ROUTINE_13MIN
            },
            {
                id: "h-07",
                title: "Piernas Fuego",
                description: "Rutina intensa de 19 minutos para piernas.",
                duration: "19 min",
                videoId: YOUTUBE_IDS.PIERNAS_19MIN
            },
            {
                id: "h-08",
                title: "Piernas Resistencia",
                description: "Trabajo de resistencia muscular para piernas.",
                duration: "18 min",
                videoId: YOUTUBE_IDS.PIERNAS_18MIN
            },
            {
                id: "h-09",
                title: "Super Rutina de Piernas",
                description: "Entrenamiento superior para tren inferior.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PIERNAS_SUPER_14MIN
            },
            {
                id: "h-10",
                title: "Pectorales y Hombros Express",
                description: "Rutina rápida pero efectiva.",
                duration: "12 min",
                videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_12MIN
            },
            {
                id: "h-11",
                title: "Piernas 18 Min",
                description: "Rutina completa de piernas.",
                duration: "18 min",
                videoId: YOUTUBE_IDS.LEG_ROUTINE_18MIN
            },
            {
                id: "h-12",
                title: "Push Completo",
                description: "Pectorales, Hombros y Tríceps.",
                duration: "10 min",
                videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_TRICEPS_10MIN
            },
            {
                id: "h-13",
                title: "Piernas Calistenia",
                description: "Ejercicios de calistenia para piernas.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PIERNAS_CALISTENIA_14MIN
            },
            {
                id: "h-14",
                title: "Piernas en Casa II",
                description: "Variación de rutina de piernas.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PIERNAS_CASA_14MIN
            },
            {
                id: "h-15",
                title: "Piernas 12 Min",
                description: "Rutina corta e intensa de piernas.",
                duration: "12 min",
                videoId: YOUTUBE_IDS.LEG_ROUTINE_12MIN
            },
            {
                id: "h-16",
                title: "Calistenia Piernas 12 Min",
                description: "Enfoque técnico en piernas.",
                duration: "12 min",
                videoId: YOUTUBE_IDS.CALISTHENICS_LEGS_12MIN
            },
            {
                id: "h-17",
                title: "Pectorales Calistenia",
                description: "Rutina específica para pecho.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PECTORALES_CALISTENIA_14MIN
            },
            {
                id: "h-18",
                title: "Espalda y Brazos II",
                description: "Variación con banda elástica.",
                duration: "17 min",
                videoId: YOUTUBE_IDS.ESPALDA_BRAZOS_BANDA_17MIN
            },
            {
                id: "h-19",
                title: "Piernas 20 Min",
                description: "Rutina larga de piernas.",
                duration: "20 min",
                videoId: YOUTUBE_IDS.PIERNAS_20MIN
            },
            {
                id: "h-20",
                title: "Piernas Calistenia II",
                description: "Más ejercicios de calistenia para piernas.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.PIERNAS_CALISTENIA_14MIN_2
            },
            {
                id: "h-21",
                title: "Piernas en Casa III",
                description: "Rutina avanzada de piernas en casa.",
                duration: "16 min",
                videoId: YOUTUBE_IDS.PIERNAS_CASA_16MIN
            },
            {
                id: "h-22",
                title: "Piernas 17 Min",
                description: "Rutina de volumen para piernas.",
                duration: "17 min",
                videoId: YOUTUBE_IDS.LEG_ROUTINE_17MIN
            }
        ]
    },
    {
        id: "cardio-hiit",
        title: "CARDIO & HIIT",
        description: "Quema grasa y mejora tu resistencia.",
        lessons: [
            {
                id: "c-01",
                title: "HIIT Full Body",
                description: "Alta intensidad para quemar calorías rápidamente.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.HIIT_FULLBODY_13MIN
            },
            {
                id: "c-02",
                title: "Animal Flow Fat Loss",
                description: "Movimientos animales para un cardio dinámico.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.ANIMAL_FLOW_11MIN
            },
            {
                id: "c-03",
                title: "Cardio HIIT Extremo",
                description: "Sesión larga para máxima quema de grasa.",
                duration: "20 min",
                videoId: YOUTUBE_IDS.HIIT_CARDIO_20MIN
            },
            {
                id: "c-04",
                title: "HIIT Quema Calorías",
                description: "Rutina diseñada para maximizar el gasto calórico.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.HIIT_QUEMAR_CALORIAS_15MIN
            },
            {
                id: "c-05",
                title: "HIIT Fat Loss",
                description: "Enfoque en pérdida de grasa.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.HIIT_FAT_LOSS_15MIN
            },
            {
                id: "c-06",
                title: "HIIT Full Body II",
                description: "Variación de HIIT cuerpo completo.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.HIIT_FULLBODY_15MIN
            },
            {
                id: "c-07",
                title: "HIIT Perder Grasa",
                description: "Rutina intensa de 13 minutos.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.HIIT_PERDER_GRASA_13MIN
            },
            {
                id: "c-08",
                title: "Fat Loss HIIT",
                description: "17 minutos de alta intensidad.",
                duration: "17 min",
                videoId: YOUTUBE_IDS.FAT_LOSS_HIIT_17MIN
            },
            {
                id: "c-09",
                title: "HIIT Abs & Cardio",
                description: "Combinación de abdominales y cardio.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.HIIT_ABS_CARDIO_11MIN
            },
            {
                id: "c-10",
                title: "Animal HIIT",
                description: "HIIT estilo animal flow.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.ANIMAL_HIIT_11MIN
            },
            {
                id: "c-11",
                title: "HIIT Perder Grasa II",
                description: "Rutina rápida de 11 minutos.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.HIIT_PERDER_GRASA_11MIN
            },
            {
                id: "c-12",
                title: "HIIT Perder Grasa III",
                description: "Rutina express de 10 minutos.",
                duration: "10 min",
                videoId: YOUTUBE_IDS.HIIT_PERDER_GRASA_10MIN
            },
            {
                id: "c-13",
                title: "Full Body Fat Loss",
                description: "Cuerpo completo enfocado en quema de grasa.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.FULL_BODY_FAT_LOSS_15MIN
            },
            {
                id: "c-14",
                title: "Cardio HIIT 18 Min",
                description: "Sesión de cardio intenso.",
                duration: "18 min",
                videoId: YOUTUBE_IDS.CARDIO_HIIT_18MIN
            },
            {
                id: "c-15",
                title: "Perder Grasa 13 Min",
                description: "Rutina efectiva para quemar grasa.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.PERDER_GRASA_13MIN
            },
            {
                id: "c-16",
                title: "HIIT Full Body III",
                description: "18 minutos de HIIT total.",
                duration: "18 min",
                videoId: YOUTUBE_IDS.HIIT_FULLBODY_18MIN
            },
            {
                id: "c-17",
                title: "Cardio HIIT Full Body",
                description: "17 minutos de cardio global.",
                duration: "17 min",
                videoId: YOUTUBE_IDS.CARDIO_HIIT_FULLBODY_17MIN
            }
        ]
    },
    {
        id: "abdominales",
        title: "ABDOMINALES DE ACERO",
        description: "Define tu core y fortalece tu zona media.",
        lessons: [
            {
                id: "a-01",
                title: "Abs Routine 10 Min",
                description: "Rutina rápida y efectiva para abdominales.",
                duration: "10 min",
                videoId: YOUTUBE_IDS.ABS_10MIN
            },
            {
                id: "a-02",
                title: "Abs Calistenia",
                description: "Enfoque calisténico para el core.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.ABS_CALISTENIA_14MIN
            },
            {
                id: "a-03",
                title: "Rutina Intensa de Abs",
                description: "16 minutos de fuego abdominal.",
                duration: "16 min",
                videoId: YOUTUBE_IDS.ABS_16MIN
            },
            {
                id: "a-04",
                title: "HIIT Abs",
                description: "Alta intensidad para abdominales.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.HIIT_ABS_11MIN
            },
            {
                id: "a-05",
                title: "Abs 11 Min",
                description: "Rutina clásica de abdominales.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.ABS_11MIN
            },
            {
                id: "a-06",
                title: "Abs 13 Min",
                description: "Rutina intermedia de abdominales.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.ABS_13MIN
            },
            {
                id: "a-07",
                title: "Abs 15 Min",
                description: "Rutina avanzada de abdominales.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.ABS_15MIN
            },
            {
                id: "a-08",
                title: "Ab Workout 10 Min",
                description: "Entrenamiento rápido de core.",
                duration: "10 min",
                videoId: YOUTUBE_IDS.AB_WORKOUT_10MIN
            },
            {
                id: "a-09",
                title: "Abs 10 Min II",
                description: "Variación de rutina de 10 minutos.",
                duration: "10 min",
                videoId: YOUTUBE_IDS.ABS_10MIN_2
            },
            {
                id: "a-10",
                title: "Abs 13 Min II",
                description: "Variación de rutina de 13 minutos.",
                duration: "13 min",
                videoId: YOUTUBE_IDS.ABS_13MIN_2
            },
            {
                id: "a-11",
                title: "Abs en Casa 14 Min",
                description: "Entrenamiento de core en casa.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.ABS_CASA_14MIN
            },
            {
                id: "a-12",
                title: "Ab Workout 11 Min",
                description: "Entrenamiento de 11 minutos.",
                duration: "11 min",
                videoId: YOUTUBE_IDS.AB_WORKOUT_11MIN
            },
            {
                id: "a-13",
                title: "Abs en Casa 12 Min",
                description: "Rutina efectiva de 12 minutos.",
                duration: "12 min",
                videoId: YOUTUBE_IDS.ABS_CASA_12MIN
            },
            {
                id: "a-14",
                title: "Abs en Casa 14 Min II",
                description: "Variación de rutina de 14 minutos.",
                duration: "14 min",
                videoId: YOUTUBE_IDS.ABS_CASA_14MIN_2
            },
            {
                id: "a-15",
                title: "Abs Calistenia 15 Min",
                description: "Rutina larga de calistenia para abs.",
                duration: "15 min",
                videoId: YOUTUBE_IDS.ABS_CALISTENIA_15MIN
            },
            {
                id: "a-16",
                title: "Abs en Casa 16 Min",
                description: "Rutina intensa de 16 minutos.",
                duration: "16 min",
                videoId: YOUTUBE_IDS.ABS_CASA_16MIN
            }
        ]
    },
    {
        id: "tabata-express",
        title: "TABATA EXPRESS",
        description: "Entrenamientos de 4 minutos para días ocupados.",
        lessons: [
            {
                id: "t-01",
                title: "Tabata Full Body",
                description: "4 minutos para activar todo el cuerpo.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_FULLBODY_4MIN
            },
            {
                id: "t-02",
                title: "Tabata Piernas",
                description: "Destruye tus piernas en 4 minutos.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_PIERNAS_4MIN
            },
            {
                id: "t-03",
                title: "Tabata Abs",
                description: "Core rápido y furioso.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_ABS_4MIN
            },
            {
                id: "t-04",
                title: "Tabata Pectorales y Hombros",
                description: "Empuje rápido en 4 minutos.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_PECTORALES_HOMBROS_4MIN
            },
            {
                id: "t-05",
                title: "Tabata Piernas II",
                description: "Variación de piernas en 4 minutos.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_PIERNAS_4MIN_2
            },
            {
                id: "t-06",
                title: "Tabata Abs II",
                description: "Variación de abdominales en 4 minutos.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_AB_4MIN_2
            },
            {
                id: "t-07",
                title: "Tabata Fat Loss",
                description: "Quema grasa en 4 minutos.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_FAT_LOSS_4MIN
            },
            {
                id: "t-08",
                title: "Tabata Piernas III",
                description: "Otra sesión intensa de piernas.",
                duration: "4 min",
                videoId: YOUTUBE_IDS.TABATA_PIERNAS_4MIN_3
            }
        ]
    }
];
