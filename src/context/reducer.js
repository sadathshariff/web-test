export const positionReducer = (state, { type, payload }) => {
  switch (type) {
    case "CENTER_POSITION":
      return {
        ...state,
        positionClass: payload.value,
        positionCordinates: { x: 0, y: 0 },
        showBorder: payload.showBorder,
      };
    case "LOWER_RIGHT":
      return {
        ...state,
        positionClass: payload,
        positionCordinates: { x: 0, y: 0 },
      };
    case "FLOATING":
      return {
        ...state,
        positionClass: type,
        positionCordinates: payload,
      };
    default:
      return { ...state };
  }
};
