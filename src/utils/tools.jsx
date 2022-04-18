const formatDate = (date) => {
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
}

const handleError = (response) => {
  if(!response.ok) throw Error(response.statusText);
  return response;
}

const getAge = (birthDateString) => {
  var today = new Date();
  var birthDate = new Date(birthDateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}

const hasNumber = (string) => {
  return /\d/.test(string);
}

export { formatDate, handleError, getAge, hasNumber };