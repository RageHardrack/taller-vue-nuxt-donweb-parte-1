import axios from "axios";
import { ref, onMounted } from "vue";

export default function useCustomFetch(url) {
  const data = ref(null);
  const isLoading = ref(false);
  const error = ref(null);

  const fetchData = async () => {
    isLoading.value = true;

    try {
      const responseData = await axios(url);

      data.value = responseData.data;
      error.value = null;
    } catch (err) {
      data.value = null;
      error.value = err.message;
    }

    isLoading.value = false;
  };

  onMounted(() => fetchData());

  return { data, isLoading, error };
}
