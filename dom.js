
var head1 = document.querySelector('#one');
var head2 = document.querySelector('#two');
var head3 = document.querySelector('#three');
var head4 = document.querySelector('#four');
var head5 = document.querySelector('#five');
var head6 = document.querySelector('#six');
var head7 = document.querySelector('#seven');
var head8 = document.querySelector('#eight');
var head9 = document.querySelector('#nine');
var button = document.querySelector('.btn');
var count_x=0,count_0=0;
button.addEventListener("click",function(){
  nullify();
})

head1.addEventListener("click",function(){
  if(head1.textContent==" "){
  head1.textContent = "X";
  count_x++;}
  else if (head1.textContent=="X"){
  head1.textContent = "0";
  count_0++; }
  else {
  head1.textContent = " ";}
  head1.style.color = 'black';
  console.log(head1.textContent);
})

head2.addEventListener("click",function(){
  if(head2.textContent==" "){
  head2.textContent = "X";
  count_x++;}
  else if (head2.textContent=="X"){
  head2.textContent = "0";}
  else {
  head2.textContent = " ";}
  head2.style.color = 'black';

})

head3.addEventListener("click",function(){
  if(head3.textContent==" "){
  head3.textContent = "X";
  count_x++;}
  else if (head3.textContent=="X"){
  head3.textContent = "0";
  count_0++;}
  else {
  head3.textContent = " ";}
  head3.style.color = 'black';

})

head4.addEventListener("click",function(){
  if(head4.textContent==" "){
  head4.textContent = "X";
  count_x++;}
  else if (head4.textContent=="X"){
  head4.textContent="0";count_0++;}
  else {
  head4.textContent = " ";}
  head4.style.color = 'black';

})

head5.addEventListener("click",function(){
  if(head5.textContent==" "){
  head5.textContent = "X";
  count_x++;}
  else if (head5.textContent=="X"){
  head5.textContent = "0";
  count_0++;}
  else {
  head5.textContent = " ";}
  head5.style.color = 'black';

})

head6.addEventListener("click",function(){
  if(head6.textContent==" "){
  head6.textContent = "X";
  count_x++;}
  else if (head6.textContent=="X"){
  head6.textContent = "0";
  count_0++;}
  else{
  head6.textContent = " ";}
  head6.style.color = 'black';
})

head7.addEventListener("click",function(){
  if(head7.textContent==" "){
  head7.textContent = "X";
  count_x++;}
  else if (head7.textContent=="X"){
  head7.textContent = "0";
  count_0++;}
  else {
  head7.textContent = " ";}
  head7.style.color = 'black';
})

head8.addEventListener("click",function(){
  if(head8.textContent==" "){
  head8.textContent = "X";
  count_x++;}
  else if (head8.textContent=="X"){
  head8.textContent = "0";
  count_0++;
  }
  else {
  head8.textContent = " ";}
  head8.style.color = 'black';

})

head9.addEventListener("click",function(){
  if(head9.textContent==" "){
  head9.textContent = "X";
  count_x++;}
  else if (head9.textContent=="X"){
  head9.textContent = "0";
  count_0++;}
  else {
  head9.textContent = " ";}
  head9.style.color = 'black';

})

function nullify(){
  head1.textContent = " ";
  head2.textContent = " ";
  head3.textContent = " ";
  head4.textContent = " ";
  head5.textContent = " ";
  head6.textContent = " ";
  head7.textContent = " ";
  head8.textContent = " ";
  head9.textContent = " ";
}
