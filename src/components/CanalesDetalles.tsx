import React, { useState, useEffect } from 'react';
import {Postulante, CanalData, FormData} from '../types';
import { canalPlantillaConfigByKey ,PlantillaOpciones, CanalesOpciones, CanalPlantillaKey  } from '../data/canalPlantillaConfigs'


interface CanalesDetallesProps {
  selectedCanales: CanalesOpciones[];
  plantilla: PlantillaOpciones;
  onBack: () => void;
  onSubmit: (data: FormData) => void;
  postulante: Postulante
}


const getDefaultValues = (canal: CanalesOpciones, plantilla: PlantillaOpciones, postulante: Postulante): CanalData => {
  
  const key = `${canal}-${plantilla}` as CanalPlantillaKey;
  const defaults = canalPlantillaConfigByKey[key]?.defaults || {};

    if (defaults.mensaje) {
    return {
      ...defaults,
      mensaje: defaults.mensaje.replace(/\[Nombre\]/g, postulante.nombre),
    };
  }
  return defaults;
};

const CanalesDetalles: React.FC<CanalesDetallesProps> = ({ selectedCanales, plantilla, onBack, onSubmit, postulante }) => {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState<FormData>({});
  const currentCanal = selectedCanales[currentIndex];

 
  useEffect(() => {
    const initialData: FormData = {};
    selectedCanales.forEach((canal) => {
      initialData[canal] = getDefaultValues(canal, plantilla, postulante);
    });
    setFormData(initialData);
  }, [selectedCanales, plantilla]);

  
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [currentCanal]: {
        ...prev[currentCanal],
        [field]: value,
      },
    }));
  };

  const handleNext = () => {
    if (currentIndex < selectedCanales.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onSubmit(formData);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onBack();
    }
  };


  const renderForm = () => {
    if (currentCanal === 'sms' || currentCanal === 'whatsapp') {
      return (
        <div className="mb-4">
          <label className="block mb-2 font-medium">Mensaje</label>
          <input
            type="text"
            value={formData[currentCanal]?.mensaje || ''}
            onChange={(e) => handleInputChange('mensaje', e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
      );
    }
    if (currentCanal === 'correo') {
      return (
        <>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Asunto</label>
            <input
              type="text"
              value={formData[currentCanal]?.asunto || ''}
              onChange={(e) => handleInputChange('asunto', e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium">Mensaje</label>
            <input
              type="text"
              value={formData[currentCanal]?.mensaje || ''}
              onChange={(e) => handleInputChange('mensaje', e.target.value)}
              className="w-full px-3 py-2 border rounded"
            />
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <div className="w-[500px] p-6 mx-auto bg-white rounded-lg">
      <h2 className="mb-4 text-xl font-bold">
        {` ${currentCanal.toUpperCase()}`}
      </h2>
      <form>
        {renderForm()}
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleBack}
            className="px-4 py-2 text-white bg-gray-500 rounded"
          >
            Atrás
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="px-4 py-2 text-white bg-blue-500 rounded"
          >
  
            {currentIndex === selectedCanales.length - 1 ? 'Enviar' : 'Siguiente'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CanalesDetalles;
