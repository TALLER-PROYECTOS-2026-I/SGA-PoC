import { useState } from 'react';
import { Home, BookOpen, MessageSquare, ChevronDown, User, ArrowLeft, XCircle } from 'lucide-react';

export default function PerfilCoordinadora({ onNavigate }: { onNavigate: () => void }) {
  const [modoEdicion, setModoEdicion] = useState(false);
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className="flex h-screen w-full bg-[#F5F5F5] font-sans">
      
      {/* SIDEBAR ROJO */}
      <aside className="w-64 bg-[#BD1714] text-white flex flex-col shadow-xl z-10 flex-shrink-0">
        <div className="p-6 flex justify-center border-b border-red-800">
          <div className="bg-white/90 text-[#BD1714] font-bold py-2 px-6 rounded-md shadow-sm">Logo USMP</div>
        </div>
        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <li className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              <a href="#" className="flex items-center gap-3 px-6 py-3 bg-red-800 text-white transition-colors">
                <Home size={20} /><span className="font-medium">Inicio</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-red-800 transition-colors">
                <BookOpen size={20} /><span className="font-medium">Asignaciones</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-red-800 transition-colors">
                <MessageSquare size={20} /><span className="font-medium">Mensajería</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden w-full">
        
        {/* HEADER */}
        <header className="h-16 bg-red-600 shadow-sm flex items-center justify-end px-8 z-20">
          
          {/* MENÚ DESPLEGABLE EN EL PERFIL */}
          <div className="relative">
            <div 
              className="flex items-center gap-3 cursor-pointer p-2 bg-white rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              <User size={16} className="text-gray-600" />
              <span className="font-medium text-gray-700">Waldy G.</span>
              <ChevronDown size={16} className="text-gray-500" />
            </div>

            {menuAbierto && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-30">
                <button 
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 bg-gray-50"
                  disabled
                >
                  Perfil (Actual)
                </button>
                <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center justify-between">
                  Cerrar Sesión <XCircle size={14} />
                </button>
              </div>
            )}
          </div>
        </header>

        {/* FORMULARIO DE PERFIL */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 p-10 mt-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-10">Perfil Coordinador Academico</h2>
            
            <div className="flex gap-12 items-start">
              <div className="w-48 h-48 rounded-full bg-gray-200 border-4 border-gray-300 flex items-center justify-center flex-shrink-0">
                <User size={80} className="text-gray-400" />
              </div>

              <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-600">Nombre</label>
                  <input type="text" defaultValue="Luis Juan" disabled={!modoEdicion} className={`p-3 border rounded-md outline-none ${modoEdicion ? 'border-gray-400 bg-white' : 'border-gray-200 bg-gray-50'}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-600">Apellidos</label>
                  <input type="text" defaultValue="Palacios Quischiz" disabled={!modoEdicion} className={`p-3 border rounded-md outline-none ${modoEdicion ? 'border-gray-400 bg-white' : 'border-gray-200 bg-gray-50'}`} />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-600">Grado</label>
                  <input type="text" defaultValue="Ing. Software" disabled className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-bold text-gray-600">Correo</label>
                  <input type="text" defaultValue="Luis_Palacios@usmp.pe" disabled className="p-3 border border-gray-200 rounded-md bg-gray-100 text-gray-500" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center mt-16">
              <button 
                onClick={onNavigate} 
                className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
              >
                <ArrowLeft size={18} /> Volver
              </button>
              
              {!modoEdicion ? (
                <button onClick={() => setModoEdicion(true)} className="bg-[#BD1714] text-white px-8 py-2 rounded-md hover:bg-red-800 transition-colors">Editar</button>
              ) : (
                <button onClick={() => setModoEdicion(false)} className="bg-[#BD1714] text-white px-8 py-2 rounded-md hover:bg-red-800 transition-colors">Guardar</button>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}