var mongoose=require('mongoose');
const categorySchema = mongoose.Schema({
    category: {
        type: String   
    }

});

const categoryModel = mongoose.model('categories', categorySchema);
exports.categoryModel = categoryModel;

exports.findCategoryName=()=>{
    return categoryModel.find().sort("category");
}