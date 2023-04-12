const axios = {
  get: jest.fn((url) => {
    if(url === '/api/appointment'){
      return Promise.resolve({
        data: [
          {id: 1, name: "Steve", points: 36},
          {id: 2, name: "Joe", points: 10},
        ]
      })
    }
  })
}

export default axios