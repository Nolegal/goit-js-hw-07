const categories=document.querySelector('ul#categories');
const count = categories.children.length;

console.log("Number of Categories",count);


[...categories.children].forEach((category) => {
    console.log("Category:",category.firstElementChild.textContent);
    console.log("Elements:",category.lastElementChild.children.length);
   
     
    });













// const category1=document.querySelector('.item h2').firstChild
// console.log("Category:",category1.textContent)

// const li1=document.querySelector('.item ul')
// const count2 = li1.children.length
// console.log("Elements:",count2)
// const count3=0
// const categories2=document.querySelector('ul#categories')







// const category2=document.querySelector('.item h2').nextSibling
// console.log("Category:",category2.textContent)

// const li2=document.querySelector('.item ul')
// const count3 = li2.nextSibling.length
// console.log("Elements:",count3)




// const category3=document.querySelector('.item h2').lastChild
// console.log("Category:",category3.textContent)

// const li3=document.querySelector('.item ul')
// const count4 = li2.lastChild.length
// console.log("Elements:",count3)

