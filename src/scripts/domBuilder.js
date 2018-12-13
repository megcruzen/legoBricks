const domBuilder = {
    appendInputForm () {
        let inputForm = `
        <article>
        <fieldset>
        <label for="lego_creator">Creator:</label>
        <input id="lego_creator" name="lego_creator" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego_name">Creation:</label>
        <input id="lego_name" name="lego_name" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego_shape">Shape:</label>
        <input id="lego_shape" name="lego_shape" type="text" autofocus />
        </fieldset>
        <fieldset>
        <label for="lego_color">Color:</label>
        <select id="lego_color">
            <option value="1">Red</option>
            <option value="2">Green</option>
            <option value="3">Yellow</option>
            <option value="4">Blue</option>
            <option value="5">Orange</option>
            <option value="6">Black</option>
        </select>
        </article>
        <button class="btn lego_save">Save Lego Creation</button>
        `

        let displayContainer = document.querySelector("#display-container");
        displayContainer.innerHTML = inputForm;

        // How to create a button, add a class, and attach event listener
        // let newButton = document.createElement("button");
        // newButton.classList.add("btnclass");
        // newButton.addEventListener("click", eventListeners.handleFormSubmission);
        // console.log(newButton);
        // displayContainer.appendChild(newButton);

    }
};