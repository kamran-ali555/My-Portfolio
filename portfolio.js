// const switchBtns = document.querySelectorAll(".switch-btn")
// const homeflex = document.querySelectorAll(".home-flex")

// switchBtns.forEach(function(switchs, index){
//     switchs.addEventListener('click', function(){
//         switchBtns.forEach(function(op, ind){
//             if(ind === index){
//                 // op.style.color = 'green'
//                 homeflex[ind].style.display = 'block'
//             }else{
//                 //  op.style.color = 'black'
//                 homeflex[ind].style.display = 'none'
//             }
//         })
//     })
// })

const homeOne = document.getElementById("home-one")
const homeTwo = document.getElementById("home-two")
const switchOne = document.getElementById("switch-btn-one")
const switchTwo = document.getElementById("switch-btn-two")

function btnone(){
    console.log(homeTwo.style.left)
    if (homeTwo.style.left === "-1440px") {
        homeTwo.style.left = "0px"
    }else{
    homeOne.style.display ="none"
    // homeTwo.style.left = "0px"
}
    // homeTwo.style.left = "0px",
    // homeOne.style.display ="none"
}
// function btntwo(){
//     homeTwo.style.left = "0px",
//     homeOne.style.display ="none"
// }

switchOne.addEventListener("click",btnone) 

// switchTwo.addEventListener("click", btntwo)
