
var item = new Raster('js/characters/Goku/Regular/Goku_0-2.png');

setup();

function setup() {
  for(var i = 0; i < 10; i++) {
    var it = item.clone()
    it.position.x += 10
    it.position.y += 10
  }
}
