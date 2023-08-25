import bug from '../typesPoke/bug.png'
import dark from '../typesPoke/dark.png'
import eletric from '../typesPoke/eletric.png'
import fairy from '../typesPoke/fairy.png'
import fighting from '../typesPoke/fighting.png'
import fire from '../typesPoke/fire.png'
import flying from '../typesPoke/flying.png'
import ghost from '../typesPoke/ghost.png'
import grass from '../typesPoke/grass.png'
import ground from '../typesPoke/ground.png'
import ice from '../typesPoke/ice.png'
import normal from '../typesPoke/normal.png'
import poison from '../typesPoke/poison.png'
import psychic from '../typesPoke/psychic.png'
import rock from '../typesPoke/rock.png'
import steel from '../typesPoke/steel.png'
import water from '../typesPoke/water.png'
import dragon from '../typesPoke/dragon.png'

export const getTypes = (type) => {
    switch(type) {
      case "bug":
        return bug;
      case "dark":
        return dark;
      case "dragon":
        return dragon;
      case "electric":
        return eletric;
      case "fairy":
        return fairy;
      case "fighting":
        return fighting;
      case "fire":
        return fire;
      case "flying":
        return flying;
      case "ghost":
        return ghost;
      case "grass":
        return grass;
      case "ground":
        return ground;
      case "ice":
        return ice;
      case "normal":
        return normal;
      case "poison":
        return poison;
      case "psychic":
        return psychic;
      case "rock":
        return rock;
      case "steel":
        return steel;
      case "water":
        return water;
      default:
        return normal;
    }
  };