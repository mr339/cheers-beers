

export const saveToLocalStorage = ({ formData, localKeyName }: any) => {

    const { name, genre, description } = formData;

    // Get existing data from localStorage or initialize an empty array
    const existingData = localStorage.getItem(localKeyName);
    const data = existingData ? JSON.parse(existingData) : [];

    // Create new object with form values
    const newObject = { name, genre, description };

    // Push new object to existing data array
    data.push(newObject);

    // Set updated data back to localStorage
    localStorage.setItem(localKeyName, JSON.stringify(data));
};