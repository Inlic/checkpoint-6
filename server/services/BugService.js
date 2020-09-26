import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class BugService {
  async getAll(query = {}){
    return await dbContext.Bugs.find(query).populate("creator","name picture") 
  }
  async getById(id){
    // FIXME change this to be a get one for every users bugs instead of the current logged in user
    let data = await dbContext.Bugs.findOne({ _id: id})
    if(!data){
    throw new BadRequest("Invalid ID or you do not own this bug")
    }
    return data
  }
  async create(rawData){
    let data = await dbContext.Bugs.create(rawData)
    return data
  }
  async edit(id, userEmail, update){
    let data = await dbContext.Bugs.findOneAndUpdate({_id: id, creatorEmail: userEmail}, update, {new: true});
    if(!data){
      throw new BadRequest("Invalid ID or you do not own this bug");
    }
    return data;
  }
  async delete(id, userEmail){
    //FIXME not a true delete, seems to work
    let data = await dbContext.Bugs.findOneAndUpdate({_id: id, creatorEmail: userEmail},{closed:true, closedDate: new Date(Date.now()).toLocaleString() },{new: true});
    if(!data){
      throw new BadRequest("Invalid ID or you do not own this note");
    }
    return data
  }

}

export const bugService = new BugService()