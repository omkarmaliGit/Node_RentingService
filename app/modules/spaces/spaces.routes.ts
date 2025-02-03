import { Router, Request, Response, NextFunction } from "express";
import { ResponseHandler } from "../../utility/response.handler";
import spaceService from "./spaces.service";
import { Types } from "mongoose";
import { SPACE_MESSAGES } from "./spaces.constants";

export const SpaceRouter = Router();

SpaceRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await spaceService.getSpaces_service();
    res.send(new ResponseHandler(result, SPACE_MESSAGES.SHOW_All));
  } catch (e) {
    next(e);
  }
});