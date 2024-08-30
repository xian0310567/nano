import { supabase } from "@/hooks/data";

const useRefreshSession = () => {
  const refreshSession = async (refreshToken: string) => {
    const { data, error } = await supabase.auth.refreshSession({
      refresh_token: refreshToken,
    });

    return { data, error };
  };

  return { refreshSession };
};

export default useRefreshSession;
