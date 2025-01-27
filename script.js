document.addEventListener("DOMContentLoaded", function() {
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const currentMonth = 10; // Noviembre
  const daysInMonth = 30; // Noviembre tiene 30 días

  // Muestra el nombre del mes
  document.getElementById("monthName").textContent = `Noviembre 2024`;

  // Crear los encabezados para los días del mes
  const daysHeader = document.getElementById("daysHeader");
  for (let i = 1; i <= daysInMonth; i++) {
    const th = document.createElement("th");
    th.textContent = `Día ${i}`;
    daysHeader.appendChild(th);
  }

  // Crear la fila de ejemplo de registro
  const attendanceRows = document.getElementById("attendanceRows");
  const form = document.getElementById("attendanceForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const motherLastName = document.getElementById("motherLastName").value;
    const rut = document.getElementById("rut").value;
    const expirationDate = document.getElementById("expirationDate").value;

    // Crear una nueva fila en la tabla de asistencia
    const newRow = document.createElement("tr");

    // Agregar los datos generales del empleado
    newRow.innerHTML = `
      <td>${firstName}</td>
      <td>${lastName}</td>
      <td>${motherLastName}</td>
      <td>${rut}</td>
      <td>${expirationDate}</td>
    `;

    // Crear las celdas para cada día del mes
    for (let i = 1; i <= daysInMonth; i++) {
      const td = document.createElement("td");
      const select = document.createElement("select");

      // Crear opciones para el menú desplegable
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

    // Agregar la fila a la tabla
    attendanceRows.appendChild(newRow);

    // Limpiar el formulario después de agregar
    form.reset();
  });

  // Función para guardar los registros
  document.getElementById("saveButton").addEventListener("click", function() {
    const data = document.getElementById("attendanceTable").outerHTML;
    const blob = new Blob([data], { type: "application/octet-stream" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "registro_asistencia_noviembre_2024.html";
    link.click();
  });

  // Función para imprimir el registro
  document.getElementById("printButton").addEventListener("click", function() {
    window.print();
  });
});
