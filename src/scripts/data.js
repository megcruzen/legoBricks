const data = {
    postNewLego (legoObject) {
        fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(legoObject)
        })
    },
    deleteLego (legoID) {
        fetch(`http://localhost:8088/legos/${legoID}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
        })
    }
}

// data.deleteLego(1);
// data.deleteLego(2);