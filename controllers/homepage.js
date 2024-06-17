const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const {
  callAPI,
  createQuiz,
  getQuizURL,
  saveQuiz,
} = require("../utils/quizAPI.js");

const api = require("./api/api.js");

router.use("/api", api);

router.get("/", async (req, res) => {
  res.render("login");
});

router.get("/quiz", async (req, res) => {
  res.render("quiz");
});

router.get("/home", async (req, res) => {
  res.render("login");
});

router.get("/score", async (req, res) => {
  res.render("score");
});

// router.post('/api/input',(req,res)=>{

//     console.log('we made it this far');
//   //  console.log(req.body);
//     const apiURL = getQuizURL(req.body);

//     callAPI(apiURL)
//     .then((data)=>{

//         let quiz = createQuiz(data);

//      //   console.log(quiz);
//         res.json(quiz);
//        //res.send(quiz);

//         // const filePath = path.join(__dirname,'quiz.html');
//         // res.sendFile(filePath);
//     })
//     .catch((err)=>{
//         console.error('error in server api',err);
//     });
// });

// router.post('/api/output',(req,res)=>{

//     console.log('we made it this far');

//      saveQuiz(req.body);

//        res.json({'response': 'quiz saved'});

//     });

// router.post('/api/user',(req,res)=>{

//     const root = path.join(__dirname,'..');
//     const findFolder = path.join(root,'seeds');
//     console.log(path.resolve(root));

//     if(!fs.existsSync(findFolder)){
//         fs.mkdirSync(findFolder);
//     }
//     forJson = JSON.stringify(req.body);
//     const filePath = path.join(findFolder,'users.json');
//     fs.writeFile(filePath,forJson,(err)=>{
//         if (err){
//             console.error('error in writing json',err)
//         }
//         else{
//             console.log('Finished writing file');
//             //console.log('created json');
//         }
//     })

//     res.json({'response': 'user saved'});

// });

// router.post('/api/search',(req,res)=>{

//     const root = path.join(__dirname,'..');
//     const findFolder = path.join(root,'seeds');
//     console.log(path.resolve(root));

//     if(!fs.existsSync(findFolder)){
//         fs.mkdirSync(findFolder);
//     }
//     forJson = JSON.stringify(req.body);
//     const filePath = path.join(findFolder,'users.json');
//     fs.writeFile(filePath,forJson,(err)=>{
//         if (err){
//             console.error('error in writing json',err)
//         }
//         else{
//             console.log('Finished writing file');
//             //console.log('created json');
//         }
//     })

//     res.json({'response': 'user saved'});

// });

module.exports = router;
