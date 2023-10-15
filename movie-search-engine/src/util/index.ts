import { MovieListRes, ApiResponse, Detail } from "../Type/type";

export const mapMovieData = (movieRes: ApiResponse<Detail> | {}): MovieListRes[] => {
  const results = (movieRes as ApiResponse<Detail>)?.results || [];

  const mappedResult: MovieListRes[] = results
    ?.map((detail) => {
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
    ?.filter((detail: MovieListRes) => detail.title && detail.image && detail.type);

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
