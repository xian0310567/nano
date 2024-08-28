import { supabase } from "@/hooks/data";

const useRetrieveSession = () => {
  const retrieveSession = async () => {
    const { data, error } = await supabase.auth.getSession();

    return { data, error };
  };

  return { retrieveSession };
};

export default useRetrieveSession;
