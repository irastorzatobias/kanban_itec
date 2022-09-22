export const helpFetch = () => {
  const URL = "http://localhost:3004";
  const customFetch = (endpoint, options = []) => {
    options.method = options.method || "GET";
    options.headers = {
      "content-type": "application/json",
    };

    if (options.body) {
      options.body = JSON.stringify(options.body);
    }

    return fetch(`${URL}/${endpoint}`, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status,
              statusText: res.statusText,
            })
      )
      .catch((error) => error);
  };

  const get = (endpoint) => customFetch(endpoint);

  const post = (endpoint, options) => {
    options.method = "POST";
    return customFetch(endpoint, options);
  };

  const put = (endpoint, options, id) => {
    options.method = "PUT";
    return customFetch(`${endpoint}/${id}`, options);
  };

  const erase = (endpoint, options) => {
    options.method = "DELETE";
    return customFetch(endpoint, options);
  }

  return { get, post, put };
};
