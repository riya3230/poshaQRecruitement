const express = require('express');
const router = express.Router();
const labelModel=require('../model/label');
const taskModel=require('../model/task');

//POST create new label
router.post('/create_label', function(req,res,next){
    labelModel.createLabel(req.body).then((labelData)=>{
        res.send(labelData);
    }).catch(err=>{
        res.send(err);
    })
});

//Get to show label
// router.get("/display_label", function(req, res, next) {
//     labelModel
//       .getLabel()
//       .then(labelData => {
//         if (labelData && labelData.length) {
//           res.send(labelData); //Display data from collection
//         }
//       })
//       .catch(err => {
//         res.send(err);
//       });
//   });
  
//   exports.getTask = () => {
//     return taskModel
//       .find({})
//       .exec();
//   };

//PUT edit label
router.put('/update_label/:id', function(req,res,next){
    labelModel.editLabel(req.params.id,req.body).then((labelData)=>{
        res.send(labelData);
    }).catch(err=>{
        res.send(err);
    })
});

//DELETE to delete label
router.delete('/delete_label/:id',function(req,res,next){
    labelModel.deleteLabel(req.params.id).then((data)=>{
        res.send("Label Successfully Deleted");
    }).catch(err=>{
        res.send(err);
    })
});

//POST create new task
router.post('/create_task', function(req,res,next){
    taskModel.createTask(req.body).then((taskData)=>{
        res.send(taskData);
    }).catch(err=>{
        res.send(err);
    })
});

//GET to display all task
// router.get("/display_task", function(req, res, next) {
//     labelModel
//       .getTask()
//       .then(taskData => {
//         if (taskData && taskData.length) {
//           res.send(taskData); //Display data from collection
//         }
//       })
//       .catch(err => {
//         res.send(err);
//       });
//   });
  
//   exports.getTask = () => {
//     return taskModel
//       .find({})
//       .exec();
//   };

//PUT edit task
router.put('/update_task/:id', function(req,res,next){
    taskModel.editTask(req.params.id,req.body).then((taskData)=>{
        res.send(taskData);
    }).catch(err=>{
        res.send(err);
    })
});


//Delete to delete task
router.delete('/delete_task/:id',function(req,res,next){
    taskModel.deleteTask(req.params.id).then((data)=>{
        res.send("Task Successfully Deleted");
    }).catch(err=>{
        res.send(err);
    })
});

//PUT move task
router.put('/move_task/:id', function(req,res,next){
    taskModel.moveTask(req.params.id,req.body).then((taskData)=>{
        res.send(taskData);
    }).catch(err=>{
        res.send(err);
    })
});


module.exports  = router;

