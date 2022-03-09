import axios from "axios";

export const getWidgets = (res) => {
  return axios({
    method: "GET",
    url: "http://localhost:8000/FaveWidgets",
  })
    .then((res) => {
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
        name: req.body.info.name,
        type: req.body.info.type,
        quantity: req.body.info.quantity,
        cost: req.body.info.cost,
        manufacturer: req.body.info.manufacturer,
        notes: req.body.info.notes,
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
        name: req.body.info.name,
        type: req.body.info.type,
        quantity: req.body.info.quantity,
        cost: req.body.info.cost,
        manufacturer: req.body.info.manufacturer,
        notes: req.body.info.notes,
      },
    },
  });
};

export const deleteWidgets = (id) => {
  return axios({
    url: `http://localhost:8000/FaveWidgets/${id}`,
    method: "DELETE",
  });
};
