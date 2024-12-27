import { useFetch } from "@/shared/lib";
import { getStartedIntroResponse, GetStartedIntroResponse } from "@/assets";

const DATA_MAP: Record<string, GetStartedIntroResponse | any> = {
  "/docs/guide/overview/introduction": getStartedIntroResponse,
};

export function useGetStartedService() {
  const { response, loading, error } = useFetch<GetStartedIntroResponse>(DATA_MAP);
  return { response, loading, error };
}
