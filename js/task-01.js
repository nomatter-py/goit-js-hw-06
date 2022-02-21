
const listElements = document.querySelectorAll(".item");

showNumberOfCategories();

showCategoriesInfo();

function showNumberOfCategories() {
    console.log(`Number of categories: ${listElements.length}`);
}

function showCategoriesInfo() {
    listElements.forEach(element => {

        let headerEl = element.querySelector("h2");
        console.log(`Category: ${headerEl.textContent}`);

        let membersListEl = element.querySelectorAll("ul li");
        console.log(`Elements: ${membersListEl.length}`);

    });
}