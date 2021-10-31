function traerInformacion() {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Reservation/all",
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
        myTable += "<td>" + respuesta[i].startDate + "</td>";
        myTable += "<td>" + respuesta[i].devolutionDate + "</td>";
        myTable += "<td>" + respuesta[i].status + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + respuesta[i].id + ")'>Borrar</button>";
        myTable += "</tr>";
    }
    myTable += "</table>";
    $("#resultado").append(myTable);

}

function guardarInformacion() {
    let myData = {
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val()
    };
    if ($("#startDate").val() == "" || $("#devolutionDate").val() == "" ||  $("#status").val() == "" ) {
        alert("Llena todos los campos");
      } else {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Reservation/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
                $("#startDate").val(),
                $("#devolutionDate").val(),
                $("#status").val()
            traerInformacion();
            alert("se ha guardado el dato");
            limpiarFormulario()
        }
    });
    }
}


function editarInformacion() {
    let myData = {
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val()

    };
    console.log(myData);
    if ($("#idReservation").val() == "" || $("#startDate").val() == "" || $("#devolutionDate").val() == "" ||  $("#status").val() == "" ) {
        alert("Llena todos los campos");
      } else {
    $.ajax({
        url: "http://150.230.74.184:8080/api/Reservation/update",
        type: "PUT",
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(myData),
        success: function (respuesta) {
            $("#resultado").empty();
            $("#idReservation").val(),
                $("#startDate").val(),
                $("#devolutionDate").val(),
                $("#status").val()
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
        url: "http://150.230.74.184:8080/api/Reservation/2",
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
    $("#startDate").val(),
    $("#devolutionDate").val(),
    $("#status").val()
}