class SyllabusForm {
  private step: number;
  private datosGenerales: { nombreCurso: string; codigoCurso: string };
  private sumilla: string;

  constructor() {
    this.step = 1; // Inicia en la sección "Datos Generales"
    this.datosGenerales = { nombreCurso: "", codigoCurso: "" };
    this.sumilla = "";
  }

  // Método para avanzar al siguiente paso
  public handleNextStep(): void {
    if (this.step === 1) {
      console.log("Datos Generales completados. Avanzando a Sumilla.");
      this.step = 2;
      this.showSumillaForm();
    } else if (this.step === 2) {
      console.log("Sumilla completada. El formulario está completo.");
      this.submitForm();
    }
  }

  // Método para retroceder al paso anterior
  public handlePrevStep(): void {
    if (this.step === 2) {
      console.log("Volviendo a Datos Generales.");
      this.step = 1;
      this.showDatosGeneralesForm();
    }
  }

  // Mostrar la sección "Datos Generales"
  private showDatosGeneralesForm(): void {
    console.log("Mostrando el formulario de Datos Generales.");
    console.log(`Curso: ${this.datosGenerales.nombreCurso}, Código: ${this.datosGenerales.codigoCurso}`);
  }

  // Mostrar la sección "Sumilla"
  private showSumillaForm(): void {
    console.log("Mostrando el formulario de Sumilla.");
    console.log(`Sumilla: ${this.sumilla}`);
  }

  // Método para registrar los datos generales
  public setDatosGenerales(nombreCurso: string, codigoCurso: string): void {
    this.datosGenerales.nombreCurso = nombreCurso;
    this.datosGenerales.codigoCurso = codigoCurso;
    console.log("Datos Generales registrados.");
  }

  // Método para registrar la sumilla
  public setSumilla(sumilla: string): void {
    this.sumilla = sumilla;
    console.log("Sumilla registrada.");
  }

  // Método para enviar el formulario
  private submitForm(): void {
    console.log("Formulario enviado con éxito:");
    console.log("Datos Generales:", this.datosGenerales);
    console.log("Sumilla:", this.sumilla);
  }
}

// Crear instancia del formulario
const syllabusForm = new SyllabusForm();

// Criterios de aceptación

// 1. Dado que estoy en "Datos Generales" y quiero continuar al siguiente paso
syllabusForm.setDatosGenerales("Matemáticas Básicas", "MATH101");
syllabusForm.handleNextStep(); // Avanza al paso 2

// 2. Dado que estoy en "Sumilla" y quiero registrar la nueva sumilla
syllabusForm.setSumilla("Este curso cubre los fundamentos de las matemáticas para estudiantes de nivel inicial.");
syllabusForm.handleNextStep(); // Completa y envía el formulario

// 3. Dado que estoy en "Sumilla" y quiero retroceder al paso anterior
syllabusForm.handlePrevStep(); // Regresa a Datos Generales