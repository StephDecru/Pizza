$(function(){

  var pizza = new Array();
  pizza['P1'] = {ref:'P1', nom:'4 Fromages', ingr:'Sauce tomate, chèvre, Emmental, Fourme d’Ambert A.O.P', prix:'10€'};
  pizza['P2'] = {ref:'P2', nom:'Cannibale', ingr:'Sauce barbecue, mozzarella, poulet rôti, merguez, boulettes de boeuf assaisonnées', prix:'10€'};
  pizza['P3'] = {ref:'P3', nom:'Chick n Bacon BBQ', ingr:'Sauce barbecue, mozzarella, Poulet, Bacon', prix:'10€'};
  pizza['P4'] = {ref:'P4', nom:'Classique_Jambon', ingr:'Sauce tomate, mozzarella, Jambon', prix:'10€'};
  pizza['P5'] = {ref:'P5', nom:'Forestiere', ingr:'Crème fraîche légère, mozzarella, lardons fumés, oignons,Jambon,Champignons, Origan', prix:'10€'};
  pizza['P6'] = {ref:'P6', nom:'Hot_Bacon_BBQ', ingr:'Sauce barbecue, mozzarella, Bacon', prix:'10€'};
  pizza['P7'] = {ref:'P7', nom:'Indienne', ingr:'Crème fraîche légère,mozzarella, Poulet rôti, Champignons, Emmental', prix:'10€'};
  pizza['P8'] = {ref:'P8', nom:'Originale_Pepperoni', ingr:'Sauce tomate, mozzarella, saucisson pepperoni', prix:'10€'};
  pizza['P9'] = {ref:'P9', nom:'Peppina', ingr:'Sauce tomate, mozzarella, Champignons, oignons, poivrons mélangés,olives noires, tomates fraîches, Origan', prix:'10€'};
  pizza['P10'] = {ref:'P10', nom:'Reine', ingr:'Sauce tomate, mozzarella, jambon, Champignons', prix:'10€'};
  pizza['P11'] = {ref:'P11', nom:'savoyarde', ingr:'Crème fraîche légère, mozzarella, lardons fumés, pommes de terre sautées, Reblochon A.O.P. de Savoie, origan', prix:'10€'};
  pizza['P12'] = {ref:'P12', nom:'Steak_and_Cheese', ingr:'Sauce tomate, mozzarella, boulettes de boeuf assaisonnées, tomates fraîches, origan', prix:'10€'};

  console.table(pizza);
var container = '';
  for(var ref in pizza){
    var piz = pizza[ref];
    var ingr = piz.ingr.split(',');

    var listingr = '<ul>';
    for (var ing in ingr){
      listingr += '<li>' + ingr[ing] + '</li>'
  }
    listingr += '</ul>'
    container += '<div class="piz">'
                        + '<h3>' + piz.nom + '</h3>'
                        + '<img src="images/' + piz.ref + '.jpg" />'
                        + '<h4>' + listingr + '</h4>'
                        + '<div class="price">' + piz.prix + '</div>'
                        + '<button id="' + ref + '" type="button" name="button">ajouter</button>'
                  + '</div>'
  ;
  }
  $("#container").html(container);

/* var container = document.getElementById('container');
  container.innerHTML = ''; */
  $("#adresse, #cb").hide();//cache les éléments mentionner


  $('input:radio[name="choix1"]').change(function(){
    console.log(this);
    if (this.id == "Livraison"){$("#adresse").show();}
    else if(this.id == "Retrait"){$("#adresse").hide();}
  });


  $('input:radio[name="choix2"]').change(function(){
    if (this.id == "ligne"){$("#cb").show();}
    else if(this.id == "mag"){$("#cb").hide();}

    $("#panier1").html("Votre panier est vide")

/*  $('input:table[name="panier1"]').change(function(){
    if (this)

  })*/
  });















})
