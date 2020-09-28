import { raw } from "express";
import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors"

class NoteService {
  // NOTE Gets are debugging pathways only
  async getAll(userEmail){
    return await dbContext.Notes.find({ creatorEmail: userEmail }).populate("creator","name picture");
  }
  async getById(id, userEmail){
    let data = await dbContext.Notes.findOne({_id: id, creatorEmail: userEmail });
    if(!data){
      throw new BadRequest("Invalid ID or you do not own this list")
    }
    return data
  }
  async find(query = {}){
    let bugNotes = await dbContext.Notes.find(query);
    return bugNotes;
  }
  async create(rawData){
    let data = await dbContext.Notes.create(rawData);
    return data;
  }
  async edit(id, userEmail, update){
    let data = await dbContext.Notes.findOneAndUpdate({_id: id, creatorEmail: userEmail},update,{new: true, runValidators: true});
    if (!data){
      throw new BadRequest("Invalid ID or you do not own this note")
    }
    return data;
  }
  async delete(id, userEmail){
    let data = await dbContext.Notes.findOneAndRemove({_id: id, creatorEmail: userEmail});
    if(!data){
      throw new BadRequest("Invalid ID or you do not own this note")
    }
  }
}

export const noteService = new NoteService()