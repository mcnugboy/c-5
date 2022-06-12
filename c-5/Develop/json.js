function workCalander() {
    $(document).ready(function (){
        let time = moment().format('dddd, MMMM Do, YYYY h:mm a');
        let workHours = ["7 a.m.", "8 a.m.", "9 a.m.", "10 a.m.", "11 a.m.", "12 a.m.", "1 p.m.", "2 p.m.", "3 p.m.", "4 p.m.", "5 p.m.", "6 p.m.", "7 p.m."];

        function todayIs() {
            let Current = $("#currentDay").text(time);
            return Current;
        }
        todayIs();

        for (i = 0; i < workHours.length; i++) {
            let row = $("<div>").addClass("row");
            let column = $("<text-area>").text(workHours[i]).addClass("hour");
            let inputClo = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
            saveBtn = $('<button>').addClass("btn-primary saveBtn").text("save");
            $(row).append(column).append(inputClo).append(saveBtn)
            $("#timeblock").append(row);
        }

        
    })
}