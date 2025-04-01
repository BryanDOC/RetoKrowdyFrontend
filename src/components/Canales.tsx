import React, { useState} from 'react';
import {CanalesOpciones} from '../types'



interface CanalesSelectionProps {
  initialCanales?: CanalesOpciones[];
  onBack: () => void;
  onNext: (channels: CanalesOpciones[]) => void;
}

const Canales: React.FC<CanalesSelectionProps> = ({ initialCanales = [], onBack, onNext }) => {
  const [selectedCanales, setSelectedCanales] = useState<CanalesOpciones[]>(initialCanales);
  const canalOrder: CanalesOpciones[] = ['sms', 'correo', 'whatsapp'];

  
  const handleCheckboxChange = (channel: CanalesOpciones) => {
    setSelectedCanales((prev) => {
      if (prev.includes(channel)) {
        return prev.filter((c) => c !== channel);
      } else {
        return [...prev, channel];
      }
    });
  };

  const handleNext = () => {
    const orderedSelectedChannels = canalOrder.filter(channel => selectedCanales.includes(channel));
    onNext(orderedSelectedChannels);
  };

  return (
    <div className="w-[500px] p-6 mx-auto bg-white rounded-lg">
      <h2 className="mb-4 text-xl font-bold">Selección de Canales</h2>
      <form>
        <div className="mb-4">
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedCanales.includes('sms')}
              onChange={() => handleCheckboxChange('sms')}
              className="mr-2 accent-gray-950"
            />
            SMS
          </label>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={selectedCanales.includes('correo')}
              onChange={() => handleCheckboxChange('correo')}
              className="mr-2 accent-gray-950"
            />
            Correo electrónico
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedCanales.includes('whatsapp')}
              onChange={() => handleCheckboxChange('whatsapp')}
              className="mr-2 accent-gray-950"
            />
            WhatsApp
          </label>
        </div>
        <div className="flex justify-end gap-6">
          <button type="button" onClick={onBack} className="px-4 py-2 text-black rounded  bg-[#E3E3E3]">
            Atrás
          </button>
          <button type="button" onClick={handleNext} className="px-4 py-2 text-white rounded bg-gray-950">
            Siguiente
          </button>
        </div>
      </form>
    </div>
  );
};

export default Canales;
