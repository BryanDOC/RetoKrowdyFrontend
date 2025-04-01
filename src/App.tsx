import { useState} from 'react'
import PostulanteCard from './components/PostulanteCard'
import Postulantes from './data/postulantes.json'
import Plantilla from './components/Plantilla'
import Canales from './components/Canales'
import CanalesDetalles from './components/CanalesDetalles'
import {Postulante, Step, CanalesOpciones, FormData, PlantillaOpciones} from './types'




function App() {

 
  const [selectedPostulante, setSelectedPostulante] = useState<Postulante | null>(null);
  const [selectedPlantilla, setSelectedPlantilla] = useState<PlantillaOpciones>('invitacion');
  const [selectedCanales, setSelectedCanales] = useState<CanalesOpciones[]>([]);
  const [step, setStep] = useState<Step>('listado');
  

  const handleSelectPostulante = (postulante: Postulante) => {
    setSelectedPostulante(postulante);
    setStep('plantilla');
  };
  const handleCancelPlantilla = () => {
    setStep('listado');
  };

  const handlePlantillaNext = (plantilla: PlantillaOpciones) => {
    setSelectedPlantilla(plantilla);
    setStep('canales');
    
  };


  const handleCanalesBack = () => {
    setStep('plantilla');
  };

  const handleCanalesNext = (canales: CanalesOpciones[]) => {
    setSelectedCanales(canales);
    setStep('detallesCanal');
  
  };
  const handleFinalSubmit = (canalData: FormData) => {
    
    console.log('--- Datos Finales ---');
    console.log('Persona:', selectedPostulante);
    console.log('Plantilla:', selectedPlantilla);
    console.log('Datos de canales:', canalData);
  
  };
  return (
    <><div className='flex items-center justify-center w-screen h-screen bg-gray-950'>
      
   
       <div className="max-w-lg p-8 mx-auto">
      {step === 'listado' && (
        <>
          <h1 className="mb-4 text-2xl font-bold text-center text-white">Listado de Personas</h1>
          {Postulantes.map((postulante) => (
            <PostulanteCard key={postulante.id} postulante={postulante} onSelect={handleSelectPostulante} />
          ))}
        </>
      )}
      
      {step === 'plantilla' && selectedPostulante && (
        <Plantilla
          initialPlantilla={selectedPlantilla}
          onCancel={handleCancelPlantilla}
          onNext={handlePlantillaNext}
        />
      )}

      {step === 'canales' && selectedPostulante && (
        <Canales
          initialCanales={selectedCanales}
          onBack={handleCanalesBack}
          onNext={handleCanalesNext}
        />
      )}

      {step === 'detallesCanal' && selectedPostulante && (
        <CanalesDetalles
          selectedCanales={selectedCanales}
          plantilla={selectedPlantilla}
          onBack={() => setStep('canales')}
          onSubmit={handleFinalSubmit}
          postulante={selectedPostulante}
        />
      )}
    </div>
    </div>
    </>
  )
}

export default App
