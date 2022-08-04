
const router = require("express").Router();
const Form = require("../models/Form");
const LUMSForm=require("../models/LumsForm");
const Nust = require("../models/Nust");
const Fast= require("../models/Fast");
router.post("/apply", async (req, res) => {
    try {
       
        const newform = new Form({
          firstname: req.body.firstname,
          middlename: req.body.middlename,
          lastname: req.body.lastname,
          gender: req.body.gender,
          dateofBirth: req.body.dateofBirth,
          matricolevel : req.body.matricolevel,
          idcard: req.body.matricolevel,
          passportNo: req.body.passportNo,
          martialStatus: req.body.martialStatus,
          phone: req.body.phone,
          nationality: req.body.nationality,
          dualNationality: req.body.dualNationality
        });
    
        const form = await newform.save();
        res.status(200).json(form);
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.post("/Lums", async (req, res) => {
      try {
         
          const newform1 = new LUMSForm({
            sat1: req.body. sat1,
            program: req.body.program,
            FathersNIC: req.body.FathersNIC,
            Nop: req.body.Nop,
            HostelResidence: req.body.HostelResidence,
            EducationBg: req.body.EducationBg,
            Appliedbefore: req.body.Appliedbefore,
            Coverletter: req.body.Coverletter,
          
          });
      
          const form = await newform1.save();
          res.status(200).json(form);
        } catch (err) {
          res.status(500).json(err);
        }
      }); 

      router.post("/nust", async (req, res) => {
        try {
           
            const nustf = new Nust({
              
              
              netmarks:req.body.netmarks ,
              preferredcampus:req.body.preferredcampus,
               hostel: req.body.hostel,
               applybefore: req.body.applybefore,
               curricularactivities:req.body.curricularactivities,
               program: req.body.program,
      
      
            });
        
            const nust = await nustf.save();
            res.status(200).json(nust);
          } catch (err) {
            res.status(500).json(err);
          }
        });
        
      router.post("/fast", async (req, res) => {
        try {
           
            const fastf = new Fast({
              
              
              siblings: req.body.siblings,
              fscmarks: req.body.fscmarks,
                preferredcampus:req.body.preferredcampus ,
                overseas: req.body.overseas,
                applyingfor: req.body.applyingfor,
                program :req.body.program,
                repeater: req.body.repeater,
                achievements: req.body.achievements,
                choosef:req.body.choosef,
      
      
            });
        
            const f = await fastf.save();
            res.status(200).json(f);
          } catch (err) {
            res.status(500).json(err);
          }
        });
         
module.exports = router;