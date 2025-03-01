

document.addEventListener("DOMContentLoaded", function () {
    function InputValues() {
        let inputGroups = document.querySelectorAll(".input-group");

        inputGroups.forEach((group, index) => {
            let inputs = group.querySelectorAll("input");
            let values = Array.from(inputs).map(input => input.value);
            console.log(`Row ${index + 1}:`, values);
        });
    }

    let calculate_button = document.getElementsByClassName("calculate-btn");
    let addRowBtn_button = document.getElementsByClassName("add-row");
    let scrollContainer = document.querySelector(".scroll-container");


    addRow.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("Add row is clicked");

        // Creating new elements for add row

        for (let i = 0; i < 3; i++) {
            let newInputGroup = document.createElement("div");
            newInputGroup.className = "input-group";

            let nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.placeholder = "Assignment/Exam";

            let gradeInput = document.createElement("input");
            gradeInput.type = "number";
            gradeInput.placeholder = "90";

            let weightInput = document.createElement("input");
            weightInput.type = "number";
            weightInput.placeholder = "% Weight";

            // Appending the children
            newInputGroup.appendChild(nameInput);
            newInputGroup.appendChild(gradeInput);
            newInputGroup.appendChild(weightInput);


            document.querySelector(".add-row").before(newInputGroup);

        }

        scrollContainer.scrollTop = scrollContainer.scrollHeight
    })


    calculate_button.addEventListener("click", function () {
        console.log("Button was triggered!");
        InputValues();
    })

});
