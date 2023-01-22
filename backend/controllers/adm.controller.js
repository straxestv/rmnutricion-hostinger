
import { Get, Controller } from '../decorators/Controller';
import { isAuthFactory } from '../util';
import User  from '../models/userModel';






module.exports = class UserAdm extends Controller {
    constructor() {
        super("/");

        this._start(["/", "/:id"])
    }
    /* render nots*/
    ["Get:/"] = isAuthFactory(async (req, res) => {
        const users = await User.find({isSuscp:"true"});
        res.json(users);
    })
    

    
};
