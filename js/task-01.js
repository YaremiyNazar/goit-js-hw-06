const list = document.querySelectorAll("li.item")
console.log("Number of categories: ", list.length)

// const first = list[0].firstElementChild.textContent
// const firstLength =list[0].lastElementChild.childElementCount
// console.log("Category: ", first)
// console.log("Elements: ", firstLength )

// const second = list[1].firstElementChild.textContent
// const secondLength =list[1].lastElementChild.childElementCount
// console.log("Category: ", second)
// console.log("Elements: ", secondLength )

// const thirdth = list[2].firstElementChild.textContent
// const thirdthLength =list[2].lastElementChild.childElementCount
// console.log("Category: ", thirdth)
// console.log("Elements: ", thirdthLength )

const titles = list

titles.forEach((list) => {
    console.log("Category: ", list.firstElementChild.textContent);
    console.log("Elements: ", list.lastElementChild.childElementCount)
})
