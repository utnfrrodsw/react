import { useQuery } from "@tanstack/react-query";

const fetchMemes = async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  if (!response.ok) {
    console.log("respuesta no OK");
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const results = await response.json();
  return results.data.memes;
};

function useMemes() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["memes"],
    queryFn: fetchMemes,
    // retry: 1,
    // refetchOnWindowFocus: false,
  });

  return {
    memes: data,
    isError,
    error,
    isLoading,
  };
}

export default useMemes;
