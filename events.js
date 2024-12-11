// const options = document.querySelectorAll('.option')
// const sections = document.querySelectorAll('.section')

// // Sections
// // index = 0, 1, 2, 3
// options.forEach(function(option, index){
//     option.addEventListener('click', function(){
//         options.forEach(function(op, ind){
//             if(ind === index){
                // op.style.color = 'green'
//                 sections[ind].style.display = 'block'
//             }else{
//                  op.style.color = 'black'
//                  sections[ind].style.display = 'none'
//             }
//         })
//     })
// })

const bar = document.getElementById('bar')
const cross = document.getElementById('cross')
const unItem = document.getElementById("unItems")

function clickBar(){
    console.log(unItem.style.top)
    if(unItem.style.top==='0px'){
        unItem.style.top = '-500px'
    }else{
        unItem.style.top = '0px'
    }
}

bar.addEventListener("click", clickBar)


