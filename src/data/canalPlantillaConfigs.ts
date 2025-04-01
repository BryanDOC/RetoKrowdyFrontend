import { keyBy } from "es-toolkit";


export type CanalesOpciones = "sms" | "correo" | "whatsapp";
export type PlantillaOpciones = "invitacion" | "recordatorio" | "personalizado";

export type CanalPlantillaKey = `${CanalesOpciones}-${PlantillaOpciones}`;

export type CanalPlantillaConfig = {
  channel: CanalesOpciones;
  template: PlantillaOpciones;
  defaults: {
    mensaje?: string;
    asunto?: string;
  };
};


export const channelTemplateConfigs: CanalPlantillaConfig[] = [
   
    { channel: "sms", 
      template: "personalizado", 
      defaults: { mensaje: "" } },

    { channel: "sms", 
      template: "invitacion",    
      defaults: { mensaje: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso/actividad] que se llevará a cabo el [fecha] a las [hora]. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!" } },

    { channel: "sms", 
      template: "recordatorio",   
      defaults: { mensaje: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso/actividad] al que confirmaste tu asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos puntual!" } },
   
    { channel: "correo", 
      template: "personalizado",  
      defaults: { asunto: "", mensaje: "" } },

    { channel: "correo", 
      template: "invitacion",    
      defaults: { 
        asunto: "Invitación al proceso de [nombre del proceso]", 
        mensaje: "Estimado/a [Nombre], Esperamos que te encuentres bien.A través de este medio, queremos invitarte a participar en el proceso de [nombre del proceso], que se llevará a cabo el [fecha] a las [hora]. El lugar del encuentro será [dirección/sala virtual]. Tu participación es muy importante para nosotros. Agradeceríamos que confirmes tu asistencia respondiendo a este correo. Quedamos atentos a cualquier consulta que puedas tener. Cordialmente, [Nombre del remitente] [Puesto] [Empresa/Organización]" } },

    { channel: "correo", 
      template: "recordatorio",   
      defaults: { 
        asunto: "Recordatorio del proceso de [nombre del proceso]", 
        mensaje: "Estimado/a [Nombre], Queremos recordarte que el proceso de [nombre del proceso], al que amablemente confirmaste tu asistencia, se realizará el [fecha] a las [hora]. El evento tendrá lugar en [dirección/sala virtual]. Si tienes alguna duda o necesitas asistencia previa, no dudes en contactarnos. Te esperamos puntual. Saludos cordiales, [Nombre del remitente] [Puesto] [Empresa/Organización]" } },
   
    { channel: "whatsapp", 
      template: "personalizado",  
      defaults: { mensaje: "" } },
    { channel: "whatsapp", 
      template: "invitacion",     
      defaults: { mensaje: "Hola [Nombre], te invitamos a participar en el proceso de [nombre del proceso/actividad] que se llevará a cabo el [fecha] a las [hora]. Por favor, confirma tu asistencia respondiendo a este mensaje. ¡Te esperamos!" } },

    { channel: "whatsapp", 
      template: "recordatorio",   
      defaults: { mensaje: "Hola [Nombre], te recordamos que el proceso de [nombre del proceso/actividad] al que confirmaste tu asistencia se realizará el [fecha] a las [hora]. ¡Te esperamos puntual!" } },
  ];
  


export const canalPlantillaConfigByKey = keyBy(
    channelTemplateConfigs,
    ({ channel, template }) => `${channel}-${template}` as CanalPlantillaKey
  ) as Record<CanalPlantillaKey, CanalPlantillaConfig>;


