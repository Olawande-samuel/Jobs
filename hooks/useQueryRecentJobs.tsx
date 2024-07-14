import Endpoints from "@/utils/endpoints";
import useDataQuery from "./useDataQuery";

const useQueryRecentJobs = (query: string, date_posted?: string) => {
	const API = new Endpoints();
	const { data, isLoading, error } = useDataQuery({
		queryKey: ["get recent Jobs", query],
		queryFn: () =>
			API.getRecentJobs(
				query,
				date_posted ?? "week"
			),
	});
	return { data, isLoading, error };
};
export default useQueryRecentJobs;
