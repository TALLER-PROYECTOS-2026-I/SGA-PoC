import { Eye, Edit2 } from 'lucide-react';

interface AssignmentCardProps {
  title: string;
  status: 'green' | 'red' | 'yellow';
  showEdit?: boolean;
  onView?: () => void;
  onEdit?: () => void;
}

export function AssignmentCard({ title, status, showEdit, onView, onEdit }: AssignmentCardProps) {
  const statusColors = {
    green: '#10b981',
    red: '#ef4444',
    yellow: '#eab308',
  };

  return (
    <div style={{
      backgroundColor: 'white',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      padding: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      transition: 'box-shadow 0.2s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: '12px',
          height: '12px',
          backgroundColor: '#9ca3af',
          borderRadius: '50%'
        }}></div>
        <h3 style={{ color: '#1f2937', margin: 0 }}>{title}</h3>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {showEdit && (
          <button
            onClick={onEdit}
            style={{
              padding: '6px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#eff6ff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Editar"
          >
            <Edit2 style={{ width: '20px', height: '20px', color: '#3b82f6' }} />
          </button>
        )}
        
        <div style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: statusColors[status]
        }}></div>
        
        <button
          onClick={onView}
          style={{
            padding: '6px',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f3f4f6';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
          aria-label="Ver"
        >
          <Eye style={{ width: '20px', height: '20px', color: '#374151' }} />
        </button>
      </div>
    </div>
  );
}