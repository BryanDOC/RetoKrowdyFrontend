import React from 'react';
import { MdNotificationsActive } from "react-icons/md";
import { Postulante} from '../types'

interface PostulanteCardProps {
  postulante: Postulante;
  onSelect: (postulante: Postulante) => void;
}

const PersonCard: React.FC<PostulanteCardProps> = ({ postulante, onSelect }) => {
  return (
    <div className="flex items-center justify-between gap-8 p-4 mb-4 bg-white border rounded shadow">
      <div className='flex items-center '>
        <img src={postulante.imagen} alt={postulante.nombre} className="w-16 h-16 mr-4 rounded-full" />
      <div>
        <h3 className="font-bold">{postulante.nombre}</h3>
        <p>Edad: {postulante.edad}</p>
      </div>
      </div>
      
      <button
        onClick={() => onSelect(postulante)}
        className="px-4 py-2 mr-4 text-white bg-blue-500 rounded"
      >
       <MdNotificationsActive size={24}/>
      </button>
    </div>
  );
};

export default PersonCard;
