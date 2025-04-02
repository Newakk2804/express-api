export const createUserValidationSchema = {
  username: {
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: 'Username must be at least 5 characters with a max of 32 characters!',
    },
    notEmpty: {
      errorMessage: 'Username cannot be empty!',
    },
    isString: {
      errorMessage: 'Username must be a string!',
    },
  },
  displayName: {
    notEmpty: {
      errorMessage: 'Display Name cannot be empty!',
    },
    isLength: {
      options: {
        min: 5,
        max: 32,
      },
      errorMessage: 'Display Name must be at least 5 characters with a max of 32 characters!',
    },
    isString: {
      errorMessage: 'Display Name must be a string!',
    },
  },
};

export const queryFilterValidationSchema = {
  filter: {
    isString: {
      errorMessage: 'Filter must be a string!',
    },
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: 'Filter must be at least 3-10 characters',
    },
  },
  value: {
    isString: {
      errorMessage: 'Value must be a string!',
    },
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: 'Value must be at least 3-10 characters',
    },
  },
};
