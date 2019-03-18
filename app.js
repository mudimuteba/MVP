var orgArr = ['壹','壹','貳','貳','叄','叄','肆','肆'];
var memValues = [];
var tileIds = [];

let arrayShuffle = function(arr) {
    let newPos, temp;

    for(let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i+1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
        }
        return arr;
};

// let newArray = arrayShuffle(arry);
// console.log(newArray);

function makeBoard(){
	tiles_flipped = 0;
	var output = '';
  arrayShuffle(orgArr);
  //for(var i = orgArr.length; i > 0; i--)
  for(let i = 0; i < orgArr.length; i++)
  {
		output += '<div id="tile_'+i+'" onclick="flipper(this,\''+orgArr[i]+'\')"></div>';
	}
	document.getElementById('board').innerHTML = output;
}
function flipper(tile,val){
	if(tile.innerHTML == "" && memValues.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memValues.length == 0){
			memValues.push(val);
			tileIds.push(tile.id);
		} else if(memValues.length == 1){
			memValues.push(val);
			tileIds.push(tile.id);
			if(memValues[0] == memValues[1]){
				tiles_flipped += 2;
				// Clear both arrays
				memValues = [];
        tileIds = [];
				// Check to see if the whole board is cleared
				if(tiles_flipped == orgArr.length){
					//alert("Board cleared... generating new board");
          output2 = '<div id="gameFinished" onclick="flipper(this,\''+orgArr[i]+'\')"></div>';
					document.getElementById('board').innerHTML = "";
					makeBoard();
				}
			} else {
				function flipBack(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(tileIds[0]);
				    var tile_2 = document.getElementById(tileIds[1]);
				    tile_1.style.background = 'url(https://lh3.google.com/u/0/d/14lTcxgGUdiEy0iBPRO81J37jpju3g9_T=w1024-h616-iv1) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(https://lh3.google.com/u/0/d/14lTcxgGUdiEy0iBPRO81J37jpju3g9_T=w1024-h616-iv1) no-repeat';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    memValues = [];
            	    tileIds = [];
				}
				setTimeout(flipBack, 700);
			}
		}
	}
}
makeBoard()
