const {CustomAPIError}=require("../errors/custom.error")
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({success:false,msg:err.message})
    }
    return res.status(500).json({
      success: false,
      msg: err.message,
    });
}
module.exports = errorHandler;