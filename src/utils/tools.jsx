const formatDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

const handleError = (response) => {
  if(!response.ok) throw Error("Error on request : " + response.status + "\n" + response.statusText);
  return response;
}

export { formatDate, handleError };