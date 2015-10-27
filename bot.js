// BotClean
//
// 10.26.15
// max volz

var test = function(input){
//	console.log(input);
	
	var marioX = input.split('\n')[0].split(' ')[0],
		marioY = input.split('\n')[0].split(' ')[1];	
		grid = input.split('\n');	
	
	for(var x=1,y=grid.length;x<y;++x){
		if(grid[x].indexOf('d')!= -1){

			var dirtX = grid[x].indexOf('d')-1,
				dirtY = x-1;

			while( marioX < dirtX ){
				console.log("RIGHT");
//				return;	
				++marioX;
			}
			while( marioX > dirtX){
				console.log("LEFT");
//				return;
				--marioX;
			}
			while( marioY > dirtY){
				console.log("UP");
//				return;	
				--marioY;	
			}
			while( marioY < dirtY){
				console.log("DOWN");
				
//				return;
				++marioY;
			}
			if( marioX == dirtX && marioY == dirtY){
					
				console.log("CLEAN");
			}
//			console.log("dX: " + dirtX + " dY: " + dirtY);
//			console.log(grid);
		}
	}
}
var input1=
	"0 0\n"+
	"b---d\n"+
	"-d--d\n"+
	"--dd-\n"+
	"-----\n"+
	"----d";

test(input1);
