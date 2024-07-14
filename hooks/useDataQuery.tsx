import { QueryFunction, QueryKey, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface Props {
	queryKey: QueryKey;
	queryFn: QueryFunction;
	enabled?: boolean;
}

const useDataQuery = ({
	queryFn,
	queryKey,
	enabled,
}: Props): {
	data: any;
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
} => {
	const { data, error, isError, isLoading } = useQuery({
		queryKey,
		queryFn,
		enabled,
		staleTime: Infinity
	});

	return { data, isLoading, isError, error };
};
export default useDataQuery;
