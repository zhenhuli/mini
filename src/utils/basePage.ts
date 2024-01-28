import { eventNavigateTo } from './index';

const CustomPage: MiniProgram.Page.Constructor = (options): void => {
  const baseOptions = {
    eventNavigateTo,
  };
  Page({
    ...options,
    ...baseOptions,
  });
};

export default CustomPage;
