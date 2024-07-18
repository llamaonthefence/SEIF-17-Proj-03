import { getProfile } from "../api/profiles";
import { useState, useEffect } from "react";

export function useProfile(listing_id) {
    const [formData, setFormData] = useState({
        personalDetails: {
            firstName: "",
            lastName: "",
            pronoun: "",
            additionalName: "",
          },
          contactDetails: {},
          gaExperience: [],
          workExperience: [],
          educationExperience: [],
          profilePic: null,
    })

    useEffect(() => {
          const fetchProfileData = async() => {
            try {
              const data = await getProfile(listing_id);
              setFormData(data);
            } catch(error) {
              console.error('Error fetching profile data', error)
            }
          }
          fetchProfileData();
        }, [listing_id])

    return [formData, setFormData]

}