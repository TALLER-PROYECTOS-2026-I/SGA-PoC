import { useState } from 'react';
import { Search } from 'lucide-react';
import { AssignmentHeader } from './components/AssignmentHeader';
import { AssignmentSidebar } from './components/AssignmentSidebar';
import { AssignmentCard } from './components/AssignmentCard';

interface Assignment {
  id: string;
  title: string;
  status: 'green' | 'red' | 'yellow';
  showEdit?: boolean;
}

export function AssignmentsPage() {
  const [activeMenuItem, setActiveMenuItem] = useState('asignaciones');
  const [searchQuery, setSearchQuery] = useState('');

  const assignments: Assignment[] = [
    {
      id: '1',
      title: 'Investigación de Sistemas de Información',
      status: 'green',
    },
    {
      id: '2',
      title: 'Taller de Proyectos',
      status: 'red',
      showEdit: true,
    },
    {
      id: '3',
      title: 'Algoritmos 2',
      status: 'yellow',
    },
  ];

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleView = (id: string) => {
    console.log('Ver asignación:', id);
  };

  const handleEdit = (id: string) => {
    console.log('Editar asignación:', id);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f9fafb' }}>
      <AssignmentHeader />
      
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <AssignmentSidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />
        
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ maxWidth: '896px', margin: '0 auto', padding: '32px' }}>
            <h1 style={{ fontSize: '30px', marginBottom: '24px', color: '#1f2937' }}>Mis Asignaciones</h1>
            
            <div style={{ position: 'relative', marginBottom: '24px' }}>
              <Search style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '20px',
                height: '20px',
                color: '#9ca3af'
              }} />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  maxWidth: '448px',
                  paddingLeft: '40px',
                  paddingRight: '16px',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#3b82f6';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = '#d1d5db';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {filteredAssignments.map((assignment) => (
                <AssignmentCard
                  key={assignment.id}
                  title={assignment.title}
                  status={assignment.status}
                  showEdit={assignment.showEdit}
                  onView={() => handleView(assignment.id)}
                  onEdit={() => handleEdit(assignment.id)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}