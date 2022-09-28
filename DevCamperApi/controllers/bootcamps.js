//@description Get All bootcamps
//route GET /api/v1/bootcamps
//access public

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, message: "show all the bootcamps",  hello:req.hello});
  console.log("GET METHOD")
};

//@description Get single bootcamps
//route GET /api/v1/bootcamps/:id
//access public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `show ${req.params.id} bootcamps` });
    console.log("GET METHOD")
};


//@description Create new bootcamps
//route POST /api/v1/bootcamps
//access private

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: "Create new bootcamp" });
    console.log("POST METHOD")
};

//@description update new bootcamps
//route PUT /api/v1/bootcamps/:id
//access private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, message: `update ${req.params.id} bootcamps` });
    console.log("PUT METHOD")
};

//@description delete bootcamps
//route DELETE /api/v1/bootcamps/:id
//access private

exports.deleteBootcamp = (req, res, next) => {
    res
    .status(200)
    .json({ success: true, message: `delete ${req.params.id} bootcamps` });
    console.log("DELETE METHOD")
};