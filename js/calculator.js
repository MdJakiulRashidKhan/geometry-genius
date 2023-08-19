//shared js
function getInputValue(fieldId)
{
    const fieldInput = document.getElementById(fieldId);
    const fieldInputString = fieldInput.value;
    const value = parseFloat(fieldInputString);
    fieldInput.value=''; 
    return value;
}

function geometryCalculation(calculationId,area){
    const calculation =document.getElementById(calculationId);
    calculation.innerText = area;
} 

// triangle
document.getElementById('triangleButton').addEventListener('click',function(){
    const base = getInputValue('triangleBase');
    const height = getInputValue('triangleHeight');
    const area =.5*base*height;
    geometryCalculation('triangleCalculation',area);
     
});
// rectangle 
document.getElementById('rectangleButton').addEventListener('click',function(){
    
    const width = getInputValue('rectangleWidth');
    const length = getInputValue('rectangleLength');
    const area = width*length;
    geometryCalculation('rectangleCalculation',area);
  });

//   parallelogram

document.getElementById('parallelogramButton').addEventListener('click',function(){
    const base =getInputValue('parallelogramBase');
    const height =getInputValue('parallelogramHeight');
    const area =base*height;
    geometryCalculation('parallelogramCalculation',area);
    
})
// Rhombus
document.getElementById('rhombusButton').addEventListener('click',function(){
    const diagonal1 =getInputValue('rhombusDiagonals1');
    const diagonal2 =getInputValue('rhombusDiagonals2');
    const area =0.5*diagonal1*diagonal2;
    geometryCalculation('rhombusCalculation',area);
    
})
// Pentagon
document.getElementById('pentagonButton').addEventListener('click',function(){
    const perimeter =getInputValue('pentagonPerimeter');
    const apothem =getInputValue('pentagonApothem');
    const area =0.5*perimeter*apothem;
    geometryCalculation('pentagonCalculation',area);
    
})
// Ellipse 
document.getElementById('ellipseButton').addEventListener('click',function(){
    const major =getInputValue('ellipseMajor');
    const minor =getInputValue('ellipseMinor');
    const area =3.1416*major*minor;
    geometryCalculation('ellipseCalculation',area);
})