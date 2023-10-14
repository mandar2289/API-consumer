import { MovieDetail, ApiResponse, Detail } from "../Type/type";

export const mapMovieData = (movieRes: ApiResponse<Detail>): MovieDetail[] => {
  const results = movieRes?.results ?? [];

  const mappedResult: MovieDetail[] = results
    .map((detail) => {
      const id = detail?.id ?? "";
      const titleType = detail?.titleType ?? "";
      const titleText = detail?.title ?? "";
      const primaryImage = detail?.image?.url ?? "";

      return {
        id,
        type: titleType,
        title: titleText,
        image: primaryImage,
      };
    })
    .filter((detail: MovieDetail) => detail.title && detail.image && detail.type);

  return mappedResult;
};

export const extractId = (titleStr: string): string => {
  const regexPattern: RegExp = /(tt\d+)/;

  const matchArray: RegExpMatchArray | null = titleStr.match(regexPattern);

  if (matchArray && matchArray.length > 0) {
    const extractedString: string = matchArray[0];
    return extractedString;
  } else return "";
};
