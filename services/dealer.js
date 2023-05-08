const Dealer = require('../models/dealer');
const DeletedDealer = require('../models/deleted_dealer');

exports.deleteData = async () => {
  try {
    let dataToDelete = await Dealer.findOne();
    if (dataToDelete) {
      await dataToDelete.destroy();
      console.log('deleted dealer:', dataToDelete);
    } else {
      console.log('no dealer found');
    }
  } catch (error) {
    console.log(error);
  }
};
