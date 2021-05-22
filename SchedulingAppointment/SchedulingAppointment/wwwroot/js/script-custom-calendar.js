﻿$(document).ready(function () {
    
    InitializeCalendar();
});

function InitializeCalendar() {
    try {

        //Old scrip working one ...
        $('#calendar').fullCalendar({
            timezone: false,
            header: {
                left: 'prev,next,today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            selectable: true,
            editable: false,
            select: function (event) {
                onShowModal(event, null);
            }
        });

        //new script calling alert...

        //var calendarEl = document.getElementById('calendar');
        //var calendar = new FullCalendar.Calendar(calendarEl, {
        //    initialView: 'dayGridMonth',
        //    headerToolbar: {
        //        left: 'prev,next,today',
        //        center: 'title',
        //        right: 'dayGridMonth,timeGridWeek,timeGridDay'
        //    },
        //    selectable: true,
        //    editable: false,
        //    select: function (event) {
        //        onShowModal(event, null);
        //    }
        //});
        //calendar.render();

        
    }
    catch (e) {
        alert(e);
    }
}

function onShowModal(obj, isEventDetail) {
    $("#appointmentInput").modal("show");
}

function onCloseModal() {
    $("#appointmentInput").modal("hide");
}