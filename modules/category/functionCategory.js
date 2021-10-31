function traerInformacion() {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Category/all",
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
        myTable += "<td>" + respuesta[i].description + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion() {
    let myData = {
        name: $("#name").val(),
        description: $("#description").val()
    };
    if ($("#name").val() == "" ||  $("#description").val() == "") {
        alert("Llena todos los campos");
      } else  {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Category/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
                $("#name").val(),
                $("#description").val()
            traerInformacion();
            alert("se ha guardado el dato");
            limpiarFormulario()
        }
    });
    }
}


function editarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        description: $("#description").val()

    };
    console.log(myData);
    if ($("#id").val() == "" || $("#name").val() == "" ||  $("#description").val() == "") {
        alert("Llena todos los campos");
      } else {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Category/update",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#id").val(),
                $("#name").val(),
                $("#description").val()
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
        url: "http://150.230.74.184:8080/api/Category/7",
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
    $("#description").val()
}