import cowData from '../../helpers/data/cowData';
import util from '../../helpers/utils';
import cowComponent from '../cow/cows';

const buildCows = () => {
  cowData.getCows()
    .then((cows) => {
      let domString = '';
      domString += '<h2 class="text-center">Pasture</h2>';
      domString += '<div class="d-flex flex-wrap">';
      cows.forEach((cow) => {
        domString += cowComponent.cowMaker(cow);
      });
      domString += '</div>';
      util.printToDom('pasture', domString);
    })
    .catch((err) => console.error('get cows broke', err));
};

export default { buildCows };
