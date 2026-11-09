const endpoints = {
  tasks: {
    base: "",
    byId: (id: string) => `/${id}`,
    complete: (id: string) => `/${id}/complete`,
  },
};

export default endpoints;
