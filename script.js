var addToButton = document.getElementById('addToDo') ;
var toDoContainer = document.getElementById('toDoContainer') ;
var inputField = document.getElementById('inputField') ;

addToButton.onclick = function () {
    //verifier si l'input n'est pas vide
    if(inputField.value != " ") {
        //si l'input n'est pas vide , créer une paragraphe
        var paragraph = document.createElement('p') ;
    }
    //valorisé ce paragraphe avec le contenu de l'input
    paragraph.textContent = inputField.value ;

    //stylisé le paragraphe
    paragraph.classList.add('paragraph_style') ;

    //insérer le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph) ;

    //vidé l'input quand le paragraphe est ajouté
    inputField.value = " " ;

    //barré le paragraphe quand on clique dessus
    paragraph.addEventListener('click' , function () {
        paragraph.classList.add('paragraph_click') ;
    })

    //supprimer la tache quand on double clique sur la tache
    paragraph.addEventListener('dblclick' , function () {
       toDoContainer.removeChild(paragraph) ;
    })

}

