import { useState } from 'react';
import { Search, Eye, Home, BookOpen, MessageSquare, ChevronDown, Plus } from 'lucide-react';

const silabosData = [
  { id: 1, nombre: 'Ing de Software', estado: 'aprobado' },
  { id: 2, nombre: 'Taller de Proyectos', estado: 'pendiente' },
  { id: 3, nombre: 'Ing de Software II', estado: 'pendiente' },
  { id: 4, nombre: 'Pruebas de Software', estado: 'rechazado' },
];

// AQUÍ CAMBIAMOS EL NOMBRE A TU COMPONENTE
export default function AsignacionesDocente() {
  const [searchTerm, setSearchTerm] = useState('');

  const silabosFiltrados = silabosData.filter((silabo) =>
    silabo.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const obtenerColorEstado = (estado: string) => {
    switch (estado) {
      case 'aprobado': return 'bg-green-600';
      case 'pendiente': return 'bg-yellow-500';
      case 'rechazado': return 'bg-red-600';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="flex h-screen bg-[#F5F5F5] font-sans">
      
      {/* SIDEBAR (Fondo Rojo Institucional) */}
      <aside className="w-64 bg-[#BD1714] text-white flex flex-col shadow-xl z-10">
        <div className="p-6 flex justify-center border-b border-red-800">
          <div className="bg-white/90 text-[#BD1714] font-bold py-2 px-6 rounded-md shadow-sm">
            Logo USMP
          </div>
        </div>

        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-red-800 hover:text-white transition-colors">
                <Home size={20} />
                <span className="font-medium">Inicio</span>
              </a>
            </li>
            <li className="relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-white"></div>
              <a href="#" className="flex items-center gap-3 px-6 py-3 bg-red-800 text-white transition-colors">
                <BookOpen size={20} />
                <span className="font-medium">Asignaciones</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-3 px-6 py-3 text-white/80 hover:bg-red-800 hover:text-white transition-colors">
                <MessageSquare size={20} />
                <span className="font-medium">Mensajería</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* CONTENIDO PRINCIPAL */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* HEADER */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-end px-8 z-0">
          <div className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
            <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold text-sm">
              P
            </div>
            <span className="font-medium text-gray-700">Palacios</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </header>

        {/* ÁREA DE TRABAJO */}
        <div className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold text-gray-800">Mis Sílabos</h1>
              
              <div className="flex gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#BD1714] focus:border-transparent w-64 shadow-sm"
                  />
                </div>
                <button className="bg-gray-800 hover:bg-black text-white p-2 rounded-md shadow-sm transition-colors flex items-center justify-center w-10 h-10">
                  <Plus size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {silabosFiltrados.length > 0 ? (
                silabosFiltrados.map((silabo) => (
                  <div 
                    key={silabo.id} 
                    className="bg-white border border-gray-200 rounded-xl p-5 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                      <span className="font-semibold text-gray-700">{silabo.nombre}</span>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className={`w-6 h-6 rounded-sm ${obtenerColorEstado(silabo.estado)} shadow-inner`}></div>
                      <button className="text-gray-400 hover:text-gray-700 transition-colors">
                        <Eye size={20} />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 text-gray-500">
                  No se encontraron sílabos con ese nombre.
                </div>
              )}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}