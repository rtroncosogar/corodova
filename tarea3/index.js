var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");

function draw(equation) {
      functionPlot({
        target: '#plot',
        data: [{
          fn: equation,
          sampler: 'builtIn', 
          graphType: 'polyline'
        }]
      });
    };

function concatenar(){
  var eq = document.getElementById("eq");
  var eq2 = document.getElementById("eq1");
  var eq3 = document.getElementById("eq2");
    var equation = eq.value+"*x^2+"+eq2.value+"*x+"+eq3.value;
    return equation;
  };


document.getElementById("send").onclick = function() {
  if (!parseInt(document.getElementById("flag").value))
    doDraw();
  else doTriangle();
};

function doDraw(){
  document.getElementById("plot").innerHTML = "";
  context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  var equation = concatenar();
  draw(equation);
};

function vertice(){
  var eq = document.getElementById("eq");
  var eq2 = document.getElementById("eq1");
  var eq3 = document.getElementById("eq2");
  return alert("Optimo Y: "+ parseFloat(eq2)/ (2* parseFloat(eq2)); 
};

document.getElementById("send2").onclick = function() {vertice()};


 
function triangle(a,b){
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(100, 1.5*b);
    context.lineTo(1.5*a, 100);
    context.closePath();    
    context.fillStyle = "#AACC30";
    context.fill();
};

function pitagoras(a,b){
    return alert("La Hipotenusa es: "+ Math.sqrt(a**2 + b **2));
  };

document.getElementById("polinomio").onclick = function() {showPolinomio()};

function showPolinomio(){
  document.getElementById("flag").value = "0";
  document.getElementById("entryText").innerHTML = "Ingresa los coeficientes los coeficientes cuadráticos:";
  document.getElementById("eq2").style.visibility = "visible";
  document.getElementById("send2").style.visibility = "visible";
};

document.getElementById("geometrico").onclick = function() {showTriangulo()};

function showTriangulo(){
  document.getElementById("flag").value = "1";
  document.getElementById("entryText").innerHTML = "Ingresa los lados del triangulo:";
  document.getElementById("eq2").style.visibility = "hidden";
  document.getElementById("send2").style.visibility = "hidden";
};

function doTriangle(){
  document.getElementById("plot").innerHTML = "";
  context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  var eq = parseFloat(document.getElementById("eq").value);
  var eq2 = parseFloat(document.getElementById("eq1").value);
  triangle(eq,eq2);
  
};
