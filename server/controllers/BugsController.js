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
      .get("")
  }
}