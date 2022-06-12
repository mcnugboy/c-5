function workCalendar() {
    $(document).ready(function () {
        let time = moment().format('dddd, MMMM Do, YYYY h:mm a');
        let workHours = ["7 a.m.", "8 a.m.", "9 a.m.", "10 a.m.", "11 a.m.", "12 a.m.", "1 p.m.","2 p.m.", "3 p.m.", "4 p.m.", "5 p.m.", "6 p.m.", "7 p.m."];

        function todayIs() {
            let Current = $("#currentDay").text(time);
            return Current;
        }
        todayIs();

        

        for (i = 0; i < workHours.length; i++) {
            let row = $("<div>").addClass("row");
            let column = $("<text-area>").text(workHours[i]).addClass("hour");
            let inputClo = $("<input>").attr("placeholder", "Enter note here").addClass("toDo-input time-block");
            saveBtn = $("<button>").addClass("btn btn-primary saveBtn").text("save");
            $(row).append(column).append(inputClo).append(saveBtn);
            $("#timeblock").append(row);
        }

        function addInput() {
            let idInput = document.getElementsByClassName("toDo-input");
            let length = idInput.length;
            for (i = 0; i < length; i++) {
                idInput[i].id = "input-field-" + (i + 1);
            }
        };
        addInput();

        function saveId() {
            let saveB = document.getElementsByClassName("saveBtn");
            let length = saveB.length;
            for (i = 0; i < length; i++) {
                saveB[i].id = "saveBtn-Id-" + (i + 1);
            }
        };
        saveId();

        
        let saveButton1 = $("#saveBtn-Id-1");
        let saveButton2 = $("#saveBtn-Id-2");
        let saveButton3 = $("#saveBtn-Id-3");
        let saveButton4 = $("#saveBtn-Id-4");
        let saveButton5 = $("#saveBtn-Id-5");
        let saveButton6 = $("#saveBtn-Id-6");
        let saveButton7 = $("#saveBtn-Id-7");
        let saveButton8 = $("#saveBtn-Id-8");
        let saveButton9 = $("#saveBtn-Id-9");
        let saveButton10 = $("#saveBtn-Id-10");
        let saveButton11 = $("#saveBtn-Id-11");
        let saveButton12 = $("#saveBtn-Id-12");

        let input1 = $("#input-field-1");
        let input2 = $("#input-field-2");
        let input3 = $("#input-field-3");
        let input4 = $("#input-field-4");
        let input5 = $("#input-field-5");
        let input6 = $("#input-field-6");
        let input7 = $("#input-field-7");
        let input8 = $("#input-field-8");
        let input9 = $("#input-field-9");
        let input10 = $("#input-field-10");
        let input11 = $("#input-field-11");
        let input12 = $("#input-field-12");
        



        $(saveButton1).on("click", function (event) {
            event.preventDefault();
            let input1 = $("#input-field-1").val().trim();
            localStorage.setItem("toDo1", (input1));
        });
        let saveInput1 = (localStorage.getItem("toDo1"));
        input1.val(saveInput1);

        $(saveButton2).on("click", function (event) {
            event.preventDefault();
            let input2 = $("#input-field-2").val().trim();
            localStorage.setItem("toDo2", (input2));
        });
        let saveInput2 = (localStorage.getItem("toDo2"));
        input2.val(saveInput2);

        $(saveButton3).on("click", function (event) {
            event.preventDefault();
            let input3 = $("#input-field-3").val().trim();
            localStorage.setItem("toDo3", (input3));
        });
        let saveInput3 = (localStorage.getItem("toDo3"));
        input3.val(saveInput3);

        $(saveButton4).on("click", function (event) {
            event.preventDefault();
            let input4 = $("#input-field-4").val().trim();
            localStorage.setItem("toDo4", (input4));
        });
        let saveInput4 = (localStorage.getItem("toDo4"));
        input4.val(saveInput4);

        $(saveButton5).on("click", function (event) {
            event.preventDefault();
            let input5 = $("#input-field-5").val().trim();
            localStorage.setItem("toDo5", (input5));
        });
        let saveInput5 = (localStorage.getItem("toDo5"));
        input5.val(saveInput5);

        $(saveButton6).on("click", function (event) {
            event.preventDefault();
            let input6 = $("#input-field-6").val().trim();
            localStorage.setItem("toDo6", (input6));
        });
        let saveInput6 = (localStorage.getItem("toDo6"));
        input6.val(saveInput6);

        $(saveButton7).on("click", function (event) {
            event.preventDefault();
            let input7 = $("#input-field-7").val().trim();
            localStorage.setItem("toDo7", (input7));
        });
        let saveInput7 = (localStorage.getItem("toDo7"));
        input7.val(saveInput7);

        $(saveButton8).on("click", function (event) {
            event.preventDefault();
            let input8 = $("#input-field-8").val().trim();
            localStorage.setItem("toDo8", (input8));
        });
        let saveInput8 = (localStorage.getItem("toDo8"));
        input8.val(saveInput8);

        $(saveButton9).on("click", function (event) {
            event.preventDefault();
            let input9 = $("#input-field-9").val().trim();
            localStorage.setItem("toDo9", (input9));
        });
        let saveInput9 = (localStorage.getItem("toDo9"));
        input9.val(saveInput9);

        $(saveButton10).on("click", function (event) {
            event.preventDefault();
            let input10 = $("#input-field-10").val().trim();
            localStorage.setItem("toDo10", (input10));
        });
        let saveInput10 = (localStorage.getItem("toDo10"));
        input10.val(saveInput10);

        $(saveButton11).on("click", function (event) {
            event.preventDefault();
            let input11 = $("#input-field-11").val().trim();
            localStorage.setItem("toDo11", (input11));
        });
        let saveInput11 = (localStorage.getItem("toDo11"));
        input11.val(saveInput11);

        $(saveButton12).on("click", function (event) {
            event.preventDefault();
            let input12 = $("#input-field-12").val().trim();
            localStorage.setItem("toDo12", (input12));
        });
        let saveInput12 = (localStorage.getItem("toDo12"));
        input12.val(saveInput12);


        let today = new Date().getHours();
        if (today > 6) {
            $("#input-field-0").addClass("past");
        }else if (today >= 6 && today < 7) {
            $("#input-field-0").addClass("present");
        }else if (today < 6) {
            $("#input-field-0").addClass("future");
        }

       
        if (today > 7) {
            $("#input-field-1").addClass("past");
        }else if (today >= 7 && today < 8) {
            $("#input-field-1").addClass("present");
        }else if (today < 7) {
            $("#input-field-1").addClass("future");
        }

        if (today > 8) {
            $("#input-field-2").addClass("past");
        }else if (today >= 8 && today < 9) {
            $("#input-field-2").addClass("present");
        }else if (today < 8) {
            $("#input-field-2").addClass("future");
        }

        if (today > 9) {
            $("#input-field-3").addClass("past");
        }else if (today >= 9 && today < 10) {
            $("#input-field-3").addClass("present");
        }else if (today < 9) {
            $("#input-field-3").addClass("future");
        }
        
        if (today > 10) {
            $("#input-field-4").addClass("past");
        }else if (today >= 10 && today < 11) {
            $("#input-field-4").addClass("present");
        }else if (today < 10) {
            $("#input-field-4").addClass("future");
        }

        if (today > 11) {
            $("#input-field-5").addClass("past");
        }else if (today >= 11 && today < 12) {
            $("#input-field-5").addClass("present");
        }else if (today < 11) {
            $("#input-field-5").addClass("future");
        }

        if (today > 12) {
            $("#input-field-6").addClass("past");
        }else if (today >= 12 && today < 13) {
            $("#input-field-6").addClass("present");
        }else if (today < 12) {
            $("#input-field-6").addClass("future");
        }

        if (today > 13) {
            $("#input-field-7").addClass("past");
        }else if (today >= 13 && today < 14) {
            $("#input-field-7").addClass("present");
        }else if (today < 13) {
            $("#input-field-7").addClass("future");
        }

        if (today > 14) {
            $("#input-field-8").addClass("past");
        }else if (today >= 14 && today < 15) {
            $("#input-field-8").addClass("present");
        }else if (today < 14) {
            $("#input-field-8").addClass("future");
        }
        
        if (today > 15) {
            $("#input-field-9").addClass("past");
        }else if (today >= 15 && today < 16) {
            $("#input-field-9").addClass("present");
        }else if (today < 15) {
            $("#input-field-9").addClass("future");
        }

        if (today > 16) {
            $("#input-field-10").addClass("past");
        }else if (today >= 16 && today < 17) {
            $("#input-field-10").addClass("present");
        }else if (today < 16) {
            $("#input-field-10").addClass("future");
        }

        if (today > 17) {
            $("#input-field-11").addClass("past");
        }else if (today >= 17 && today < 18) {
            $("#input-field-11").addClass("present");
        }else if (today < 17) {
            $("#input-field-11").addClass("future");
        }

        if (today > 18) {
            $("#input-field-12").addClass("past");
        }else if (today >= 18 && today < 19) {
            $("#input-field-12").addClass("present");
        }else if (today < 18) {
            $("#input-field-12").addClass("future");
        }

        if (today > 19) {
            $("#input-field-13").addClass("past");
        }else if (today >= 19 && today < 20) {
            $("#input-field-13").addClass("present");
        }else if (today < 19) {
            $("#input-field-13").addClass("future");
        }

        if (today > 20) {
            $("#input-field-14").addClass("past");
        }else if (today >= 20 && today < 21) {
            $("#input-field-14").addClass("present");
        }else if (today < 20) {
            $("#input-field-14").addClass("future");
        }

        if (today > 21) {
            $("#input-field-15").addClass("past");
        }else if (today >= 21 && today < 22) {
            $("#input-field-15").addClass("present");
        }else if (today < 21) {
            $("#input-field-15").addClass("future");
        }
    
    });
};
workCalendar();