const numberOfCategories = document.getElementById('categories');
const childrenCount = numberOfCategories.children.length;
console.log('Number of categories: ' + childrenCount);

const items = numberOfCategories.querySelectorAll('.item');
items.forEach(el => {
    const itemTitle = el.firstElementChild;
    console.log(`Category: ${itemTitle.textContent} \n Elements: ${itemTitle.nextElementSibling.children.length}`);
})