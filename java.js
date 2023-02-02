const shake = ["Lifetime", "Guilty Conscience", "Frozen", "History", "Cocoon", "Morrow", "Sunday Night", "Rewind", "The Pines", "Honey"];

const liste = document.querySelector("ul");

shake.forEach(lavShakeListe);

function lavShakeListe(sang) {
  liste.innerHTML += "<li>" + sang + "</li>";
}
