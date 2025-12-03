import { YOUTUBE_IDS } from './videoRegistry';

export type ChallengeDayType = 'WORKOUT' | 'REST';

export interface ChallengeDay {
    day: number;
    title: string;
    description: string;
    type: ChallengeDayType;
    videoId?: string; // Optional, only for WORKOUT
    duration?: string;
}

export const CHALLENGE_28_DAYS: ChallengeDay[] = [
    // SEMANA 1: FUNDAMENTOS (Base y Acondicionamiento)
    { day: 1, title: "El Despertar", type: "WORKOUT", videoId: YOUTUBE_IDS.FULL_BODY_15MIN, description: "Rutina de cuerpo completo para iniciar tu transformación.", duration: "15 min" },
    { day: 2, title: "Empuje Básico", type: "WORKOUT", videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_13MIN, description: "Fundamentos de flexiones y fuerza de empuje.", duration: "13 min" },
    { day: 3, title: "Piernas de Acero", type: "WORKOUT", videoId: YOUTUBE_IDS.PIERNAS_14MIN, description: "Sentadillas y zancadas para una base sólida.", duration: "14 min" },
    { day: 4, title: "Descanso Activo", type: "REST", description: "Caminata ligera de 20 min o estiramientos suaves.", duration: "20 min" },
    { day: 5, title: "Core de Hierro", type: "WORKOUT", videoId: YOUTUBE_IDS.ABS_10MIN, description: "Activación abdominal básica y efectiva.", duration: "10 min" },
    { day: 6, title: "Full Body Express", type: "WORKOUT", videoId: YOUTUBE_IDS.FULL_BODY_11MIN, description: "Entrenamiento rápido para cerrar la primera semana.", duration: "11 min" },
    { day: 7, title: "Descanso Total", type: "REST", description: "Recuperación completa. Hidrátate bien.", duration: "0 min" },

    // SEMANA 2: HIPERTROFIA (Construcción Muscular)
    { day: 8, title: "Pecho Explosivo", type: "WORKOUT", videoId: YOUTUBE_IDS.EXPLOSIVE_CHEST_14MIN, description: "Potencia y volumen para tus pectorales.", duration: "14 min" },
    { day: 9, title: "Piernas Fuego", type: "WORKOUT", videoId: YOUTUBE_IDS.PIERNAS_19MIN, description: "Aumentamos la intensidad en el tren inferior.", duration: "19 min" },
    { day: 10, title: "Espalda y Tracción", type: "WORKOUT", videoId: YOUTUBE_IDS.ESPALDA_BRAZOS_BANDA_18MIN, description: "Ensanchando la espalda (usa banda o adapta).", duration: "18 min" },
    { day: 11, title: "Descanso Activo", type: "REST", description: "Movilidad de hombros y cadera.", duration: "15 min" },
    { day: 12, title: "Abs Calistenia", type: "WORKOUT", videoId: YOUTUBE_IDS.ABS_CALISTENIA_14MIN, description: "Técnica de core específica para calistenia.", duration: "14 min" },
    { day: 13, title: "Hipertrofia Piernas", type: "WORKOUT", videoId: YOUTUBE_IDS.PIERNAS_22MIN, description: "El desafío más duro de piernas hasta ahora.", duration: "22 min" },
    { day: 14, title: "Descanso Total", type: "REST", description: "Dormir 8 horas es parte del entrenamiento.", duration: "0 min" },

    // SEMANA 3: RESISTENCIA & HIIT (Quema de Grasa)
    { day: 15, title: "HIIT Quema Grasa", type: "WORKOUT", videoId: YOUTUBE_IDS.HIIT_QUEMAR_CALORIAS_15MIN, description: "Acelera tu metabolismo al máximo.", duration: "15 min" },
    { day: 16, title: "Animal Flow", type: "WORKOUT", videoId: YOUTUBE_IDS.ANIMAL_FLOW_11MIN, description: "Movilidad, fuerza y resistencia dinámica.", duration: "11 min" },
    { day: 17, title: "Full Body Cardio", type: "WORKOUT", videoId: YOUTUBE_IDS.HIIT_FULLBODY_15MIN, description: "Resistencia muscular global intensa.", duration: "15 min" },
    { day: 18, title: "Descanso Activo", type: "REST", description: "Yoga o caminata larga a paso rápido.", duration: "30 min" },
    { day: 19, title: "Abs de Acero", type: "WORKOUT", videoId: YOUTUBE_IDS.ABS_16MIN, description: "Rutina larga y exigente de abdominales.", duration: "16 min" },
    { day: 20, title: "Cardio Extremo", type: "WORKOUT", videoId: YOUTUBE_IDS.HIIT_CARDIO_20MIN, description: "Prueba tu resistencia cardiovascular.", duration: "20 min" },
    { day: 21, title: "Descanso Total", type: "REST", description: "Prepárate mentalmente para la semana final.", duration: "0 min" },

    // SEMANA 4: ELITE (Tabata & Potencia Final)
    { day: 22, title: "Tabata Full Body", type: "WORKOUT", videoId: YOUTUBE_IDS.TABATA_FULLBODY_4MIN, description: "4 minutos de máxima intensidad sin parar.", duration: "4 min" },
    { day: 23, title: "Pectorales Elite", type: "WORKOUT", videoId: YOUTUBE_IDS.PECTORALES_HOMBROS_22MIN, description: "Volumen alto y resistencia para empuje.", duration: "22 min" },
    { day: 24, title: "Piernas Velocidad", type: "WORKOUT", videoId: YOUTUBE_IDS.LEG_ROUTINE_12MIN, description: "Rutina rápida y explosiva de piernas.", duration: "12 min" },
    { day: 25, title: "Descanso Activo", type: "REST", description: "Visualización del éxito y estiramientos.", duration: "15 min" },
    { day: 26, title: "Tabata Abs", type: "WORKOUT", videoId: YOUTUBE_IDS.TABATA_ABS_4MIN, description: "Último esfuerzo concentrado para el core.", duration: "4 min" },
    { day: 27, title: "El Reto Final", type: "WORKOUT", videoId: YOUTUBE_IDS.HIIT_FULLBODY_18MIN, description: "Demuestra tu fuerza y resistencia total.", duration: "18 min" },
    { day: 28, title: "GRADUACIÓN", type: "REST", description: "¡Felicidades! Has completado el reto.", duration: "0 min" },
];
