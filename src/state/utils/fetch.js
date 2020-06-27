import isomorphicFetch from "isomorphic-fetch";

export default (url, method, body) => {
  const options = {
    method,
    headers: getRequestHeaders(),
    body: method !== "GET" ? JSON.stringify(body) : null,
  };

  return isomorphicFetch(url, options).then(res =>
    parseStatus(res.status, res.json()),
  );
};

const parseStatus = (status, res) => {
  return new Promise((res, rej) => {
    if (status >= 200 && status < 300) {
      res.then(response => res(response));
    } else {
      res.then(response => rej({ status, response }));
    }
  });
};

const getRequestHeaders = () => {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
};
