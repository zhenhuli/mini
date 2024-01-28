export const eventNavigateTo = async (e): Promise<void> => {
  const url = e.currentTarget?.dataset?.url;
  await my.navigateTo({ url });
};
