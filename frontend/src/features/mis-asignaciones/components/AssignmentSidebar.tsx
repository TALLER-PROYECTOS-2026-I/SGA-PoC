import { Home, FileText } from 'lucide-react';

interface AssignmentSidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

export function AssignmentSidebar({ activeItem, onItemClick }: AssignmentSidebarProps) {
  const menuItems = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'asignaciones', label: 'Asignaciones', icon: FileText },
  ];

  return (
    <aside style={{
      width: '240px',
      backgroundColor: '#1a1f2e',
      color: 'white',
      height: '100%'
    }}>
      <nav style={{ paddingTop: '16px', paddingBottom: '16px' }}>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                textAlign: 'left',
                backgroundColor: isActive ? '#2a3142' : 'transparent',
                borderLeft: isActive ? '4px solid white' : 'none',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = '#252a3a';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <Icon style={{ width: '20px', height: '20px' }} />
              <span style={{ fontSize: '14px' }}>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}