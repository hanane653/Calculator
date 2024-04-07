// Fonction pour effectuer les calculs
function calculer() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operateur = document.getElementById("operateur").value;
    var resultat;
  
    switch (operateur) {
      case "+":
        resultat = num1 + num2;
        break;
      case "-":
        resultat = num1 - num2;
        break;
      case "*":
        resultat = num1 * num2;
        break;
      case "/":
        resultat = num1 / num2;
        break;
      default:
        resultat = "Opérateur non valide";
    }
  
    document.getElementById("resultat").innerHTML = "Résultat : " + resultat;
  }
  
  // Fonction pour effacer les champs
  function effacer() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("resultat").innerHTML = "Résultat : ";
  }