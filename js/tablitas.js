$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    dataType: "json",
    success: function (usuarios) {
      let tbody = $("#tablaUsuarios tbody");
      tbody.empty();

      usuarios.forEach(function (usuario) {
        let fila = `
                    <tr>
                        <td>${usuario.id}</td>
                        <td><strong>${usuario.name}</strong></td>
                        <td>${usuario.username}</td>
                        <td>${usuario.email}</td>
                        <td><a href="http://${usuario.website}" target="_blank">${usuario.website}</a></td>
                    </tr>
                `;
        tbody.append(fila);
      });

      $("#tablaUsuarios").DataTable({
        language: {
          url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json",
        },
        pageLength: 5,
        lengthMenu: [5, 10, 25, 50],
        responsive: true,
      });
    },
    error: function (xhr, status, error) {
      console.error("Error al obtener datos de la API:", error);
      alert(
        "No se pudieron cargar los datos de los usuarios. Revisa la consola.",
      );
    },
  });
});
