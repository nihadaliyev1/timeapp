const API_URL = "http://worldtimeapi.org/api";

export async function getTime() {
  try {
    const response = await fetch(`${API_URL}/ips`);

    if (!response.ok) {
      throw new Error("There was an error in getting time information");
    }

    const data = await response.json();

    return data;
  } catch (e) {
    if (e.message === "Failed to fetch") {
      throw new Error(
        "An unexpected error ocurred during fetching time, please try again later"
      );
    }
    throw new Error(e.message);
  }
}
