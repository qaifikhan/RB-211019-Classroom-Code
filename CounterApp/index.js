var likesCount = document.getElementById('likes-count');
var btnLikeIncrement = document.getElementById('btn-increment-like');
var btnLikeDecrement = document.getElementById('btn-decrement-like');
var btnLikeIncrement50 = document.getElementById('btn-increment-like-50');
var btnLikeDecrement50 = document.getElementById('btn-decrement-like-50');

likesCount.innerHTML = localStorage.getItem('count');

function handleOnClick(count) {
    likesCount.classList.add('likes-count-zoomed');
    setTimeout(function() {
        likesCount.classList.remove('likes-count-zoomed');
    }, 300)
    likesCount.innerHTML = parseInt(likesCount.innerHTML) + count;
    localStorage.setItem('count', likesCount.innerHTML);
}

btnLikeIncrement.onclick = function() {
    handleOnClick(1);
}

btnLikeDecrement.onclick = function() {
    handleOnClick(-1);
}

btnLikeIncrement50.onclick = function() {
    handleOnClick(50);
}

btnLikeDecrement50.onclick = function() {
    handleOnClick(-50);
}

// Abinash
// give a id to the para for eg:likes->
// declare a variable outside the onclick function->and do getelementbyid('likes')->(declaredvar.innertext=declaredvar.innerText+1;)this part should be inside the onclick

// Lajat:
// var count=parseInt(total.innerHTML);
// btnLike.onclick = function() {
//     ++count;
//   total.innerHtml = count;
//   }
//   btnDislike.onclick = function() {
//   --count;
//   total.innerHtml = count;
//   }
  

// var total = document.getElementById('para');
// total.innerHtml = count;

// Akshay:
// declare counter globaly 
// onclick increment value by 1
// btn .innerhtml=counter
// same procec on dislike btn with decrement counter

// Kolli
// 1)need to give id to the para.. 
// 2)var likesCounts= para.innerHTML + 1; (inside the onclick event) 
// 3)store the likesCounts into local storage.

// Prasoon:
// var number=document.getElementById("paragraph"); 
// var counter=0;
// inside callback function{
// 	counter++;
// 	number.textContent=counter;
		
// }

// Tapish:
// var counter = 0;
//     btnLike.onClick=function(){
// counter++;
//     }

//     btnLike.onClick=function(){
//         if( counter >0 )
// counter--;
//     }
