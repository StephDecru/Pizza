// commentaire 1 ligne

/*
commentaire sur plusieur lignes

*/

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

var container = document.getElementById('container');
container.innerHTML = '';

for(var ref in pizza){
  var piz = pizza[ref];
  var ingr = piz.ingr.split(',');
  console.info(ingr);
  var listingr = '<ul>';
  for (var ing in ingr){
    listingr += '<li>' + ingr[ing] + '</li>'
}
  listingr += '</ul>'
  container.innerHTML += '<div class="piz">'
                      + '<h3>' + piz.nom + '</h3>'
                      + '<img src="images/' + piz.ref + '.jpg" />'
                      + '<h4>' + listingr + '</h4>'
                      + '<div class="price">' + piz.prix + '</div>'
                      + '<button id="' + ref + '" type="button" name="button">ajouter</button>'
                      ;
}






var panier = document.getElementById('panier');
panier.innerHTML = '<fieldset>  <legend>Panier</legend> Votre panier est vide </fieldset>';


var livraison = document.getElementById('Livraison');
var adresse = document.getElementById('adresse');
var retrait = document.getElementById('Retrait');
var cb = document.getElementById('cb');
var ligne = document.getElementById('ligne');
var adresse = document.getElementById('adresse');

document.getElementById('adresse').style.display='none';
function adr(){
  document.getElementById('adresse').style.display='block';
}
document.getElementById('Livraison').onclick = function () {adr();}

function mag(){
  document.getElementById('adresse').style.display='none';
}
document.getElementById('Retrait').onclick = function () {mag();}



document.getElementById('cb').style.display='none';
function lig(){
  document.getElementById('cb').style.display='block';
}
document.getElementById('ligne').onclick = function () {lig();}

function maga(){
  document.getElementById('cb').style.display='none';
}
document.getElementById('mag').onclick = function () {maga();}




/*

if (ligne.innerHTML == 0) {
  cb.innerHTML = '';
}*/

/*<div class="piz">
  <h3>4 fromages</h3>
  <img src="images/4_Fromages.jpg" alt="">
  <h4>Sauce tomate</h4>
  <h4> mozzarella</h4>
  <h4>chèvre</h4>
  <h4>Emmental</h4>
  <h4>Fourme d’Ambert A.O.P</h4>
  <div class="price">10€
    <button id="P1" type="button" name="button">ajouter</button>
  </div>
</div>*/


/*<div class="panier" id="panier">
  <fieldset>
  <table>

    <legend>Panier</legend>
    <tr>
      <th>Ref</th>
      <th>Nom</th>
      <th>Qte</th>
      <th>Prix unit</th>
      <th>Prix</th>
    </tr>
    <tr>
      <th colspan="4">Total</th>
      <td></td>
    </tr>

  </table>
  </fieldset>
</div>*/
