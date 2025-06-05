//recuperer une valeur de html:
let inpt = document.getElementById("inpt");
let bton = document.getElementById("bton");
let paragraphe = document.getElementById("paragraphe");
let lst = document.getElementById("lst");

/*bton.addEventListener('click', function()
{
   if(inpt.value.trim() === "")
     {
        paragraphe.innerHTML = "Le champ ne doit pas être vide";
        paragraphe.style.color = 'red';
     }
   else
     {
       paragraphe.textContent = " Tâche ajoutée !";
       paragraphe.style.color = 'green';
       //ajouer une liste vide
       let valeur= document.createElement("li");
       valeur.textContent = inpt.value;
       lst.appendChild(valeur);
       inpt.value ="";
     }  
})
*/   
let supprimer = document.getElementById('delete');
supprimer.style.display='none';
   inpt.addEventListener('keypress', function(event)
{
   if(event.key === "Enter")
   {
       if(inpt.value.trim() === "")
     {
        paragraphe.innerHTML = "Ce champ ne doit pas être vide";
        paragraphe.style.color = 'red';
     }
   else
     {

       paragraphe.textContent = " Tâche ajoutée !";
       paragraphe.style.color = 'green';
       //ajouer une liste vide
       let tache= document.createElement("li");
      tache.style.listStyleType='none';
      tache.style.backgroundColor='white';
       let check= document.createElement("input");
       check.type="checkbox"; 
       tache.textContent = inpt.value;
       tache.appendChild(check);
       lst.appendChild(tache);
       inpt.value ="";
     } 
    } 
})
let bod =document.querySelector("body");
bod.style.backgroundColor ='lightblue';
bod.style.textAlign='center';

