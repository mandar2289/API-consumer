import { MovieDetail, ApiResponse, Detail } from "../Type/type";

export const mapMovieData = (movieRes: ApiResponse<Detail>): MovieDetail[] => {
  const results = movieRes?.results ?? [];

  return results.map((detail) => {
    // Access properties with optional chaining and provide default values if properties are not available
    const id = detail?.id ?? "";
    const titleType = detail?.titleType?.text ?? "";
    const titleText = detail?.titleText?.text ?? "";
    const primaryImage = detail?.primaryImage?.url ?? "";

    return {
      id,
      type: titleType,
      title: titleText,
      image: primaryImage,
    };
  });
};
