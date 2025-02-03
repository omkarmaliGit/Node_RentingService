import spaceRepo from "./spaces.repo";

const getSpaces_service = async () => {
  const spaces = await spaceRepo.getSpaces_repo();
  return spaces;
};

export default {
  getSpaces_service,
};
