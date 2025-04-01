import React, { useState } from 'react';
import { PlantillaOpciones} from '..//types/index'


interface PlantillaProps {
  initialPlantilla?: PlantillaOpciones;
  onNext: (plantilla: PlantillaOpciones) => void;
  onCancel: () => void;
}

const Plantilla: React.FC<PlantillaProps> = ({ initialPlantilla, onNext, onCancel }) => {
  const [selectedTemplate, setSelectedTemplate] = useState<PlantillaOpciones>(initialPlantilla || 'invitacion');

  const handleNext = () => {
    onNext(selectedTemplate);
  };

  return (
    <div className="w-[500px] p-6 mx-auto bg-white rounded-lg">
      <h2 className="mb-4 text-xl font-bold">Selección de Plantilla</h2>
      <form>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input 
              type="radio" 
              name="template" 
              value="invitacion" 
              checked={selectedTemplate === 'invitacion'} 
              onChange={() => setSelectedTemplate('invitacion')}
              className="mr-2 accent-gray-950"
            />
            Invitación
          </label>
          <label className="flex items-center mb-2">
            <input 
              type="radio" 
              name="template" 
              value="recordatorio" 
              checked={selectedTemplate === 'recordatorio'} 
              onChange={() => setSelectedTemplate('recordatorio')}
              className="mr-2 accent-gray-950"
            />
            Recordatorio
          </label>
          <label className="flex items-center">
            <input 
              type="radio" 
              name="template" 
              value="personalizado" 
              checked={selectedTemplate === 'personalizado'} 
              onChange={() => setSelectedTemplate('personalizado')}
              className="mr-2 accent-gray-950"
            />
            Personalizado
          </label>
        </div>
        <div className="flex justify-end gap-6">
          <button type="button" onClick={onCancel} className="px-4 py-2 text-black rounded  bg-[#E3E3E3]">
            Cancelar
          </button>
          <button type="button" onClick={handleNext} className="px-4 py-2 text-white rounded bg-gray-950">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default Plantilla;
