function createStory() {
    let adjective1 = document.getElementById("adjective1").value;
    let noun1 = document.getElementById("noun1").value;
    let adjective2 = document.getElementById("adjective2").value;
    let verb1 = document.getElementById("verb1").value;
    let adjective3 = document.getElementById("adjective3").value;

    let story = `
        Today I went to a ${adjective1} fashion show<br>
        In an exhibit, I saw a ${noun1}<br>
        ${noun1} was ${adjective2} and ${verb1}<br>
        I was ${adjective3}!
    `;

    document.getElementById("result").innerHTML = story;
}