import BaseController from "../utils/BaseController";
import auth0provider from "@bcwdev/auth0provider";
import { bugService } from "../services/BugService"
import { noteService } from "../services/NoteService"

export class BugsController extends BaseController {
  constructor(){
    super("api/bugs");
    this.router
      .use(auth0provider.getAuthorizedUserInfo)
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes",this.getNotesByBugId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
  }

  async getAll(req, res, next){
    try{
    let data = await bugService.getAll(req.userInfo.email);
    return res.send(data);
    } catch (err) {
      next(err);
    }
  }
  async getById(req, res, next){
    try {
      let data = await bugService.getById(req.params.id, req.userInfo.email);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }
  async getNotesByBugId(req, res, next){
    try {
      let data = await noteService.find({bug: req.params.id})
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req,res, next){
    try {
      req.body.creatorEmail = req.userInfo.email;
      let data = await bugService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async edit(req, res, next){
    try {
      let data = await bugService.edit(req.params.id,req.userInfo.email,req.body);
      return res.send(data);
    } catch (error) {
      next(error)
    }
  }

  //FIXME delete needs to close, but not delete the bug
  async delete(req,res,next){
    try {
      let data = await bugService.delete(req.params.id, req.userInfo.email);
      return res.send("Bug Closed");
    } catch (error) {
      next(error)
    }
  }

}