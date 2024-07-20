
export async function fetchGiffs(category="akatsuki") {
  try {
    const res = await fetch(`/api/gifs?category=${category}`);
    if (!res.ok) {
      throw new Error("Failed to fetch gifs data");
    }

    const data = await res.json();
    if (!data || !data.data || !Array.isArray(data.data)) {
      throw new Error("Invalid gifs data received");
    }
    return data.data;
  } catch (error) {
    console.error("Error fetching gifs:", error);
    return [];
  }
}
