//recuperer une valeur de html:
let inpt = document.getElementById("inpt");
let bton = document.getElementById("bton");
let paragraphe = document.getElementById("paragraphe");
let lst = document.getElementById("lst");
//clic du bouton est un evennement:
/*bton.addEventListener('click', function()
{
   if(inpt.value.trim() === "")
     {
        paragraphe.innerHTML = "Ce champs ne peut etre vide";
        paragraphe.style.color = 'red';
     }
   else
     {
       paragraphe.textContent = "Element bien saisi";
       paragraphe.style.color = 'green';
       //ajouer une liste vide
       let valeur= document.createElement("li");
       valeur.textContent = inpt.value;
       lst.appendChild(valeur);
       inpt.value ="";
     }  
})
     */

   inpt.addEventListener('keypress', function(event)
{
   if(event.key === "enter")
   {
       if(inpt.value.trim() === "")
     {
        paragraphe.innerHTML = "Ce champs ne peut etre vide";
        paragraphe.style.color = 'red';
     }
   else
     {

       paragraphe.textContent = "Element bien saisi";
       paragraphe.style.color = 'green';
       //ajouer une liste vide
       let valeur= document.createElement("li");
       valeur.textContent = inpt.value;
       lst.appendChild(valeur);
       inpt.value ="";
     } 
    } 
})

