const errors= {
  BAD_REQUEST: { message: 'BAD_REQUEST', code: 400},
  NOT_FOUND: { message: 'NOT_FOUND', code: 404},
  FORBIDDEN: { message: 'FORBIDDEN', code: 403},
  UNAUTHORIZED: { message: 'UNAUTHORIZED', code: 401},
  ERROR: { message: 'ERROR', code: 500}
}

module.exports = {
  errors: errors
};
