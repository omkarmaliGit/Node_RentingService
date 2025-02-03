import spaceModel from "./spaces.schema";

const getSpaces_repo = () => spaceModel.find();

export default {
  getSpaces_repo,
};
