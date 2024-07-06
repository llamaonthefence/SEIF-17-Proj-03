function formatDate(dateString) {
    const date = new Date(dateString);
    
    // Get day, month abbreviation, and year
    const day = date.getDate().toString().padStart(2, '0'); // Ensure two-digit day
    const monthAbbrev = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of year
    
    // Format into "DD Month YY"
    const formattedDate = `${day} ${monthAbbrev} ${year}`;
    
    return formattedDate;
  }
  
export default formatDate;