function traerInformacion() {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Client/all",
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
        myTable += "<td>" + respuesta[i].age + "</td>";
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
        age: $("#age").val()
    };
    if ($("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "" || $("#age").val() == "") {
        alert("Llena todos los campos");
      } else  {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Client/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
                $("#name").val(),
                $("#email").val(),
                $("#password").val(),
                $("#age").val()
            traerInformacion();
            alert("se ha guardado el dato");
            limpiarFormulario()
        }
    });

    }
}


function editarInformacion() {
    let myData = {
        idClient: $("#idClient").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        password: $("#password").val(),
        age: $("#age").val()
    };
    console.log(myData);
    if ($("#idClient").val() == "" || $("#name").val() == "" || $("#email").val() == "" || $("#password").val() == "" || $("#age").val() == "") {
        alert("Llena todos los campos");
      } else  {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Client/update",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idClient").val(),
                $("#name").val(),
                $("#email").val(),
                $("#password").val(),
                $("#age").val()
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
        url: "http://150.230.74.184:8080/api/Client/6",
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
    $("#password").val(),
    $("#age").val()
}