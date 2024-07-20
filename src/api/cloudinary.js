// const BASE_URL = "http://localhost:3000/api/cloudinary";
const BASE_URL = "https://ga-alumni-network.onrender.com/api/cloudinary";

export async function uploadImage(file, folder) {
  const formData = new FormData();
  formData.append('image', file);
  formData.append('folder', folder);

  try {
    console.log("api/cloudinary file: ", file);
    const response = await fetch(`${BASE_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    // Log response
    console.log("api/cloudinary POST Response:", response);

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
}
