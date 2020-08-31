interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "lksdjfnvlekrjr34inflkej4ho8fuirejnvlkjfhg54irjgi45",
        user: {
          name: "Jon",
          email: "jon@jon.com",
        },
      });
    }, 2000);
  });
}
