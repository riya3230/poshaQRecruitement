const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
    taskName: {
        type: String,
        required: true
       
    },
    labelId: {
        type: mongoose.Schema.ObjectId,
        ref: "label"
      }

});

const taskModel= mongoose.model('task', taskSchema);

//Create new taskModule
exports.createTask = (task) => {
    return taskModel.create(task)
}

// //to get all task details
// exports.getTask = () => {
//     return lModel
//       .find({})
//       .exec();
//   };

//To edit task
exports.editTask = (id, task) => {
    return taskModel.findByIdAndUpdate({
        _id: id
    }, task, {
        runValidators: true
    })
}

//To delete task
exports.deleteTask = (id) => {
    return taskModel.findByIdAndRemove({
        _id: id
    }).exec()
}

//To move task
exports.moveTask = (id, task) => {
    return taskModel.findByIdAndUpdate({
        _id: id
    }, task, {
        runValidators: true
    })
}

exports.taskModel = taskModel