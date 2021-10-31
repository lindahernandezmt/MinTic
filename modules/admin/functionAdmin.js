function traerInformacion() {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Admin/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }

    });
}

function pintarRespuesta(respuesta) {

    let myTable = "<table>";
    for (i = 0; i < respuesta.length; i++) {
        myTable += "<tr>";
        myTable += "<td>" + respuesta[i].name + "</td>";
        myTable += "<td>" + respuesta[i].email + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);

}


function guardarInformacion() {

    let myData = {
      name: $("#name").val(),
      email: $("#email").val(),
      password: $("#password").val(),
    };
  
    if ($("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "" ) {
        alert("Llena todos los campos");
      } else {
      $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        url: "http://150.230.74.184:8080/api/Admin/save",
        success: function (response) {

          $("#resultado").empty();
          $("#name").val("");
          $("#email").val("");
          $("#password").val("");
  
          traerInformacion();
          alert('SE HA GUARDADO EL ADMINISTRADOR.');
        },
        error: function (xhr, jqXHR, textStatus, errorThrown) {
          alert('Ups! Ocurrio un gran error ' + xhr.status);
        }
      });
    }
  }


function editarInformacion() {
    let myData = {
        idAdmin: $("#idAdmin").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val()
    };
    console.log(myData);
    if ($("#idAdmin").val() == "" || $("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "" ) {
        alert("Llena todos los campos");
      } else  {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Admin/update",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idAdmin").val(),
                $("#name").val(),
                $("#email").val(),
                $("#password").val()
            traerInformacion();
            alert("se ha Actualizado");
            limpiarFormulario()
        }
    });
    }
}

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    $.ajax({
        url: "http://150.230.74.184:8080/api/Admin/2",
        type: "DELETE",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha Eliminado.")
        }
    });
}

function limpiarFormulario() {
    $("#name").val(),
    $("#email").val(),
    $("#password").val()
}