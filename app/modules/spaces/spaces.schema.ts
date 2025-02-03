import { model, Schema } from "mongoose";
import { ISpaces } from "./spaces.types";

const spaceSchema = new Schema({
  spaceName: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  area: {
    type: Number,
    require: true,
  },
  grade: {
    type: String,
    require: true,
  },
  imgLink: {
    type: String,
    require: true,
  },
});

type ISpaceDocument = Document & ISpaces;

const spaceModel = model<ISpaceDocument>("Space", spaceSchema);

export default spaceModel;
