let router = require('express').Router();
let mgdb = require('../../utils/mgdb');

//列表|详情
router.get('/',(req,res,next)=>{
  // res.setHeader('Access-control-Allow-Origin',req.header.origin);
  //q 上一行允许跨域
  //获取id，有id 抓详情,没有id抓列表
  // console.log('111111111111',req.query);
  let _id = req.query.id;
// console.log(123);
  if(!_id){
    console.log('home列表')
    mgdb.find({
      collectionName:'home',
      ...req.query
    }).then(
      result=>res.send(result)
    ).catch(
      err=>res.send(err)
    )
  }else{//抓详情
  // console.log(111);
    mgdb.find({collectionName:'home',_id:_id}).then(
      result=>res.send(result)
    ).catch(
      err=>res.send(err)
    )
  }
})

//详情
// router.get('/:_id',(req,res,next)=>{
//   mgdb.find({collectionName:'home',_id:req.params._id}).then(
//     result=>res.send(result)
//   ).catch(
//     err=>res.send(err)
//   )
// })
module.exports=router;