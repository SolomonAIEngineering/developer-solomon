import { OPEN_AI } from "../../globals";
import { ErrorResponse } from "../types";
import { OpenAIErrorResponseTransform } from "../openai/utils";

export const AzureOpenAICreateTranslationResponseTransform: (
  response: Response | ErrorResponse,
  responseStatus: number,
) => Response | ErrorResponse = (response, responseStatus) => {
  if (responseStatus !== 200 && "error" in response) {
    return OpenAIErrorResponseTransform(response, OPEN_AI);
  }

  return response;
};
