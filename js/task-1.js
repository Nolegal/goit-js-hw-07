const categories=document.querySelector('ul#categories')
const count = categories.children.length

console.log("Number of Categories",count)



[...categories.children].forEach((category) => {
    console.log(category.firstElementChild.textContent)
    console.log(category.lastElementChild.children.length)
   
     
    });






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

