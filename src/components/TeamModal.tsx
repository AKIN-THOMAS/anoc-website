type Person = {
  name: string
  role: string
  img: string
  about: string
}

interface ModalProps {
  person: Person | null;
  onClose: () => void;
}

const TeamModal = ({ person, onClose }: ModalProps) => {
  if (!person) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg shadow-xl max-w-xl w-full p-6 relative">
        
        <button 
          className="absolute top-3 right-3 text-xl font-bold text-slate-600 hover:text-black"
          onClick={onClose}
        >
          ×
        </button>

        <img 
          src={person.img} 
          alt={person.name} 
          className="w-40 h-40 object-cover rounded-lg mx-auto mb-4"
        />

        <h2 className="text-2xl font-semibold text-center">{person.name}</h2>
        <p className="text-center text-blue-700 font-medium">{person.role}</p>

        <div className="mt-4 whitespace-pre-line text-slate-700 leading-relaxed">
          {person.about}
        </div>
      </div>
    </div>
  );
};

export default TeamModal;
