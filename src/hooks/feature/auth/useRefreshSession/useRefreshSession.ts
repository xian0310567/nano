import axios from "axios";

const useRefreshSession = () => {
  const refreshSession = async () => {
    try {
      const res = await axios.get("/api/auth/refresh-token");
    } catch (e) {
      throw e;
    }
  };

  return { refreshSession };
};

export default useRefreshSession;
