var fs = require('fs');

var itemJSON = {
    "parent": "item/generated",
    "textures": {
        "layer0": ""
    }
};

var texture = ["decorated_pot"];

for (var i = 0; i < texture.length; i++) {
	var name = texture[i];
	var itemLayer = "item/" + texture[i]
	
	itemJSON.textures.layer0 = itemLayer
	fs.writeFileSync("item/" + name + ".json", JSON.stringify(itemJSON));
}
