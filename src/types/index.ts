export interface Postulante {
    id: number;
    nombre: string;
    edad: number;
    imagen: string;
  }

export type Step = 'listado' | 'plantilla' | 'canales' | 'detallesCanal';
export type CanalesOpciones = 'sms' | 'correo' | 'whatsapp';
export type PlantillaOpciones = 'invitacion' | 'recordatorio' | 'personalizado';

export type CanalData = {
    mensaje?: string;
    asunto?: string;
  };
export type FormData = {
    [key in CanalesOpciones]?: CanalData;
};