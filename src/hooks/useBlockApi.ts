import { blockAPI } from "../services/block-api";

export const useBlockApi: () => void = blockAPI.start;
