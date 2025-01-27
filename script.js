document.addEventListener("DOMContentLoaded", function() {
  // Listado de nombres de los meses
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // Días por mes (sin considerar bisiestos)
  
  // Inicializa el mes y año en la interfaz
  let currentMonth = 10;  // Noviembre
  let currentYear = 2024;

  // Función para actualizar la tabla de acuerdo al mes seleccionado
  function updateMonth() {
    // Determina el número de días en el mes actual
    let daysInCurrentMonth = daysInMonth[currentMonth];
    
    // Si es febrero y es año bisiesto, corregir los días
    if (currentMonth === 1 && (currentYear % 4 === 0 && (currentYear % 100 !== 0 || currentYear % 400 === 0))) {
      daysInCurrentMonth = 29;
    }

    // Actualiza el nombre del mes
    document.getElementById("monthSelect").value = currentMonth;
    document.getElementById("year").textContent = currentYear;

    // Actualiza el encabezado con los días del mes
    const daysHeader = document.getElementById("daysHeader");
    daysHeader.innerHTML = ''; // Limpiar el encabezado
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const th = document.createElement("th");
      th.textContent = `Día ${i}`;
      daysHeader.appendChild(th);
    }

    // Limpiar las filas de asistencia actuales
    const attendanceRows = document.getElementById("attendanceRows");
    attendanceRows.innerHTML = ''; // Limpiar las filas

    // Actualizar las filas con los registros de los empleados
    // (Esto se agregará dinámicamente con JavaScript)
  }

  // Cambiar el mes cuando el usuario seleccione un mes
  document.getElementById("monthSelect").addEventListener("change", function(event) {
    currentMonth = parseInt(event.target.value);
    updateMonth(); // Actualizar la tabla con los días correctos
  });

  // Función para agregar un registro de asistencia
  const form = document.getElementById("attendanceForm");
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const motherLastName = document.getElementById("motherLastName").value;
    const rut = document.getElementById("rut").value;
    const expirationDate = document.getElementById("expirationDate").value;

    // Crear una nueva fila con los datos del empleado
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${motherLastName}</td>
      <td>${rut}</td>
      <td>${expirationDate}</td>
    `;

    // Crear las celdas para cada día del mes
    const daysInCurrentMonth = daysInMonth[currentMonth];
    for (let i = 1; i <= daysInCurrentMonth; i++) {
      const td = document.createElement("td");
      const select = document.createElement("select");
      const options = ["", "Sí", "No", "Descanso"];
      
      options.forEach(option => {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option || "Seleccionar";
        select.appendChild(opt);
      });

      td.appendChild(select);
      newRow.appendChild(td);
    }

    // Añadir la fila a la tabla
    document.getElementById("attendanceRows").appendChild(newRow);

    // Limpiar el formulario después de agregar
    form.reset();
  });

  // Función para guardar el registro en un archivo
  document.getElementById("saveButton").addEventListener("click", function() {
    const data = document.getElementById("attendanceTable").
