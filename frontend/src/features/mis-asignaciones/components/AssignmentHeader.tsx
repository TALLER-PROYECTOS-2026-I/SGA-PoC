import { ChevronDown } from 'lucide-react';

export function AssignmentHeader() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      height: '60px'
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          backgroundColor: '#8B0000',
          padding: '0 24px',
          height: '60px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>USMP</span>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingRight: '24px' }}>
        <div style={{
          width: '32px',
          height: '32px',
          backgroundColor: '#e5e7eb',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <span style={{ fontSize: '14px' }}>👤</span>
        </div>
        <span style={{ fontSize: '14px' }}>Norma Leon</span>
        <ChevronDown style={{ width: '16px', height: '16px', color: '#6b7280' }} />
      </div>
    </header>
  );
}