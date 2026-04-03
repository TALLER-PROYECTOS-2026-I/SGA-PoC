import { useState } from 'react';
import DashboardCoordinadora from './views/DashboardCoordinadora';
import PerfilCoordinadora from './views/PerfilCoordinadora';

function App() {
  // Estado para controlar qué pantalla vemos
  const [vista, setVista] = useState<'dashboard' | 'perfil'>('dashboard');

  return (
    <div className="w-full min-h-screen m-0 p-0">
      {vista === 'dashboard' && (
        <DashboardCoordinadora onNavigate={() => setVista('perfil')} />
      )}

      {vista === 'perfil' && (
        <PerfilCoordinadora onNavigate={() => setVista('dashboard')} />
      )}
    </div>
  )
}

export default App;