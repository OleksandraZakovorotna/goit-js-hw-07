const categoryCollection = document.querySelectorAll(".item");
console.log(`Number of categorses: ${categoryCollection.length}`);
// console.log(document.querySelectorAll(".item"));


const categoriesEl = document.querySelector("#categories");
console.log(`Category: ${categoriesEl.children[0].querySelector("h2").textContent}`);
console.log(`Elements: ${categoriesEl.children[0].querySelectorAll("li").length}`);

console.log(`Category: ${categoriesEl.children[1].querySelector("h2").textContent}`);
console.log(`Elements: ${categoriesEl.children[1].querySelectorAll("li").length}`);

console.log(`Category: ${categoriesEl.children[2].querySelector("h2").textContent}`);
console.log(`Elements: ${categoriesEl.children[2].querySelectorAll("li").length}`);


categoryCollection.forEach( i => {
    console.log(`Category: ${i.querySelector("h2").textContent}`);
    console.log(`Elements: ${i.querySelectorAll("li").length}`);
})