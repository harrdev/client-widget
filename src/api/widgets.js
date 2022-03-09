import axios from "axios";

export const getWidgets = (res) => {
    console.log("getWidgets client API called")
  return axios({
    method: "GET",
    url: "http://localhost:8000/Widgets",
  })
    .then((res) => {
        console.log("This is the res: ", res)
      return res;
    })
    .catch((error) => console.log(error));
};

export const addWidgets = (info) => {
  return axios({
    method: "POST",
    url: `http://localhost:8000/Widgets`,
    data: {
      info: {
        name: info.name,
        type: info.type,
        quantity: info.quantity,
        cost: info.cost,
        manufacturer: info.manufacturer,
        notes: info.notes,
      },
    },
  });
};

export const editWidget = (info, id) => {
  return axios({
    method: "PATCH",
    url: `http://localhost:8000/Widgets/${id}`,
    data: {
      info: {
        name: info.name,
        type: info.type,
        quantity: info.quantity,
        cost: info.cost,
        manufacturer: info.manufacturer,
        notes: info.notes,
      },
    },
  });
};

export const deleteWidgets = (id) => {
  return axios({
    url: `http://localhost:8000/Widgets/${id}`,
    method: "DELETE",
  });
};
