import { useState } from 'react';
import { Home, BookOpen, MessageSquare, ChevronDown, Bell, Key, Mail, FileCheck, FilePlus, FileEdit, User, XCircle } from 'lucide-react';

export default function DashboardCoordinadora({ onNavigate }: { onNavigate: () => void }) {
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
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-8 z-20">
          <div className="text-sm font-medium text-gray-500">
            Después de 5 minutos de actividad se cerrará su sesión
          </div>
          
          <div className="flex items-center gap-6">
            <Bell size={20} className="text-gray-500 cursor-pointer" />
            
            {/* MENÚ DESPLEGABLE */}
            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                onClick={() => setMenuAbierto(!menuAbierto)}
              >
                <User size={16} className="text-gray-600" />
                <span className="font-medium text-gray-700">Waldy G.</span>
                <ChevronDown size={16} className="text-gray-500" />
              </div>

              {menuAbierto && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 py-1 z-30">
                  <button 
                    onClick={onNavigate}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Perfil
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 flex items-center justify-between">
                    Cerrar Sesión <XCircle size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* ÁREA DE LOS 5 BOTONES */}
        <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center">
          <div className="max-w-4xl w-full flex flex-col items-center space-y-8">
            <div className="flex gap-8 w-full justify-center">
              <button className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-8 py-6 w-72 shadow-sm hover:border-red-500 text-lg font-bold text-gray-800">
                <Key size={32} className="text-[#BD1714]" /> Activar permisos
              </button>
              <button className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-8 py-6 w-72 shadow-sm hover:border-red-500 text-lg font-bold text-gray-800">
                <Mail size={32} className="text-[#BD1714]" /> Enviar correos
              </button>
            </div>
            <div className="flex justify-center w-full">
              <button className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-8 py-6 w-80 shadow-sm hover:border-red-500 text-lg font-bold text-gray-800">
                <FileCheck size={32} className="text-[#BD1714]" /> Seguimiento de silabus
              </button>
            </div>
            <div className="flex gap-8 w-full justify-center">
              <button className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-8 py-6 w-72 shadow-sm hover:border-red-500 text-lg font-bold text-gray-800">
                <FilePlus size={32} className="text-[#BD1714]" /> Registrar nuevo silabo
              </button>
              <button className="flex items-center gap-4 bg-white border border-gray-300 rounded-xl px-8 py-6 w-72 shadow-sm hover:border-red-500 text-lg font-bold text-gray-800">
                <FileEdit size={32} className="text-[#BD1714]" /> Modificar nuevo silabo
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}