//Hämta Sökfunktionens inmatings element
const SearchInput = document.getElementById("search-input");

//hämta alla inläggets element
const postElements = document.querySelectorAll(".post-box");

//Funktion för att filtrera inläggen baserat på sökfältets inmatning
function filterPosts(searchTerm) {
  //konvertera söktermen till lowercase för case-insensitive sökning
  const lowercaseSearchTerm = searchTerm.toLowerCase();

  //Loopa igenom varje inläggs element
  postElements.forEach((postElement) => {
    //Hämta inläggets titel och konvertera till lowercase
    const postTitle = postElement
      .querySelector(".post-title")
      .textContent.toLowerCase();

    //Kontrollera om inläggets titel innehåller söktermen
    if (postTitle.includes(lowercaseSearchTerm)) {
      //visa inläggets element om söktermen matchar'{
      postElement.style.display = "block";
    } else {
      //göm inläggets element om söktermen inte matchar
      postElement.style.display = "none";
    }
  });
}
// Lägger till event listener till sökfältets inmatning.
SearchInput.addEventListener("input", (event) => {
  //hämta söktermen från sökfältet
  const searchTerm = event.target.value;

  //Filtrera och visa inläggen baserat på söktermen
  filterPosts(searchTerm);
});
