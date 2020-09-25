import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BugService {
  async getAll(userEmail){
    // FIXME change this to be a get all for every users bugs instead of the current logged in user
    return await dbContext.Bugs.find({ creatorEmail: userEmail}).populate("creator","name picture") 
  }
}

export const bugService = new BugService()