const eventListeners = {
    handleFormSubmission() {
        // console.log("button clicked");
        // Get input values from form
        const creator = document.querySelector("#lego_creator").value;
        const name = document.querySelector("#lego_name").value;
        const shape = document.querySelector("#lego_shape").value;
        const color = document.querySelector("#lego_color").value;

        // Create an object to represent a lego
        const legoToSave = {
            creatorName: creator,
            legoName: name,
            legoShape: shape,
            legoColor: color
        }
        // console.log(legoToSave);

        // Post to API and pass new legoToSave
        data.postNewLego(legoToSave);
    }
};