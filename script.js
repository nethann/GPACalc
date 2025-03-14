document.addEventListener("DOMContentLoaded", function () {
    function InputValues() {
        let inputGroups = document.querySelectorAll(".input-group");
        let inputData = [];
        let totalWeightedGrade = 0;
        let totalWeight = 0;

        inputGroups.forEach((group, index) => {
            let inputs = group.querySelectorAll("input");

            let assignment = inputs[0].value;
            let grade = parseFloat(inputs[1].value);
            let weight = parseFloat(inputs[2].value) / 100;

            if (assignment === "" || isNaN(grade) || isNaN(weight) || weight <= 0) {
                return;
            }


        });

        console.log("Collected Data:", inputData);

        let gpa = totalWeight > 0 ? (totalWeightedGrade / totalWeight).toFixed(2) : "N/A";

        let button_container = document.querySelector(".button-container");

        let grade_value = document.querySelector(".grade_value");
        if (!grade_value) {
            grade_value = document.createElement("p");
            grade_value.className = "grade_value";
            button_container.appendChild(grade_value);
        }



        // Update GPA display
        grade_value.textContent = `Calculated GPA: ${gpa}`;
    }

    let calculate_button = document.querySelector(".calculate-btn");
    let addRow_button = document.querySelector(".add-row");
    let scrollContainer = document.querySelector(".scroll-container");

    if (addRow_button) {
        addRow_button.addEventListener("click", function (event) {

            for (let i = 0; i < 3; i++) {
                event.preventDefault();
                console.log("Add row is clicked");

                let newInputGroup = document.createElement("div");
                newInputGroup.className = "input-group";

                let nameInput = document.createElement("input");
                nameInput.type = "text";
                nameInput.placeholder = "";

                let gradeInput = document.createElement("input");
                gradeInput.type = "number";
                gradeInput.placeholder = "";
                gradeInput.min = "0";
                gradeInput.max = "100";

                let weightInput = document.createElement("input");
                weightInput.type = "number";
                weightInput.placeholder = "";
                weightInput.min = "0";
                weightInput.max = "100";

                newInputGroup.appendChild(nameInput);
                newInputGroup.appendChild(gradeInput);
                newInputGroup.appendChild(weightInput);
                scrollContainer.appendChild(newInputGroup);

                scrollContainer.scrollTop = scrollContainer.scrollHeight;
            }

        });
    } else {
        console.error("Error: '.add-row' button was not found in the DOM.");
    }

    if (calculate_button) {
        calculate_button.addEventListener("click", function () {
            console.log("Calculate button was triggered!");
            InputValues();
        });
    } else {
        console.error("Error: '.calculate-btn' button was not found in the DOM.");
    }
});
