const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const titulo = [' ','TLL','T Ejec','TI','TF','TR','TE'];

function appendRow(matriz) {
    var tbl = document.getElementById('my-table'+matriz),row = tbl.insertRow(tbl.rows.length),i;
    
    for (i = 0; i < 3; i++) {
        if(i==0){
          createCellTexto(row.insertCell(i), alphabet[tbl.rows.length-1] , matriz);
        }
        else {
          createCell(row.insertCell(i), 0 , matriz);
        }
    }
    if(tbl.rows[0].cells.length>=3){
      deleteColumns(matriz);
    }
    appendColumn(matriz);
}
function createCellTexto(cell, text, style) {
    var input = document.createElement('input'), 
        txt = document.createTextNode(text);
    input.appendChild(txt);                    
    input.setAttribute('class',"form-control");
    input.setAttribute('id', "mtrix"+style);       
    input.setAttribute('size', 1);
    input.setAttribute('value',text);
    cell.appendChild(input);                   
}
function createCell(cell, text, style) {
    var input = document.createElement('input'), 
        txt = document.createTextNode(text);
    input.appendChild(txt);                    
    input.setAttribute('class',"form-control");
    input.setAttribute('id', "mtrix"+style);       
    input.setAttribute('size', 1);
    input.setAttribute('placeholder',text);
    cell.appendChild(input);                   
}
function appendColumn(matriz) {
    var tbl = document.getElementById('my-table'+matriz), 
        i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length),0, matriz);

    }
}
function deleteRows(matriz) {
    var tbl = document.getElementById('my-table'+matriz), // table reference
        lastRow = tbl.rows.length - 1,             // set the last row index
        i;
    if(lastRow>0)
        tbl.deleteRow(lastRow);
}
// delete table columns with index greater then 0
function deleteColumns(matriz) {
    var tbl = document.getElementById('my-table'+matriz), // table reference
        lastCol = tbl.rows[0].cells.length - 1,    // set the last column index
        i, j;
    for (i = 0; i < tbl.rows.length&&lastCol>0; i++) {
            tbl.rows[i].deleteCell(lastCol);
    }
}
function limpiar(matriz){
    var table32 = document.getElementById("my-table"+matriz);
    //or use :  var table = document.all.tableid;
    for(var iq = table32.rows.length - 1; iq >= 0; iq--)
    {
      table32.deleteRow(iq);
    }
}
function fcfs(matriz){
    limpiar('B');
    var refTab=document.getElementById("my-table"+matriz);
    var x=2; 
    var  ttl;
    var matrix = []; 
    var row2 = refTab.rows.item(i);
    var TI_TF=0;
    var promedio1=0;
    var promedio2=0;
    for(var i=0; i<7; i++) {
      matrix[i] = new Array(row2.cells.length);
    }
    for ( var i = 0; i<refTab.rows.length; i++ ) { 
         var row = refTab.rows.item(i); 
          for ( var j = 0; j<7; j++ ) { 

              var col = row.cells.item(j);
              switch(j){
                  case 0:
                        matrix[i][j]=i;
                        break;
                  case 1:
                        matrix[i][j]=eval(col.firstChild.value)*1;
                        break;
                  case 2:
                        matrix[i][j]=eval(col.firstChild.value)*1;
                        break;
                  case 3:
                        matrix[i][j]=TI_TF;
                        break;
                  case 4:
                        TI_TF+=matrix[i][2];
                        matrix[i][j]=TI_TF;
                        break;
                  case 5:
                        matrix[i][j]=matrix[i][4]-matrix[i][1];
                        promedio1+=matrix[i][j];
                        break;
                  case 6:
                        matrix[i][j]=matrix[i][3]-matrix[i][1];
                        promedio2+=matrix[i][j];
                        break;
              }  
        } 
    }
    var tbl = document.getElementById("my-tableB");
    for (var i = 0; i <=refTab.rows.length+1; i++) {
        var row3 = tbl.insertRow(i);
        if(i!=0&&i<=refTab.rows.length){
          for (var j = 0; j <7; j++) {
            var input = document.createElement('input'), // create DIV element
            txt = document.createTextNode(decimalToFraccion(matrix[i-1][j])); // create text node
            input.appendChild(txt);
            input.setAttribute('class',"form-control");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            if(j==0){
                input.setAttribute('value', alphabet[i-1]);
            }else{
                input.setAttribute('value', decimalToFraccion(matrix[i-1][j]));    // set DIV class attribute for IE (?!)
            }
            row3.insertCell(j).appendChild(input);
          }
        }else if(i==refTab.rows.length+1){
          for (var j = 0; j <4; j++) {
            var input = document.createElement('input');
            input.setAttribute('class',"form-controlBlanco");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            input.setAttribute('value', ' ');    // set DIV class attribute for IE (?!)
            row3.insertCell(j).appendChild(input);
          }
            var input1 = document.createElement('input');
            input1.setAttribute('class',"form-controlBlanco");                
            input1.setAttribute('id', "mtrixB");        
            input1.setAttribute('size', 1);
            input1.setAttribute('value', 'PROMEDIO');    
            row3.insertCell(4).appendChild(input1);

            var input2 = document.createElement('input');
            input2.setAttribute('class',"form-control");                
            input2.setAttribute('id', "mtrixB");        
            input2.setAttribute('size', 1);
            input2.setAttribute('value', promedio1/(i-1));    
            row3.insertCell(5).appendChild(input2);

            var input3 = document.createElement('input');
            input3.setAttribute('class',"form-control");                
            input3.setAttribute('id', "mtrixB");        
            input3.setAttribute('size', 1);
            input3.setAttribute('value', promedio2/(i-1));    
            row3.insertCell(6).appendChild(input3);
        }else{
          for (var j = 0; j <7; j++) {
            var input = document.createElement('input');
            input.setAttribute('class',"form-controlBlanco");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            if(j!=0){
              input.setAttribute('value', titulo[j]);
            }else{
              input.setAttribute('value', 'FCFS');
            }
            row3.insertCell(j).appendChild(input);
          }
        }
        tbl.appendChild(row3);
    }
    toastr.success("Listo.");
    dibujar('B');
}
function spn(matriz){
    limpiar('B');
    var refTab=document.getElementById("my-table"+matriz);
    var x=2; 
    var  ttl;
    var matrix = [];
    var vistos = [];
    var row2 = refTab.rows.item(i);
    var TI_TF = 0;
    var promedio1 = 0;
    var promedio2 = 0;
    var menor = 100000;
    var letra = 25;
    for(var i=0; i<7; i++) {
      matrix[i] = new Array(row2.cells.length);
    }
    for ( var i = 0; i<refTab.rows.length; i++ ) {
        for ( var j = 0; j<7; j++ ) {
          matrix[i][j]=0;
        }
    }
    for ( var i = 0; i<refTab.rows.length; i++ ) { 
         aux=i;
         letra = 25;
         menor = 100000;
         if(i!=0){
            for ( i = 1; i<refTab.rows.length; i++ ) {
              var row = refTab.rows.item(i);
              var col = row.cells.item(2);
              var ejec=eval(col.firstChild.value)*1;
              if(ejec<menor){
                  var repetido=false;
                  for(var k=0;k<aux-1;k++){
                    //document.write(aux);
                    if(vistos[k]==i){
                        //document.write(alphabet[vistos[k]]);
                        repetido=true;
                    }
                  }
                  if(!repetido){
                    letra=i;
                    menor=ejec;
                  }
              }
            }
            vistos[aux-1]=letra;
            i=letra; 
            
         }
          var row = refTab.rows.item(i);
          for ( var j = 0; j<7; j++ ) { 
              var col = row.cells.item(j);
              switch(j){
                  case 0:
                        matrix[i][j]=i;
                        break;
                  case 1:
                        matrix[i][j]=eval(col.firstChild.value)*1;
                        break;
                  case 2:
                        matrix[i][j]=eval(col.firstChild.value)*1;
                        break;
                  case 3:
                        matrix[i][j]=TI_TF;
                        break;
                  case 4:
                        TI_TF+=matrix[i][2];
                        matrix[i][j]=TI_TF;
                        break;
                  case 5:
                        matrix[i][j]=matrix[i][4]-matrix[i][1];
                        promedio1+=matrix[i][j];
                        break;
                  case 6:
                        matrix[i][j]=matrix[i][3]-matrix[i][1];
                        promedio2+=matrix[i][j];
                        break;
              }  
        }
        i=aux; 
    }
    var tbl = document.getElementById("my-tableB");
    for (var i = 0; i <=refTab.rows.length+1; i++) {
        var row3 = tbl.insertRow(i);
        if(i!=0&&i<=refTab.rows.length){
          for (var j = 0; j <7; j++) {
            var input = document.createElement('input'), // create DIV element
            txt = document.createTextNode(decimalToFraccion(matrix[i-1][j])); // create text node
            input.appendChild(txt);
            input.setAttribute('class',"form-control");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            if(j==0){
                input.setAttribute('value', alphabet[i-1]);
            }else{
                input.setAttribute('value', decimalToFraccion(matrix[i-1][j]));    // set DIV class attribute for IE (?!)
            }
            row3.insertCell(j).appendChild(input);
          }
        }else if(i==refTab.rows.length+1){
          for (var j = 0; j <4; j++) {
            var input = document.createElement('input');
            input.setAttribute('class',"form-controlBlanco");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            input.setAttribute('value', ' ');    // set DIV class attribute for IE (?!)
            row3.insertCell(j).appendChild(input);
          }
            var input1 = document.createElement('input');
            input1.setAttribute('class',"form-controlBlanco");                
            input1.setAttribute('id', "mtrixB");        
            input1.setAttribute('size', 1);
            input1.setAttribute('value', 'PROMEDIO');    
            row3.insertCell(4).appendChild(input1);

            var input2 = document.createElement('input');
            input2.setAttribute('class',"form-control");                
            input2.setAttribute('id', "mtrixB");        
            input2.setAttribute('size', 1);
            input2.setAttribute('value', promedio1/(i-1));    
            row3.insertCell(5).appendChild(input2);

            var input3 = document.createElement('input');
            input3.setAttribute('class',"form-control");                
            input3.setAttribute('id', "mtrixB");        
            input3.setAttribute('size', 1);
            input3.setAttribute('value', promedio2/(i-1));    
            row3.insertCell(6).appendChild(input3);
        }else{
          for (var j = 0; j <7; j++) {
            var input = document.createElement('input');
            input.setAttribute('class',"form-controlBlanco");                    // append text node to the DIV
            input.setAttribute('id', "mtrixB");        // set DIV class attribute
            input.setAttribute('size', 1);
            if(j!=0){
              input.setAttribute('value', titulo[j]);
            }else{
              input.setAttribute('value', 'SPN');
            }
            row3.insertCell(j).appendChild(input);
          }
        }
        tbl.appendChild(row3);
    }
    toastr.success("Listo.");
    dibujar('B');
}
function dibujar(matriz){
    limpiar('R');
    var refTab=document.getElementById("my-table"+matriz);
    var x=2; 
    var  ttl;
    var matrix = []; 
    var row2 = refTab.rows.item(i);
    var TI_TF=0;
    for(var i=0; i<refTab.rows.length; i++) {
      matrix[i] = new Array(row2.cells.length);
    }
    for ( var i = 1; i<refTab.rows.length-1; i++ ) { 
         var row = refTab.rows.item(i); 
          for ( var j = 1; j<row.cells.length; j++ ) { 

              var col = row.cells.item(j);
              
              matrix[i-1][j]=eval(col.firstChild.value)*1;
                        
        } 
    }
    var tbl = document.getElementById("my-tableR");
    for (var i = 0; i <refTab.rows.length-1; i++) {
        var row3 = tbl.insertRow(i);
        for (var j = 0; j <21; j++) {
            var input = document.createElement('input');
            input.setAttribute('id', "mtrixR");        // set DIV class attribute
            input.setAttribute('size', 1);
            if(i==refTab.rows.length-2){
                input.setAttribute('class',"form-control"); 
                input.setAttribute('value', j);
            }
            else if(j==0){
                input.setAttribute('class',"form-control");
                input.setAttribute('value', alphabet[i]);
            }else if(matrix[i][3]<j && j<=matrix[i][4] ){
                input.setAttribute('class',"form-control");
                input.setAttribute('value', ' ');
            }else{
                input.setAttribute('class',"form-controlBlanco"); 
                input.setAttribute('value', ' ');    // set DIV class attribute for IE (?!)
            }
            row3.insertCell(j).appendChild(input);
        }
        tbl.appendChild(row3);
    }
    toastr.success("Listo.");  
}
function decimalToFraccion(value)
{
  var donly = false;
  var tolerance = 1.0E-6; // a partir de cuantas decimales se hace el redondeo
  var h1 = 1;
  var h2 = 0;
  var k1 = 0;
  var k2 = 1;
  var negative = false;
  var i;
  if (parseInt(value) == value) { // si el valor es un número entero, detener el código
    return value;
  } else if (value < 0) {
    negative = true;
    value = -value;
  }
  if (donly) {
    i = parseInt(value);
    value -= i;
  }
  var b = value;
  do {
    var a = Math.floor(b);
    //console.log(a)
    var aux = h1;
    h1 = a * h1 + h2;
    h2 = aux;
    aux = k1;
    k1 = a * k1 + k2;
    k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(value - h1 / k1) > value * tolerance);
  return (negative ? "-" : '') + ((donly & (i != 0)) ? i + ' ' : '') + (h1 == 0 ? '' : h1 + "/" + k1);
}