var orgArr = ['壹','壹','貳','貳','叄','叄','肆','肆'];
var memValues = [];
var tileIds = [];

let shuffler = function(arr) {
    let newPos, temp;

    for(let i = arr.length - 1; i > 0; i--) {
        newPos = Math.floor(Math.random() * (i+1));
        temp = arr[i];
        arr[i] = arr[newPos];
        arr[newPos] = temp;
        }
        return arr;
};

// let newArray = shuffler(arry);
// console.log(newArray);

function startBoard(){
	tiles_flipped = 0;
	var output = '';
  shuffler(orgArr);
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
				memValues = [];
        tileIds = [];
				if(tiles_flipped == orgArr.length){

				function resetGame(){
				let output = '<h1>🥇<u>Congrats you have won | 你赢了</u>🏆</h1></br><button onclick="startBoard()">Load New Game...</button>';
				return output
				}
				document.getElementById('board').innerHTML = resetGame();
				}
			} else {
				function flipBack(){
				    var tile_1 = document.getElementById(tileIds[0]);
				    var tile_2 = document.getElementById(tileIds[1]);
				    tile_1.style.background = 'url(https://i.imgur.com/3mIrLAj.png) no-repeat';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(https://i.imgur.com/3mIrLAj.png) no-repeat';
            	    tile_2.innerHTML = "";
				    memValues = [];
            	    tileIds = [];
				}
				setTimeout(flipBack, 1400);
			}
		}
	}
}
//window.onload = startBoard();