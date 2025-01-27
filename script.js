document.getElementById("attendanceForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que el formulario se envíe y recargue la página

  // Obtener los valores de los campos
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const motherLastName = document.getElementById("motherLastName").value;
  const rut = document.getElementById("rut").value;
  const extraHoliday = document.getElementById("extraHoliday").value;
  const extraNormal = document.getElementById("extraNormal").value;

  // Crear una nueva fila de tabla
  const table = document.getElementById("attendanceTable").getElementsByTagName("tbody")[0];
  const newRow = table.insertRow();

  // Insertar celdas con los datos en cada fila
  newRow.insertCell(0).textContent = firstName;
  newRow.insertCell(1).textContent = lastName;
  newRow.insertCell(2).textContent = motherLastName;
  newRow.insertCell(3).textContent = rut;
  newRow.insertCell(4).textContent = extraHoliday;
  newRow.insertCell(5).textContent = extraNormal;

  // Limpiar el formulario después de agregar el registro
  document.getElementById("attendanceForm").reset();
});
