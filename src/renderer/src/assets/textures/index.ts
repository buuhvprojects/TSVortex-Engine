import { NearestFilter, RepeatWrapping, TextureLoader } from 'three';
import * as images from './images'

class Textures {
    static dirt = new TextureLoader().load(images.dirtImg);
    static log = new TextureLoader().load(images.logImg);
    static grass = new TextureLoader().load(images.grassImg);
    static wood = new TextureLoader().load(images.woodImg);
    static ground = new TextureLoader().load(images.grassImg);
}

Textures.dirt.magFilter = NearestFilter;
Textures.log.magFilter = NearestFilter;
Textures.grass.magFilter = NearestFilter;
Textures.wood.magFilter = NearestFilter;
Textures.ground.magFilter = NearestFilter;
Textures.ground.wrapS = RepeatWrapping;
Textures.ground.wrapT = RepeatWrapping;

export default Textures;