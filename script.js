

document.addEventListener("DOMContentLoaded", function () {
    function InputValues() {
        let inputGroups = document.querySelectorAll(".input-group");

        let inputData = [];

        inputGroups.forEach((group, index) => {
            let inputs = group.querySelectorAll("input");

            let rowData = {
                index: index + 1,
                assignment: inputs[0].value, 
                grade: inputs[1].value, 
                weight: inputs[2].value
            }

            inputData.push(rowData)
        });

        console.log(inputData)

        let button_container = document.querySelector(".button-container");

        let grade_value = document.createElement("p");
        grade_value.className = "grade_value";
        grade_value.textContent = "Button triggered";

        button_container.appendChild(grade_value);
    }

    let calculate_button = document.querySelector(".calculate-btn");
    let addRow_button = document.querySelector(".add-row");
    let scrollContainer = document.querySelector(".scroll-container");

    if (addRow_button) {
        addRow_button.addEventListener("click", function (event) {
            event.preventDefault();
            console.log("Add row is clicked");

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

                newInputGroup.appendChild(nameInput);
                newInputGroup.appendChild(gradeInput);
                newInputGroup.appendChild(weightInput);


                scrollContainer.appendChild(newInputGroup);

            }

            scrollContainer.scrollTop = scrollContainer.scrollHeight;
        })

    } else {
        console.error("Error: '.add-row' button was not found in the DOM.")
    }


    if (calculate_button) {
        calculate_button.addEventListener("click", function () {
            console.log("Button was triggered!");
            InputValues();
        })
    } else {
        console.error("Error: '.calculate-btn' button was not found in the DOM.")
    }

});
