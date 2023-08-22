import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async ({ page, perPage = 5 }) => {
  try {
    const res = await httpRequest.get('users/suggested', {
      params: {
        page,
        per_page: perPage,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getVideo = async ({ type = 'for-you', page = 1 }) => {
  try {
    const res = await httpRequest.get('/videos', {
      params: {
        type,
        page,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
