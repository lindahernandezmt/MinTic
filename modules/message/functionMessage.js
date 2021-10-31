function traerInformacion() {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Message/all",
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
        myTable += "<td>" + respuesta[i].messageText + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion() {
    let myData = {
        messageText: $("#messageText").val()
    };
    if ($("#messageText").val() == "" ) {
        alert("Llena todos los campos");
      } else {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Message/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#messageText").val()
            traerInformacion();
            alert("se ha guardado el dato");
            limpiarFormulario()
        }
    });
    }
}


function editarInformacion() {
    let myData = {
        idMessage: $("#idMessage").val(),
        messageText: $("#messageText").val()

    };
    console.log(myData);
    if ($("idMessage").val() == ""  || $("#messageText").val() == "" ) {
        alert("Llena todos los campos");
      } else {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Message/update",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idMessage").val(),
            $("#messageText").val()
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
        url: "http://150.230.74.184:8080/api/Message/2",
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
    $("#messagetext").val()
}