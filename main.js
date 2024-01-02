const bold_btn = document.getElementById('bold_btn')
const italic_btn = document.getElementById('italic_btn')
const underline_btn = document.getElementById('underline_btn')
const text_left= document.getElementById('text_left')
const text_center = document.getElementById('text_center')
const text_right = document.getElementById('text_right')
const text_default = document.getElementById('text_default')
const clipboard = document.getElementById('clipboard')
const text_box = document.getElementById('text_box')
const color_picker = document.getElementById('color_picker')


bold_btn.addEventListener('click', function(){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('bold');
    bold_btn.classList.toggle('clicked_btn')
   }
})

italic_btn.addEventListener('click', function(){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('italic');
    italic_btn.classList.toggle('clicked_btn')
   }
})

underline_btn.addEventListener('click', function(){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('underline');
    underline_btn.classList.toggle('clicked_btn')
   }
})



text_center.addEventListener('click', function(e){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('text-center');
    text_center.classList.toggle('clicked_btn')
   }
})
text_right.addEventListener('click', function(e){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('text-right');
    text_right.classList.toggle('clicked_btn')
   }
})
text_default.addEventListener('click', function(e){
   if(text_box.value == ''){
    alert("Write something!")
   }else{
    text_box.classList.toggle('text-default');
    text_default.classList.toggle('clicked_btn')
   }
})


// Color picker


color_picker.addEventListener('input', function() {
    // Get the selected color value
    var selectedColor = color_picker.value;
    text_box.style.color = selectedColor;
});

