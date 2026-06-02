function getValue(id) {
  return document.getElementById(id).value.trim();
}

function createStory() {
  const famemeb1 = getValue("famemeb1");
  const famemeb2 = getValue("famemeb2");
  const moodWord = getValue("moodWord");
  const place = getValue("place");
  const animal = getValue("animal");
  const bodyPart = getValue("bodyPart");
  const powderAnimal = getValue("powderAnimal");
  const randomThing = getValue("randomThing");
  const carBrand = getValue("carBrand");
  const activity = getValue("activity");
  const cargo = getValue("cargo");
  const phrase = getValue("phrase");

  const storyBox = document.getElementById("story");
  const resetButton = document.getElementById("resetButton");

  if (
    !famemeb1 ||
    !famemeb2 ||
    !moodWord ||
    !place ||
    !animal ||
    !bodyPart ||
    !powderAnimal ||
    !randomThing ||
    !carBrand ||
    !activity ||
    !cargo ||
    !phrase
  ) {
    storyBox.innerHTML = "<p>Du må fylle ut alle feltene først.</p>";
    storyBox.classList.remove("hidden");
    resetButton.classList.add("hidden");
    return;
  }

  storyBox.innerHTML = `
    <p>Snart skulle Matt, Caroline, Amanda og Matilda til Australia, og <strong>${famemeb1}</strong> hadde klart å gjøre avreisen mer kaotisk enn nødvendig.</p>

    <p>Caroline syntes selvfølgelig det var trist at <strong>${famemeb1}</strong> måtte gjøre ting vanskelig. Hun begynte å bli ganske <strong>${moodWord}</strong>.</p>

    <p><strong>${capitalizeFirstLetter(place)}</strong> satt Ragnar og prøvde å late som han hadde kontroll på situasjonen. Han hadde aldri skutt noen før, men denne gangen var det faktisk ikke langt unna at han fyrte av et varselskudd mot <strong>${famemeb1}</strong>, fly forbanna.</p>

    <p>Det hjalp heller ikke at alle mente at <strong>${famemeb2}</strong> måtte sendes avgårde, eller at <strong>${randomThing}</strong> plutselig ble behandlet som om den var viktig for reisen.</p>

    <p>Så dukket Nils opp med lastebilen, med planet fullt av <strong>${cargo}</strong>, og da ble det enda verre. Like bak ham sto Vibeke og Joakim i <strong>${carBrand}</strong>en og tuta. Joakim elsket <strong>${carBrand}</strong>, så det var tydeligvis helt naturlig.</p>

    <p>Vibeke var bak rattet. Joakim kunne ikke kjøre, fordi han inntok tørket <strong>${bodyPart}</strong> av <strong>${powderAnimal}</strong> om dagen.</p>

    <p>Nils kjente egentlig Amanda og Matilda bare så vidt, men mente likevel bestemt at de måtte lære seg å <strong>${activity}</strong> før de dro, fordi det visstnok var helt avgjørende å kunne i Australia.</p>

    <p>Nils fikk fortsatt ikke snudd og ropte ut: «<strong>${phrase}</strong>»</p>
  `;

  storyBox.classList.remove("hidden");
  resetButton.classList.remove("hidden");
}

function resetGame() {
  const inputs = document.querySelectorAll("input");

  inputs.forEach(function(input) {
    input.value = "";
  });

  document.getElementById("story").classList.add("hidden");
  document.getElementById("resetButton").classList.add("hidden");
}

function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
