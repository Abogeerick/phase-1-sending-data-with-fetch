function submitData(name, email) {
    const configurationObject = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com",
      }),
    };
  
    return fetch('http://localhost:3000/users', configurationObject)
      .then((response) => response.json())
      .then((data) => {
        appendIdToDOM(data.id);
      })
      .catch((error) => {
        handleRequestError(error);
      });
  }
  
  function appendIdToDOM(id) {
    const idElement = document.createElement('p');
    idElement.textContent = `New ID: ${id}`;
    document.body.appendChild(idElement);
  }
  
  function handleRequestError(error) {
    const errorElement = document.createElement('p');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
  }
  