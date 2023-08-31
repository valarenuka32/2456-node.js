const { mobileService } = require("../Service");
/** create mobile */
const mobileCreate = async (req, res) => {
    try {
        const reqBody = req.body;
        console.log(reqBody);

        const mobileex=await mobileService.getMobileByName(reqBody.mobile_brand);
        if(mobileex){
            throw new Error(`please add other mobile this ${mobileex.mobile_brand} mobile already created`)
        }

        const mobile = await mobileService.mobileCreate(reqBody);

        res.status(200).json({
            success: true,
            message: 'mobile creat succesfully',
            data: { mobile },
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// get
const getMobileList = async (req, res) => {
    try {
        const getDetails = await mobileService.getMobileList(req, res);

        res.status(200).json({
            success: true,
            message: "mobile details get successfully!",
            data: getDetails,
        })
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });;
    }
};

// delete
const deleteRecord = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;
        const mobileex = await mobileService.getmobileId(mobileId);
        if (!mobileex) {
            throw new Error("mobile detiles not found");
        }
        await mobileService.deleteRecord(mobileId);

        res.status(200).json({
            success: true,
            message: "mobile detiles delete successfully!"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

// update
const updatemobile = async (req, res) => {
    try {
        const mobileId = req.params.mobileId;

        const mobileex = await mobileService.getmobileId(mobileId);
        if (!mobileex) {
            throw new Error("mobile not found");
        }

        await mobileService.updateDetiles(mobileId, req.body);

        res.status(200).json({
            success: true,
            message: "mobile detiles update successfully!",
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    mobileCreate,
    getMobileList,
    deleteRecord,
    updatemobile
}