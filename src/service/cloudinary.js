import * as cloudinaryAPI from '../api/cloudinary';

export async function uploadImage(file, folder) {
  try {
    console.log("service/cloudinary file: ", file)
    console.log("service/cloudinary folder: ", folder)
    const url = await cloudinaryAPI.uploadImage(file, folder);
    return url;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
}

