const mongoose = require('mongoose');

const labelSchema = mongoose.Schema({
    labelName: {
        type: String,
        required: true      
    }
});

const labelModel = mongoose.model('label', labelSchema);
exports.labelModel = labelModel

//Create new labelModel
exports.createLabel = (label) => {
    return labelModel.create(label)
}

//get all label details
// exports.getLabel = () => {
//     return lModel
//       .find({})
//       .exec();
//   };
  
//edit label
exports.editLabel = (id, labelName) => {
    return labelModel.findByIdAndUpdate({
        _id: id
    }, labelName, {
        runValidators: true
    })
}

//delete label
exports.deleteLabel = (id) => {
    return labelModel.findByIdAndRemove({
        _id: id
    }).exec()
}
