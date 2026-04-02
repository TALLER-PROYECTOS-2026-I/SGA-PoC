function ConfiguracionView() {
  return (
    <div className="page-container">
      <div className="page-header page-header-enhanced">
        <div className="page-title-block">
          <span className="page-badge">Panel de control</span>
          <h1>Configuración del Sistema</h1>
          <div className="title-underline"></div>
          <p>
            Administra los parámetros generales, la seguridad, las sesiones y
            las opciones principales del sistema académico.
          </p>
        </div>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <h3>4</h3>
          <p>Módulos principales</p>
        </div>
        <div className="summary-card">
          <h3>24 h</h3>
          <p>Monitoreo activo</p>
        </div>
        <div className="summary-card">
          <h3>100%</h3>
          <p>Disponibilidad estimada</p>
        </div>
        <div className="summary-card">
          <h3>3</h3>
          <p>Alertas configuradas</p>
        </div>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h3>🔐 Seguridad</h3>
          <p>
            Configura políticas de acceso, autenticación y control de permisos
            para los usuarios del sistema.
          </p>
          <button className="primary-button small">Configurar</button>
        </div>

        <div className="settings-card">
          <h3>🔔 Notificaciones</h3>
          <p>
            Administra alertas, avisos y mensajes automáticos relacionados con
            actividades académicas y administrativas.
          </p>
          <button className="primary-button small">Configurar</button>
        </div>

        <div className="settings-card">
          <h3>👥 Usuarios y Roles</h3>
          <p>
            Gestiona permisos, perfiles y niveles de acceso para cada tipo de
            usuario dentro del sistema.
          </p>
          <button className="primary-button small">Configurar</button>
        </div>

        <div className="settings-card">
          <h3>💾 Respaldo y Mantenimiento</h3>
          <p>
            Controla copias de seguridad, integridad de datos y tareas de
            mantenimiento general del sistema.
          </p>
          <button className="primary-button small">Configurar</button>
        </div>
      </div>
    </div>
  );
}

export default ConfiguracionView;