export const FETCH_CAM = 'FETCH_CAM';
export const SAVE_CAM = 'SAVE_CAM';

export const fetchCam = () => ({
  type: FETCH_CAM,
});
export const saveCam = (cam) => ({
  type: SAVE_CAM,
  loadedCam: cam,
});
