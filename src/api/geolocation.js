const API_URL = "https://freeipapi.com";

export async function getGeolocation() {
  try {
    const response = await fetch(`${API_URL}/api/json/`);

    if (!response.ok) {
      throw new Error("There was an error in getting your location");
    }

    const data = await response.json();

    return data;
  } catch (e) {
    if (e.message === "Failed to fetch") {
      throw new Error(
        "An unexpected error ocurred during fetching location, please try again later"
      );
    }
    throw new Error(e.message);
  }
}
